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
    {
        input: "350@-19,440@-19;10(*/0/1+2)",
        tokens: [
            { text: "350", kind: TokenKind.Number },
            { text: "@", kind: TokenKind.At },
            { text: "-19", kind: TokenKind.Number },
            { text: ",", kind: TokenKind.Comma },
            { text: "440", kind: TokenKind.Number },
            { text: "@", kind: TokenKind.At },
            { text: "-19", kind: TokenKind.Number },
            { text: ";", kind: TokenKind.Semicolon },
            { text: "10", kind: TokenKind.Number },
            { text: "(", kind: TokenKind.OpenParen },
            { text: "*", kind: TokenKind.Star },
            { text: "/", kind: TokenKind.Slash },
            { text: "0", kind: TokenKind.Number },
            { text: "/", kind: TokenKind.Slash },
            { text: "1", kind: TokenKind.Number },
            { text: "+", kind: TokenKind.Plus },
            { text: "2", kind: TokenKind.Number },
            { text: ")", kind: TokenKind.CloseParen },
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
