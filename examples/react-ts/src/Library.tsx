import { Box, Button, Flex, List, ListItem, Select, useId } from "@chakra-ui/react";
import { parseToneScript } from "@webtone/parser";
import { novelty, ToneLibrary, uk } from "@webtone/tone-library";
import { useContext, useState } from "react";
import { AppContext } from "./AppProvider";

export function Libraries(): JSX.Element {
    const id = useId();
    const allLibraries = {
        uk,
        novelty,
    };
    const [selectedLibrary, setSelectedLibrary] = useState<keyof typeof allLibraries>("uk");

    return (
        <Flex flexDir="column" w="100%" alignItems="stretch">
            <Select
                value={selectedLibrary}
                role="tablist"
                aria-orientation="vertical"
                onChange={(e) => {
                    if (e.target.value in allLibraries) {
                        setSelectedLibrary(e.target.value as any);
                    }
                }}
                pb={4}
            >
                {Object.entries(allLibraries).map(([key, value]) => (
                    <option
                        key={key}
                        value={key}
                        role="tab"
                        aria-selected={selectedLibrary === key}
                        id={`${id}-${key}`}
                        aria-controls={`${id}-${key}-tab`}
                        tabIndex={-1}
                    >
                        {value.title}
                    </option>
                ))}
            </Select>
            {Object.entries(allLibraries).map(([key, value]) => (
                <Box
                    role="tabpanel"
                    id={`${id}-${key}-tab`}
                    key={key}
                    tabIndex={0}
                    aria-labelledby={`${id}-${key}`}
                    hidden={selectedLibrary === key ? false : true}
                    flex={1}
                    minH={0}
                >
                    <Library library={value} />
                </Box>
            ))}
        </Flex>
    );
}

function Library({ library }: { library: ToneLibrary }): JSX.Element {
    const { setToneScript } = useContext(AppContext);

    return (
        <List overflowY="auto" h="100%" bgColor="gray.100" spacing={1} p={2}>
            {library.tones.map((definition, idx) => (
                <ListItem>
                    <Button
                        onClick={() => setToneScript(parseToneScript(definition.tonescript))}
                        key={idx}
                        size="sm"
                        colorScheme="purple"
                    >
                        {definition.name}
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}
