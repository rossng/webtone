import { ToneLibrary } from "./types";

export const bangladesh: ToneLibrary = {
    title: "Bangladesh",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Busy tone",
            tonescript: "450@-19;2(0.2/0.3/1,0.7/0.8/1)",
        },
        {
            name: "Congestion tone",
            tonescript: "450@-19;0.5(0.25/0.25/1)",
        },
        {
            name: "Dial tone",
            tonescript: "450@-19;1(*/0/1)",
        },
        {
            name: "Special dial tone",
            tonescript: "450@-19;0.8(0.4/0.4/1)",
        },
        {
            name: "Howler tone",
            tonescript: "3000@-19;1(*/0/1)",
        },
        {
            name: "Pay tone (1)",
            tonescript: "800@-19;1(*/0/1)",
        },
        {
            name: "Pay tone (2)",
            tonescript: "1900@-19;1(*/0/1)",
        },
        {
            name: "Ringing tone",
            tonescript: "450@-19;5(1/4/1)",
        },
        {
            name: "Warning tone - operator intervening",
            tonescript: "450@-19;2(0.2/0.2/1,0.2/1.4/1)",
            notes: "There appears to be an error in this definitions in ITU Operational Bulletin 781, which is corrected here.",
        },
        {
            name: "Call waiting tone",
            tonescript: "450@-19;13(3/10/1)",
        },
    ],
};
