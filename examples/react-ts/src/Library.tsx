import { Button, List, ListItem, Tooltip } from "@chakra-ui/react";
import { parseToneScript } from "@webtone/parser";
import { ToneLibrary } from "@webtone/tone-library";
import React, { useContext } from "react";
import { AppContext } from "./AppProvider";

export function Library({ library }: { library: ToneLibrary }): JSX.Element {
    const { setToneScript, setToneName } = useContext(AppContext);

    return (
        <List overflowY="auto" h="100%" spacing={1} p={2}>
            {library.tones.map((definition, idx) => (
                <ListItem key={idx}>
                    <Tooltip hasArrow placement="right" label={definition.tonescript}>
                        <Button
                            onClick={() => {
                                setToneScript(parseToneScript(definition.tonescript));
                                setToneName(definition.name);
                            }}
                            size="sm"
                            colorScheme="purple"
                        >
                            {definition.name}
                        </Button>
                    </Tooltip>
                </ListItem>
            ))}
        </List>
    );
}
