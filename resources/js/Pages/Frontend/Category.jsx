import { VStack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Section from "@/Components/Frontend/styles/section";
import SidebarWidget from "@/Components/Frontend/sidebarWidget";
import MainLayout from "./Layout/MainLayout";
import DefaultArchive from "./Archives/DefaultArchive";
import SubscriptionCard from "@/Components/Frontend/subscriptionCard";
import NewsletterArchive from "./Archives/NewsletterArchive";
import { GlassBox } from "@/Components/Frontend";
import Pagination from "@/Components/Frontend/Pagination";
import BlogArchive from "./Archives/BlogArchive";
import WebsiteHead from "@/Components/Frontend/Head";
import ResearchArchive from "./Archives/ResearchArchive";
import TeamsArchive from "./Archives/TeamsArchive";
import CovidArchive from "./Archives/CovidArchive";
import { PageLayout } from "./Layout/PageLayout";

export default function Category({
    category,
    posts,
    infocus,
    sawteeInMedia,
    events,
    showSubscriptionBox = true,
    featured_image,
    srcSet,
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
        !isNewsletter && !isBlog && !isTeam && !isResearch && !isCovid;

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
            ></WebsiteHead>
            <PageLayout
                featured_image={featured_image}
                srcSet={srcSet}
                title={category.name}
                showBackgroundPattern={false}
            >
                <Section
                    pb="80px"
                    py={{ base: "24px", lg: "80px" }}
                    px={{ base: "16px", lg: "80px" }}
                    size="full"
                    mx="auto"
                    pt="50px"
                >
                    <Grid
                        templateColumns={{
                            base: "1fr",
                            md: "1fr",
                            lg: "1fr 1fr",
                            xl: "var(--chakra-sizes-3xl) minmax(var(--chakra-sizes-lg), var(--chakra-sizes-xl))",
                        }}
                        gap={10}
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
                                    showFallbackImage={isEvent}
                                />
                            )}
                            {isCovid && <CovidArchive posts={posts.data} />}

                            {isTeam && <TeamsArchive posts={posts} />}

                            {isResearch && <ResearchArchive posts={posts} />}

                            {isBlog && <BlogArchive posts={posts.data} />}

                            {isNewsletter && (
                                <NewsletterArchive posts={posts.data} />
                            )}

                            {!isResearch && (
                                <Pagination
                                    links={posts.links}
                                    currentPage={posts.current_page}
                                    totalPages={posts.last_page}
                                    nextPage={posts.next_page_url}
                                    prevPage={posts.prev_page_url}
                                    width="full"
                                />
                            )}
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
                                    maxW={"xl"}
                                />
                            )}
                            {isInFocus && events && (
                                <SidebarWidget
                                    array={events}
                                    title={"Featured Events"}
                                    link={"/category/featured-events"}
                                    mt={12}
                                    maxW={"xl"}
                                />
                            )}
                            {isMedia && events && (
                                <SidebarWidget
                                    array={events}
                                    title={"Featured Events"}
                                    link={"/category/featured-events"}
                                    maxW={"xl"}
                                />
                            )}
                            {!isInFocus && infocus && (
                                <SidebarWidget
                                    array={infocus}
                                    link={"/category/infocus"}
                                    title={"InFocus"}
                                    maxW={"xl"}
                                />
                            )}

                            {showSubscriptionBox && (
                                <GlassBox
                                    py="4"
                                    px="4"
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
            </PageLayout>
        </MainLayout>
    );
}
