import { Spinner } from "@chakra-ui/react";
import { createComponent } from "@lit-labs/react";
import React, { Suspense, useContext } from "react";
import { AppContext } from "./AppProvider";

const WebtonePlayer = React.lazy(() =>
    import("@webtone/player").then((m) => ({
        default: createComponent(React, "webtone-player", m.WebtonePlayer),
    }))
);

export function Player(): JSX.Element {
    const { toneScript } = useContext(AppContext);

    return (
        <Suspense fallback={<Spinner m={4} />}>
            <WebtonePlayer toneScript={toneScript} />
        </Suspense>
    );
}
