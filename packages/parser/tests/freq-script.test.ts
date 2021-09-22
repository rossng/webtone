import { AstNodeKind, FreqScript } from "@webtone/ast";
import { expectEOF, expectSingleResult } from "typescript-parsec";
import { FREQ_SCRIPT, lexer } from "../src";

export function makeFreqScriptAst(components: [frequency: number, level: number][]): FreqScript {
    return {
        kind: AstNodeKind.FreqScript,
        frequencyComponents: components.map(([frequency, level]) => ({
            kind: AstNodeKind.FrequencyComponent,
            frequency,
            level,
        })),
    };
}

const tests: { input: string; expectedAst: FreqScript }[] = [
    {
        input: "350@15,1000@-19",
        expectedAst: makeFreqScriptAst([
            [350, 15],
            [1000, -19],
        ]),
    },
];

describe.each(tests)("With input '$input'", ({ input, expectedAst }) => {
    test("parses correctly", () => {
        const tokens = lexer.parse(input);
        const ast = expectSingleResult(expectEOF(FREQ_SCRIPT.parse(tokens)));
        expect(ast).toEqual(expectedAst);
    });
});
