import { ToneLibrary } from "../types";

export const india: ToneLibrary = {
    title: "India",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Acceptance tone",
            tonescript: "400@-19;5(1/4/1)",
        },
        {
            name: "Busy tone",
            tonescript: "400@-19;1.5(0.75/0.75/1)",
        },
        {
            name: "Congestion tone",
            tonescript: "400@-19;0.5(0.25/0.25/1)",
        },
        {
            name: "Special dial tone",
            tonescript: "400@-19;3(2.8/0.2/1)",
        },
        {
            name: "Holding tone",
            tonescript: "400@-19;4(0.25/0.25/1,0.25/3.25/1)",
        },
        {
            name: "Intrusion tone",
            tonescript: "400@-19;5(0.15/4.85/1)",
        },
        {
            name: "Refusal tone",
            tonescript: "400@-19;3(0.4/0.2/1,0.4/2/1)",
        },
        {
            name: "Route tone",
            tonescript: "400@-19;1(0.1/0.9/1)",
        },
        {
            name: "Call waiting tone",
            tonescript: "400@-19;8(0.2/0.1/1,0.2/7.5/1)",
        },
    ],
};
