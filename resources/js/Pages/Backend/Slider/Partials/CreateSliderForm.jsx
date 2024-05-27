import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    useToast,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
} from "@chakra-ui/react";
import React from "react";

export default function CreateSliderForm({ isOpen, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });
    const toast = useToast();

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.sliders.store"), {
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
        });
    };

    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={submit}>
                <ModalHeader>Add new slider</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl mt="4" isInvalid={errors.name}>
                        <FormLabel htmlFor="name">Name</FormLabel>

                        <Input
                            id="name"
                            name="name"
                            placeholder="enter name of slider"
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        <FormErrorMessage
                            message={errors.name}
                            className="mt-2"
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton type="submit" isLoading={processing} mr={3}>
                        Create
                    </PrimaryButton>
                    <Button variant="solid" colorScheme="red" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
