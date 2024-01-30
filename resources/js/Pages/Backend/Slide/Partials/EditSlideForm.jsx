import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select,
    useToast,
    Input,
    Button,
} from "@chakra-ui/react";
import React from "react";
import FileUpload, { PreviewImage } from "@/Components/Backend/FileUpload";

export default function EditSlideForm({ slide, sliders }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: slide.title,
        subtitle: slide.subtitle,
        slider_id: slide.slider_id,
    });
    const toast = useToast();

    const [image, setImage] = React.useState(data.image);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);

        post(
            route("admin.slides.store", {
                _method: "PATCH",
                slide: slide.id,
            }),
            {
                preserveScroll: true,
                onSuccess: () =>
                    toast({
                        position: "top-right",
                        title: "Slide Created.",
                        description: "Slide Created Successfully",
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
            <FormControl isInvalid={errors.slider_id} isRequired as="fieldset">
                <FormLabel as="legend" htmlFor="slider_id">
                    For Slider
                </FormLabel>

                <Select
                    name="slider_id"
                    value={data.slider_id}
                    onChange={(e) => {
                        setData("slider_id", e.target.value);
                    }}
                >
                    {sliders &&
                        sliders.map((slider) => (
                            <option key={slider.id} value={slider.id}>
                                {slider.name}
                            </option>
                        ))}
                </Select>

                {errors.slider_id && (
                    <FormErrorMessage mt={2}>
                        {errors.slider_id}
                    </FormErrorMessage>
                )}
            </FormControl>
            <FormControl mt="4" isInvalid={errors.title}>
                <FormLabel htmlFor="title">Title</FormLabel>

                <Input
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />

                <FormErrorMessage message={errors.title} className="mt-2" />
            </FormControl>

            <FormControl mt="4">
                <FormLabel htmlFor="subtitle">Subtitle</FormLabel>

                <Input
                    id="subtitle"
                    name="subtitle"
                    value={data.subtitle}
                    onChange={(e) => setData("subtitle", e.target.value)}
                />
                <FormErrorMessage message={errors.subtitle} className="mt-2" />
            </FormControl>

            <FormControl mt={4} isRequired>
                <FormLabel htmlFor="image">Slide Image</FormLabel>

                {image && (
                    <>
                        <PreviewImage src={image} aspectRatio={16 / 9} />
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
