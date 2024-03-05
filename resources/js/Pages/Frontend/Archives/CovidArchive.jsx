import {
    VStack,
    Box,
    Link,
    Text,
    Heading,
    useColorModeValue,
    HStack,
    Divider,
    SimpleGrid,
} from "@chakra-ui/react";
import { formatDate } from "@/Utils/helpers";
import { GlassBox } from "@/Components/Frontend/index";

const CovidArchive = ({ posts, headingColor, textColor }) => {
    console.log(posts[0]);
    return (
        <SimpleGrid columns={2} gap={0}>
            {posts.map((post) => {
                return (
                    <VStack
                        as={GlassBox}
                        key={post.id}
                        borderColor={"var(--chakra-colors-gray-600)"}
                        role="group"
                        rounded="none"
                        p={6}
                        align="start"
                        justify="space-evenly"
                        spacing={6}
                        _hover={{
                            shadow: "dark-lg",
                            transform: "scale(1.02)",
                        }}
                    >
                        <HStack justify="space-between">
                            {post.genre && (
                                <Box
                                    bg={useColorModeValue(
                                        "var(--color-dark-acc)",
                                        "var(--color-dark)"
                                    )}
                                    display={"inline-block"}
                                    px={2}
                                    py={1}
                                    color="gray.200"
                                    rounded="md"
                                >
                                    <Text fontSize={"xs"} fontWeight="medium">
                                        {post.genre}
                                    </Text>
                                </Box>
                            )}

                            <Text
                                as="time"
                                fontSize={"xs"}
                                fontWeight="medium"
                                justifySelf={"flex-end"}
                                dangerouslySetInnerHTML={{
                                    __html: formatDate(post.published_at),
                                }}
                            />
                        </HStack>
                        <Link href={post.link} className="primary-link">
                            <Heading
                                as="h3"
                                color={headingColor}
                                fontSize={"lg"}
                            >
                                {post.title}
                            </Heading>
                        </Link>
                        <Divider borderColor="var(--color-border)" />

                        <HStack
                            shouldWrapChildren="true"
                            align="center"
                            __css={{ columnGap: 2, flexWrap: "wrap" }}
                        >
                            {post.author && (
                                <Text
                                    key={post.author}
                                    color={textColor}
                                    fontSize="sm"
                                >
                                    {post.author}
                                </Text>
                            )}
                        </HStack>
                    </VStack>
                );
            })}
        </SimpleGrid>
    );
};

export default CovidArchive;
