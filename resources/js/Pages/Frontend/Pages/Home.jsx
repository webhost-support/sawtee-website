import MainLayout from "../Layout/MainLayout";
import { feature } from "@/Utils/data";
import WebsiteHead from "@/Components/Frontend/Head";
import {
    AboutSection,
    BlogSection,
    CarouselSection,
    ExploreButton,
    InfocusSection,
    PublicationSection,
    ReformMonitorSection,
    SawteeInMediaSection,
    Section,
    SubscribeSection,
    Title,
    VideosSection,
} from "@/Components/Frontend";
import {
    Box,
    Container,
    Grid,
    GridItem,
    useColorModeValue,
} from "@chakra-ui/react";
import CardsCarousel from "@/Components/Frontend/CardsCarousel";
import { splitPosts } from "@/Utils/helpers";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import { Link } from "@inertiajs/react";

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
            <Section pt="10" className="carousel-section">
                <Grid
                    templateColumns={{
                        base: "1fr",
                        lg: "repeat(6, 1fr)",
                    }}
                    id="carousel-section"
                    gap={4}
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
                                carouselHeight={"500px"}
                            />
                        </Box>
                    </GridItem>
                    <GridItem
                        colSpan={{ base: 1, sm: 1, md: 2 }}
                        alignSelf={"center"}
                        maxH={{ base: "auto", md: "500px" }}
                    >
                        <Title
                            text="Featured Publications"
                            mb="6"
                            textAlign="center"
                            fontWeight="bold"
                            fontSize={{ base: "2xl" }}
                        />
                        <CardsCarousel slides={featuredPublication} />
                    </GridItem>
                </Grid>
            </Section>

            {feature && (
                <Section className="reform-section">
                    <ReformMonitorSection feature={feature} />
                </Section>
            )}

            {infocus && (
                <Section className="infocus-section" title={"InFocus"}>
                    <Container maxW="7xl" centerContent>
                        <InfocusSection infocus={infocus} />
                        <InertiaChakraLink
                            as={Link}
                            href={"/category/in-focus"}
                            mt="4"
                        >
                            <ExploreButton
                                size="md"
                                text="InFocus"
                                variant="outline"
                                px={10}
                                my="4"
                            />
                        </InertiaChakraLink>
                    </Container>
                </Section>
            )}

            <Section className="about-section">
                <AboutSection data={AboutSectionData} />
            </Section>

            <Section
                bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
                py={{ base: 12, md: 20 }}
                className="publications-section"
            >
                <PublicationSection
                    publications={latestPublication}
                    newsletters={newsletters}
                />
            </Section>

            {events && (
                <Section
                    title={"Policy Outreach"}
                    id="blog-section"
                    className="events-section"
                >
                    <BlogSection events={events} />
                </Section>
            )}

            {sawteeInMedia && (
                <Section
                    title={"Sawtee in Media"}
                    className="sawtee-in-media-section"
                    bg={useColorModeValue(
                        "blackAlpha.50",
                        "var(--color-darker)"
                    )}
                    py={{ base: 12, md: 20 }}
                >
                    <SawteeInMediaSection
                        articles={sawteeInMedia}
                        link={"/category/sawtee-in-media"}
                    />
                </Section>
            )}
            {/* <InfoSection /> */}
            <Section
                title={"Webinar Series"}
                className="section videos-section"
            >
                <VideosSection posts={webinars} />
            </Section>
            <Section
                py={{ base: "6", md: "12", lg: "16" }}
                px={{ base: "10", md: "16", lg: "20" }}
                className="subscribe-section"
            >
                <SubscribeSection />
            </Section>
        </MainLayout>
    );
};

export default Home;
