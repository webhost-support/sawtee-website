import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    useToast,
    Input,
    useColorModeValue,
    Button,
    AspectRatio,
    SimpleGrid,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import FileUpload, { PreviewImage } from "@/Components/Backend/FileUpload";
import ContentEditor from "@/Components/Backend/ContentEditor";

export default function EditPageForm({ page }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: page.name,
        slug: page.slug,
        content: page.content,
        image: null,
        meta_title: page.meta_title,
        meta_description: page.meta_description,
    });

    const toast = useToast();
    const [slug, setSlug] = React.useState(page.slug);
    const [image, setImage] = React.useState(
        page.media[0] ? page.media[0].preview_url : null
    );
    const submit = (e) => {
        e.preventDefault();

        post(
            route("admin.pages.update", {
                _method: "patch",
                page: page.id,
            }),
            {
                preserveScroll: true,
                onSuccess: () =>
                    toast({
                        position: "top-right",
                        title: "Page Edited.",
                        description: "Page Edited Successfully",
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                    }),
                onError: (errors) => {
                    if (errors.name) {
                        reset("name");
                    }
                },
            }
        );
    };

    // Set Slug if title value changes
    React.useEffect(() => {
        if (data.name) {
            setSlug(data.name.toLowerCase().replace(/\s+/g, "-"));
            setData("slug", data.name.toLowerCase().replace(/\s+/g, "-"));
        }
    }, [data.name]);

    return (
        <form onSubmit={submit}>
            <SimpleGrid columns={2} spacing={4}>
                <VStack gap="6" alignItems="start">
                    <FormControl mt="4" isInvalid={errors.name} isRequired>
                        <FormLabel htmlFor="name">Name</FormLabel>

                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        <FormErrorMessage
                            message={errors.name}
                            className="mt-2"
                        />
                    </FormControl>

                    <FormControl mt="4" isInvalid={errors.name}>
                        <FormLabel htmlFor="slug">Slug</FormLabel>

                        <Input
                            type="text"
                            id="slug"
                            isReadOnly
                            name="slug"
                            color={useColorModeValue("blue.600", "blue.300")}
                            value={slug}
                            display="flex"
                            mt={1}
                        />
                    </FormControl>
                </VStack>
                <VStack gap="6" alignItems="start">
                    <FormControl mt="4" isInvalid={errors.meta_title}>
                        <FormLabel htmlFor="meta_title">Meta Title</FormLabel>

                        <Input
                            id="meta_title"
                            name="meta_title"
                            value={data.meta_title}
                            onChange={(e) =>
                                setData("meta_title", e.target.value)
                            }
                        />

                        <FormErrorMessage
                            message={errors.meta_title}
                            className="mt-2"
                        />
                    </FormControl>

                    <FormControl mt="4" isInvalid={errors.meta_description}>
                        <FormLabel htmlFor="meta_description">
                            Meta Description
                        </FormLabel>

                        <Textarea
                            id="meta_description"
                            name="meta_description"
                            value={data.meta_description}
                            rows={3}
                            resize="vertical"
                            onChange={(e) =>
                                setData("meta_description", e.target.value)
                            }
                        />

                        <FormErrorMessage
                            message={errors.meta_description}
                            className="mt-2"
                        />
                    </FormControl>
                </VStack>
            </SimpleGrid>

            <FormControl mt={4} isInvalid={errors.content}>
                <FormLabel htmlFor="content">Content</FormLabel>

                <ContentEditor
                    name="content"
                    id="content"
                    initialValue={data.content}
                    onChange={(evt, editor) =>
                        setData("content", editor.getContent())
                    }
                />

                {errors.content && (
                    <FormErrorMessage mt={2}>{errors.content}</FormErrorMessage>
                )}
            </FormControl>
            <FormControl mt={4} isInvalid={errors.image}>
                <FormLabel htmlFor="image">Featured Image</FormLabel>

                {image && (
                    <>
                        <AspectRatio w="96" ratio={16 / 9}>
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
                    <FormErrorMessage mt={2}>{errors.image}</FormErrorMessage>
                )}
            </FormControl>

            <Box display="flex" gap="4" mt="4">
                <PrimaryButton type="submit" isLoading={processing}>
                    Save
                </PrimaryButton>
            </Box>
        </form>
    );
}
