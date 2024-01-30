import {
    Box,
    Flex,
    HStack,
    Heading,
    Text,
    Show,
    LinkBox,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { PostImageWithOverlay } from "@/Components/Frontend/featured-post/components";
import PostCategories from "@/Components/Frontend/post/post-categories";
import { formatDate } from "@/Utils/helpers";
import { GlassBox } from "@/Components/Frontend/index";
import { Link } from "@inertiajs/react";
import InertiaChakraLinkOverlay from "./styles/inertia-chakra-link-overlay";

const PostPreviewCard = ({
    post,
    showImage,
    showCategoryTag = false,
    ...rest
}) => {
    const { title, slug, excerpt, media, category, created_at } = post;
    const color = useColorModeValue("var(--color-dark", "var(--color-light)");
    const featured_image = media
        ? media.filter(
              (item) => item.collection_name === "post-featured-image"
          )[0]
        : null;
    return (
        <LinkBox as="article" role="group" {...rest}>
            <GlassBox
                display="flex"
                flexDir="column"
                position="relative"
                shadow="md"
                justify="center"
                w="full"
                rounded="xl"
            >
                {showImage && featured_image && (
                    <InertiaChakraLinkOverlay
                        as={Link}
                        href={`/${category.slug}/${slug}`}
                    >
                        <PostImageWithOverlay
                            borderRadius={"0.5rem 0.5rem 0 0"}
                            role="group"
                            src={featured_image.original_url}
                        />
                    </InertiaChakraLinkOverlay>
                )}

                <Flex
                    p={6}
                    flexGrow="1"
                    gap={4}
                    justify={"center"}
                    direction="column"
                >
                    <HStack
                        flexWrap={"wrap"}
                        justifyContent="space-between"
                        alignItems={"center"}
                    >
                        {showCategoryTag && (
                            <PostCategories
                                justify="flex-start"
                                category={category}
                                mt="0px"
                                color={color}
                            />
                        )}

                        <Box as="time" fontSize={"xs"} color={color}>
                            {formatDate(created_at)}
                        </Box>
                    </HStack>

                    <InertiaChakraLinkOverlay
                        as={Link}
                        href={`/category/${category.slug}/${slug}`}
                        _groupHover={{
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                        }}
                    >
                        <Heading fontSize="sm" as="h4">
                            {title}
                        </Heading>
                    </InertiaChakraLinkOverlay>

                    <Text
                        flex="1"
                        fontSize="sm"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        display="-webkit-box"
                        lineHeight="1.5"
                        noOfLines="3"
                        color={color}
                        sx={{
                            webkitLineClamp: "3",
                            webkitBoxOrient: "vertical",
                        }}
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                    />
                </Flex>
            </GlassBox>
        </LinkBox>
    );
};

export default PostPreviewCard;
