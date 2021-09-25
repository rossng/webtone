import { ToneLibrary } from "../types";

export const hungary: ToneLibrary = {
    title: "Hungary",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Busy tone",
            tonescript: "425@-19;0.6(0.3/0.3/1)",
        },
        {
            name: "Congestion tone",
            tonescript: "425@-19;0.6(0.3/0.3/1)",
        },
        {
            name: "Dial tone",
            tonescript: "425@-19;1(*/0/1)",
        },
        {
            name: "Second dial tone",
            tonescript: "425@-19,450@-19;1(*/0/1+2)",
        },
        {
            name: "Special dial tone",
            tonescript: "350@-19,375@-19,400@-19;1(*/0/1+2+3)",
        },
        {
            name: "Negative indication tone",
            tonescript: "300@-19,425@-19;5(0.2/0.2/1+2,0.2/0.2/1+2,0.2/0.2/1+2)",
            notes: "An announcement follows the tone.",
        },
        {
            name: "Offering tone, trunk",
            tonescript: "425@-19;4(0.3/0.3/1,0.3/1.5/1)",
        },
        {
            name: "Pay tone (1)",
            tonescript: "600@-19;3(0.15/0.15/1,0.15/0.15/1,0.15/0.15/1)",
            notes: "Assuming there is a gap after the cadences.",
        },
        {
            name: "Pay tone (2)",
            tonescript: "1100@-19;3(0.15/0.15/1,0.15/0.15/1,0.15/0.15/1,0.15/0.15/1,0.15/0.15/1)",
            notes: "Assuming there is a gap after the cadences.",
        },
        {
            name: "Positive indication tone",
            tonescript: "300@-19,425@-19;5(1.0/0.2/1+2)",
            notes: "An announcement follows the tone.",
        },
        {
            name: "Payphone recognition tone (1)",
            tonescript: "1100@-19,1750@-19;5(0.2/0.2/1+2,0.2/2/1+2)",
        },
        {
            name: "Payphone recognition tone (2)",
            tonescript: "750@-19,1450@-19;5(0.2/0.2/1+2,0.2/2/1+2)",
        },
        {
            name: "Ringing tone",
            tonescript: "425@-19;5(1.25/3.75/1)",
        },
        {
            name: "Special information tone",
            tonescript: "950@-19,1400@-19,1800@-19;2(0.33/0/1,0.33/0/2,0.33/1/3)",
        },
        {
            name: "Warning tone",
            tonescript: "425@-19;2.4(0.3/0.3/1,0.3/1.5/1)",
        },
        {
            name: "Call waiting tone",
            tonescript: "425@-19;2(0.04/1.96/1)",
        },
    ],
};
