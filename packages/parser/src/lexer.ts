import { buildLexer, Token } from "typescript-parsec";

export enum TokenKind {
    Number = "NUMBER",
    Comma = "COMMA",
    At = "AT",
}

export const lexer = buildLexer([
    [true, /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)/g, TokenKind.Number],
    [true, /^,/g, TokenKind.Comma],
    [true, /^@/g, TokenKind.At],
]);

export function* tokenGenerator<T>(token: Token<T>): Generator<Token<T>, void, void> {
    let current: Token<T> | undefined = token;
    do {
        yield current;
        current = current.next;
    } while (current);
}
