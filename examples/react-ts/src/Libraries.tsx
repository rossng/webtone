import { Box, Flex, Select, Text, useId } from "@chakra-ui/react";
import { countries, miscellaneous, novelty } from "@webtone/tone-library";
import React, { useState } from "react";
import { Library } from "./Library";

export function Libraries(): JSX.Element {
    const id = useId();
    const allLibraries = {
        novelty,
        miscellaneous,
        ...countries,
    };
    const [selectedLibrary, setSelectedLibrary] = useState<keyof typeof allLibraries>("unitedKingdom");

    return (
        <Flex flexDir="column" w="100%" alignItems="stretch">
            <Text mb={2}>Choose a tone from the tone library.</Text>

            <Select
                value={selectedLibrary}
                role="tablist"
                aria-orientation="vertical"
                onChange={(e) => {
                    if (e.target.value in allLibraries) {
                        setSelectedLibrary(e.target.value as any);
                    }
                }}
                pb={2}
            >
                {Object.entries(allLibraries)
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .map(([key, value]) => (
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
                    px={2}
                    py={0}
                    boxShadow="md"
                    bgColor="white"
                >
                    <Library library={value} />
                </Box>
            ))}
        </Flex>
    );
}
