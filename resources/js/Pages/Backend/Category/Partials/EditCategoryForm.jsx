import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    Button,
    SimpleGrid,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select,
    VStack,
    useToast,
    Input,
    Textarea,
} from "@chakra-ui/react";
import React from "react";
import FileUpload, { PreviewImage } from "@/Components/Backend/FileUpload";

export default function EditCategoryForm({ category, categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: category.name,
        type: category.type,
        slug: "",
        parent_id: category.parent_id,
        image: null,
        meta_title: category.meta_title,
        meta_description: category.meta_description,
    });

    console.log(category.meta_title);

    const toast = useToast();
    const [image, setImage] = React.useState(
        category.media[0] ? category.media[0].preview_url : null
    );

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(
            route("admin.categories.update", {
                _method: "patch",
                category: category.id,
            }),
            {
                preserveScroll: true,
                onSuccess: () =>
                    toast({
                        position: "top-right",
                        title: "Category edited.",
                        description: "Category edited Successfully",
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

    return (
        <VStack as="form" onSubmit={submit} gap="6" alignItems="start">
            <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>

                <Input
                    id="name"
                    name="name"
                    value={data.name}
                    placeholder="enter category name"
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />

                <FormErrorMessage message={errors.name} className="mt-2" />
            </FormControl>
            <SimpleGrid columns={2} spacing={10} w="full">
                <FormControl>
                    <FormLabel htmlFor="type">Category Type</FormLabel>

                    <Select
                        name="type"
                        id="type"
                        placeholder="Select Type"
                        value={data.type}
                        onChange={(e) => setData("type", e.target.value)}
                    >
                        {["post", "publication", "research", "team"].map(
                            (item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            )
                        )}
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="parent_id">Parent</FormLabel>

                    <Select
                        name="parent_id"
                        id="parent_id"
                        placeholder="Select Parent"
                        value={data.parent_id}
                        onChange={(e) => {
                            setData("parent_id", e.target.value);
                        }}
                    >
                        {categories &&
                            categories.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                    </Select>
                </FormControl>
            </SimpleGrid>
            <FormControl>
                <FormLabel htmlFor="image">Featured Image</FormLabel>

                {image && (
                    <>
                        <Box w="sm">
                            <PreviewImage src={image} aspectRatio={16 / 9} />
                        </Box>
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
            <FormControl isInvalid={errors.meta_title}>
                <FormLabel htmlFor="meta_title">meta title</FormLabel>

                <Input
                    id="meta_title"
                    name="meta_title"
                    value={data.meta_title}
                    onChange={(e) => setData("meta_title", e.target.value)}
                />

                <FormErrorMessage
                    message={errors.meta_title}
                    className="mt-2"
                />
            </FormControl>

            <FormControl isInvalid={errors.meta_description}>
                <FormLabel htmlFor="meta_description">
                    meta_description
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

            <PrimaryButton type="submit" isLoading={processing} minW="64">
                Save
            </PrimaryButton>
        </VStack>
    );
}
