import { Alert, AlertIcon, AlertTitle, Box, chakra, Code, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "./AppProvider";

export function Ast(): JSX.Element {
    const { parseError, toneScript, toneName } = useContext(AppContext);

    return (
        <Flex flexDir="column" pr={4}>
            <Heading as="h2" size="md" mb={2}>
                AST: {toneName}
            </Heading>
            {parseError && (
                <Alert status="error">
                    <AlertIcon />
                    <Flex flexDir="column">
                        <AlertTitle mb={2}>Could not parse ToneScript.</AlertTitle>
                        <Code>{parseError}</Code>
                    </Flex>
                </Alert>
            )}
            {toneScript && (
                <Box flex={1} minH={0} bgColor="purple.50" borderRadius="lg" alignSelf="stretch" overflow="auto">
                    <chakra.pre p={4} minW={0} fontSize="xs" w="100%">
                        {JSON.stringify(toneScript, null, 2)}
                    </chakra.pre>
                </Box>
            )}
        </Flex>
    );
}
