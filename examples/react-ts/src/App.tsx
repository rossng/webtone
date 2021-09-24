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
import { Libraries } from "./Libraries";
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
                    <Box my={4} p={4} borderRadius="lg" borderWidth="1px" borderStyle="solid" borderColor="purple.500">
                        <Player />
                    </Box>
                    <Suspense fallback={<Spinner m={4} />}>
                        <Grid
                            templateColumns="50% 50%"
                            templateRows="minmax(0, 1fr)"
                            flexDir="row"
                            gap={4}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="purple.500"
                            p={4}
                            h="30rem"
                            alignItems="stretch"
                        >
                            <Tabs h="100%" display="flex" flexDir="column" colorScheme="purple">
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
