import React from "react";
import { Head, Link } from "@inertiajs/react";
import {
    Text,
    Box,
    SimpleGrid,
    VStack,
    Heading,
    Grid,
    GridItem,
    Container,
    Image,
    LinkBox,
    Stack,
    Divider,
    HStack,
    Skeleton,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    Title,
    FancyTitle,
    ExploreButton,
    GlassBox,
} from "@/Components/Frontend/index";
import FullWidthCarousel from "@/Components/Frontend/FullWidthCarousel";
import { DemoChart, ExamplePie } from "@/Components/Frontend/charts";
import { formatDate } from "@/Utils/helpers";
import MainLayout from "../Layout/MainLayout";
import MultiItemCarousel from "@/Components/Frontend/MultiItemCarousel";
import MultiPostsCarousel from "@/Components/Frontend/MultiPostsSlider";
import PostCard from "@/Components/Frontend/PostCard";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";
import { Newsletter } from "@/Components/Frontend/newsletter";
import PostPreviewCard from "@/Components/Frontend/PostPreviewCard";

const Home = ({
    infocus,
    slides,
    events,
    books,
    tradeInsights,
    sawteeInMedia,
}) => {
    const introText =
        "Dedicated to fair, equitable, inclusive, and sustainable growth and development in South Asia, SAWTEE is working towards poverty reduction, food and livelihood security, gender equity, and biodiversity conservation and environmental sustainability.";
    const introImage = "/assets/hero-image.webp";
    const linkColor = "";
    const show = useBreakpointValue({ base: 1, lg: 2, xl: 3 });

    /*
    ? Question
    TODO: Load webP image in About Section
  */

    return (
        <MainLayout>
            <Head>
                <title>{"Home"}</title>
                <meta http-equiv="imagetoolbar" content="no" />
                <meta
                    head-key="description"
                    name="description"
                    content="Explore South Asia's dynamic journey since the 1980s, navigating global integration and economic challenges."
                />
                <meta
                    head-key="imagetoolbar"
                    http-equiv="imagetoolbar"
                    content="no"
                />
                <meta
                    head-key="og:title"
                    property="og:title"
                    content={"SAWTEE | Home"}
                />
                <meta
                    head-key="og:type"
                    property="og:type"
                    content="Home page"
                />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content="Explore South Asia's dynamic journey since the 1980s, navigating global integration and economic challenges."
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content={"/assets/logo-sawtee.webp"}
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
                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                ></script>
            </Head>
            <CarouselSection slides={slides} />

            <AboutSection
                intro={introText}
                image={introImage}
                tradeInsights={tradeInsights}
                books={books}
                show={show}
            />

            {infocus && <InFocusSection articles={infocus} />}

            <InfoSection />
            {events && <BlogSection linkColor={linkColor} events={events} />}

            {/* <PublicationSection
                books={books}
                show={show}
            /> */}
            <NewsletterSection />
            {sawteeInMedia && (
                <SawteeInMediaSection
                    sawteeInMedia={sawteeInMedia}
                    show={show}
                />
            )}
        </MainLayout>
    );
};

export default Home;

const CarouselSection = ({ slides }) => {
    return (
        <Box id="carousel-section" width="full">
            <FullWidthCarousel
                slides={slides}
                loop={slides.length > 1 ? true : false}
            />
        </Box>
    );
};

const AboutSection = ({ intro, image, tradeInsights, books, show }) => {
    const titleColor = useColorModeValue("gray.800", "whiteAlpha.900");

    return (
        <Box width="full" id="about-section" className="section">
            <SimpleGrid columns={{ base: 1, lg: 2 }}>
                <Box
                    w="full"
                    position="relative"
                    overflow="hidden"
                    backgroundImage={`url(${image})`}
                    backgroundSize="cover"
                    minH={{ base: "400px", md: "auto" }}
                >
                    <Box
                        backgroundColor="rgba(0,0,0,0.6)"
                        backgroundBlendMode="multiply"
                        backdropFilter={"blur(3px)"}
                        pos={"absolute"}
                        inset={"0"}
                        display="flex"
                        flexDir={"column"}
                        gap={8}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {/* {intro && (
                            <Text
                                as="blockquote"
                                fontSize={["sm", "lg", "xl", "2xl"]}
                                color={"whiteAlpha.800"}
                                m="0"
                                alignSelf={"center"}
                                zIndex={10}
                                px={{ base: "2rem", md: "4rem" }}
                                margin={{ base: "10px", lg: "1rem auto" }}
                                fontFamily="body"
                                _before={{
                                    content: '"“"',
                                }}
                                _after={{
                                    content: '"”"',
                                }}
                            >
                                {intro}
                            </Text>
                        )} */}
                        <Box
                            shadow={"xl"}
                            rounded="xl"
                            w={{ base: "sm", md: "md" }}
                        >
                            <Link
                                href="/about"
                                role="banner"
                                aria-labelledby="Advancing LDCs' Trade Interests"
                                title="Advancing LDCs' Trade Interests"
                            >
                                <Image
                                    src="/assets/advancing-ldc_upscaled.webp"
                                    alt="Advancing LDCs' Trade Interests"
                                    fit="cover"
                                    w="100%"
                                    rounded="xl"
                                />
                            </Link>
                        </Box>
                        <Box
                            shadow={"xl"}
                            rounded="xl"
                            w={{ base: "sm", md: "md" }}
                        >
                            <Link
                                href="/covid"
                                role="banner"
                                aria-labelledby="SAWTEEs response to COVID-19"
                                title="SAWTEEs response to COVID-19"
                            >
                                <Image
                                    src="/assets/COVID-19-South-Asia-and-LDCs.webp"
                                    alt="SAWTEEs response to COVID-19"
                                    fit="cover"
                                    w="100%"
                                    rounded="xl"
                                />
                            </Link>
                        </Box>
                    </Box>
                </Box>

                <VStack
                    bg={useColorModeValue(
                        "blackAlpha.50",
                        "var(--color-darker)"
                    )}
                    alignItems={"center"}
                    gap={6}
                    p={6}
                    justify={"center"}
                >
                    <Box px={6} w="full" py={{ base: "6", md: "8", lg: "10" }}>
                        <VStack
                            mb={8}
                            spacing={4}
                            alignItems={"start"}
                            mx="auto"
                        >
                            <HStack justify={"space-between"} w="full">
                                <Title
                                    text={"Latest Publications"}
                                    fontWeight="semibold"
                                    color={titleColor}
                                    fontSize={["sm", "md", "lg", "lg"]}
                                />
                                <Link href="/category/publications/trade-insight">
                                    <ExploreButton
                                        text={"View All"}
                                        variant={"solid"}
                                        size="sm"
                                    />
                                </Link>
                            </HStack>
                            <Box
                                h="5px"
                                w="full"
                                bg="repeating-linear-gradient(135deg,#fff 1px,#fff 4px,var(--color-grey-lighter) 6px)"
                            />
                        </VStack>
                        {tradeInsights && (
                            <MultiItemCarousel
                                slides={tradeInsights}
                                itemsToShow={show}
                                spacing={10}
                                className={"trade-slider"}
                            />
                        )}
                    </Box>
                </VStack>
            </SimpleGrid>
        </Box>
    );
};

const SawteeInMediaSection = ({ sawteeInMedia, show }) => {
    return (
        <Section
            title={"SAWTEE in Media"}
            id="media-section"
            className="section"
        >
            <Container maxW="7xl">
                <VStack spacing={6}>
                    <MultiPostsCarousel
                        itemsToShow={show}
                        spacing={30}
                        w="full"
                    >
                        {sawteeInMedia.map((slide) => {
                            return (
                                <swiper-slide key={slide.id} class="post-slide">
                                    <PostPreviewCard
                                        post={slide}
                                        showImage={false}
                                        pt={20}
                                        minH="260px"
                                    />
                                </swiper-slide>
                            );
                        })}
                        {sawteeInMedia.length <= 0 &&
                            [1, 2, 3].map((_) => (
                                <swiper-slide>
                                    <Skeleton
                                        rounded="xl"
                                        w="200px"
                                        h="260px"
                                    />
                                </swiper-slide>
                            ))}
                    </MultiPostsCarousel>

                    <InertiaChakraLink
                        as={Link}
                        mt={6}
                        href={"/category/sawtee-in-media"}
                        w="50%"
                        textAlign={"center"}
                    >
                        <ExploreButton
                            text="Explore All "
                            w="full"
                            variant="outline"
                            size="sm"
                        />
                    </InertiaChakraLink>
                </VStack>
            </Container>
        </Section>
    );
};

const BlogSection = ({ events }) => {
    return (
        <Section
            title={"Policy Outreach"}
            id="blog-section"
            className="section"
        >
            <Container maxW="8xl">
                <VStack spacing={6}>
                    <Grid
                        className="band"
                        gridTemplateColumns={{
                            base: "1fr",
                            md: "1fr 1fr",
                            lg: "auto repeat(2, 180px);",
                        }}
                        gridTemplateRows={"auto"}
                        gap={8}
                        w="full"
                        mb="10"
                    >
                        {events &&
                            events.length > 0 &&
                            events.map((article, i) => {
                                if (i === 0) {
                                    return (
                                        <GridItem
                                            key={article.id}
                                            colSpan={{ base: 1, md: 2, xl: 1 }}
                                            rowSpan={2}
                                            w="full"
                                        >
                                            <PostCard
                                                post={article}
                                                headingSize={"md"}
                                                showTags={true}
                                            />
                                        </GridItem>
                                    );
                                } else {
                                    return (
                                        <GridItem
                                            key={article.id}
                                            colSpan={1}
                                            rowSpan="1"
                                            w="full"
                                        >
                                            <PostCard
                                                post={article}
                                                showDescription={false}
                                                imageHeadgingGap="8"
                                            />
                                        </GridItem>
                                    );
                                }
                            })}
                    </Grid>
                    <InertiaChakraLink
                        as={Link}
                        href={"/category/featured-events"}
                    >
                        <ExploreButton
                            size="sm"
                            text="Explore All"
                            w="xl"
                            mt={6}
                            variant="outline"
                        />
                    </InertiaChakraLink>
                </VStack>
            </Container>
        </Section>
    );
};

const InFocusSection = ({ articles }) => {
    const itemBG = useColorModeValue("blackAlpha.200", "blackAlpha.300");
    return (
        <Section title={"In Focus"}>
            <Container maxW="5xl">
                <VStack spacing={6}>
                    {articles.map((article) => {
                        return (
                            <LinkBox key={article.id} w="full">
                                <Grid
                                    templateRows={{
                                        base: "auto auto auto",
                                        md: "auto",
                                    }}
                                    w="100%"
                                    templateColumns={{
                                        base: "1fr",
                                        md: "4fr 2fr",
                                    }}
                                    p={{ base: 2, sm: 4 }}
                                    alignItems="center"
                                    _hover={{ bg: itemBG }}
                                    rowGap={3}
                                    m={0}
                                >
                                    <Box
                                        gridColumnEnd={{
                                            base: "span 2",
                                            md: "unset",
                                        }}
                                    >
                                        <Heading
                                            as="h3"
                                            fontFamily={"heading"}
                                            fontWeight="bold"
                                            fontSize={{ base: "sm", lg: "md" }}
                                        >
                                            <InertiaChakraLinkOverlay
                                                as={Link}
                                                href={`/category/infocus/${article.slug}`}
                                            >
                                                {article.title}
                                            </InertiaChakraLinkOverlay>
                                        </Heading>
                                        <HStack pos="relative" mt="20px">
                                            <Text
                                                as="span"
                                                w="5px"
                                                h="full"
                                                bg="accent.400"
                                                rounded="lg"
                                                pos={"absolute"}
                                            />

                                            <Text
                                                noOfLines={3}
                                                pl="20px"
                                                fontSize={{
                                                    base: "xs",
                                                    lg: "sm",
                                                }}
                                            >
                                                {article.excerpt}
                                            </Text>
                                        </HStack>
                                    </Box>

                                    <Text
                                        as="time"
                                        justifySelf={{
                                            base: "start",
                                            md: "flex-end",
                                        }}
                                        fontFamily={"mono"}
                                        fontSize="xs"
                                        color={"gray.600"}
                                        _dark={{
                                            color: "gray.300",
                                        }}
                                        mt={{ base: "4", md: 0 }}
                                    >
                                        {formatDate(
                                            article.published_at ||
                                                article.created_at
                                        )}
                                    </Text>
                                </Grid>
                                <Divider m={0} />
                            </LinkBox>
                        );
                    })}
                    <InertiaChakraLink
                        as={Link}
                        mt={6}
                        href={"/category/infocus"}
                        w="50%"
                    >
                        <ExploreButton
                            size="sm"
                            text="Explore All "
                            w="full"
                            variant="outline"
                        />
                    </InertiaChakraLink>
                </VStack>
            </Container>
        </Section>
    );
};

const InfoSection = () => {
    return (
        <Box
            className="section"
            bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
        >
            <Stack
                id="twitter-section"
                direction={{ base: "column", lg: "row" }}
                py={{ base: "6", md: "12", lg: "16" }}
                px={{ base: "10", md: "16", lg: "20" }}
                spacing={"10"}
            >
                <Box
                    id="chart-wrapper"
                    w={{ base: "100%", lg: "62%" }}
                    p={{ base: "6", lg: "8" }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minH={"500px"}
                >
                    <DemoChart />
                    <ExamplePie />
                </Box>
                <GlassBox
                    rounded="2xl"
                    w={{ base: "100%", lg: "35%" }}
                    m={{ base: "2", lg: "4" }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                ></GlassBox>
            </Stack>
        </Box>
    );
};

const NewsletterSection = () => {
    return (
        <Box
            py={{ base: "6", md: "12", lg: "16" }}
            px={{ base: "10", md: "16", lg: "20" }}
            className="section"
        >
            <Newsletter />
        </Box>
    );
};

const PublicationSection = ({ books, show }) => {
    const titleColor = useColorModeValue("gray.800", "whiteAlpha.900");

    return (
        <Box
            className="section"
            maxW="7xl"
            mx="auto"
            bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
        >
            <Box
                px={6}
                w="full"
                bg={useColorModeValue("white", "var(--color-dark)")}
                py={{ base: "6", md: "8", lg: "10" }}
            >
                <VStack
                    mb={8}
                    spacing={4}
                    w="90%"
                    alignItems={"start"}
                    mx="auto"
                >
                    <HStack justify={"space-between"} w="full">
                        <Title
                            text={"Latest in Books"}
                            fontWeight="semibold"
                            color={titleColor}
                            fontSize={["md", "lg"]}
                        />
                        <Link href="/category/publications/books">
                            <ExploreButton
                                size="md"
                                text={"View All"}
                                variant={"solid"}
                                colorScheme="accent"
                            />
                        </Link>
                    </HStack>
                    <Box
                        h="20px"
                        w="full"
                        mx="auto"
                        bg="repeating-linear-gradient(135deg,#fff 1px,#fff 4px,var(--color-grey-lighter) 6px)"
                    />
                </VStack>

                {books && (
                    <MultiItemCarousel
                        slides={books}
                        itemsToShow={4}
                        spacing={30}
                        className={"books-slider"}
                    />
                )}
            </Box>
        </Box>
    );
};

const Section = ({ children, title = null, ...props }) => {
    return (
        <Box
            maxW="full"
            w="9xl"
            mx="auto"
            py={6}
            px={{ base: "16", md: "24" }}
            className="section"
            {...props}
        >
            {title && <FancyTitle title={title} mb={0} />}
            {children}
        </Box>
    );
};
