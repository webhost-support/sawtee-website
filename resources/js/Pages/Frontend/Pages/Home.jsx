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
} from "@/Components/Frontend";
import { Box, Grid, GridItem, Text, useColorModeValue } from "@chakra-ui/react";
import CardsCarousel from "@/Components/Frontend/CardsCarousel";
import { splitPosts } from "@/Utils/helpers";
import { Newsletter } from "@/Components/Frontend/newsletter";

const Home = ({
    infocus,
    slides,
    events,
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

    const [featuredPublication, latestPublication] = splitPosts(publications);
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
                    gap={4}
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
                        maxH={{ base: "auto", md: "350px" }}
                    >
                        <Text
                            as="h3"
                            fontFamily="heading"
                            color={useColorModeValue(
                                "gray.700",
                                "whiteAlpha.800"
                            )}
                            mb="6"
                            textAlign="center"
                            fontWeight="bold"
                            fontSize={{ base: "lg" }}
                        >
                            {"Featured Publications"}
                        </Text>

                        <CardsCarousel slides={featuredPublication} />
                    </GridItem>
                </Grid>
            </Section>

            {feature && (
                <Section
                    className="reform-section"
                    // bg={useColorModeValue(
                    //     "blackAlpha.50",
                    //     "var(--color-darker)"
                    // )}
                    py={{ base: 12, md: 20 }}
                >
                    <Box maxW="5xl" mx="auto">
                        <ReformMonitorSection feature={feature} />
                    </Box>
                </Section>
            )}

            {infocus && (
                <Section className="infocus-section" py={{ base: 12, md: 20 }}>
                    <InfocusSection data={infocus} />
                </Section>
            )}
            <Section
                className="about-section"
                py={{ base: 12, md: 20 }}
                // bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
            >
                <AboutSection data={AboutSectionData} />
            </Section>

            {/* Add publication section here  */}
            <Section py={{ base: 12, md: 20 }} className="publications-section">
                <Box maxW={"5xl"} mx="auto">
                    <Title title={"Latest in Pubications"} />
                    <PublicationsSection publications={publications} />
                </Box>
            </Section>

            <Section
                // bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
                py={{ base: 12, md: 20 }}
                className="outreach-section"
            >
                <Box maxW={"5xl"} mx="auto">
                    <Title title={"Outreach"} />
                    <OutreachSection
                        sawteeInMedia={sawteeInMedia}
                        events={events}
                    />
                </Box>
            </Section>

            {/* {sawteeInMedia && (
                <Section
                    className="sawtee-in-media-section"
                    py={{ base: 12, md: 20 }}
                >
                    <Box maxW="6xl" mx="auto" px={6}>
                        <Title title={"Sawtee in Media"} />
                        <SawteeInMediaSection
                            articles={sawteeInMedia}
                            link={"/category/sawtee-in-media"}
                        />
                    </Box>
                </Section>
            )} */}
            {/* <InfoSection /> */}
            <Section
                className="section videos-section"
                // bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
                py={{ base: 12, md: 20 }}
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

const Section = ({ children, title = null, ...rest }) => {
    return (
        <Box
            as="section"
            mx="auto"
            pb={{ base: 5, md: 10 }}
            px={{ base: "24px", md: "80px" }}
            className="section"
            {...rest}
        >
            {title && <Title title={title} />}
            {children}
        </Box>
    );
};

export default Home;
