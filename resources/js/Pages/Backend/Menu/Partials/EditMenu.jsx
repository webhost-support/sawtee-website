import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    VStack,
    useToast,
    Input,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";

export default function EditMenuForm({ isOpen, onClose, menu }) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        title: menu.title,
        location: menu.location,
    });
    const toast = useToast();

    const submit = (e) => {
        e.preventDefault();

        patch(route("admin.menus.update", menu), {
            preserveScroll: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Menu edited.",
                    description: "Menu edited Successfully",
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                }),
            onError: (errors) => {
                if (errors.title) {
                    reset("title");
                }
                if (errors.location) {
                    reset("location");
                }
            },
        });
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "xs", md: "md" }}
        >
            <ModalOverlay />
            <ModalContent as="form" onSubmit={submit}>
                <ModalHeader>Delete Menu</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack
                        as="form"
                        onSubmit={submit}
                        gap="6"
                        alignItems={"start"}
                    >
                        <FormControl mt="4" isInvalid={errors.title}>
                            <FormLabel htmlFor="title">Title</FormLabel>

                            <Input
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                            />

                            <FormErrorMessage
                                message={errors.title}
                                classtitle="mt-2"
                            />
                        </FormControl>

                        <FormControl mt="4" isInvalid={errors.location}>
                            <FormLabel htmlFor="location">location</FormLabel>

                            <Input
                                id="location"
                                name="location"
                                value={data.location}
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                                required
                            />

                            <FormErrorMessage
                                message={errors.location}
                                classlocation="mt-2"
                            />
                        </FormControl>

                        <PrimaryButton
                            type="submit"
                            isLoading={processing}
                            minW="64"
                        >
                            Save
                        </PrimaryButton>
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <PrimaryButton
                        colorScheme="blue"
                        type="submit"
                        isLoading={processing}
                        mr={3}
                    >
                        Delete
                    </PrimaryButton>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
