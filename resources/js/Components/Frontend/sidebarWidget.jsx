import { Box, Flex, Divider, Heading, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import { formatDate } from "@/Utils/helpers";
import { GlassBox } from "@/Components/Frontend/index";
import { Link } from "@inertiajs/react";
import ChakraLink from "./styles/inertia-chakra-link";

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
            rounded="xl"
            height="max-content"
            {...rest}
        >
            <ListHeading title={title} link={link} />

            <Box py="4" px="8">
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
                        return (
                            <>
                                <Stack spacing={1} py="2" key={post.id}>
                                    <Heading
                                        as="h4"
                                        className="title"
                                        fontSize={"sm"}
                                        fontWeight="semibold"
                                    >
                                        <ChakraLink
                                            as={Link}
                                            className="primary-link"
                                            href={`${link}/${post.slug}`}
                                        >
                                            {post.title}
                                        </ChakraLink>
                                    </Heading>
                                    <Box
                                        as="time"
                                        fontSize={"xs"}
                                        dateTime={new Date(
                                            post.publishDate
                                        ).toLocaleDateString()}
                                        dangerouslySetInnerHTML={{
                                            __html: formatDate(post.created_at),
                                        }}
                                    />
                                </Stack>
                                <Divider
                                    my="10px"
                                    display={
                                        index === array.length - 1
                                            ? "none"
                                            : "block"
                                    }
                                />
                            </>
                        );
                    })}
            </Box>
        </GlassBox>
    );
};

export default SidebarWidget;
