import { ToneLibrary } from "./types";

export const uk: ToneLibrary = {
    title: "United Kingdom",
    tones: [
        {
            name: "Busy tone",
            tonescript: "400@-19;0.75(0.375/0.375/1)",
        },
        {
            name: "Congestion tone",
            tonescript: "400@-19;1.5(0.4/0.35/1,0.225/0.525/1)",
        },
        {
            name: "Dial tone",
            tonescript: "350@-12,440@-12;10(*/0/1+2)",
        },
        {
            name: "Dial tone (variant)",
            tonescript: "50@-12,440@-12;10(*/0/1+2)",
        },
        {
            name: "Ringing tone",
            tonescript: "400@-19,450@-19;3(0.4/0.2/1+2,0.4/2.0/1+2)",
        },
        {
            name: "Number unobtainable tone",
            tonescript: "400@-19;10(*/0/1)",
        },
        {
            name: "Pay tone",
            tonescript: "400@-19;0.25(0.125/0.125/1)",
        },
        {
            name: "Payphone recognition tone",
            tonescript: "1200@-19,800@-19;2.6(0.2/0.2/1,0.2/2.0/2)",
        },
    ],
};
