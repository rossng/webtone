import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { AppProvider } from "./AppProvider";
import { Code } from "./Code";

export function App(): JSX.Element {
    return (
        <ChakraProvider>
            <AppProvider>
                <Flex p={4} flexDir="column">
                    <Heading as="h1" mb={4}>
                        Webtone React demo
                    </Heading>
                    <Code />
                </Flex>
            </AppProvider>
        </ChakraProvider>
    );
}
