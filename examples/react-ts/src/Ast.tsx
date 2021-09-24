import { Alert, AlertIcon, AlertTitle, chakra, Code, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppProvider";

export function Ast(): JSX.Element {
    const { parseError, toneScript } = useContext(AppContext);

    return (
        <Flex flexDir="column">
            <Heading as="h2" size="md" mb={2}>
                AST
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
                <chakra.pre p={4} bgColor="#eee" overflow="auto" flex={1} minH={0}>
                    {JSON.stringify(toneScript, null, 2)}
                </chakra.pre>
            )}
        </Flex>
    );
}
