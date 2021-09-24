import { Flex, Spinner, Text } from "@chakra-ui/react";
import { createComponent } from "@lit-labs/react";
import React, { Suspense, useContext } from "react";
import { AppContext } from "./AppProvider";

const WebtonePlayer = React.lazy(() =>
    import("@webtone/player").then((m) => ({
        default: createComponent(React, "webtone-player", m.WebtonePlayer),
    }))
);

export function Player(): JSX.Element {
    const { toneScript, toneName } = useContext(AppContext);

    return (
        <Suspense fallback={<Spinner m={4} />}>
            <Flex alignItems="center">
                <WebtonePlayer toneScript={toneScript} />
                <Text ml={4} fontStyle="italic">
                    {toneName}
                </Text>
            </Flex>
        </Suspense>
    );
}
