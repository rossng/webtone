export enum AstNodeKind {
    FrequencyComponent = "FREQUENCY_COMPONENT",
    FreqScript = "FREQ_SCRIPT",
}

export interface AstNode {
    /** Kind of the AST node. */
    kind: AstNodeKind;
}

export interface FrequencyComponent extends AstNode {
    kind: AstNodeKind.FrequencyComponent;
    /** Frequency (in hertz) of the frequency component. */
    frequency: number;
    /** Loudness level (in dBm) of the frequency component. */
    level: number;
}

export interface FreqScript extends AstNode {
    kind: AstNodeKind.FreqScript;
    /** List of frequency components in the frequency script. */
    frequencyComponents: FrequencyComponent[];
}
