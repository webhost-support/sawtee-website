import {
    VStack,
    Grid,
    GridItem,
    Heading,
    Box,
    Container,
    Circle,
    Flex,
    Link,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import CategoryLayout from "../Layout/CategoryLayout";
import Section from "@/Components/Frontend/styles/section";
import SidebarWidget from "@/Components/Frontend/sidebarWidget";
import MainLayout from "../Layout/MainLayout";
import { FaFilePdf } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { GlassBox, TwitterTimeline } from "@/Components/Frontend";
import SubscriptionCard from "@/Components/Frontend/subscriptionCard";
import { Head } from "@inertiajs/react";
import React from "react";

const ResearchArchive = ({
    category,
    infocus,
    news,
    research,
    showSubscriptionBox = true,
    showTwitterTimeline = true,
}) => {
    // Get the data of the current list.
    const HeadingColor = useColorModeValue("gray.800", "whiteAlpha.800");
    const TextColor = useColorModeValue("gray.800", "whiteAlpha.800");
    const contentColor = useColorModeValue(
        "rgba(12, 17, 43, 0.8)",
        "whiteAlpha.800"
    );

    return (
        <MainLayout>
            <CategoryLayout
                showBackgroundPattern={false}
                image={`/assets/publications-1-resized.jpg`}
                category={category}
                headingColor={"white"}
            >
                <Head title={category.name} />

                <Section
                    pb="80px"
                    py={{ base: "24px", lg: "80px" }}
                    px={{ base: "16px", lg: "40px" }}
                    size={"huge"}
                    mx="auto"
                    pt="50px"
                    fontSize={["md", "lg", "xl", "huge"]}
                    color={contentColor}
                >
                    <Grid
                        templateColumns={{ base: "1fr", xl: "repeat(5, 1fr)" }}
                        gap={20}
                        pos={"relative"}
                        placeContent={"center"}
                    >
                        <GridItem colSpan={{ base: 1, xl: 3 }} px={4}>
                            <Container maxW="5xl" p={2}>
                                <VStack
                                    textAlign="start"
                                    align="start"
                                    mb={5}
                                    spacing={10}
                                >
                                    {Array.from(Object.entries(research)).map(
                                        (tagitem) => {
                                            return (
                                                <Box
                                                    zIndex={5}
                                                    w="full"
                                                    key={tagitem[0]}
                                                >
                                                    <Heading
                                                        fontSize="2xl"
                                                        fontWeight="bold"
                                                        my={5}
                                                        color={HeadingColor}
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
                                                        {tagitem[1].map(
                                                            (
                                                                researchItem,
                                                                idx
                                                            ) => (
                                                                <ReasearchItem
                                                                    key={
                                                                        researchItem.id
                                                                    }
                                                                    icon={
                                                                        FaFilePdf
                                                                    }
                                                                    skipTrail={
                                                                        idx !==
                                                                        tagitem[1]
                                                                            .length -
                                                                            1
                                                                            ? true
                                                                            : false
                                                                    }
                                                                    minH={
                                                                        idx !==
                                                                        tagitem[1]
                                                                            .length -
                                                                            1
                                                                            ? 20
                                                                            : "auto"
                                                                    }
                                                                >
                                                                    <Text
                                                                        color={
                                                                            TextColor
                                                                        }
                                                                        fontSize="md"
                                                                        _hover={{
                                                                            color: "linkColor",
                                                                        }}
                                                                    >
                                                                        <Link
                                                                            target="_blank"
                                                                            href={`/Research_Reports/${researchItem.file.name}`}
                                                                        >
                                                                            {
                                                                                researchItem.title
                                                                            }
                                                                        </Link>
                                                                    </Text>
                                                                </ReasearchItem>
                                                            )
                                                        )}
                                                    </GlassBox>
                                                </Box>
                                            );
                                        }
                                    )}
                                </VStack>
                            </Container>
                        </GridItem>

                        <GridItem
                            colSpan={{ base: 1, xl: 2 }}
                            as={VStack}
                            spacing={12}
                            className="sidebar"
                        >
                            {showSubscriptionBox && (
                                <GlassBox
                                    py="4"
                                    px="8"
                                    rounded="xl"
                                    maxW={"xl"}
                                    height="max-content"
                                >
                                    <SubscriptionCard />
                                </GlassBox>
                            )}
                            {showTwitterTimeline && (
                                <GlassBox
                                    rounded="xl"
                                    maxW={"xl"}
                                    height="max-content"
                                >
                                    <TwitterTimeline
                                        handle="sawteenp"
                                        width={"100%"}
                                        height="500px"
                                        maxH={"700px"}
                                        rounded="xl"
                                    />
                                </GlassBox>
                            )}
                            {news && (
                                <SidebarWidget
                                    array={news}
                                    title={"SAWTEE in Media"}
                                    link={"/category/sawtee-in-media"}
                                    maxW={"xl"}
                                />
                            )}
                            {infocus && (
                                <SidebarWidget
                                    array={infocus}
                                    title={"Infocus"}
                                    link={"/category/infocus"}
                                    maxW={"xl"}
                                />
                            )}
                        </GridItem>
                    </Grid>
                </Section>
            </CategoryLayout>
        </MainLayout>
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
