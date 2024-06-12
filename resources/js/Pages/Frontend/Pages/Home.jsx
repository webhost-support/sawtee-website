import MainLayout from "../Layout/MainLayout";
import { feature } from "@/Utils/data";
import WebsiteHead from "@/Components/Frontend/Head";
import {
    AboutSection,
    CarouselSection,
    Title,
    OutreachSection,
    PublicationsSection,
    ReformMonitorSection,
    SawteeInMediaSection,
    VideosSection,
    InfocusSection,
    FeaturedPublications,
    ExploreButton,
} from "@/Components/Frontend";
import { Box, Grid, GridItem, Text, useColorModeValue } from "@chakra-ui/react";
import CardsCarousel from "@/Components/Frontend/CardsCarousel";
import { splitPosts } from "@/Utils/helpers";
import { Newsletter } from "@/Components/Frontend/newsletter";
import SimpleList from "@/Components/Frontend/SimpleList";

const Home = ({
    infocus,
    slides,
    events,
    featuredPublications,
    publications,
    sawteeInMedia,
    newsletters,
    webinars,
    slidesResponsiveImages,
}) => {
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
        // {
        //     id: "3",
        //     title: "Advancing LDC's Trade Interests",
        //     image_src: "/assets/advancing-ldc_upscaled.webp",
        //     link: "/advancing-ldcs’-interests-in-the-wto-strengthening-participation,-securing-priorities",
        // },
    ];

    return (
        <MainLayout>
            <WebsiteHead
                title={"Home"}
                description="Explore South Asia's dynamic journey since the 1980s, navigating global integration and economic challenges."
                image={"/assets/logo-sawtee.webp"}
            />
            <Section py="5" className="carousel-section">
                <Grid
                    templateColumns={{
                        base: "1fr",
                        lg: "repeat(6, 1fr)",
                    }}
                    id="carousel-section"
                    gap={8}
                    rowGap={20}
                >
                    <GridItem colSpan={{ base: 1, sm: 5, md: 4 }}>
                        <Box
                            maxW="5xl"
                            mx="auto"
                            overflow="hidden"
                            rounded={"2xl"}
                        >
                            <CarouselSection
                                slides={slides}
                                responsiveImages={slidesResponsiveImages}
                                carouselHeight={{ base: "auto", md: "450px" }}
                            />
                        </Box>
                    </GridItem>
                    <GridItem
                        colSpan={{ base: 1, sm: 1, md: 2 }}
                        alignSelf={"center"}
                    >
                        <FeaturedPublications
                            publications={featuredPublications}
                        />
                    </GridItem>
                </Grid>
            </Section>

            {feature && (
                <Section className="reform-section">
                    <Box maxW="5xl" mx="auto">
                        <ReformMonitorSection feature={feature} />
                    </Box>
                </Section>
            )}

            {infocus && (
                <Section className="infocus-section">
                    <Box maxW="5xl" mx="auto">
                        <Title title={"In Focus"} />
                        <InfocusSection data={infocus} />

                        <ExploreButton
                            size={["xs", "sm"]}
                            text="More In Focus"
                            px={10}
                            mt="4"
                            link={"/category/in-focus"}
                        />
                    </Box>
                </Section>
            )}
            <Section className="about-section">
                <AboutSection data={AboutSectionData} />
            </Section>

            {/* Add publication section here  */}
            <Section className="publications-section">
                <Box maxW={"5xl"} mx="auto">
                    <Title title={"Latest in Pubications"} />
                    <PublicationsSection publications={publications} />
                </Box>
            </Section>

            <Section className="outreach-section">
                <Box maxW={"5xl"} mx="auto">
                    <Title title={"Outreach"} />
                    <OutreachSection
                        sawteeInMedia={sawteeInMedia}
                        events={events}
                    />
                </Box>
            </Section>

            {/* <InfoSection /> */}
            <Section
                className="section videos-section"
                // bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
            >
                <Box maxW="5xl" mx="auto">
                    <Title title={"Webinar Series"} />
                    <VideosSection posts={webinars} />
                </Box>
            </Section>
            <Section
                py={{ base: "6", md: "12", lg: "16" }}
                px={{ base: "10", md: "16", lg: "20" }}
                className="subscribe-section"
            >
                <Newsletter data={newsletters} />
            </Section>
        </MainLayout>
    );
};

const Section = ({ children, title = null, bgDark, ...rest }) => {
    return (
        <Box
            as="section"
            mx="auto"
            py={{ base: 12, md: 20 }}
            px={{ base: "24px", md: "80px" }}
            bg={
                bgDark
                    ? useColorModeValue("blackAlpha.50", "var(--color-darker)")
                    : "unset"
            }
            className="section"
            {...rest}
        >
            {title && <Title title={title} />}
            {children}
        </Box>
    );
};

export default Home;
