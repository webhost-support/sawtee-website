import { Box, LinkBox, Text, Heading, Stack, LinkOverlay } from "@chakra-ui/react";
import { ExploreButton, GlassBox } from "@/Components/Frontend/index";
import { formatDate } from "@/Utils/helpers";
import { PostImageWithOverlay } from "@/Components/Frontend/featured-post/components";
import { Link } from "@inertiajs/react";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import { motion } from "framer-motion";
import React from "react";

const DefaultArchive = ({
    posts,
    headingColor,
    textColor,
    showFallbackImage,
}) => {
    if (!posts || posts.length <= 0) return "No posts found";
    return posts.map((post) => {
        const featured_image = post.media.filter(
            (media) => media.collection_name === "post-featured-image"
        )[0];

        return (
            <React.Fragment key={post.id}>
                <ArchivePost
                    post={post}
                    featured_image={featured_image}
                    headingColor={headingColor}
                    textColor={textColor}
                    showFallbackImage={showFallbackImage}
                />
            </React.Fragment>
        );
    });
};

export default DefaultArchive;

const ArchivePost = ({ post, featured_image, showFallbackImage, rest }) => {
    return (
        <GlassBox
            role="group"
            maxW={{ base: "100%", md: "lg", lg: "xl", xl: "2xl" }}
            as={"article"}
            _hover={{ boxShadow: "xl" }}
            {...rest}
        >
            <LinkBox>
                {showFallbackImage && (
                    <PostImageWithOverlay
                        height="240px"
                        borderRadius="var(--chakra-radii-md) var(--chakra-radii-md) 0 0"
                        overflow="hidden"
                        _groupHover={{
                            transition: "transform 0.4s ease-in-out",
                            borderRadius:
                                "var(--chakra-radii-md) var(--chakra-radii-md) 0 0",
                            cusrsor: "pointer",
                        }}
                        src={featured_image && featured_image.original_url}
                        srcSet={
                            featured_image
                                ? ""
                                : `/assets/SM-placeholder.png,
                                        /assets/SM-placeholder-1024x512.png
                                        /assets/SM-placeholder-300x150.png,
                                        /assets/SM-placeholder-150x150.png,
                                            `
                        }
                    />
                )}
                <Box p={[2, 4]}>
                    <Box>
                        <LinkOverlay
                            href={`/category/${post.category.slug}/${post.slug}`}
                        >
                            <Heading
                                as="h3"
                                fontSize={["sm", "sm", "sm", "md"]}
                                fontWeight="semibold"
                            >
                                {post.title}
                            </Heading>
                        </LinkOverlay>
                        <Text fontSize={"xs"} mt={2} noOfLines={3}>
                            {post.excerpt}
                        </Text>
                    </Box>

                    <Box mt="4">
                        <Stack
                            justify="space-between"
                            direction={"row"}
                            flexWrap={"wrap"}
                            alignItems={"center"}
                        >
                            <Text as="time" fontSize={"xs"}>
                                {formatDate(post.published_at)}
                            </Text>

                            <Link
                                href={`/category/${post.category.slug}/${post.slug}`}
                            >
                                <ExploreButton
                                    size="xs"
                                    text="Read more"
                                    aria-label={"Read More"}
                                    colorScheme={"gray"}
                                    w="full"
                                />
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </LinkBox>
        </GlassBox>
    );
};
