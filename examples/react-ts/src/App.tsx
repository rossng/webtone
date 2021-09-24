import {
    Box,
    ChakraProvider,
    Flex,
    Grid,
    Heading,
    Spinner,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import { AppProvider } from "./AppProvider";
import { Ast } from "./Ast";
import { Libraries } from "./Library";
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
                    <Box my={4}>
                        <Player />
                    </Box>
                    <Suspense fallback={<Spinner m={4} />}>
                        <Grid
                            templateColumns="1fr 1fr"
                            templateRows="minmax(0, 1fr)"
                            flexDir="row"
                            gap={4}
                            border="1px solid black"
                            p={4}
                            h="30rem"
                            alignItems="stretch"
                        >
                            <Tabs h="100%" display="flex" flexDir="column">
                                <TabList>
                                    <Tab>Editor</Tab>
                                    <Tab>Library</Tab>
                                </TabList>

                                <TabPanels display="flex" flexDir="column" flex="1" minH={0}>
                                    <TabPanel minH={0}>
                                        <Code />
                                    </TabPanel>
                                    <TabPanel flex="1" display="flex" minH={0} pb={0}>
                                        <Libraries />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            <Ast />
                        </Grid>
                    </Suspense>
                </Flex>
            </AppProvider>
        </ChakraProvider>
    );
}
