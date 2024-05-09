import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const SearchModal = ({ children, ...rest }) => (
    <Modal
        isCentered
        size={{ base: "lg", md: "xl", lg: "3xl" }}
        scrollBehavior="inside"
        {...rest}
    >
        <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(8px) hue-rotate(90deg)"
        />

        <ModalContent
            my="0"
            padding="40px"
            bg={useColorModeValue("gray.100", "var(--color-darker)")}
        >
            <ModalHeader>Search</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalCloseButton size="lg" rounded="full" />
        </ModalContent>
    </Modal>
);

export default SearchModal;
