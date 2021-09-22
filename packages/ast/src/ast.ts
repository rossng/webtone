export enum AstNodeKind {
    FrequencyComponent = "FREQUENCY_COMPONENT",
    FreqScript = "FREQ_SCRIPT",
    CadenceSection = "CADENCE_SECTION",
    CadenceSubsection = "CADENCE_SUBSECTION",
    ToneScript = "TONE_SCRIPT",
}

export interface AstNode {
    /** Kind of the AST node. */
    kind: AstNodeKind;
}

export interface FrequencyComponent extends AstNode {
    kind: AstNodeKind.FrequencyComponent;
    /** Frequency (in hertz) of the frequency component. */
    frequency: number;
    /** Loudness level (in dBm) of the frequency component. */
    level: number;
}

export interface FreqScript extends AstNode {
    kind: AstNodeKind.FreqScript;
    /** List of frequency components in the frequency script. */
    frequencyComponents: FrequencyComponent[];
}

export interface CadenceSubsection extends AstNode {
    kind: AstNodeKind.CadenceSubsection;
    /** The on-duration, in seconds, of this subsection.
     * @remarks If `"always"`, the {@link CadenceSubsection.offDuration} is ignored.
     */
    onDuration: "always" | number;
    /** The off-duration, in seconds, of this subsection. */
    offDuration: number;
    /** Indices of the frequency components to be played during the subsection.
     * @remarks Frequency components (see {@link FreqScript}) are 1-indexed.
     */
    frequencyComponentReferences: number[];
}

export interface CadenceSection extends AstNode {
    kind: AstNodeKind.CadenceSection;
    /** The duration of this cadence section in seconds. */
    duration: number;
    /** The subsections of this cadence section. */
    subsections: CadenceSubsection[];
}

export interface ToneScript extends AstNode {
    kind: AstNodeKind.ToneScript;
    /** The FreqScript section of the ToneScript. */
    freqScript: FreqScript;
    /** The cadence sections. */
    cadenceSections: CadenceSection[];
}
