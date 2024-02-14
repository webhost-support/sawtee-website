import {
    Flex,
    Box,
    Link,
    Text,
    Heading,
    HStack,
    Stack,
    Button,
} from "@chakra-ui/react";
import PostCategories from "@/Components/Frontend/post/post-categories";
import { GlassBox } from "@/Components/Frontend/index";
import { formatDate } from "@/Utils/helpers";
import { PostImageWithOverlay } from "@/Components/Frontend/featured-post/components";
import { GoChevronRight } from "react-icons/go";

const DefaultArchive = ({ posts, headingColor, textColor }) => {
    return posts.map((post) => {
        const featured_image = post.media[0]
            ? post.media[0].original_url
            : null;
        return (
            <GlassBox
                spacing={4}
                as="article"
                role="group"
                key={post.id}
                overflow={"hidden"}
                w="full"
                maxW="xl"
            >
                <Box overflow={"hidden"}>
                    {featured_image && (
                        <Link
                            href={`/category/${post.category.slug}/${post.slug}`}
                        >
                            <PostImageWithOverlay
                                height="260px"
                                borderRadius="0.75rem 0.75rem 0 0"
                                overflow="hidden"
                                _groupHover={{
                                    transition: "transform 0.4s ease-in-out",
                                    transform: "scale(1.05)",
                                    borderRadius: "0.75rem 0.75rem 0 0",
                                    cusrsor: "pointer",
                                }}
                                src={featured_image}
                            />
                        </Link>
                    )}
                </Box>
                <Box p={[4, 8]}>
                    {post.category && (
                        <HStack spacing={2} mb={1}>
                            <Flex
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <PostCategories
                                    justify="flex-start"
                                    category={post.category}
                                />
                            </Flex>
                        </HStack>
                    )}
                    <Box textAlign="left">
                        <Link
                            href={`/category/${post.category.slug}/${post.slug}`}
                        >
                            <Heading
                                as="h3"
                                color={headingColor}
                                fontSize={"md"}
                                mb={4}
                            >
                                {post.title}
                            </Heading>
                        </Link>
                        <Text fontSize={"sm"} color={textColor} noOfLines={2}>
                            {post.excerpt}
                        </Text>
                    </Box>
                    <Box mt="4">
                        <Stack
                            justify="space-between"
                            direction={{ base: "column", sm: "row" }}
                            alignItems={"center"}
                        >
                            <Text
                                fontSize={"xs"}
                                color={textColor}
                                dangerouslySetInnerHTML={{
                                    __html: formatDate(post.created_at),
                                }}
                            />
                            <Button
                                size={"xs"}
                                colorScheme={"gray"}
                                aria-label={"Read More"}
                                fontWeight="normal"
                                variant="solid"
                                rounded="md"
                                rightIcon={<GoChevronRight />}
                            >
                                <Link
                                    href={`/category/${post.category.slug}/${post.slug}`}
                                >
                                    Read more
                                </Link>
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </GlassBox>
        );
    });
};

export default DefaultArchive;
