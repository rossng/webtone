import { Button, FormControl, FormErrorMessage, FormLabel, Text, Textarea, VisuallyHidden } from "@chakra-ui/react";
import { parseToneScript } from "@webtone/parser";
import { uk } from "@webtone/tone-library";
import React, { useCallback, useContext, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { AppContext } from "./AppProvider";

interface FormData {
    toneScript: string;
}

export function Code(): JSX.Element {
    const { setToneScript, setParseError, setToneName } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields, isSubmitting, isValidating, isValid, submitCount, isDirty },
        control,
    } = useForm<FormData>({
        defaultValues: {
            toneScript: uk.tones?.[0]?.tonescript ?? "",
        },
    });
    const toneScriptText = useWatch({ name: "toneScript", control, defaultValue: undefined });

    const update = useCallback(
        (toneScriptText: string) => {
            try {
                const ast = parseToneScript(toneScriptText.trim());
                setToneScript(ast);
                setToneName("Custom tone");
                setParseError(null);
            } catch (err) {
                setToneScript(null);
                setParseError(err instanceof Error ? err.message : JSON.stringify(err));
            }
        },
        [setParseError, setToneName, setToneScript]
    );

    useEffect(() => {
        update(toneScriptText);
    }, [toneScriptText, update]);

    const onSubmit = handleSubmit((data) => {
        update(data.toneScript);
    });

    return (
        <form onSubmit={onSubmit}>
            <Text mb={2}>Write your own custom tone.</Text>
            <FormControl isInvalid={errors.toneScript && dirtyFields.toneScript}>
                <VisuallyHidden>
                    <FormLabel>ToneScript</FormLabel>
                </VisuallyHidden>
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
            <Button type="submit" isLoading={isSubmitting || isValidating} isDisabled={!isValid} mt={4}>
                Update
            </Button>
        </form>
    );
}
