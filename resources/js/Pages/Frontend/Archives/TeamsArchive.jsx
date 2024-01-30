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
    infocus,
    news,
    teams,
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
                <Head title={"Team Members"} />

                <Section
                    pb="80px"
                    py={{ base: "24px", lg: "80px" }}
                    px={{ base: "16px", lg: "40px" }}
                    size={"full"}
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
                                    {teams.map((member) => (
                                        <TeamMember key={member.id} />
                                    ))}
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

const TeamMember = ({ ...props }) => {
    const color = useColorModeValue("gray.700", "gray.200");
    return <Box></Box>;
};
