import { FormControl, FormErrorMessage, FormLabel, Heading, Textarea, useToast } from "@chakra-ui/react";
import { parseToneScript } from "@webtone/parser";
import { uk } from "@webtone/tone-library";
import { useContext, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { AppContext } from "./AppProvider";

interface FormData {
    toneScript: string;
}

export function Code(): JSX.Element {
    const { setToneScript, setParseError } = useContext(AppContext);
    const toast = useToast();

    const {
        register,
        formState: { errors, dirtyFields },
        control,
    } = useForm<FormData>({
        defaultValues: {
            toneScript: uk.tones?.[0]?.tonescript ?? "",
        },
    });
    const toneScriptText = useWatch({ name: "toneScript", control, defaultValue: undefined });

    useEffect(() => {
        try {
            const ast = parseToneScript(toneScriptText.trim());
            setToneScript(ast);
            setParseError(null);
            toast({ status: "success", title: "Updated ToneScript." });
        } catch (err) {
            setToneScript(null);
            setParseError(err instanceof Error ? err.message : JSON.stringify(err));
        }
    }, [toneScriptText]);

    return (
        <form onSubmit={() => false}>
            <Heading as="h2" size="md" mb={2}>
                Write your ToneScript
            </Heading>
            <FormControl isInvalid={errors.toneScript && dirtyFields.toneScript}>
                <FormLabel>ToneScript</FormLabel>
                <Textarea
                    {...register("toneScript", {
                        required: true,
                        validate: (value) => {
                            try {
                                parseToneScript(value.trim());
                                return undefined;
                            } catch (err) {
                                return err instanceof Error ? err.message : "Could not parse ToneScript.";
                            }
                        },
                    })}
                />
                <FormErrorMessage>{errors.toneScript?.message}</FormErrorMessage>
            </FormControl>
        </form>
    );
}
