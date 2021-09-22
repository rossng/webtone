import { ToneScript } from "@webtone/parser";
import * as Tone from "tone";

interface NoteEvent {
    time: number;
    voices: Tone.Oscillator[];
    duration: number;
}

export class ToneScriptPlayer {
    private context: Tone.Context;
    constructor(private toneScript: ToneScript) {
        this.context = new Tone.Context();
    }

    get duration(): number {
        return this.toneScript.cadenceSections.reduce((sum, cadenceSection) => sum + cadenceSection.duration, 0);
    }

    get playing(): boolean {
        return this.context.transport.state === "started";
    }

    cadenceSectionStartTime(cadenceSectionIndex: number): number {
        if (cadenceSectionIndex >= this.toneScript.cadenceSections.length || cadenceSectionIndex < 0) {
            throw new Error("Cadence section index outside allowed range");
        }

        return this.toneScript.cadenceSections
            .slice(0, cadenceSectionIndex)
            .reduce((sum, cadenceSection) => sum + cadenceSection.duration, 0);
    }

    async enable(): Promise<void> {
        await this.context.resume();
    }

    play(): void {
        new Tone.Oscillator();
        // new Tone.MonoSynth({
        //     context: this.context,
        //     volume: dBFStoAmplitude(component.level),
        //     oscillator: {
        //         type: "sine",
        //     }
        // }).toDestination()
        const voices = this.toneScript.freqScript.frequencyComponents.map((component) =>
            new Tone.Oscillator({
                context: this.context,
                type: "sine",
                volume: dBFStoAmplitude(component.level),
                frequency: component.frequency,
            }).toDestination()
        );

        // polySynth.set({
        //     oscillator: {
        //         type: "sine",
        //     },
        //     envelope: {
        //         attack: 0,
        //         decay: 0.01,
        //         sustain: 1,
        //         release: 0.01,
        //     },
        // });

        this.toneScript.cadenceSections.forEach((cadenceSection, index) => {
            const events = cadenceSection.subsections.reduce<{ duration: number; events: NoteEvent[] }>(
                (acc, subsection) => {
                    if (acc.duration >= cadenceSection.duration) {
                        return acc;
                    } else {
                        return {
                            duration:
                                acc.duration +
                                (subsection.onDuration === "always"
                                    ? cadenceSection.duration - acc.duration
                                    : subsection.onDuration + subsection.offDuration),
                            events: [
                                ...acc.events,
                                {
                                    time: acc.duration,
                                    voices: subsection.frequencyComponentReferences.map((idx) => voices[idx - 1]),
                                    duration:
                                        subsection.onDuration === "always"
                                            ? cadenceSection.duration - acc.duration
                                            : subsection.onDuration,
                                },
                            ],
                        };
                    }
                },
                { duration: 0, events: [] }
            ).events;

            const startTime = this.cadenceSectionStartTime(index);
            const totalDuration = this.duration;

            new Tone.Part<NoteEvent>({
                context: this.context,
                callback: (time, value) => {
                    value.voices.forEach((voice) => voice.start(time).stop(time + value.duration));
                },
                events,
                loop: true,
                loopStart: 0,
                loopEnd: totalDuration,
            }).start(startTime);
        });

        this.context.transport.start();
    }

    async stop(): Promise<void> {
        await this.context.close();
    }
}

function dBFStoAmplitude(dBFS: number): number {
    return Math.pow(10, dBFS / 20);
}
