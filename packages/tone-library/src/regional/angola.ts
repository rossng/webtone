import { ToneLibrary } from "../types";

export const angola: ToneLibrary = {
    title: "Angola",
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
            name: "Number unobtainable tone",
            tonescript: "400@-19;0.4(0.2/0.2/1)",
        },
        {
            name: "Ringing tone",
            tonescript: "25@-19;6(1/5/1)",
        },
        {
            name: "Waiting tone",
            tonescript: "400@-19;6(1/5/1)",
        },
    ],
};
