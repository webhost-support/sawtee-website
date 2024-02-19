import { GlassBox } from "@/Components/Frontend";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import { Text, HStack, Stack, Image, Box, Heading } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";

const NewsletterArchive = ({ posts }) => {
    return (
        <GlassBox as="section" role="group">
            <Heading as="h2" fontSize="xl" px={10} my={10}>
                Trade, Climate Change and Development Monitor
            </Heading>
            {posts.map(({ title, slug, media }) => {
                const featured_image = media.filter(
                    (m) => m.collection_name === "post-featured-image"
                )[0];
                const file = media.filter(
                    (m) => m.collection_name === "post-media"
                )[0];
                return (
                    <HStack
                        flex={1}
                        p={{ base: 3, sm: 6 }}
                        spacing={5}
                        rounded="lg"
                        alignItems="center"
                        justifyContent="space-between"
                        pos="relative"
                        w="full"
                    >
                        <Stack
                            spacing={2}
                            direction={"column"}
                            justifyContent={"space-between"}
                            w="full"
                        >
                            <Text
                                _hover={{
                                    color: "linkColor",
                                }}
                                fontSize={"md"}
                                fontWeight="bold"
                            >
                                <Link href={`/category/newsletters/${slug}`}>
                                    {title}
                                </Link>
                            </Text>
                        </Stack>
                        <Box textAlign={"center"}>
                            <Image
                                boxSize="150px"
                                objectFit="cover"
                                src={
                                    featured_image
                                        ? featured_image.original_url
                                        : null
                                }
                                alt={"Cover image"}
                                fallbackSrc="https://via.placeholder.com/120x150"
                            />
                            {file && (
                                <InertiaChakraLink
                                    as={Link}
                                    fontSize={"xs"}
                                    target="_blank"
                                    href={file.original_url}
                                >
                                    Open in PDF
                                </InertiaChakraLink>
                            )}
                        </Box>
                    </HStack>
                );
            })}
        </GlassBox>
    );
};

export default NewsletterArchive;
