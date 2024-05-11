import { useBreakpointValue } from "@chakra-ui/react";
import MainLayout from "../Layout/MainLayout";
import { feature } from "@/Utils/data";

import WebsiteHead from "@/Components/Frontend/Head";
import {
    AboutSection,
    BlogSection,
    CarouselSection,
    PublicationSection,
    ReformMonitorSection,
    SawteeInMediaSection,
    SubscribeSection,
} from "@/Components/Frontend";

const Home = ({
    infocus,
    slides,
    events,
    publications,
    sawteeInMedia,
    newsletters,
}) => {
    const showPublication = useBreakpointValue({
        base: 1,
        md: 2,
        lg: 3,
        xl: 4,
    });
    const show = useBreakpointValue({
        base: 1,
        md: 2,
        lg: 3,
    });

    const AboutSectionData = [
        {
            id: "1",
            title: "Media Fellowship",
            image_src: "/assets/Media-Fellowship-banner.webp",
            link: "/media-fellows",
        },
        {
            id: "2",
            title: "SAWTEE's Response to Covid-19",
            image_src: "/assets/COVID-19-South-Asia-and-LDCs.webp",
            link: "/category/covid",
        },
    ];

    return (
        <MainLayout>
            <WebsiteHead
                title={"Home"}
                description="Explore South Asia's dynamic journey since the 1980s, navigating global integration and economic challenges."
                image={"/assets/logo-sawtee.webp"}
            />

            <CarouselSection slides={slides} infocus={infocus} />
            {feature && <ReformMonitorSection feature={feature} />}
            <AboutSection data={AboutSectionData} />
            <PublicationSection
                publications={publications}
                showPublication={showPublication}
                newsletters={newsletters}
            />

            {events && <BlogSection events={events} />}
            {sawteeInMedia && (
                <SawteeInMediaSection
                    articles={sawteeInMedia}
                    show={show}
                    link={"/category/sawtee-in-media"}
                />
            )}
            {/* <InfoSection /> */}
            <SubscribeSection />
        </MainLayout>
    );
};

export default Home;
