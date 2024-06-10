import {
    Box,
    Flex,
    Divider,
    Heading,
    Skeleton,
    Stack,
    List,
    ListItem,
    useColorModeValue,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { formatDate, slugify } from "@/Utils/helpers";
import { ExploreButton, GlassBox } from "@/Components/Frontend/index";
import { Link } from "@inertiajs/react";
import ChakraLink from "./styles/inertia-chakra-link";
import SimpleList from "./SimpleList";

const ListHeading = ({ title, link }) => {
    return (
        <Box
            bg={"var(--color-dark-acc)"}
            borderRadius={"0.5rem 0.5rem 0 0"}
            px={6}
            py={3}
        >
            <Flex
                justify={"space-between"}
                align="center"
                wrap={"wrap"}
                p="3"
                color={"whiteAlpha.900"}
            >
                <Heading as="h3" fontSize={{ base: "md", md: "lg" }}>
                    {title}
                </Heading>
                <ChakraLink
                    as={Link}
                    href={link}
                    fontSize="xs"
                    textDecor={"underline"}
                    textUnderlineOffset={"2px"}
                    _hover={{
                        textDecor: "underline",
                    }}
                    fontWeight="medium"
                >
                    explore
                </ChakraLink>
            </Flex>
        </Box>
    );
};

const SidebarWidget = ({ array, title, link, ...rest }) => {
    return (
        <GlassBox
            className="sidebar_widget"
            height="max-content"
            shadow="none"
            border="none"
            position="relative"
            {...rest}
        >
            {/* <ListHeading title={title} link={link} /> */}

            <SimpleList heading={title} py="4" px="8" spacing={4}>
                {array.length <= 0 && (
                    <Box display={"flex"} flexDir={"column"} gap={2}>
                        <Skeleton w="full" height="30px" />
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Skeleton w="80px" height="15px" />
                            <Skeleton w="80px" height="15px" />
                        </Box>
                    </Box>
                )}
                {array.length > 0 &&
                    array.map((post, index) => {
                        console.log(post);
                        return (
                            <ListItem key={post.id} mb="1rem">
                                <Box>
                                    <ChakraLink
                                        textDecor="underline"
                                        textUnderlineOffset="3px"
                                        href={`${link}/${post.slug}`}
                                    >
                                        <Text
                                            fontSize={"0.875rem"}
                                            lineHeight={"short"}
                                        >
                                            {post.title}
                                        </Text>
                                    </ChakraLink>
                                    <Text
                                        color={useColorModeValue(
                                            "gray.600",
                                            "gray.300"
                                        )}
                                        fontSize={".75rem"}
                                        mt={2}
                                    >
                                        {formatDate(post.published_at)}
                                    </Text>
                                </Box>
                            </ListItem>
                        );
                    })}
                <ExploreButton
                    size={["xs", "sm"]}
                    text={`More ${title}`}
                    variant="link"
                    _hover={{ textDecor: "none" }}
                    link={link}
                />
            </SimpleList>
        </GlassBox>
    );
};

export default SidebarWidget;
