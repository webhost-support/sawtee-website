import { Box, LinkBox, Text, Heading, Stack, LinkOverlay } from "@chakra-ui/react";
import { ExploreButton, GlassBox } from "@/Components/Frontend/index";
import { formatDate } from "@/Utils/helpers";
import { PostImageWithOverlay } from "@/Components/Frontend/featured-post/components";
import { Link } from "@inertiajs/react";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import { motion } from "framer-motion";

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
            <ArchivePost
                post={post}
                featured_image={featured_image}
                headingColor={headingColor}
                textColor={textColor}
                showFallbackImage={showFallbackImage}
            />
        );
    });
};

export default DefaultArchive;

const ArchivePost = ({ post, featured_image, showFallbackImage, rest }) => {
    return (
        <GlassBox
            key={post.id}
            spacing={4}
            role="group"
            w="full"
            maxW="2xl"
            as={motion.article}
            whileHover={{ y: "-10px" }}
            _hover={{ boxShadow: "xl" }}
            {...rest}
        >
            <LinkBox>
                <LinkOverlay
                    href={`/category/${post.category.slug}/${post.slug}`}
                >
                    {showFallbackImage && (
                        <PostImageWithOverlay
                            height="250px"
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
                    <Box p={[4, 8]}>
                        <Box>
                            <Heading
                                as="h3"
                                fontSize={["md", "md", "xl"]}
                                fontWeight="semibold"
                                mb={4}
                                textDecoration="underline"
                                textUnderlineOffset="3px"
                                textDecorationThickness={"2px"}
                                _groupHover={{
                                    textDecoration: "none",
                                }}
                            >
                                <InertiaChakraLink
                                    as={Link}
                                    href={`/category/${post.category.slug}/${post.slug}`}
                                    _groupHover={{
                                        textDecoration: "underline",
                                        textDecorationThickness: "2px",
                                        textUnderlineOffset: "6px",
                                        transition: "all 200ms ease-in",
                                    }}
                                    className="primary-link"
                                >
                                    {post.title}
                                </InertiaChakraLink>
                            </Heading>

                            <Text fontSize={["xs", "md", "md"]} noOfLines={3}>
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
                                <Text
                                    as="time"
                                    fontSize={"sm"}
                                    dangerouslySetInnerHTML={{
                                        __html: formatDate(post.published_at),
                                    }}
                                />

                                <Link
                                    href={`/category/${post.category.slug}/${post.slug}`}
                                >
                                    <ExploreButton
                                        size="sm"
                                        text="Read more"
                                        aria-label={"Read More"}
                                        colorScheme={"gray"}
                                        w="full"
                                    />
                                </Link>
                            </Stack>
                        </Box>
                    </Box>
                </LinkOverlay>
            </LinkBox>
        </GlassBox>
    );
};
