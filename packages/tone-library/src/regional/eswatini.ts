import { ToneLibrary } from "../types";

export const eswatini: ToneLibrary = {
    title: "Eswatini",
    notes: "From ITU Operational Bulletin No. 781",
    tones: [
        {
            name: "Busy tone (1)",
            tonescript: "400@-19;1(0.5/0.5/1)",
        },
        {
            name: "Busy tone (2)",
            tonescript: "400@-19;0.8(0.4/0.4/1)",
        },
        {
            name: "Dial tone",
            tonescript: "50@-19;1(*/0/1)",
        },
        {
            name: "Number unobtainable tone",
            tonescript: "400@-19;5(4.8/0.2/1)",
        },
        {
            name: "Pay tone",
            tonescript: "900@-19;0.5(0.25/0.25/1)",
        },
        {
            name: "Payphone recognition tone (1)",
            tonescript: "1430@-19,943@-19;8(2/2/1,2/2/2)",
        },
        {
            name: "Payphone recognition tone (2)",
            tonescript: "1100@-19,1750@-19,750@-19,1450@-19;2.6(0.2/0.2/1+2,0.2/2/3+4)",
        },
        {
            name: "Ringing tone",
            tonescript: "400@-19;5(0.4/0.2/1,0.4/4/1)",
        },
    ],
};
