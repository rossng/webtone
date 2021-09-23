import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/action-group/sp-action-group.js";
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/icon/sp-icon.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-pause.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-play.js";
import "@spectrum-web-components/quick-actions/sp-quick-actions.js";
import "@spectrum-web-components/theme/scale-large.js";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/theme-light.js";
import { ToneScript } from "@webtone/ast";
import { css, html, HTMLTemplateResult, LitElement, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ToneScriptPlayer } from "./player-core";

@customElement("webtone-player")
export class WebtonePlayer extends LitElement {
    static styles = css`
        p {
            color: red;
        }
    `;

    @state() playing = false;
    @state() player: ToneScriptPlayer | null = null;

    @property({ type: Object }) toneScript: ToneScript | null = null;

    render(): HTMLTemplateResult {
        return html`<sp-theme color="light" scale="large"
            ><sp-quick-actions opened
                ><sp-action-button label=${this.playing ? "Pause" : "Play"} @click=${this.togglePlaying}>
                    ${this.playing
                        ? html`<sp-icon-pause slot="icon"></sp-icon-pause>`
                        : html`<sp-icon-play slot="icon"></sp-icon-play>`}
                    ${this.playing ? "Pause" : "Play"}
                </sp-action-button></sp-quick-actions
            ></sp-theme
        >`;
    }

    override update(changedProperties: PropertyValues<this>): void {
        if (changedProperties.has("toneScript")) {
            this.player?.close();
            this.player = this.toneScript ? new ToneScriptPlayer(this.toneScript) : null;
        }

        super.update(changedProperties);
    }

    private async togglePlaying() {
        if (!this.player) {
            return;
        }
        if (!this.player.playing) {
            await this.player.enable();
            this.player.play();
            this.playing = this.player.playing;
        } else {
            this.player.pause();
            this.playing = this.player.playing;
        }
    }
}
