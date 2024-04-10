import React from "react";
import { PageLayout } from "./Layout/PageLayout";
import OurWork from "./Pages/OurWork";
import About from "./Pages/About";
import DefaultPage from "./Pages/DefaultPage";
import MainLayout from "./Layout/MainLayout";
import Contact from "./Pages/Contact";
import WebsiteHead from "@/Components/Frontend/Head";
import MediaFellows from "./Pages/MediaFellows";

export default function Page({
    page,
    featured_image,
    srcSet,
    themes = null,
    sections,
}) {
    const { name, content, meta_description, meta_title, slug } = page;
    return (
        <>
            <WebsiteHead
                title={meta_title ? meta_title : name}
                description={meta_description}
                image={
                    featured_image
                        ? featured_image.original_url
                        : "/assets/logo-sawtee.webp"
                }
            />

            <MainLayout>
                {slug !== "reform-monitoring-platform" ? (
                    <PageLayout
                        featured_image={featured_image}
                        srcSet={srcSet}
                        title={name}
                        showBackgroundPattern={false}
                    >
                        <PageContent
                            slug={slug}
                            themes={themes}
                            sections={sections}
                            content={content}
                        />
                    </PageLayout>
                ) : (
                    <PageContent
                        slug={slug}
                        themes={themes}
                        sections={sections}
                        content={content}
                    />
                )}
            </MainLayout>
        </>
    );
}

const PageContent = ({ slug, themes, sections, content }) => {
    switch (slug) {
        case "our-work":
            return (
                <OurWork
                    themes={themes}
                    sections={sections}
                    content={content}
                />
            );

        case "about":
            return <About sections={sections} content={content} />;

        case "contact":
            return <Contact content={content} />;

        case "media-fellowship":
            return <MediaFellows content={content} />;

        default:
            return (
                <DefaultPage
                    sections={sections}
                    content={content}
                    size={slug === "reform-monitoring-platform" ? "full" : "md"}
                />
            );
    }
};
