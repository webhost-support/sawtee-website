import MainLayout from "../Layout/MainLayout";
import { feature } from "@/Utils/data";
import WebsiteHead from "@/Components/Frontend/Head";
import {
    AboutSection,
    BlogSection,
    CarouselSection,
    ExploreButton,
    FancyTitle,
    InfocusSection,
    PublicationSection,
    ReformMonitorSection,
    SawteeInMediaSection,
    Section,
    Title,
    VideosSection,
} from "@/Components/Frontend";
import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Show,
    useBreakpoint,
    useColorModeValue,
} from "@chakra-ui/react";
import CardsCarousel from "@/Components/Frontend/CardsCarousel";
import { splitPosts } from "@/Utils/helpers";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import { Link } from "@inertiajs/react";
import SimpleList from "@/Components/Frontend/SimpleList";
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
            <Section pt="10" className="carousel-section">
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
                                carouselHeight={{ base: "auto", md: "500px" }}
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
                <Section
                    className="reform-section"
                    bg={useColorModeValue(
                        "blackAlpha.50",
                        "var(--color-darker)"
                    )}
                    py={{ base: 12, md: 20 }}
                >
                    <Box maxW="7xl" mx="auto">
                        <ReformMonitorSection feature={feature} />
                    </Box>
                </Section>
            )}

            {/* {infocus && (
                <Section className="infocus-section">
                    <Box maxW="7xl" mx="auto">
                        <FancyTitle title={"In Focus"} />
                        <InfocusSection infocus={infocus} />
                        <Flex justify={"end"}>
                            <InertiaChakraLink
                                as={Link}
                                href={"/category/in-focus"}
                                mt="4"
                                ml="auto"
                            >
                                <ExploreButton
                                    size={["xs", "sm"]}
                                    text="More on in focus"
                                    variant="link"
                                    px={10}
                                    my="8"
                                />
                            </InertiaChakraLink>
                        </Flex>
                    </Box>
                </Section>
            )} */}

            <Section className="about-section" py={{ base: 12, md: 20 }}>
                <AboutSection data={AboutSectionData} />
            </Section>

            <Section
                bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
                py={{ base: 12, md: 20 }}
                className="publications-section"
            >
                <PublicationSection
                    infocus={infocus}
                    publications={publications}
                    events={events}
                />
            </Section>

            {/* {events && (
                <Section
                    id="blog-section"
                    className="events-section"
                    py={{ base: 12, md: 20 }}
                >
                    <Box maxW="8xl" mx="auto" px={6}>
                        <FancyTitle title={"Featured Events"} />
                        <BlogSection events={events} />
                        <Flex justify={"end"}>
                            <InertiaChakraLink
                                as={Link}
                                href={`/category/featured-events`}
                                mt={6}
                            >
                                <ExploreButton
                                    size={["xs", "sm"]}
                                    text="More on featured events"
                                    variant="link"
                                    px={10}
                                />
                            </InertiaChakraLink>
                        </Flex>
                    </Box>
                </Section>
            )} */}

            {sawteeInMedia && (
                <Section
                    className="sawtee-in-media-section"
                    py={{ base: 12, md: 20 }}
                >
                    <Box maxW="8xl" mx="auto" px={6}>
                        <FancyTitle title={"Sawtee in Media"} />
                        <SawteeInMediaSection
                            articles={sawteeInMedia}
                            link={"/category/sawtee-in-media"}
                        />
                    </Box>
                </Section>
            )}
            {/* <InfoSection /> */}
            <Section
                className="section videos-section"
                bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
                py={{ base: 12, md: 20 }}
            >
                <Box maxW="8xl" mx="auto" px={6}>
                    <FancyTitle title={"Webinar Series"} />
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

export default Home;
