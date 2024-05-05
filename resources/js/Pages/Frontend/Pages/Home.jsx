import { Link } from "@inertiajs/react";
import {
    Text,
    Box,
    VStack,
    Heading,
    Grid,
    GridItem,
    Container,
    Image,
    LinkBox,
    Divider,
    HStack,
    useBreakpointValue,
    useColorModeValue,
    Flex,
    Spacer,
    SimpleGrid,
    Show,
} from "@chakra-ui/react";
import { FancyTitle, ExploreButton } from "@/Components/Frontend/index";
import FullWidthCarousel from "@/Components/Frontend/FullWidthCarousel";
import { formatDate } from "@/Utils/helpers";
import MainLayout from "../Layout/MainLayout";
import MultiItemCarousel from "@/Components/Frontend/MultiItemCarousel";
import MultiPostsCarousel from "@/Components/Frontend/MultiPostsSlider";
import PostCard from "@/Components/Frontend/PostCard";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";
import { Newsletter } from "@/Components/Frontend/newsletter";
import WebsiteHead from "@/Components/Frontend/Head";
import CardsCarousel from "@/Components/Frontend/CardsCarousel";
import { info } from "autoprefixer";
// import { Barchart, TreemapChart } from "@/Components/Frontend/Charts";

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
    return (
        <MainLayout>
            <WebsiteHead
                title={"Home"}
                description="Explore South Asia's dynamic journey since the 1980s, navigating global integration and economic challenges."
                image={"/assets/logo-sawtee.webp"}
            />

            <CarouselSection slides={slides} books={books} infocus={infocus} />
            <AboutSection intro={introText} image={introImage} />

            {/* <Grid
                templateColumns={{
                    base: "1fr",
                    lg: "repeat(6, 1fr)",
                }}
                gap={8}
                // bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
                backgroundColor={useColorModeValue(
                    "blackAlpha.50",
                    "var(--color-darker)"
                )}
                // color={useColorModeValue("gray.400", "gray.100")}
                bgImage={useColorModeValue(
                    "none",
                    "url(/assets/graph-paper.svg)"
                )}
            >
                <GridItem colSpan={{ base: 1, md: 2 }}></GridItem>
                <GridItem colSpan={{ base: 1, md: 4 }}></GridItem>
            </Grid> */}

            <PublicationSection
                publications={[...tradeInsights, ...books]}
                showPublication={showPublication}
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
            <NewsletterSection />
        </MainLayout>
    );
};

export default Home;

const CarouselSection = ({ slides, books, infocus }) => {
    return (
        <Grid
            templateColumns={{
                base: "1fr",
                lg: "repeat(7, 1fr)",
            }}
            id="carousel-section"
        >
            {slides && slides.length > 0 && (
                <GridItem
                    colSpan={{ base: 1, md: 4 }}
                    overflow={"hidden"}
                    maxH={{ base: "auto", md: "calc(100dvh - 15rem)" }}
                >
                    <FullWidthCarousel
                        slides={slides}
                        loop={true}
                        rewind={true}
                        pagination={true}
                        paginationType={"fraction"}
                    />
                </GridItem>
            )}
            <GridItem
                colSpan={{ base: 1, md: 3 }}
                alignSelf={"center"}
                px={2}
                py={2}
            >
                <InfocusSection infocus={infocus} link={"/category/infocus"} />
                {/* <CardsCarousel slides={books} /> */}

                {/* <Spacer h="60px" /> */}
            </GridItem>
        </Grid>
    );
};

const AboutSection = ({ intro, image }) => {
    return (
        <Box>
            {/* <Box
                width="full"
                pos={"relative"}
                id="about-section"
                overflow="hidden"
                backgroundImage={`url(${image})`}
                bgRepeat={"no-repeat"}
                backgroundPosition={"center center"}
                backgroundSize="cover"
                minH={"500px"}
                className="section"
            >
                <Box
                    w="full"
                    display="flex"
                    flexDir="column"
                    gap={8}
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                    backgroundColor={"rgba(0,0,0,0.6)"}
                    backgroundBlendMode={"multiply"}
                    backdropFilter="blur(5px)"
                    pos={"absolute"}
                    inset={0}
                    h="full"
                >
                    {intro && (
                        <Text
                            as="blockquote"
                            className="blockquote"
                            m="0"
                            fontSize={{ base: "1em", md: "1.8em" }}
                            alignSelf={"center"}
                            zIndex={10}
                            maxW="6xl"
                        >
                            {intro}
                        </Text>
                    )}
                </Box>
            </Box> */}
            <SimpleGrid
                px={10}
                py={16}
                minChildWidth={"200px"}
                spacing={16}
                alignItems="center"
            >
                <Flex justifyContent="center" alignItems="center" mx="auto">
                    <LinkBox shadow={"xl"} rounded="xl" maxW="2xl">
                        <InertiaChakraLink
                            href="/reform-monitoring-platform"
                            role="banner"
                            aria-labelledby="Reform monitoring Platform"
                            title="Reform monitoring Platform"
                        >
                            <Image
                                src="/assets/Policy-Reform-Banner-green-sized.webp"
                                alt="Reform monitoring Platform"
                                fit="cover"
                                rounded="xl"
                            />
                        </InertiaChakraLink>
                    </LinkBox>
                </Flex>
                <LinkBox mx="auto" shadow={"xl"} rounded="xl">
                    <InertiaChakraLink
                        href="/media-fellowship"
                        role="banner"
                        aria-labelledby="Media Fellowship"
                        title="Media Fellowship"
                    >
                        <Image
                            src="/assets/Media-Fellowship-banner.webp"
                            alt="Media Fellowship"
                            fit="cover"
                            rounded="xl"
                        />
                    </InertiaChakraLink>
                </LinkBox>

                <LinkBox mx="auto" shadow={"xl"} rounded="xl">
                    <InertiaChakraLink
                        href="/category/covid"
                        role="banner"
                        aria-labelledby="SAWTEE's Response to Covid-19"
                        title="SAWTEE's Response to Covid-19"
                    >
                        <Image
                            src="/assets/COVID-19-South-Asia-and-LDCs.webp"
                            alt="SAWTEE's Response to Covid-19"
                            fit="cover"
                            rounded="xl"
                        />
                    </InertiaChakraLink>
                </LinkBox>

                <LinkBox mx="auto" shadow={"xl"} rounded="xl">
                    <InertiaChakraLink
                        href="/advancing-ldcs’-interests-in-the-wto-strengthening-participation,-securing-priorities"
                        role="banner"
                        aria-labelledby="Advancing LDC's Trade Interests"
                        title="Advancing LDC's Trade Interests"
                    >
                        <Image
                            src="/assets/advancing-ldc_upscaled.webp"
                            alt="Advancing LDC's Trade Interests"
                            fit="cover"
                            rounded="xl"
                        />
                    </InertiaChakraLink>
                </LinkBox>
            </SimpleGrid>
        </Box>
    );
};

const InfocusSection = ({ infocus, link }) => {
    const itemBG = useColorModeValue("blackAlpha.200", "blackAlpha.300");
    return (
        <Container
            maxW="8xl"
            centerContent
            p={4}
            maxH={{ base: "auto", md: "calc(100dvh - 15rem)" }}
            overflowY={"scroll"}
        >
            {infocus.map((article) => {
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
                            p={{ base: 4, sm: 6 }}
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
                                    fontSize={{
                                        base: "md",
                                        md: "lg",
                                        lg: "xl",
                                    }}
                                    // pl={"20px"}
                                >
                                    <InertiaChakraLinkOverlay
                                        as={Link}
                                        href={`/category/${article.category.slug}/${article.slug}`}
                                    >
                                        {article.title}
                                    </InertiaChakraLinkOverlay>
                                </Heading>
                                <HStack pos="relative" mt="20px">
                                    <Text
                                        as="span"
                                        w="5px"
                                        h="full"
                                        bg="primary.400"
                                        rounded="lg"
                                        pos={"absolute"}
                                    />

                                    <Text
                                        noOfLines={3}
                                        pl="20px"
                                        fontSize={{
                                            base: "sm",
                                            md: "md",
                                            lg: "md",
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
                                fontSize={["xs", "sm", "sm"]}
                                color={"gray.600"}
                                _dark={{
                                    color: "gray.300",
                                }}
                                mt={{ base: "4", md: 0 }}
                                pl={"20px"}
                            >
                                {formatDate(
                                    article.published_at || article.created_at
                                )}
                            </Text>
                        </Grid>
                        <Divider m={0} />
                    </LinkBox>
                );
            })}
            <InertiaChakraLink as={Link} my={6} href={link}>
                <ExploreButton
                    size="md"
                    text="Explore All "
                    variant="outline"
                    px={10}
                />
            </InertiaChakraLink>
        </Container>
    );
};

const SawteeInMediaSection = ({ articles, link, show }) => {
    return (
        <Section
            title={"Sawtee in Media"}
            bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
        >
            <Container maxW="8xl" centerContent px={6}>
                <MultiPostsCarousel
                    posts={articles}
                    itemsToShow={show}
                    itemsToSlide={1}
                    spacing={30}
                    pagination={false}
                    showCategoryTag={true}
                    scrollbar={true}
                    my={16}
                >
                    <Show above="sm">
                        <InertiaChakraLink
                            as={Link}
                            pos={"absolute"}
                            top={"10px"}
                            zIndex={1020}
                            href={link}
                        >
                            <ExploreButton
                                size="md"
                                text="Explore All "
                                variant="outline"
                                px={10}
                            />
                        </InertiaChakraLink>
                    </Show>
                </MultiPostsCarousel>
                <Show below="sm">
                    <InertiaChakraLink as={Link} href={link} mt="4">
                        <ExploreButton
                            size="md"
                            text="Explore All "
                            variant="outline"
                            px={10}
                        />
                    </InertiaChakraLink>
                </Show>
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
            <Container maxW="8xl" centerContent px={6}>
                <Grid
                    className="band"
                    gridTemplateColumns={{
                        base: "1fr",
                        md: "1fr 1fr",
                        lg: "auto repeat(2, 260px);",
                    }}
                    gridTemplateRows={"auto"}
                    gap={8}
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
                                    >
                                        <PostCard
                                            post={article}
                                            headingSize={"3xl"}
                                        />
                                    </GridItem>
                                );
                            } else {
                                return (
                                    <GridItem
                                        key={article.id}
                                        colSpan={1}
                                        rowSpan="1"
                                    >
                                        <PostCard
                                            post={article}
                                            showDescription={false}
                                            aspect={"3/2"}
                                        />
                                    </GridItem>
                                );
                            }
                        })}
                </Grid>
                <InertiaChakraLink
                    as={Link}
                    href={`/category/featured-events`}
                    mt={12}
                >
                    <ExploreButton
                        size="md"
                        text="Explore All"
                        variant="outline"
                        px={10}
                    />
                </InertiaChakraLink>
            </Container>
        </Section>
    );
};

const InfoSection = () => {
    return (
        <Box className="section">
            <SimpleGrid
                id="chart-wrapper"
                p={{ base: "6", lg: "8" }}
                columns={2}
                justifyContent="center"
                alignItems="center"
                minH={"500px"}
            >
                <iframe
                    title="Reform Meter Dashboard_revised"
                    width="100%"
                    height="804"
                    src="https://app.powerbi.com/view?r=eyJrIjoiOGRhNGUzNzUtYTk2NS00YzFjLWE3NDAtM2NjMjdjYTg1NmE1IiwidCI6IjIzM2IyYmFhLTdjNzUtNGI0YS04YjNiLTE3NTNkYmQzODBmOSIsImMiOjF9"
                    allowFullScreen={true}
                ></iframe>
            </SimpleGrid>
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

const PublicationSection = ({ publications, showPublication }) => {
    return (
        <Section
            title={" Publications"}
            bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
        >
            <Container maxW="8xl" centerContent px={6}>
                <MultiItemCarousel
                    slides={publications}
                    itemsToShow={showPublication}
                    spacing={90}
                    mt={20}
                    showTitle={true}
                >
                    <Show above="sm">
                        <InertiaChakraLink
                            href="/category/publications"
                            textAlign={"center"}
                            pos={"absolute"}
                            top={"10px"}
                            zIndex={1020}
                        >
                            <ExploreButton
                                size="md"
                                text="Explore All"
                                variant="outline"
                                px={10}
                            />
                        </InertiaChakraLink>
                    </Show>
                </MultiItemCarousel>
                <Show below="sm">
                    <InertiaChakraLink
                        href="/category/publications"
                        textAlign={"center"}
                    >
                        <ExploreButton
                            size="md"
                            text="Explore All"
                            variant="outline"
                            px={10}
                        />
                    </InertiaChakraLink>
                </Show>
            </Container>
        </Section>
    );
};

const Section = ({ children, title = null, ...rest }) => {
    return (
        <Box
            maxW="full"
            w="9xl"
            mx="auto"
            py={6}
            px={{ base: "6", md: "24" }}
            className="section"
            {...rest}
        >
            {title && <FancyTitle title={title} mb={0} />}
            {children}
        </Box>
    );
};
