import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    Image,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    HStack,
    VStack,
    Button,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Alert,
    AlertIcon,
    useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect, useMemo } from "react";
import FileUpload, { PreviewImage } from "@/Components/Backend/FileUpload";
import { DataTable } from "@/Components/Backend/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";

export default function EditSliderForm({ slider, slides }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: slider.name,
    });
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [sliderSlides, setSliderSlides] = useState([]);
    useEffect(() => {
        setSliderSlides(slides);
    }, [slider]);

    const submit = (e) => {
        e.preventDefault();

        post(
            route("admin.sliders.store", {
                _method: "PATCH",
                slider: slider.id,
            }),
            {
                preserveScroll: true,
                onSuccess: () => {
                    toast({
                        position: "top-right",
                        title: "Slider Created.",
                        description: "Slider Created Successfully",
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                    });
                    onClose();
                },
                onError: (errors) => {
                    if (errors.title) {
                        reset("title");
                    }
                },
            }
        );
    };

    return (
        <>
            <CreateSlideForm
                isOpen={isOpen}
                onClose={onClose}
                slider={slider}
            />
            {slides.length <= 0 && (
                <Alert
                    mb="4"
                    status="warning"
                    p="4"
                    rounded="md"
                    variant={"left-accent"}
                >
                    <AlertIcon />
                    No slides added yet.
                </Alert>
            )}

            <form onSubmit={submit}>
                <FormControl mt="4" isInvalid={errors.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>

                    <Input
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <FormErrorMessage message={errors.name} className="mt-2" />
                </FormControl>

                <Button onClick={onOpen} mt={4}>
                    Add slide
                </Button>
                {sliderSlides.length > 0 && (
                    <Box mt={6}>
                        <Sliders sliderSlides={sliderSlides} slider={slider} />
                    </Box>
                )}

                <Box display="flex" gap="4" mt="4">
                    <PrimaryButton type="submit" disabled={processing}>
                        Save slider
                    </PrimaryButton>
                </Box>
            </form>
        </>
    );
}

function CreateSlideForm({ isOpen, onClose, slider }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        subtitle: "",
        slider_id: slider.id,
    });
    const toast = useToast();
    const [image, setImage] = useState(null);

    useEffect(() => {
        setImage(null);
    }, []);

    const addSlide = (e) => {
        e.preventDefault();

        post(route("admin.slides.store"), {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    position: "top-right",
                    title: "Slide Created.",
                    description: "Slide Created Successfully",
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                });
                setImage(null);
                onClose();
            },
            onError: (errors) => {
                if (errors.title) {
                    reset("title");
                }
            },
        });
    };

    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={addSlide}>
                <ModalHeader>Add slide</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack gap="6" alignItems={"start"}>
                        <FormControl mt="4" isInvalid={errors.title}>
                            <FormLabel htmlFor="title">Title</FormLabel>

                            <Input
                                id="title"
                                name="title"
                                placeholder="enter title"
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />

                            <FormErrorMessage
                                message={errors.title}
                                className="mt-2"
                            />
                        </FormControl>

                        <FormControl mt="4">
                            <FormLabel htmlFor="subtitle">Subtitle</FormLabel>

                            <Input
                                id="subtitle"
                                name="subtitle"
                                placeholder="enter subtitle"
                                onChange={(e) =>
                                    setData("subtitle", e.target.value)
                                }
                            />
                            <FormErrorMessage
                                message={errors.subtitle}
                                className="mt-2"
                            />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel htmlFor="image">Slide Image</FormLabel>

                            {image && (
                                <>
                                    <PreviewImage
                                        src={image}
                                        aspectRatio={16 / 9}
                                    />
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
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <PrimaryButton type="submit" isLoading={processing} mr={3}>
                        Create
                    </PrimaryButton>
                    <Button variant="ghost" colorScheme="red" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
function EditSlideForm({ isOpen, onClose, slide, slider }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: slide.title,
        subtitle: slide.subtitle,
        slider_id: slider.id,
        image: slide.media[0].preview_url,
    });
    const toast = useToast();

    useEffect(() => {
        setData("image", slide.media[0].preview_url);
    }, [slide]);

    const editSlide = (e) => {
        e.preventDefault();

        post(
            route("admin.slides.store", {
                _method: "PATCH",
                slide: slide.id,
                slider: slider.id,
            }),
            {
                preserveScroll: true,
                onSuccess: () => {
                    toast({
                        position: "top-right",
                        title: "Slide Updated.",
                        description: "Slide Updated Successfully",
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                    });
                    onClose();
                },
                onError: (errors) => {
                    if (errors.title) {
                        reset("title");
                    }
                },
            }
        );
    };

    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={editSlide}>
                <ModalHeader>Edit slide</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack gap="6" alignItems={"start"}>
                        <FormControl mt="4" isInvalid={errors.title}>
                            <FormLabel htmlFor="title">Title</FormLabel>

                            <Input
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />

                            <FormErrorMessage
                                message={errors.title}
                                className="mt-2"
                            />
                        </FormControl>

                        <FormControl mt="4">
                            <FormLabel htmlFor="subtitle">Subtitle</FormLabel>

                            <Input
                                id="subtitle"
                                name="subtitle"
                                value={data.subtitle}
                                onChange={(e) =>
                                    setData("subtitle", e.target.value)
                                }
                            />
                            <FormErrorMessage
                                message={errors.subtitle}
                                className="mt-2"
                            />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel htmlFor="image">Slide Image</FormLabel>

                            {data.image && (
                                <>
                                    <PreviewImage
                                        src={data.image}
                                        aspectRatio={16 / 9}
                                    />
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

                            {!data.image && (
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
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <PrimaryButton type="submit" isLoading={processing} mr={3}>
                        Save
                    </PrimaryButton>
                    <Button variant="ghost" colorScheme="red" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

function Sliders({ sliderSlides, slider }) {
    const toast = useToast();
    const columnHelper = createColumnHelper();
    const { processing, delete: destroy } = useForm();
    const [editSlide, setEditSlide] = useState(null);
    const handleEdit = (e, id) => {
        e.preventDefault();
        setEditSlide(sliderSlides.filter((slide) => slide.id === id)[0]);
        onOpen();
    };
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDelete = (e, id) => {
        e.preventDefault();
        destroy(route("admin.slides.destroy", id, slider.id), {
            preserveScroll: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Slider deleted.",
                    description: "Slider deleted Successfully",
                    status: "error",
                    duration: 6000,
                    isClosable: true,
                }),
            onError: () => console.log("Error while deleting"),
        });
    };

    const defaultColumns = useMemo(
        () => [
            columnHelper.accessor("id", {
                cell: (info) => info.getValue(),
                header: "ID",
            }),
            columnHelper.accessor("title", {
                cell: (info) => info.getValue(),
                header: "Title",
            }),
            columnHelper.accessor("subtitle", {
                cell: (info) => info.getValue(),
                header: "Subtitle",
            }),
            columnHelper.accessor("media", {
                cell: (info) => (
                    <Image
                        width={"100px"}
                        aspectRatio={16 / 9}
                        src={info.getValue()[0].preview_url}
                    />
                ),
                header: "Image",
            }),

            columnHelper.display({
                id: "Actions",
                cell: (data) => {
                    return (
                        <HStack spacing={4}>
                            <TableEditAction
                                onClick={(e) =>
                                    handleEdit(e, data.row.original.id)
                                }
                                isDisabled={processing}
                            />
                            <TableDeleteAction
                                onClick={(e) =>
                                    handleDelete(e, data.row.original.id)
                                }
                                isDisabled={processing}
                            />
                        </HStack>
                    );
                },
                header: "Actions",
            }),
        ],
        []
    );
    return (
        <>
            {editSlide && (
                <EditSlideForm
                    isOpen={isOpen}
                    onClose={onClose}
                    slider={slider}
                    slide={editSlide}
                    setEditSlide={setEditSlide}
                />
            )}
            <DataTable
                defaultColumns={defaultColumns}
                data={sliderSlides}
                pagination={false}
                showColumnFilters={false}
            />
        </>
    );
}
