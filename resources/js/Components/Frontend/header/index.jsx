import MainHeader from "./header";
import Navigation from "./navigation";
import { SearchButton, SearchModal, SearchForm } from "../search";
import ThemeToggle from "./themeToggle";
import {
    Box,
    Flex,
    Heading,
    LinkBox,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GlassBox } from "..";
import InertiaChakraLinkOverlay from "../styles/inertia-chakra-link-overlay";
import { Link } from "@inertiajs/react";

const Header = ({ menu = null }) => {
    const searchModal = useDisclosure();

    return (
        <MainHeader menu={menu}>
            {menu && <Navigation justifyContent="center" menu={menu} />}

            <Box as="div" display={"flex"}>
                <ThemeToggle mr="4" />
                <SearchButton onClick={searchModal.onOpen} />
            </Box>
            <SearchModal
                isOpen={searchModal.isOpen}
                onClose={searchModal.onClose}
            >
                <SearchForm />
                
            </SearchModal>
        </MainHeader>
    );
};

export default Header;
