import {
    Grid,
    GridItem,
    Stack,
    Text,
    StackDivider,
    useBreakpointValue,
    useColorModeValue,
    VStack,
    Box,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import React from "react";
import CategoryLayout from "../Layout/CategoryLayout";
import Section from "@/Components/Frontend/styles/section";
import SidebarWidget from "@/Components/Frontend/sidebarWidget";
import MainLayout from "../Layout/MainLayout";
import MultiItemCarousel from "@/Components/Frontend/MultiItemCarousel";
import { GlassBox } from "@/Components/Frontend";
import SubscriptionCard from "@/Components/Frontend/subscriptionCard";
import WebsiteHead from "@/Components/Frontend/Head";

export default function PublicationsArchive({
    category,
    infocus,
    sawteeInMedia,
    publications,
    showSubscriptionBox = true,
}) {
    const contentColor = useColorModeValue(
        "rgba(12, 17, 43, 0.8)",
        "whiteAlpha.800"
    );
    const show = useBreakpointValue([1, 2, 3]);
    return (
        <MainLayout>
            <WebsiteHead
                title={"SAWTEE | " + category.meta_title}
                description={category.meta_description}
                image={
                    category.featured_image
                        ? category.featured_image.original_url
                        : "/assets/logo-sawtee.webp"
                }
            />
            <CategoryLayout
                showBackgroundPattern={false}
                image={`/assets/publications-1-resized.jpg`}
                category={category}
                headingColor={"white"}
            >
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
                            {category.children && (
                                <PublicationSliders
                                    category={category}
                                    publications={publications}
                                    show={show || 3}
                                />
                            )}
                        </GridItem>

                        <GridItem
                            colSpan={{ base: 1, xl: 2 }}
                            as={VStack}
                            spacing={12}
                            className="sidebar"
                        >
                            {sawteeInMedia && (
                                <SidebarWidget
                                    array={sawteeInMedia}
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
                        </GridItem>
                    </Grid>
                </Section>
            </CategoryLayout>
        </MainLayout>
    );
}

const PublicationSliders = ({ category, publications, show }) => {
    return (
        <Stack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"60px"}
        >
            {category.children.map((item) => {
                return (
                    <Stack key={item.name} spacing="4">
                        <Text
                            as="h3"
                            id={`#${item.name}`}
                            m="0 0 2rem 0"
                            fontSize={{ base: "xl", lg: "2xl" }}
                            fontFamily="heading"
                            fontWeight={"bold"}
                            color={"var(--color-text)"}
                        >
                            {
                                <Link
                                    title={`View All ${item.name}`}
                                    href={`/category/publications/${item.slug}`}
                                >
                                    {item.name}
                                </Link>
                            }
                        </Text>
                        <Box w="full">
                            <MultiItemCarousel
                                slides={publications[item.slug]}
                                itemsToShow={show}
                            />
                        </Box>
                    </Stack>
                );
            })}
        </Stack>
    );
};
