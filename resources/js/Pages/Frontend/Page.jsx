import React from "react";
import { PageLayout } from "./Layout/PageLayout";
import OurWork from "./Pages/OurWork";
import About from "./Pages/About";
import DefaultPage from "./Pages/DefaultPage";
import MainLayout from "./Layout/MainLayout";
import Contact from "./Pages/Contact";
import WebsiteHead from "@/Components/Frontend/Head";

export default function Page({
    page,
    featured_image,
    srcSet,
    themes = null,
    sections,
}) {
    const { name, content, meta_description, meta_title } = page;
    return (
        <>
            <WebsiteHead
                title={"SAWTEE | " + (meta_title ? meta_title : name)}
                description={meta_description}
                image={
                    featured_image
                        ? featured_image.original_url
                        : "/assets/logo-sawtee.webp"
                }
            />

            <MainLayout>
                <PageLayout
                    featured_image={featured_image}
                    srcSet={srcSet}
                    title={name}
                    showBackgroundPattern={false}
                >
                    <PageContent
                        slug={page.slug}
                        themes={themes}
                        sections={sections}
                        content={content}
                    />
                </PageLayout>
            </MainLayout>
        </>
    );
}

const PageContent = ({ slug, themes, sections, content }) => {
    if (slug === "our-work") {
        return (
            <OurWork themes={themes} sections={sections} content={content} />
        );
    } else if (slug === "about") {
        return <About sections={sections} content={content} />;
    } else if (slug === "contact") {
        return <Contact content={content} />;
    } else {
        return <DefaultPage sections={sections} content={content} />;
    }
};
