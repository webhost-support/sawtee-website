import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    AspectRatio,
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Textarea,
    VStack,
    useToast,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Tooltip,
} from "@chakra-ui/react";
import FileUpload, { PreviewImage } from "@/Components/Backend/FileUpload";
import React from "react";
import { CloseIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { FiFile } from "react-icons/fi";
import ChakraDatePicker from "@/Components/Backend/ChakraDatePicker";

export default function CreateResearchForm() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        subtitle: "",
        description: "",
        year: "",
        link: "",
        image: null,
        file: null,
        meta_title: "",
        meta_description: "",
    });
    const toast = useToast();
    const [filename, setFilename] = React.useState(
        data.file ? data.file.name : ""
    );

    const [image, setImage] = React.useState(null);
    const [startDate, setStartDate] = React.useState(new Date());
    const submit = (e) => {
        e.preventDefault();
        post(route("admin.research.store"), {
            preserveScroll: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Research Created.",
                    description: `Research ${data.title} Successfully`,
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                }),
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <form onSubmit={submit}>
            <Grid
                templateColumns={{
                    base: "1fr",
                    xl: "repeat(6, minmax(100px, 1fr))",
                }}
                autoRows={"auto"}
                gap={8}
            >
                <GridItem colSpan={{ base: 1, xl: 4 }}>
                    <VStack spacing={8} position={"sticky"} top={"2rem"}>
                        <FormControl isInvalid={errors.title} isRequired>
                            <FormLabel htmlFor="title">Title</FormLabel>

                            <Input
                                type="text"
                                id="title"
                                name="title"
                                display="flex"
                                placeholder="enter research title"
                                mt={1}
                                autoComplete="title"
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />

                            {errors.title && (
                                <FormErrorMessage mt={2}>
                                    {errors.title}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={errors.subtitle}>
                            <FormLabel htmlFor="subtitle">Subtitle</FormLabel>

                            <Input
                                type="text"
                                id="subtitle"
                                name="subtitle"
                                display="flex"
                                mt={1}
                                placeholder="enter research subtitle"
                                autoComplete="subtitle"
                                onChange={(e) =>
                                    setData("subtitle", e.target.value)
                                }
                            />

                            {errors.title && (
                                <FormErrorMessage mt={2}>
                                    {errors.title}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mt={4} isInvalid={errors.description}>
                            <FormLabel htmlFor="description">
                                Description
                            </FormLabel>

                            <Textarea
                                name="description"
                                id="description"
                                rows={6}
                                resize={"vertical"}
                                placeholder="Describe your research here."
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />

                            {errors.description && (
                                <FormErrorMessage mt={2}>
                                    {errors.description}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </VStack>
                </GridItem>
                <GridItem colSpan={{ base: 1, xl: 2 }}>
                    <VStack spacing={8}>
                        <Accordion allowToggle w="full">
                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        _expanded={{
                                            bg: "gray.600",
                                            color: "white",
                                        }}
                                    >
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            fontWeight={"semibold"}
                                        >
                                            {"SEO Meta Tags "}
                                            <Tooltip
                                                label="Add title and description for SEO"
                                                fontSize="xs"
                                            >
                                                <QuestionOutlineIcon
                                                    boxSize={3}
                                                />
                                            </Tooltip>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <VStack gap="6" alignItems={"start"}>
                                        <FormControl
                                            mt="4"
                                            isInvalid={errors.meta_title}
                                        >
                                            <FormLabel htmlFor="meta_title">
                                                Meta Title
                                            </FormLabel>

                                            <Input
                                                id="meta_title"
                                                name="meta_title"
                                                placeholder="enter meta title"
                                                onChange={(e) =>
                                                    setData(
                                                        "meta_title",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <FormErrorMessage
                                                message={errors.meta_title}
                                                className="mt-2"
                                            />
                                        </FormControl>

                                        <FormControl
                                            mt="4"
                                            isInvalid={errors.meta_description}
                                        >
                                            <FormLabel htmlFor="meta_description">
                                                Meta Description
                                            </FormLabel>

                                            <Textarea
                                                id="meta_description"
                                                name="meta_description"
                                                placeholder="enter meta_description"
                                                rows={3}
                                                resize="vertical"
                                                onChange={(e) =>
                                                    setData(
                                                        "meta_description",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <FormErrorMessage
                                                message={
                                                    errors.meta_description
                                                }
                                                className="mt-2"
                                            />
                                        </FormControl>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <FormControl isInvalid={errors.year} as="fieldset">
                            <FormLabel as="legend" htmlFor="year">
                                Year
                            </FormLabel>

                            <ChakraDatePicker
                                name="year"
                                selected={startDate}
                                onChange={(date) => {
                                    setData("year", date.getFullYear());
                                    setStartDate(date);
                                }}
                                dateFormat="yyyy"
                                showYearPicker
                            />

                            {errors.year && (
                                <FormErrorMessage mt={2}>
                                    {errors.year}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mt={4} isInvalid={errors.image}>
                            <FormLabel htmlFor="image">
                                Featured Image
                            </FormLabel>

                            {image && (
                                <>
                                    <AspectRatio w={"64"} ratio={3 / 4}>
                                        <PreviewImage src={image} />
                                    </AspectRatio>
                                    <Button
                                        mt={4}
                                        size={"sm"}
                                        colorScheme="red"
                                        onClick={() => {
                                            setImage(null);
                                        }}
                                    >
                                        Remove/Change Image
                                    </Button>
                                </>
                            )}

                            {!image && (
                                <FileUpload>
                                    <Input
                                        type="file"
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        aria-hidden="true"
                                        accept="image/*"
                                        id="image"
                                        name="image"
                                        placeholder="Browse Image"
                                        size="md"
                                        onChange={(e) => {
                                            setData("image", e.target.files[0]);

                                            setImage(
                                                URL.createObjectURL(
                                                    e.target.files[0]
                                                )
                                            );
                                        }}
                                    />
                                </FileUpload>
                            )}
                            {errors.image && (
                                <FormErrorMessage mt={2}>
                                    {errors.image}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.file}>
                            <FormLabel htmlFor="file">File Upload</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children={<FiFile />} />
                                <Box position="relative">
                                    <Input
                                        size="md"
                                        isReadOnly
                                        placeholder={
                                            filename
                                                ? filename
                                                : "click to select file"
                                        }
                                    />
                                    <Input
                                        type="file"
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        aria-hidden="true"
                                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                                        id="file"
                                        name="file"
                                        size="md"
                                        onChange={(e) => {
                                            setFilename(e.target.files[0].name);
                                            setData("file", e.target.files[0]);
                                        }}
                                    />
                                </Box>
                                {filename && (
                                    <InputRightAddon
                                        children={
                                            <CloseIcon
                                                color={"red.500"}
                                                onClick={() => {
                                                    setFilename(null);
                                                }}
                                            />
                                        }
                                    />
                                )}
                            </InputGroup>
                            {errors.file && (
                                <FormErrorMessage mt={2}>
                                    {errors.file}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={errors.link}>
                            <FormLabel htmlFor="link">External Link</FormLabel>

                            <Input
                                type="text"
                                id="link"
                                name="link"
                                display="flex"
                                placeholder="enter research link"
                                mt={1}
                                autoComplete="link"
                                onChange={(e) =>
                                    setData("link", e.target.value)
                                }
                            />

                            {errors.link && (
                                <FormErrorMessage mt={2}>
                                    {errors.link}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <PrimaryButton
                            type="submit"
                            disabled={processing}
                            mt={4}
                            w="64"
                        >
                            Save
                        </PrimaryButton>
                    </VStack>
                </GridItem>
            </Grid>
        </form>
    );
}
