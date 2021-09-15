import { expectEOF, expectSingleResult } from "typescript-parsec";
import { AstNodeKind, lexer, ToneScript, TONE_SCRIPT } from "../src";
import { makeCadenceSectionAst } from "./cadence-section.test";
import { makeFreqScriptAst } from "./freq-script.test";

const tests: { input: string; expectedAst: ToneScript }[] = [
    {
        input: "350@-19,440@-19;10(*/0/1+2)",
        expectedAst: {
            kind: AstNodeKind.ToneScript,
            freqScript: makeFreqScriptAst([
                [350, -19],
                [440, -19],
            ]),
            cadenceSections: [makeCadenceSectionAst(10, ["always", 0, [1, 2]])],
        },
    },
    {
        input: "350@-19,440@-19;2(.2/.2/1+2);10(*/0/1+2)",
        expectedAst: {
            kind: AstNodeKind.ToneScript,
            freqScript: makeFreqScriptAst([
                [350, -19],
                [440, -19],
            ]),
            cadenceSections: [
                makeCadenceSectionAst(2, [0.2, 0.2, [1, 2]]),
                makeCadenceSectionAst(10, ["always", 0, [1, 2]]),
            ],
        },
    },
    {
        input: "349@-21,392@-21,440@-21,466@-21,523@-24,540@-24;2.1(.6/0/3,.2/0/2,.7/0/1,.2/0/2,.2/0/3,.3/0/4);30(*/0/5+6)",
        expectedAst: {
            kind: AstNodeKind.ToneScript,
            freqScript: makeFreqScriptAst([
                [349, -21],
                [392, -21],
                [440, -21],
                [466, -21],
                [523, -24],
                [540, -24],
            ]),
            cadenceSections: [
                makeCadenceSectionAst(
                    2.1,
                    [0.6, 0, [3]],
                    [0.2, 0, [2]],
                    [0.7, 0, [1]],
                    [0.2, 0, [2]],
                    [0.2, 0, [3]],
                    [0.3, 0, [4]]
                ),
                makeCadenceSectionAst(30, ["always", 0, [5, 6]]),
            ],
        },
    },
    {
        input: "392@-19,440@-19,494@-19,294@-19,457@-19;3.5(.7/0/4,.8/0/1,.6/0/1,.5/0/3,.7/0/2,.2/0/1);30(*/0/2+5)",
        expectedAst: {
            kind: AstNodeKind.ToneScript,
            freqScript: makeFreqScriptAst([
                [392, -19],
                [440, -19],
                [494, -19],
                [294, -19],
                [457, -19],
            ]),
            cadenceSections: [
                makeCadenceSectionAst(
                    3.5,
                    [0.7, 0, [4]],
                    [0.8, 0, [1]],
                    [0.6, 0, [1]],
                    [0.5, 0, [3]],
                    [0.7, 0, [2]],
                    [0.2, 0, [1]]
                ),
                makeCadenceSectionAst(30, ["always", 0, [2, 5]]),
            ],
        },
    },
];

describe.each(tests)("With input '$input'", ({ input, expectedAst }) => {
    test("parses", () => {
        const tokens = lexer.parse(input);
        const ast = expectSingleResult(expectEOF(TONE_SCRIPT.parse(tokens)));
        expect(ast).toEqual(expectedAst);
    });
});
