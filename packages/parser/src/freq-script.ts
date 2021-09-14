import { apply, list_sc, rule, seq, str, tok, Token } from "typescript-parsec";
import { AstNodeKind, FreqScript, FrequencyComponent } from "./ast";
import { TokenKind } from "./lexer";

function applyFrequencyComponent([freq, _, level]: [
    Token<TokenKind.Number>,
    Token<TokenKind.At>,
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
    apply(seq(tok(TokenKind.Number), tok(TokenKind.At), tok(TokenKind.Number)), applyFrequencyComponent)
);

FREQ_SCRIPT.setPattern(apply(list_sc(FREQUENCY_COMPONENT, str(",")), applyFreqScript));
