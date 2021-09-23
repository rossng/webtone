import { Box, ChakraProvider, Flex, Heading, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { AppProvider } from "./AppProvider";
import { Player } from "./Player";

const Code = React.lazy(() => import("./Code").then((m) => ({ default: m.Code })));

export function App(): JSX.Element {
    return (
        <ChakraProvider>
            <AppProvider>
                <Flex p={4} flexDir="column">
                    <Heading as="h1" mb={4}>
                        Webtone React demo
                    </Heading>
                    <Suspense fallback={<Spinner m={4} />}>
                        <Code />
                    </Suspense>
                    <Box my={4}>
                        <Player />
                    </Box>
                </Flex>
            </AppProvider>
        </ChakraProvider>
    );
}
