import MainHeader from "./header";
import Navigation from "./navigation";
import { SearchButton, SearchModal, SearchForm } from "../search";
import ThemeToggle from "./themeToggle";
import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";

const Header = ({ menu = null, mobileMenu, socialLinks }) => {
    const searchModal = useDisclosure();
    const [posts, setPosts] = React.useState(null);
    const [query, setQuery] = React.useState(null);
    return (
        <MainHeader
            menu={menu}
            mobileMenu={mobileMenu}
            socialLinks={socialLinks}
        >
            {menu && <Navigation justifyContent="center" menu={menu} />}

            <Box as="div" display={"flex"}>
                <ThemeToggle mr="4" />
                <SearchButton onClick={searchModal.onOpen} />
            </Box>
            <SearchModal
                isOpen={searchModal.isOpen}
                onClose={() => {
                    setPosts(null);
                    searchModal.onClose();
                }}
                posts={posts}
                query={query}
            >
                <SearchForm setPosts={setPosts} setQuery={setQuery} />
            </SearchModal>
        </MainHeader>
    );
};

export default Header;
