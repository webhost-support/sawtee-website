import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import React from "react";
import MainLayout from "./Layout/MainLayout";
import ProgramPost from "./Pages/ProgramPost";
import PostLayout from "./Layout/PostLayout";
import NewsletterPost from "./Pages/NewsletterPost";

export default function Post({ post }) {
    const { category, title, content } = post;
    const featured_image = post.media.filter(
        (m) => m.collection_name === "post-featured-image"
    )[0];
    const isProgramme = category.parent
        ? category.parent.slug
        : category.slug === "programmes";

    const isNewsletter = category.slug === "newsletters";
    const isDefault = !isNewsletter && !isProgramme;
    return (
        <MainLayout>
            <Head>
                <title>{category.name + " | " + title}</title>
                <meta http-equiv="imagetoolbar" content="no" />
                <meta
                    head-key="description"
                    name="description"
                    content={post.meta_description}
                />
                <meta
                    head-key="imagetoolbar"
                    http-equiv="imagetoolbar"
                    content="no"
                />
                <meta
                    head-key="og:title"
                    property="og:title"
                    content={"SAWTEE | " + category.name + " | " + title}
                />
                <meta
                    head-key="og:type"
                    property="og:type"
                    content="post page"
                />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content={post.meta_description}
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content={
                        featured_image
                            ? featured_image.original_url
                            : "/assets/logo-sawtee.webp"
                    }
                />
                <meta head-key="og:url" property="og:url" content="/" />
                <meta
                    head-key="og:site_name"
                    property="og:site_name"
                    content="SOUTH ASIA WATCH ON TRADE, ECONOMICS AND ENVIRONMENT"
                />
                <meta
                    head-key="twitter:card"
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Head>

            <PostLayout post={post} isProgramPost={false}>
                {isProgramme && <ProgramPost post={post} />}
                {isNewsletter && <NewsletterPost post={post} />}

                {isDefault && (
                    <Box mt={6}>
                        <VStack align={"start"} spacing={4}>
                            return (
                            <VStack>
                                <Box
                                    mt={6}
                                    dangerouslySetInnerHTML={{
                                        __html: content,
                                    }}
                                />
                            </VStack>
                            );
                        </VStack>
                    </Box>
                )}
            </PostLayout>
        </MainLayout>
    );
}
