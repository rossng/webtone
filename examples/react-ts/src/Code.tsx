import {
    Box,
    Button,
    chakra,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    Heading,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { parseToneScript } from "@webtone/parser";
import { uk } from "@webtone/tone-library";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "./AppProvider";

interface FormData {
    toneScript: string;
}

export function Code(): JSX.Element {
    const { setToneScript, toneScript } = useContext(AppContext);
    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields, isSubmitting, isValid, isValidating, isDirty, submitCount },
    } = useForm<FormData>({
        defaultValues: {
            toneScript: uk.tones?.[0]?.tonescript ?? "",
        },
    });
    const onSubmit = handleSubmit((data) => {
        const ast = parseToneScript(data.toneScript.trim());
        setToneScript(ast);
        toast({ status: "success", title: "Updated ToneScript." });
    });

    return (
        <Grid templateColumns="1fr 1fr" flexDir="row" gap={4} border="1px solid black" p={4}>
            <form onSubmit={onSubmit}>
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
                <Button
                    type="submit"
                    isLoading={isSubmitting || isValidating}
                    isDisabled={!isValid || (submitCount > 0 && !isDirty)}
                    mt={4}
                >
                    Update
                </Button>
            </form>
            <Box>
                <Heading as="h2" size="md" mb={2}>
                    AST
                </Heading>
                <chakra.pre p={4} bgColor="#eee" maxHeight="20rem" overflow="auto">
                    {toneScript ? JSON.stringify(toneScript, null, 2) : "<empty>"}
                </chakra.pre>
            </Box>
        </Grid>
    );
}
