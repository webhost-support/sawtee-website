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
    const [data, setData] = React.useState(null);

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
                setData={setData}
            >
                <SearchForm setData={setData} />
                {data &&
                    data.map((post) => {
                        return (
                            <LinkBox
                                as={GlassBox}
                                role="group"
                                shadow="md"
                                rounded="xl"
                                p={6}
                                mb={4}
                            >
                                <Flex
                                    gap={6}
                                    justify={"center"}
                                    direction="column"
                                >
                                    <InertiaChakraLinkOverlay
                                        as={Link}
                                        // href={`/category/${category.slug}/${slug}`}
                                        _groupHover={{
                                            textDecoration: "underline",
                                            textUnderlineOffset: "3px",
                                        }}
                                    >
                                        <Heading
                                            fontSize={{ base: "lg", lg: "xl" }}
                                            as="h4"
                                        >
                                            {post.title}
                                        </Heading>
                                    </InertiaChakraLinkOverlay>

                                    <Text
                                        fontSize={{ base: "sm", lg: "md" }}
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                        display="-webkit-box"
                                        noOfLines="3"
                                        sx={{
                                            webkitLineClamp: "3",
                                            webkitBoxOrient: "vertical",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: post.excerpt,
                                        }}
                                    />
                                </Flex>
                            </LinkBox>
                        );
                    })}
            </SearchModal>
        </MainHeader>
    );
};

export default Header;
