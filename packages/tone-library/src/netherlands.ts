import { ToneLibrary } from "./types";

export const netherlands: ToneLibrary = {
    title: "The Netherlands",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Busy tone",
            tonescript: "425@-19;1(0.5/0.5/1)",
        },
        {
            name: "Congestion tone",
            tonescript: "425@-19;0.5(0.25/0.25/1)",
        },
        {
            name: "Dial tone",
            tonescript: "425@-19;1(*/0/1)",
        },
        {
            name: "Special dial tone",
            tonescript: "425@-19;0.55(0.5/0.05/1)",
        },
        {
            name: "Ringing tone",
            tonescript: "425@-19;5(1/4/1)",
        },
        {
            name: "Special information tone",
            tonescript: "950@-19,1400@-19,1800@-19;5(0.333/0/1,0.333/0/2,0.333/1/3)",
        },
        {
            name: "Waiting tone",
            tonescript: "425@-19;10(0.5/9.5/1)",
        },
    ],
};
