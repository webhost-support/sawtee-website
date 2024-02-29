import { VStack, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import React from "react";
import CategoryLayout from "./Layout/CategoryLayout";
import Section from "@/Components/Frontend/styles/section";
import SidebarWidget from "@/Components/Frontend/sidebarWidget";
import MainLayout from "./Layout/MainLayout";
import DefaultArchive from "./Archives/DefaultArchive";
import SubscriptionCard from "@/Components/Frontend/subscriptionCard";
import NewsletterArchive from "./Archives/NewsletterArchive";
import EventsArchive from "./Archives/EventsArchive";
import { GlassBox } from "@/Components/Frontend";
import Pagination from "@/Components/Frontend/Pagination";
import BlogArchive from "./Archives/BlogArchive";
import WebsiteHead from "@/Components/Frontend/Head";
import ResearchArchive from "./Archives/ResearchArchive";
import TeamsArchive from "./Archives/TeamsArchive";
import CovidArchive from "./Archives/CovidArchive";

export default function Category({
    category,
    posts,
    infocus,
    sawteeInMedia,
    events,
    showSubscriptionBox = true,
    featured_image,
}) {
    const isEvent = category.slug === "featured-events";
    const isTeam = category.slug === "team-members";
    const isInFocus = category.slug === "infocus";
    const isMedia = category.slug === "sawtee-in-media";
    const isNewsletter = category.slug === "newsletters";
    const isBlog = category.slug === "blog";
    const isCovid = category.slug === "covid";
    const isResearch = category.slug === "research";
    const isDefault =
        !isEvent &&
        !isNewsletter &&
        !isBlog &&
        !isTeam &&
        !isResearch &&
        !isCovid;
    const HeadingColor = useColorModeValue(
        "var(--color-dark)",
        "var(--color-light)"
    );
    const TextColor = useColorModeValue(
        "var(--color-dark-acc)",
        "var(--color-light-acc)"
    );
    const contentColor = useColorModeValue(
        "rgba(12, 17, 43, 0.8)",
        "whiteAlpha.800"
    );

    return (
        <MainLayout>
            <WebsiteHead
                title={"SAWTEE | " + category.meta_title}
                description={category.meta_description}
                image={
                    featured_image
                        ? featured_image.original_url
                        : "/assets/logo-sawtee.webp"
                }
            />
            <CategoryLayout
                showBackgroundPattern={false}
                image={null}
                category={category}
            >
                <Head title={category.name} />

                <Section
                    pb="80px"
                    padding={{ base: "24px", lg: "40px" }}
                    w="full"
                    size={"huge"}
                    mx="auto"
                    pt="50px"
                    color={contentColor}
                >
                    <Grid
                        templateColumns={{
                            base: "1fr",
                            md: "1fr",
                            lg: "1fr 1fr",
                            xl: "var(--chakra-sizes-3xl) minmax(var(--chakra-sizes-md), var(--chakra-sizes-lg))",
                        }}
                        gap={16}
                        pos={"relative"}
                        placeContent={"center"}
                    >
                        <GridItem
                            as={VStack}
                            spacing={12}
                            mb="56px"
                            colSpan={{ base: 1, md: 2, lg: 1 }}
                        >
                            {isDefault && (
                                <DefaultArchive
                                    posts={posts.data}
                                    headingColor={HeadingColor}
                                    textColor={TextColor}
                                />
                            )}
                            {isCovid && (
                                <CovidArchive
                                    posts={posts.data}
                                    headingColor={HeadingColor}
                                    textColor={TextColor}
                                />
                            )}

                            {isEvent && (
                                <EventsArchive
                                    posts={posts.data}
                                    headingColor={HeadingColor}
                                    textColor={TextColor}
                                />
                            )}

                            {isTeam && (
                                <TeamsArchive
                                    posts={posts}
                                    headingColor={HeadingColor}
                                    textColor={TextColor}
                                />
                            )}

                            {isResearch && (
                                <ResearchArchive
                                    posts={posts.data}
                                    headingColor={HeadingColor}
                                    textColor={TextColor}
                                />
                            )}

                            {isBlog && (
                                <BlogArchive
                                    posts={posts.data}
                                    headingColor={HeadingColor}
                                    textColor={TextColor}
                                />
                            )}

                            {isNewsletter && (
                                <NewsletterArchive posts={posts.data} />
                            )}

                            <Pagination
                                links={posts.links}
                                currentPage={posts.current_page}
                                totalPages={posts.last_page}
                                nextPage={posts.next_page_url}
                                prevPage={posts.prev_page_url}
                                width="full"
                            />
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            as={VStack}
                            spacing={12}
                            className="sidebar"
                        >
                            {!isMedia && sawteeInMedia && (
                                <SidebarWidget
                                    array={sawteeInMedia}
                                    title={"Sawtee in Media"}
                                    link={"/category/sawtee-in-media"}
                                    maxW={"md"}
                                />
                            )}
                            {isInFocus && events && (
                                <SidebarWidget
                                    array={events}
                                    title={"Featured Events"}
                                    link={"/category/featured-events"}
                                    mt={12}
                                    maxW={"md"}
                                />
                            )}
                            {isMedia && events && (
                                <SidebarWidget
                                    array={events}
                                    title={"Featured Events"}
                                    link={"/category/featured-events"}
                                    maxW={"md"}
                                />
                            )}
                            {!isInFocus && infocus && (
                                <SidebarWidget
                                    array={infocus}
                                    link={"/category/infocus"}
                                    title={"InFocus"}
                                    maxW={"md"}
                                />
                            )}

                            {showSubscriptionBox && (
                                <GlassBox
                                    py="4"
                                    px="8"
                                    rounded="xl"
                                    maxW={"md"}
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
