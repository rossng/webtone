export interface ToneLibrary {
    title: string;
    tones: ToneDefinition[];
    notes?: string;
}

export interface ToneDefinition {
    name: string;
    tonescript: string;
    notes?: string;
}
