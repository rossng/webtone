import { buildLexer, Token } from "typescript-parsec";

export enum TokenKind {
    Number = "NUMBER",
    Comma = "COMMA",
    At = "AT",
    Semicolon = "SEMICOLON",
    Plus = "PLUS",
    Star = "STAR",
    Slash = "SLASH",
    OpenParen = "OPEN_PAREN",
    CloseParen = "CLOSE_PAREN",
}

export const lexer = buildLexer([
    [true, /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)/g, TokenKind.Number],
    [true, /^,/g, TokenKind.Comma],
    [true, /^@/g, TokenKind.At],
    [true, /^;/g, TokenKind.Semicolon],
    [true, /^\+/g, TokenKind.Plus],
    [true, /^\*/g, TokenKind.Star],
    [true, /^\//g, TokenKind.Slash],
    [true, /^\(/g, TokenKind.OpenParen],
    [true, /^\)/g, TokenKind.CloseParen],
]);

export function* tokenGenerator<T>(token: Token<T>): Generator<Token<T>, void, void> {
    let current: Token<T> | undefined = token;
    do {
        yield current;
        current = current.next;
    } while (current);
}
