import { AstNodeKind, FreqScript, FrequencyComponent } from "@webtone/ast";
import { apply, kright, list_sc, rule, seq, tok, Token } from "typescript-parsec";
import { TokenKind } from "./lexer";

function applyFrequencyComponent([freq, level]: [
    Token<TokenKind.Number>,
    Token<TokenKind.Number>
]): FrequencyComponent {
    return {
        kind: AstNodeKind.FrequencyComponent,
        frequency: +freq.text,
        level: +level.text,
    };
}

function applyFreqScript(frequencies: FrequencyComponent[]): FreqScript {
    return {
        kind: AstNodeKind.FreqScript,
        frequencyComponents: frequencies,
    };
}

export const FREQUENCY_COMPONENT = rule<TokenKind, FrequencyComponent>();
export const FREQ_SCRIPT = rule<TokenKind, FreqScript>();

FREQUENCY_COMPONENT.setPattern(
    apply(seq(tok(TokenKind.Number), kright(tok(TokenKind.At), tok(TokenKind.Number))), applyFrequencyComponent)
);

FREQ_SCRIPT.setPattern(apply(list_sc(FREQUENCY_COMPONENT, tok(TokenKind.Comma)), applyFreqScript));
