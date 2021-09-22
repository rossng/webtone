import { ToneScript } from "@webtone/ast";
import { createContext, PropsWithChildren, useState } from "react";

function useValue() {
    const [toneScript, setToneScript] = useState<ToneScript>();

    return {
        toneScript,
        setToneScript,
    };
}

export const AppContext = createContext({} as ReturnType<typeof useValue>);

export function AppProvider(props: PropsWithChildren<Record<never, never>>): JSX.Element {
    return <AppContext.Provider value={useValue()}>{props.children}</AppContext.Provider>;
}
