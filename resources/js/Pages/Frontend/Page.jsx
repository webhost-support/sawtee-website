import { Head } from "@inertiajs/react";
import React from "react";
import { PageLayout } from "./Layout/PageLayout";
import OurWork from "./Pages/OurWork";
import About from "./Pages/About";
import DefaultPage from "./Pages/DefaultPage";
import MainLayout from "./Layout/MainLayout";
import Contact from "./Pages/Contact";

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
            <Head>
                <title>{meta_title ? meta_title : name}</title>
                <meta http-equiv="imagetoolbar" content="no" />
                <meta
                    head-key="description"
                    name="description"
                    content={meta_description}
                />
                <meta
                    head-key="imagetoolbar"
                    http-equiv="imagetoolbar"
                    content="no"
                />
                <meta
                    head-key="og:title"
                    property="og:title"
                    content={"SAWTEE | " + name}
                />
                <meta head-key="og:type" property="og:type" content="page" />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content={meta_description}
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content={featured_image || "/assets/logo-sawtee.webp"}
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
