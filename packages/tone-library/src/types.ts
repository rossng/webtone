export interface ToneLibrary {
    title: string;
    tones: ToneDefinition[];
}

export interface ToneDefinition {
    name: string;
    tonescript: string;
}
