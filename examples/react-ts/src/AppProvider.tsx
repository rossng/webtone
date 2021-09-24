import { ToneScript } from "@webtone/ast";
import { createContext, PropsWithChildren, useState } from "react";

function useValue() {
    const [toneScript, setToneScript] = useState<ToneScript | null>(null);
    const [parseError, setParseError] = useState<string | null>(null);
    const [toneName, setToneName] = useState<string | null>(null);

    return {
        toneScript,
        setToneScript,
        parseError,
        setParseError,
        toneName,
        setToneName,
    };
}

export const AppContext = createContext({} as ReturnType<typeof useValue>);

export function AppProvider(props: PropsWithChildren<Record<never, never>>): JSX.Element {
    return <AppContext.Provider value={useValue()}>{props.children}</AppContext.Provider>;
}
