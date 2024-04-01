import {
    VStack,
    Heading,
    Box,
    Container,
    Circle,
    Flex,
    Link,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import Section from "@/Components/Frontend/styles/section";
import { FaFilePdf } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { GlassBox } from "@/Components/Frontend";
import React from "react";

const ResearchArchive = ({ posts, headingColor, textColor }) => {
    // Get the data of the current list.
    if (!posts || posts.length <= 0)
        return <Text fontSize={"2xl"}>"No posts found"</Text>;

    const sortedPosts = Object.entries(posts).sort(([a], [b]) => b - a);

    return (
        <Section
            pb="80px"
            py={{ base: "24px", lg: "80px" }}
            px={{ base: "16px", lg: "40px" }}
            size={"huge"}
            mx="auto"
            pt="50px"
            fontSize={["md", "lg", "xl", "huge"]}
        >
            <Container maxW="5xl" p={2}>
                <VStack textAlign="start" align="start" mb={5} spacing={10}>
                    {sortedPosts.map((tagitem) => {
                        return (
                            <Box zIndex={5} w="full" key={tagitem[0]}>
                                <Heading
                                    fontSize="2xl"
                                    fontWeight="bold"
                                    my={5}
                                    color={headingColor}
                                >
                                    {tagitem[0]}
                                </Heading>
                                <GlassBox
                                    p={4}
                                    rounded="xl"
                                    w="100%"
                                    h="100%"
                                    textAlign="left"
                                    display={"flex"}
                                    boxShadow={"lg"}
                                    flexDirection={"column"}
                                    alignItems="start"
                                    cursor="pointer"
                                    _hover={{
                                        shadow: "md",
                                    }}
                                >
                                    {tagitem[1].map((researchItem, idx) => (
                                        <ReasearchItem
                                            key={researchItem.id}
                                            icon={FaFilePdf}
                                            skipTrail={
                                                idx !== tagitem[1].length - 1
                                                    ? true
                                                    : false
                                            }
                                            minH={
                                                idx !== tagitem[1].length - 1
                                                    ? 20
                                                    : "auto"
                                            }
                                        >
                                            <Text
                                                color={textColor}
                                                fontSize="md"
                                                _hover={{
                                                    color: "linkColor",
                                                }}
                                            >
                                                <Link
                                                    target="_blank"
                                                    href={
                                                        researchItem.file
                                                            ? `/Research_Reports/${researchItem.file.name}`
                                                            : researchItem.link
                                                    }
                                                >
                                                    {researchItem.title}
                                                </Link>
                                            </Text>
                                        </ReasearchItem>
                                    ))}
                                </GlassBox>
                            </Box>
                        );
                    })}
                </VStack>
            </Container>
        </Section>
    );
};

export default ResearchArchive;

const ReasearchItem = ({
    icon = FiCheckCircle,
    boxProps = {},
    skipTrail,
    children,
    ...props
}) => {
    const color = useColorModeValue("gray.700", "gray.200");
    return (
        <Flex {...props}>
            <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
                <Circle
                    size={12}
                    bg={useColorModeValue("gray.600", "gray.500")}
                    opacity={useColorModeValue(0.07, 0.15)}
                />
                <Box
                    as={icon}
                    size="1.25rem"
                    color={color}
                    pos="absolute"
                    left="0.875rem"
                    top="0.875rem"
                />
                {skipTrail ? <Box w="1px" flex={1} bg={color} my={1} /> : null}
            </Flex>
            <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
                {children}
            </Box>
        </Flex>
    );
};
