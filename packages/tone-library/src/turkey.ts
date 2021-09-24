import { ToneLibrary } from "./types";

export const turkey: ToneLibrary = {
    title: "Turkey",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Busy tone",
            tonescript: "450@-19;1(0.5/0.5/1)",
        },
        {
            name: "Confirmation tone",
            tonescript: "450@-19;0.08(0.04/0.04/1)",
        },
        {
            name: "Congestion tone",
            tonescript: "450@-19;2(0.2/0.2/1,0.2/0.2/1,0.2/0.2/1,0.6/0.2/1)",
        },
        {
            name: "Dial tone",
            tonescript: "450@-19;10(*/0/1)",
        },
        {
            name: "Special dial tone",
            tonescript: "450@-19;1.25(1.0/0.25/1)",
        },
        {
            name: "Howler tone",
            tonescript: "1400@-19,2060@-19,2460@-19,2600@-19;1.6(0.2/0.2/1,0.2/0.2/2,0.2/0.2/3,0.2/0.2/4)",
        },
        {
            name: "Number unobtainable tone",
            tonescript: "450@-19;0.4(0.2/0.2/1)",
        },
        {
            name: "Ringing tone",
            tonescript: "450@-19;6(2/4/1)",
        },
        {
            name: "Waiting tone (1)",
            tonescript: "350@-19,450@-19;1(0.5/0.5/1+2)",
        },
        {
            name: "Waiting tone (2)",
            tonescript: "450@-19;3(0.5/2.5/1)",
        },
        {
            name: "Call waiting tone",
            tonescript: "450@-19;9(0.2/0.6/1,0.2/8.0/1)",
        },
    ],
};
