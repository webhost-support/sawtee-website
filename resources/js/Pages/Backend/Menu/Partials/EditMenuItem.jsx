import React from "react";
import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select,
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
    useColorModeValue,
} from "@chakra-ui/react";

export default function EditMenuItem({
    isOpen,
    onClose,
    item,
    setMenuItem,
    menuItems,
}) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        title: item.title,
        name: item.name,
        menu_id: item.menu_id,
        url: item.url,
        order: item.order,
        parent_id: item.parent_id || "",
    });
    const toast = useToast();
    console.log(item);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);

        patch(route("admin.editMenuItem.menu", item.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    position: "top-right",
                    title: "Menu Item Updated.",
                    description: "Menu Item Updated Successfully",
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                });
                setMenuItem(null);
                onClose();
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
            <ModalContent
                as="form"
                onSubmit={submit}
                bg={useColorModeValue("whiteAlpha.500", "blackAlpha.500")}
                backdropFilter={"blur(5px)"}
            >
                <ModalHeader>Edit Menu Item</ModalHeader>
                <ModalCloseButton
                    onClick={() => {
                        setMenuItem(null);
                    }}
                />
                <ModalBody>
                    <VStack>
                        <FormControl isRequired isInvalid={!!errors.title}>
                            <FormLabel htmlFor="title">Title</FormLabel>
                            <Input
                                name="title"
                                id="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.name}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                name="name"
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.name}>
                            <FormLabel htmlFor="url">URL</FormLabel>
                            <Input
                                name="url"
                                id="url"
                                value={data.url}
                                onChange={(e) => setData("url", e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="order">Order</FormLabel>
                            <Input
                                type="number"
                                name="order"
                                id="order"
                                value={data.order}
                                onChange={(e) =>
                                    setData("order", e.target.value)
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="parent_id">
                                Select parent menu item
                            </FormLabel>
                            <Select
                                name="parent_id"
                                id="parent_id"
                                placeholder="Select parent menu item"
                                value={data.parent_id}
                                onChange={(e) =>
                                    setData("parent_id", e.target.value)
                                }
                            >
                                {menuItems.map(
                                    (menuItem) =>
                                        menuItem.id != item.id && (
                                            <option
                                                key={menuItem.id}
                                                value={menuItem.id}
                                            >
                                                {menuItem.title}
                                            </option>
                                        )
                                )}
                            </Select>
                        </FormControl>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton
                        colorScheme="blue"
                        type="submit"
                        isLoading={processing}
                        mr={3}
                    >
                        Save
                    </PrimaryButton>
                    <Button
                        variant="ghost"
                        onClick={() => {
                            onClose;
                            setMenuItem(null);
                        }}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
