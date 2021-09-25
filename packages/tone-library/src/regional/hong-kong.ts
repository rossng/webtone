import { ToneLibrary } from "../types";

export const hongKong: ToneLibrary = {
    title: "Hong Kong",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Busy tone",
            tonescript: "480@-19,620@-19;1(0.5/0.5/1+2)",
        },
        {
            name: "Congestion tone",
            tonescript: "480@-19,620@-19;0.5(0.25/0.25/1+2)",
        },
        {
            name: "Dial tone",
            tonescript: "350@-19,440@-19;1(*/0/1+2)",
        },
        {
            name: "Number unobtainable tone",
            tonescript: "480@-19,620@-19;1(*/0/1+2)",
        },
        {
            name: "Ringing tone",
            tonescript: "440@-19,480@-19;4(0.4/0.2/1+2,0.4/3/1+2)",
        },
    ],
};
