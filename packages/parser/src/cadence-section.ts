import { AstNodeKind, CadenceSection, CadenceSubsection } from "@webtone/ast";
import { alt, apply, kleft, kmid, list_sc, rule, seq, tok, Token } from "typescript-parsec";
import { TokenKind } from "./lexer";

function applyFrequencyComponentReferences(value: Token<TokenKind.Number>[]): number[] {
    return value.map((t) => +t.text);
}

function applyCadenceSubsection([onDuration, offDuration, frequencyComponentReferences]: [
    onDuration: Token<TokenKind.Number> | Token<TokenKind.Star>,
    offDuration: Token<TokenKind.Number>,
    frequencyComponentReferences: number[]
]): CadenceSubsection {
    return {
        kind: AstNodeKind.CadenceSubsection,
        onDuration: onDuration.kind === TokenKind.Star ? "always" : +onDuration.text,
        offDuration: +offDuration.text,
        frequencyComponentReferences,
    };
}

function applyCadenceSection([duration, subsections]: [
    duration: Token<TokenKind.Number>,
    subsections: CadenceSubsection[]
]): CadenceSection {
    return {
        kind: AstNodeKind.CadenceSection,
        duration: +duration.text,
        subsections,
    };
}

export const FREQUENCY_COMPONENT_REFERENCES = rule<TokenKind, number[]>();
export const CADENCE_SUBSECTION = rule<TokenKind, CadenceSubsection>();
export const CADENCE_SECTION = rule<TokenKind, CadenceSection>();

FREQUENCY_COMPONENT_REFERENCES.setPattern(
    apply(list_sc(tok(TokenKind.Number), tok(TokenKind.Plus)), applyFrequencyComponentReferences)
);

CADENCE_SUBSECTION.setPattern(
    apply(
        seq(
            kleft(alt(tok(TokenKind.Number), tok(TokenKind.Star)), tok(TokenKind.Slash)),
            kleft(tok(TokenKind.Number), tok(TokenKind.Slash)),
            FREQUENCY_COMPONENT_REFERENCES
        ),
        applyCadenceSubsection
    )
);

CADENCE_SECTION.setPattern(
    apply(
        seq(
            tok(TokenKind.Number),
            kmid(tok(TokenKind.OpenParen), list_sc(CADENCE_SUBSECTION, tok(TokenKind.Comma)), tok(TokenKind.CloseParen))
        ),
        applyCadenceSection
    )
);
