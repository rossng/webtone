import { ToneLibrary } from "./types";

export const barbados: ToneLibrary = {
    title: "Barbados",
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
            name: "Ringing tone",
            tonescript: "440@-19,480@-19;6(2/4/1+2)",
        },
        {
            name: "Special information tone",
            tonescript: "950@-19,1400@-19,1800@-19;1(0.33/0/1,0.33/0/2,0.33/0/3)",
        },
        {
            name: "Call waiting tone",
            tonescript: "440@-19;20.6(0.3/10/1,0.3/10/1)",
        },
    ],
};
