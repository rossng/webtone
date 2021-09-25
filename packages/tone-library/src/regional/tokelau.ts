import { ToneLibrary } from "../types";

export const tokelau: ToneLibrary = {
    title: "Tokelau",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Busy tone",
            tonescript: "400@-19;1(0.5/0.5/1)",
        },
        {
            name: "Congestion tone",
            tonescript: "400@-19;1(0.5/0.5/1)",
        },
        {
            name: "Dial tone",
            tonescript: "400@-19;1(*/0/1)",
        },
        {
            name: "Ringing tone",
            tonescript: "400@-19,450@-19;0.6(0.4/0.2/1+2)",
        },
        {
            name: "Special information tone",
            tonescript: "400@-19;0.525(0.075/0.1/1,0.075/0.1/1,0.075/0.1/1)",
        },
    ],
};
