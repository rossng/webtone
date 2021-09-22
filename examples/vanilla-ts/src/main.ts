import { ToneScript } from "@webtone/ast";
import { parseToneScript } from "@webtone/parser";
import { ToneScriptPlayer } from "@webtone/player";
import "./style.css";

const inputEl = document.querySelector<HTMLTextAreaElement>("#input");
const parseEl = document.querySelector<HTMLButtonElement>("#parse");
const astEl = document.querySelector<HTMLPreElement>("#ast");
const playEl = document.querySelector<HTMLButtonElement>("#play");
const toneLibraryEl = document.querySelector<HTMLDivElement>("#tone-library");

let ast: ToneScript | null = null;
let player: ToneScriptPlayer | null;

async function updateToneScript(): Promise<void> {
    try {
        await player?.stop();
    } catch {
        // Player already stopped
    }
    try {
        ast = parseToneScript(inputEl?.value?.trim() ?? "");
        if (astEl) {
            astEl.textContent = JSON.stringify(ast, null, 2);
        }
        if (playEl) {
            playEl.textContent = "Play";
            playEl.disabled = false;
        }
    } catch (err) {
        console.warn("Error parsing ToneScript", { err });
        if (astEl) {
            astEl.textContent = "Could not parse.";
        }
        if (playEl) {
            playEl.textContent = "Play";
            playEl.disabled = true;
        }
    }
}

if ([inputEl, parseEl, astEl, playEl, toneLibraryEl].some((x) => !x)) {
    console.error("Missing element", { inputEl, parseEl, astEl, playEl, toneLibraryEl });
} else {
    parseEl?.addEventListener("click", updateToneScript);

    playEl?.addEventListener("click", async () => {
        if (ast && !player?.playing) {
            player = new ToneScriptPlayer(ast);
            await player.enable();
            player.play();
            if (playEl) {
                playEl.textContent = "Stop";
            }
        } else {
            player?.stop();
            if (playEl) {
                playEl.textContent = "Play";
            }
        }
    });

    updateToneScript();
}
