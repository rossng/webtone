import { ToneLibrary } from "./types";

export const unitedStates: ToneLibrary = {
    title: "United States of America",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Dial tone",
            tonescript: "350@-19,440@-19;1(*/0/1+2)",
        },
        {
            name: "Intrusion tone",
            tonescript: "480@-19,62@-19;1(0.5/0.5/1+2)",
        },
        {
            name: "Number unobtainable tone (1)",
            tonescript: "200@-19;6.5(0.5/6/1)",
        },
        {
            name: "Number unobtainable tone (2)",
            tonescript: "400@-19;6.5(0.5/6/1)",
        },
        {
            name: "Permanent signal tone (1)",
            tonescript: "480@-19;1(*/0/1)",
        },
        {
            name: "Permanent signal tone (2)",
            tonescript: "400@-19;1(*/0/1)",
        },
        {
            name: "Permanent signal tone (3)",
            tonescript: "500@-19;1(*/0/1)",
        },
        {
            name: "Record tone",
            tonescript: "440@-19;5.5(0.5/5/1)",
        },
        {
            name: "Ringing tone",
            tonescript: "440@-19,480@-19;6(2/4/1+2)",
        },
        {
            name: "Re-order tone",
            tonescript: "480@-19,62@-19;0.5(0.3/0.2/1+2)",
        },
        {
            name: "Warning tone - message",
            tonescript: "1400@-19;15(0.5/14.5/1)",
        },
        {
            name: "Call waiting tone",
            tonescript: "440@-19;20.6(0.3/10/1,0.3/10/1)",
        },
    ],
};
