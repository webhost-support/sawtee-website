import React from "react";
import {
    LinkBox,
    Box,
    Flex,
    Heading,
    LinkOverlay,
    Text,
    Image,
    AspectRatio,
    HStack,
    useColorModeValue,
    Skeleton,
    SkeletonText,
} from "@chakra-ui/react";
import { formatDate } from "@/Utils/helpers";
import { Link } from "@inertiajs/react";
import InertiaChakraLink from "./styles/inertia-chakra-link";
import InertiaChakraLinkOverlay from "./styles/inertia-chakra-link-overlay";

function PostCard({
    post,
    showImage = "true",
    showDescription = "true",
    headingSize = "md",
    showTags = false,
    imageHeadgingGap = "20px",
    showDate = false,
    ...rest
}) {
    const color = useColorModeValue("var(--color-dark", "var(--color-light)");
    const featured_image =
        post.media.length > 0
            ? post.media.filter(
                (item) => item.collection_name === "post-featured-image"
            )[0]
            : null;
    const srcSet = featured_image
        ? featured_image.responsive_images.responsive.urls
        : [];


    return (
        <Box>
            <LinkBox as="article" {...rest} role="group">
                {showImage && (
                    <Box as="figure" mb={imageHeadgingGap}>
                        <AspectRatio maxW="full" ratio={3 / 2}>
                            <Image
                                width={"100%"}
                                height="auto"
                                fit={"cover"}
                                alt={post.title}
                                src={
                                    featured_image
                                        ? featured_image.original_url
                                        : "/assets/SM-placeholder-150x150.png"
                                }
                            // srcSet={srcSet ? srcSet : ""}
                            />
                        </AspectRatio>
                        <Box
                            as="span"
                            pos={"absolute"}
                            inset="0"
                            width="full"
                            _groupHover={{
                                borderTop: "5px solid",
                                borderColor: "primary.500",
                            }}
                        />
                    </Box>
                )}
                <Flex flexGrow="1" direction="column" gap={4}>
                    <Heading fontSize={headingSize} as="h3">
                        <InertiaChakraLinkOverlay
                            as={Link}
                            className="primary-link"
                            href={`/category/${post.category.slug}/${post.slug}`}
                            _groupHover={{
                                textDecoration: "underline",
                                textUnderlineOffset: "3px",
                            }}
                        >
                            {post.title}
                        </InertiaChakraLinkOverlay>
                    </Heading>

                    {showDescription && (
                        <Text
                            flex="1"
                            fontSize="sm"
                            textOverflow="ellipsis"
                            display="-webkit-box"
                            color={color}
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                    )}
                </Flex>
            </LinkBox>
            <Flex mt={3} gap={2} justify={"space-between"} flexWrap={"wrap"}>
                {showDate && <Box as="time" fontSize={"xs"}>
                    {formatDate(post.published_at)}
                </Box>}
                {showTags && post.tags && post.tags.length > 0 && (
                    <HStack flexWrap={"wrap"}>
                        {post.tags.map((tag) => {
                            return (
                                <InertiaChakraLink
                                    as={Link}
                                    key={tag.id}
                                    href={`/tag/${tag.slug}`}
                                    fontSize={"xs"}
                                    fontWeight={"semibold"}
                                    color="primary.500"
                                    textDecor={"underline"}
                                    textDecorationStyle={"dotted"}
                                    _hover={{
                                        textDecorationStyle: "solid",
                                    }}
                                >
                                    {tag.name}
                                </InertiaChakraLink>
                            );
                        })}
                    </HStack>
                )}
            </Flex>
        </Box>
    );
}

export default PostCard;
