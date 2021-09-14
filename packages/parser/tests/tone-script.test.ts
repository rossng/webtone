import { expectEOF, expectSingleResult } from "typescript-parsec";
import { lexer, TONE_SCRIPT } from "../src";

// function makeFreqScriptAst(components: [frequency: number, level: number][]): FreqScript {
//     return {
//         kind: AstNodeKind.FreqScript,
//         frequencyComponents: components.map(([frequency, level]) => ({
//             kind: AstNodeKind.FrequencyComponent,
//             frequency,
//             level,
//         })),
//     };
// }

const tests: { input: string /*expectedAst: FreqScript*/ }[] = [
    {
        input: "350@-19,440@-19;10(*/0/1+2)",
        // expectedAst: makeFreqScriptAst([
        //     [350, 15],
        //     [1000, -19],
        // ]),
    },
    { input: "350@-19,440@-19;2(.2/.2/1+2);10(*/0/1+2)" },
    {
        input: "349@-21,392@-21,440@-21,466@-21,523@-24,540@-24;2.1(.6/0/3,.2/0/2,.7/0/1,.2/0/2,.2/0/3,.3/0/4);30(*/0/5+6)",
    },
    { input: "392@-19,440@-19,494@-19,294@-19,457@-19;3.5(.7/0/4,.8/0/1,.6/0/1,.5/0/3,.7/0/2,.2/0/1);30(*/0/2+5)" },
];

describe.each(tests)("With input '$input'", ({ input }) => {
    test("parses", () => {
        const tokens = lexer.parse(input);
        const ast = expectSingleResult(expectEOF(TONE_SCRIPT.parse(tokens)));
        console.log(ast);
        // expect(ast).toEqual(expectedAst);
    });
});
