import {
    VStack,
    Box,
    Link,
    Text,
    Heading,
    useColorModeValue,
    HStack,
    Divider,
} from "@chakra-ui/react";
import { formatDate } from "@/Utils/helpers";
import { GlassBox } from "@/Components/Frontend/index";
import { BsArrowUpRight } from "react-icons/bs";

const CovidArchive = ({ posts, headingColor, textColor }) => {
    if (!posts) return <div>No posts found</div>;
    return posts.map((post) => {
        return (
            <GlassBox my={5} mx={[0, 5]}>
                <VStack
                    p={4}
                    align="stretch"
                    justify="space-between"
                    spacing={4}
                >
                    <HStack justify="space-between">
                        {post.genre && (
                            <Box
                                bg={useColorModeValue(
                                    "var(--color-dark-acc)",
                                    "var(--color-dark)"
                                )}
                                w="max-content"
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
                            dangerouslySetInnerHTML={{
                                __html: formatDate(post.published_at),
                            }}
                        />
                    </HStack>
                    <Link href={post.link} className="primary-link">
                        <Heading as="h3" color={headingColor} fontSize={"md"}>
                            {post.title}
                        </Heading>
                    </Link>
                </VStack>
                <Box px={4}>
                    <Divider borderColor="var(--color-border)" />
                </Box>
                <HStack
                    borderColor={"var(--color-border)"}
                    p={4}
                    justify={"space-between"}
                >
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
                    <HStack
                        shouldWrapChildren="true"
                        align="center"
                        __css={{ columnGap: 3, flexWrap: "wrap" }}
                        justifyContent={"space-between"}
                        role="group"
                    >
                        <Link href={post.link} fontSize={"xs"}>
                            {`Read more `}
                        </Link>
                        <BsArrowUpRight />
                    </HStack>
                </HStack>
            </GlassBox>
        );
    });
};

export default CovidArchive;
