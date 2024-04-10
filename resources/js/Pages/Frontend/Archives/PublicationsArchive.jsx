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
import { PageLayout } from "../Layout/PageLayout";

export default function PublicationsArchive({
    category,
    infocus,
    sawteeInMedia,
    publications,
    showSubscriptionBox = true,
    featured_image,
    srcSet,
}) {
    const contentColor = useColorModeValue(
        "rgba(12, 17, 43, 0.8)",
        "whiteAlpha.800"
    );
    const show = useBreakpointValue({
        base: 1,
        md: 2,
        lg: 3,
    });

    return (
        <MainLayout>
            <WebsiteHead
                title={
                    category.meta_title ? category.meta_title : category.name
                }
                description={category.meta_description}
                image={
                    featured_image
                        ? featured_image.original_url
                        : "/assets/logo-sawtee.webp"
                }
            />
            <PageLayout
                featured_image={featured_image}
                srcSet={srcSet}
                title={category.name}
                showBackgroundPattern={false}
            >
                <Section
                    pb="80px"
                    py={{ base: "24px", lg: "80px" }}
                    px={{ base: "16px", lg: "40px" }}
                    size={"full"}
                    mx="auto"
                    fontSize={["md", "lg", "xl", "huge"]}
                    color={contentColor}
                >
                    <Grid
                        templateColumns={{ base: "1fr", xl: "repeat(5, 1fr)" }}
                        gap={10}
                        pos={"relative"}
                        placeContent={"center"}
                    >
                        <GridItem colSpan={{ base: 1, xl: 3 }} px={4}>
                            {category.children && (
                                <PublicationSliders
                                    category={category}
                                    publications={publications}
                                    show={show}
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
                                />
                            )}
                            {infocus && (
                                <SidebarWidget
                                    array={infocus}
                                    title={"Infocus"}
                                    link={"/category/infocus"}
                                />
                            )}

                            {showSubscriptionBox && (
                                <GlassBox py="4" px="8" rounded="xl">
                                    <SubscriptionCard />
                                </GlassBox>
                            )}
                        </GridItem>
                    </Grid>
                </Section>
            </PageLayout>
        </MainLayout>
    );
}

const PublicationSliders = ({ category, publications, show = 3 }) => {
    return (
        <Stack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"40px"}
        >
            {category.children.map((item) => {
                return (
                    <Box key={item.name} spacing="4">
                        <MultiItemCarousel
                            slides={publications[item.slug]}
                            itemsToShow={show}
                            showTitle={true}
                            mt={16}
                        >
                            <Text
                                as="h3"
                                id={`#${item.name}`}
                                pos={"absolute"}
                                top={0}
                                zIndex={1020}
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
                        </MultiItemCarousel>
                    </Box>
                );
            })}
        </Stack>
    );
};
