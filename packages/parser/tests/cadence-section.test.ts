import { expectEOF, expectSingleResult } from "typescript-parsec";
import { CADENCE_SECTION, lexer } from "../src";
import { AstNodeKind, CadenceSection } from "../src/ast";

export function makeCadenceSectionAst(
    duration: number,
    ...subsections: [onDuration: number | "always", offDuration: number, frequencyComponentReferences: number[]][]
): CadenceSection {
    return {
        kind: AstNodeKind.CadenceSection,
        duration,
        subsections: subsections.map(([onDuration, offDuration, frequencyComponentReferences]) => ({
            onDuration,
            offDuration,
            frequencyComponentReferences,
            kind: AstNodeKind.CadenceSubsection,
        })),
    };
}

const tests: { input: string; expectedAst: CadenceSection }[] = [
    {
        input: "10(*/0/1+2)",
        expectedAst: makeCadenceSectionAst(10, ["always", 0, [1, 2]]),
    },
];

describe.each(tests)("With input '$input'", ({ input, expectedAst }) => {
    test("parses correctly", () => {
        const tokens = lexer.parse(input);
        const ast = expectSingleResult(expectEOF(CADENCE_SECTION.parse(tokens)));
        expect(ast).toEqual(expectedAst);
    });
});
