import { ToneLibrary } from "./types";

export const miscellaneous: ToneLibrary = {
    title: "Miscellaneous",
    tones: [
        {
            name: "Outside dial tone (North America)",
            tonescript: "450@-19,550@-19;10(*/0/1+2)",
            notes: "Found on Wikipedia. Probably used in proprietary enterprise systems.",
        },
    ],
};
