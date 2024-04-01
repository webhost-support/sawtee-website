import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import MainLayout from "./Layout/MainLayout";
import ProgramPost from "./Pages/ProgramPost";
import PostLayout from "./Layout/PostLayout";
import NewsletterPost from "./Pages/NewsletterPost";
import WebsiteHead from "@/Components/Frontend/Head";

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
            <WebsiteHead
                title={category.name + " | " + title}
                description={post.meta_description}
                image={
                    featured_image
                        ? featured_image.original_url
                        : "/assets/logo-sawtee.webp"
                }
            />

            <PostLayout
                post={post}
                isProgramPost={isProgramme}
                isNewsletter={isNewsletter}
            >
                {isProgramme && <ProgramPost post={post} />}
                {isNewsletter && <NewsletterPost post={post} />}

                {isDefault && (
                    <Box className="default_post_content" mt={6}>
                        <VStack align={"start"} spacing={4}>
                            <Box
                                mt={6}
                                dangerouslySetInnerHTML={{
                                    __html: content,
                                }}
                            />
                        </VStack>
                    </Box>
                )}
            </PostLayout>
        </MainLayout>
    );
}
