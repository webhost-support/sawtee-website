import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    AspectRatio,
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
    Select,
    Box,
    VStack,
    useToast,
    Textarea,
} from "@chakra-ui/react";
import FileUpload, { PreviewImage } from "@/Components/Backend/FileUpload";
import { FiFile } from "react-icons/fi";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";

export default function EditPublicationForm({ publication, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: publication.category_id,
        title: publication.title,
        subtitle: publication.subtitle || "",
        description: publication.description,
        image: publication.media[0] ? publication.media[0].original_url : null,
        file: publication.file ? publication.file.name : null,
    });
    const toast = useToast();
    const [filename, setFilename] = React.useState(data.file);
    const [image, setImage] = React.useState(data.image);

    const submit = (e) => {
        e.preventDefault();
        post(
            route("admin.publications.update", {
                _method: "patch",
                publication: publication.id,
            }),
            {
                preserveScroll: true,
                onSuccess: () =>
                    toast({
                        position: "top-right",
                        title: "Publication Edited.",
                        description: `Publication ${data.title} Successfully`,
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                    }),
                onError: (errors) => {
                    console.log(errors);
                },
            }
        );
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
                            <FormLabel htmlFor="title">Title/Issue</FormLabel>

                            <Input
                                type="text"
                                id="title"
                                name="title"
                                display="flex"
                                mt={1}
                                autoComplete="title"
                                value={data.title}
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
                                autoComplete="subtitle"
                                value={data.subtitle}
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
                                value={data.description || ""}
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
                        <FormControl
                            isInvalid={errors.category_id}
                            isRequired
                            as="fieldset"
                        >
                            <FormLabel as="legend" htmlFor="category_id">
                                Category
                            </FormLabel>

                            <Select
                                name="category_id"
                                placeholder="Select Category"
                                defaultValue={data.category_id}
                                onChange={(e) => {
                                    setData("category_id", e.target.value);
                                    const category = categories.find(
                                        (category) =>
                                            category.id ===
                                            Number(e.target.value)
                                    );
                                }}
                            >
                                {categories &&
                                    categories.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                            </Select>

                            {errors.category_id && (
                                <FormErrorMessage mt={2}>
                                    {errors.category_id}
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
                                <FileUpload accept="image/.png,.jpg,.jpeg,.webp">
                                    <Input
                                        type="file"
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        aria-hidden="true"
                                        accept="image/.png,.jpg,.jpeg,.webp"
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
                                        rounded={"none"}
                                        isReadOnly
                                        value={
                                            filename
                                                ? filename
                                                : "No file selected"
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
