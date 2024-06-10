import { VStack, Grid, GridItem, Box } from "@chakra-ui/react";
import React from "react";
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
    const isInFocus = category.slug === "infocus";
    const isMedia = category.slug === "sawtee-in-media";
    const isNewsletter = category.slug === "newsletters";
    const isBlog = category.slug === "blog";
    const isCovid = category.slug === "covid";
    const isResearch = category.slug === "research";
    const isDefault = !isNewsletter && !isBlog && !isResearch && !isCovid;

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
                <Grid
                    py={{ base: "24px", lg: "80px" }}
                    px={{ base: "32px", lg: "40px" }}
                    mx="auto"
                    pt="50px"
                    templateColumns={{
                        base: "1fr",
                        md: "1fr",
                        lg: "1fr 1fr",
                        xl: "minmax(var(--chakra-sizes-xl), 1fr) minmax(var(--chakra-sizes-sm), var(--chakra-sizes-md))",
                    }}
                    gap={20}
                    rowGap={10}
                    pos={"relative"}
                >
                    <GridItem as="section" colSpan={1}>
                        <VStack spacing={12}>
                            {isDefault && (
                                <DefaultArchive
                                    posts={posts.data}
                                    showFallbackImage={isEvent}
                                />
                            )}
                            {isCovid && <CovidArchive posts={posts.data} />}

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
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={1} as="aside" className="sidebar">
                        <VStack spacing={12}>
                            {!isMedia && sawteeInMedia && (
                                <SidebarWidget
                                    array={sawteeInMedia}
                                    title={"Sawtee in Media"}
                                    link={"/category/sawtee-in-media"}
                                />
                            )}
                            {isInFocus && events && (
                                <SidebarWidget
                                    array={events}
                                    title={"Featured Events"}
                                    link={"/category/featured-events"}
                                    mt={12}
                                />
                            )}
                            {isMedia && events && (
                                <SidebarWidget
                                    array={events}
                                    title={"Featured Events"}
                                    link={"/category/featured-events"}
                                />
                            )}
                            {!isInFocus && infocus && (
                                <SidebarWidget
                                    array={infocus}
                                    link={"/category/in-focus"}
                                    title={"In Focus"}
                                />
                            )}

                            {showSubscriptionBox && (
                                <GlassBox py="4" px="4" rounded="xl">
                                    <SubscriptionCard />
                                </GlassBox>
                            )}
                        </VStack>
                    </GridItem>
                </Grid>
            </PageLayout>
        </MainLayout>
    );
}
