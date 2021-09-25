import { ToneLibrary } from "../types";

export const latvia: ToneLibrary = {
    title: "Latvia",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Busy tone",
            tonescript: "425@-19;0.6(0.3/0.3/1)",
        },
        {
            name: "Confirmation tone",
            tonescript: "425@-19;0.8(0.4/0.4/1)",
        },
        {
            name: "Congestion tone",
            tonescript: "425@-19;0.3(0.15/0.15/1)",
        },
        {
            name: "Dial tone",
            tonescript: "425@-19;1(*/0/1)",
        },
        {
            name: "Ringing tone",
            tonescript: "425@-19;5(1/4/1)",
        },
        {
            name: "Special information tone",
            tonescript: "950@-19,1400@-19,1600@-19;5(0.33/0/1,0.33/0/2,0.33/1/3)",
        },
        {
            name: "Call waiting tone",
            tonescript: "425@-19;5(0.2/5/1)",
        },
    ],
};
