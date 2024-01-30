import PrimaryButton from "@/Components/Backend/PrimaryButton";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Radio,
    Stack,
    Select,
    VStack,
    Box,
    useToast,
    AspectRatio,
    Button,
} from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";
import ContentEditor from "@/Components/Backend/ContentEditor";
import React from "react";
import FileUpload, { PreviewImage } from "@/Components/Backend/FileUpload";

export default function EditSectionForm({ sections, section, pages }) {
    const { data, setData, post, processing, errors } = useForm({
        title: section.title,
        description: section.description,
        type: section.type,
        link: section.link,
        parent_id: section.parent_id,
        page_id: section.page_id,
    });

    const toast = useToast();
    const sectionTypes = ["default", "tabs", "accordian", "members"];
    const [image, setImage] = React.useState(
        section.media[0] ? section.media[0].original_url : null
    );

    const submit = (e) => {
        e.preventDefault();
        post(
            route("admin.sections.update", {
                _method: "patch",
                section: section.id,
            }),
            {
                preserveScroll: true,
                onSuccess: () =>
                    toast({
                        position: "top-right",
                        title: "Section edited.",
                        description: "Section edited Successfully",
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                    }),
                onError: (errors) => {
                    if (errors.title) {
                        reset("title");
                    }
                },
            }
        );
    };

    return (
        <form onSubmit={submit}>
            <VStack spacing={8}>
                <FormControl isInvalid={errors.title} isRequired>
                    <FormLabel htmlFor="title">Section Title</FormLabel>

                    <Input
                        type="text"
                        id="title"
                        name="title"
                        display="flex"
                        value={data.title}
                        mt={1}
                        autoComplete="title"
                        onChange={(e) => setData("title", e.target.value)}
                    />

                    {errors.title && (
                        <FormErrorMessage mt={2}>
                            {errors.title}
                        </FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.link}>
                    <FormLabel htmlFor="link">Link</FormLabel>

                    <Input
                        type="text"
                        id="link"
                        name="link"
                        display="flex"
                        mt={1}
                        value={data.link}
                        autoComplete="link"
                        onChange={(e) => setData("link", e.target.value)}
                    />

                    {errors.link && (
                        <FormErrorMessage mt={2}>
                            {errors.link}
                        </FormErrorMessage>
                    )}
                </FormControl>

                <FormControl
                    mt={4}
                    isInvalid={errors.type}
                    isRequired
                    as="fieldset"
                >
                    <FormLabel as="legend" htmlFor="type">
                        Section Type
                    </FormLabel>

                    <Stack direction="row" spacing={8}>
                        {sectionTypes.map((item) => {
                            return (
                                <Radio
                                    key={item}
                                    name="type"
                                    isChecked={data.type === item}
                                    value={item}
                                    onChange={(e) => {
                                        setData("type", e.target.value);
                                    }}
                                >
                                    {item}
                                </Radio>
                            );
                        })}
                    </Stack>

                    {errors.type && (
                        <FormErrorMessage mt={2}>
                            {errors.type}
                        </FormErrorMessage>
                    )}
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel htmlFor="image">Image</FormLabel>

                    {image && (
                        <>
                            <AspectRatio w={64} ratio={2 / 3}>
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
                                size="md"
                                onChange={(e) => {
                                    setData("image", e.target.files[0]);
                                    setImage(
                                        URL.createObjectURL(e.target.files[0])
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

                <FormControl isRequired as="fieldset">
                    <FormLabel as="legend" htmlFor="page_id">
                        For Page
                    </FormLabel>

                    <Select
                        name="page_id"
                        id="page_id"
                        placeholder="Select Page"
                        value={data.page_id}
                        onChange={(e) => {
                            setData("page_id", e.target.value);
                        }}
                    >
                        {pages &&
                            pages.length > 0 &&
                            pages.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                    </Select>
                </FormControl>

                <FormControl mt={4} isInvalid={errors.description}>
                    <FormLabel htmlFor="description">Description</FormLabel>

                    <ContentEditor
                        name="description"
                        id="description"
                        initialValue={data.description}
                        onChange={(evt, editor) => {
                            setData("description", editor.getContent());
                        }}
                    />

                    {errors.description && (
                        <FormErrorMessage mt={2}>
                            {errors.description}
                        </FormErrorMessage>
                    )}
                </FormControl>

                {data.type !== "default" && (
                    <FormControl as="fieldset">
                        <FormLabel as="legend" htmlFor="parent_id">
                            Parent
                        </FormLabel>

                        <Select
                            name="parent_id"
                            id="parent_id"
                            placeholder="Select Parent"
                            value={data.parent_id}
                            onChange={(e) => {
                                setData("parent_id", e.target.value);
                            }}
                        >
                            {sections &&
                                sections.length > 0 &&
                                sections.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.title}
                                    </option>
                                ))}
                        </Select>
                    </FormControl>
                )}
                <Box display="flex" gap="4" mt="4">
                    <PrimaryButton type="submit" isLoading={processing}>
                        Save
                    </PrimaryButton>
                </Box>
            </VStack>
        </form>
    );
}
