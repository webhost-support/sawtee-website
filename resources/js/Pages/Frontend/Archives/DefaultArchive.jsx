import { Box, LinkBox, Text, Heading, Stack } from "@chakra-ui/react";
import { ExploreButton, GlassBox } from "@/Components/Frontend/index";
import { formatDate } from "@/Utils/helpers";
import { PostImageWithOverlay } from "@/Components/Frontend/featured-post/components";
import { Link } from "@inertiajs/react";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";

const DefaultArchive = ({ posts, headingColor, textColor }) => {
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
            />
        );
    });
};

export default DefaultArchive;

const ArchivePost = ({ post, featured_image, headingColor, textColor }) => {
    return (
        <GlassBox
            key={post.id}
            as="article"
            spacing={4}
            role="group"
            shadow="xl"
            w="2xl"
            maxW="full"
        >
            <LinkBox>
                <Box>
                    <InertiaChakraLinkOverlay
                        as={Link}
                        href={`/category/${post.category.slug}/${post.slug}`}
                    >
                        {featured_image && (
                            <PostImageWithOverlay
                                height="200px"
                                borderRadius="0.75rem 0.75rem 0 0"
                                overflow="hidden"
                                _groupHover={{
                                    transition: "transform 0.4s ease-in-out",
                                    borderRadius: "0.75rem 0.75rem 0 0",
                                    cusrsor: "pointer",
                                }}
                                src={
                                    featured_image &&
                                    featured_image.original_url
                                }
                            />
                        )}
                    </InertiaChakraLinkOverlay>
                </Box>
                <Box p={[4, 8]}>
                    <Box>
                        <Heading
                            as="h3"
                            color={headingColor}
                            fontSize={"md"}
                            fontWeight="semibold"
                            mb={4}
                        >
                            <InertiaChakraLinkOverlay
                                as={Link}
                                href={`/category/${post.category.slug}/${post.slug}`}
                                className="primary-link"
                            >
                                {post.title}
                            </InertiaChakraLinkOverlay>
                        </Heading>

                        <Text fontSize={"sm"} color={textColor} noOfLines={3}>
                            {post.excerpt}
                        </Text>
                    </Box>
                    <Box mt="4">
                        <Stack
                            justify="space-between"
                            direction={{
                                base: "column",
                                sm: "row",
                            }}
                            alignItems={"center"}
                        >
                            <Text
                                as="time"
                                fontSize={"xs"}
                                color={textColor}
                                dangerouslySetInnerHTML={{
                                    __html: formatDate(post.published_at),
                                }}
                            />

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
