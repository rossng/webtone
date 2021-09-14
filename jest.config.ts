import type { Config } from "@jest/types";

/** @type import("@jest/types").Config.ProjectConfig */
const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    modulePathIgnorePatterns: [],
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest/dist",
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
};
export default config;
