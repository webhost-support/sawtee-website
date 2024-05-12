import { GlassBox, ListItemVariant } from "@/Components/Frontend";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import { formatDate } from "@/Utils/helpers";
import {
    Text,
    HStack,
    Box,
    Heading,
    chakra,
    Container,
    VStack,
    Flex,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import React from "react";
// Here we have used react-icons package for the icons
import { FaRegNewspaper } from "react-icons/fa";

const NewsletterArchive = ({ posts }) => {
    if (!posts || posts.length <= 0) return "No posts found";

    return (
        <Container as="section" role="group" maxWidth="4xl">
            <Heading
                as="h2"
                mb={"12"}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                lineHeight={1}
                textAlign="center"
            >
                <Text
                    as={"span"}
                    display={"block"}
                    position={"relative"}
                    bgGradient="linear(to-br, #228be6, #15aabf)"
                    bgClip="text"
                >
                    Trade, Climate Change and Development Monitor
                </Text>
                <Text as={"span"} fontSize={"lg"}>
                    Monthly E-Newsletter of South Asia Watch on Trade, Economics
                    and Environment
                </Text>
            </Heading>
            {posts.map((post) => {
                return (
                    <Flex
                        as={motion.article}
                        initial={"initial"}
                        whileInView={"whileInView"}
                        variants={ListItemVariant}
                        transitionDuration={"400ms"}
                        key={post.id}
                        mb="20px"
                    >
                        <LineWithDot />
                        <Card {...post} />
                    </Flex>
                );
            })}
        </Container>
    );
};

export default NewsletterArchive;

const Card = ({ title, category, excerpt, published_at, media }) => {
    const file = media.filter((m) => m.collection_name === "post-files")[0];
    return (
        <HStack
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue("gray.50", "var(--color-darker)")}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            w="full"
            _before={{
                content: `""`,
                w: "0",
                h: "0",
                borderColor: `transparent ${useColorModeValue(
                    "var(--chakra-colors-gray-50)",
                    "var(--color-darker)"
                )} transparent`,
                borderStyle: "solid",
                borderWidth: "15px 15px 15px 0",
                position: "absolute",
                left: "-15px",
                display: "block",
            }}
        >
            <Icon as={FaRegNewspaper} w={12} h={12} color="primary.400" />
            <Box>
                {category && (
                    <HStack spacing={2} mb={1}>
                        <Text fontSize="sm">{category.name}</Text>
                    </HStack>
                )}
                <VStack spacing={2} mb={3} textAlign="left">
                    <Heading
                        as={"h3"}
                        _hover={{ color: "primary.400" }}
                        fontSize="2xl"
                        lineHeight={1.2}
                        fontWeight="bold"
                        w="100%"
                    >
                        <InertiaChakraLink href={file ? file.original_url : ""}>
                            {title}
                        </InertiaChakraLink>
                    </Heading>

                    <Text fontSize="md" noOfLines={2}>
                        {excerpt}
                    </Text>
                </VStack>
                <Text fontSize="sm">{formatDate(published_at)}</Text>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex pos="relative" alignItems="center" mr="40px">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 20px)"
                border="1px solid"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor={useColorModeValue(
                        "gray.50",
                        "var(--color-darker)"
                    )}
                    borderRadius="100px"
                    border="3px solid var(--chakra-colors-primary-400)"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};
