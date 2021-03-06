import { AstNodeKind, CadenceSection, FreqScript, ToneScript } from "@webtone/ast";
import { apply, expectEOF, expectSingleResult, kleft, list_sc, rule, seq, tok } from "typescript-parsec";
import { lexer } from ".";
import { CADENCE_SECTION } from "./cadence-section";
import { FREQ_SCRIPT } from "./freq-script";
import { TokenKind } from "./lexer";

function applyToneScript([freqScript, cadenceSections]: [
    freqScript: FreqScript,
    cadenceSections: CadenceSection[]
]): ToneScript {
    return {
        kind: AstNodeKind.ToneScript,
        freqScript,
        cadenceSections,
    };
}

export const TONE_SCRIPT = rule<TokenKind, ToneScript>();

TONE_SCRIPT.setPattern(
    apply(
        seq(kleft(FREQ_SCRIPT, tok(TokenKind.Semicolon)), list_sc(CADENCE_SECTION, tok(TokenKind.Semicolon))),
        applyToneScript
    )
);

export function parseToneScript(source: string): ToneScript {
    return expectSingleResult(expectEOF(TONE_SCRIPT.parse(lexer.parse(source))));
}
