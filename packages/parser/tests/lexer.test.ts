import { lexer, tokenGenerator, TokenKind } from "../src";

const freqTests = [
    {
        input: "350@15",
        tokens: [
            { text: "350", kind: TokenKind.Number },
            { text: "@", kind: TokenKind.At },
            { text: "15", kind: TokenKind.Number },
        ],
    },
    {
        input: "1000@-19",
        tokens: [
            { text: "1000", kind: TokenKind.Number },
            { text: "@", kind: TokenKind.At },
            { text: "-19", kind: TokenKind.Number },
        ],
    },
    {
        input: "350@15,1000@-19",
        tokens: [
            { text: "350", kind: TokenKind.Number },
            { text: "@", kind: TokenKind.At },
            { text: "15", kind: TokenKind.Number },
            { text: ",", kind: TokenKind.Comma },
            { text: "1000", kind: TokenKind.Number },
            { text: "@", kind: TokenKind.At },
            { text: "-19", kind: TokenKind.Number },
        ],
    },
];

describe.each(freqTests)("With input '$input'", ({ input, tokens }) => {
    test(`lexer returns [${tokens.map((t) => `'${t.text}'`)}]`, () => {
        const singleFreq = lexer.parse(input);
        expect(singleFreq).not.toBeUndefined();
        if (singleFreq) {
            const tokens = Array.from(tokenGenerator(singleFreq));

            tokens.forEach((token, idx) => {
                expect(token.text).toBe(tokens[idx].text);
                expect(token.kind).toBe(tokens[idx].kind);
            });
        }
    });
});

describe.each(["foo"])("With input '%s'", (input) => {
    test("lexing fails", () => {
        expect(() => {
            lexer.parse(input);
        }).toThrow();
    });
});
