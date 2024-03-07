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
    Button,
    Stack,
    Spacer,
    SimpleGrid,
} from "@chakra-ui/react";
import { Title, FancyTitle, ExploreButton } from "@/Components/Frontend/index";
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
import { Barchart, TreemapChart } from "@/Components/Frontend/Charts";

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

            <CarouselSection slides={slides} books={books} />
            <AboutSection intro={introText} image={introImage} />

            <InfocusSection infocus={infocus} link={"/category/infocus"} />

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
            <InfoSection />
            <NewsletterSection />
        </MainLayout>
    );
};

export default Home;

const CarouselSection = ({ slides, books }) => {
    return (
        <Grid
            templateColumns={{
                base: "1fr",
                lg: "repeat(7, 1fr)",
            }}
            id="carousel-section"
        >
            <GridItem colSpan={{ base: 1, md: 4 }} overflow={"hidden"}>
                <FullWidthCarousel
                    slides={slides}
                    loop={true}
                    rewind={true}
                    pagination={true}
                    paginationType={"fraction"}
                />
            </GridItem>
            <GridItem
                colSpan={{ base: 1, md: 3 }}
                alignSelf={"center"}
                px={10}
                py={6}
            >
                <CardsCarousel slides={null} />
                <Spacer h="30px" />
                <Box
                    as={Link}
                    shadow={"xl"}
                    rounded="xl"
                    href="/category/covid"
                    role="banner"
                    aria-labelledby="Policy Reform Dashboard"
                    title="Policy Reform Dashboard"
                    mb={6}
                >
                    <Image
                        src="/assets/Policy-Reform-Banner-green-sized.webp"
                        alt="Policy Reform Dashboard"
                        fit="cover"
                        rounded="xl"
                    />
                </Box>
            </GridItem>
        </Grid>
    );
};

const AboutSection = ({ intro, image }) => {
    return (
        <Box
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

            {/* <VStack
                    alignItems={"center"}
                    gap={6}
                    p={{ base: 10, lg: 20 }}
                    justify={"center"}
                >
                    <Box
                        as={Link}
                        shadow={"xl"}
                        rounded="xl"
                        href="/category/covid"
                        role="banner"
                        aria-labelledby="Policy Reform Dashboard"
                        title="Policy Reform Dashboard"
                    >
                        <Image
                            src="/assets/Policy-Reform-Banner-green-sized.webp"
                            alt="Policy Reform Dashboard"
                            fit="cover"
                            rounded="xl"
                            htmlHeight={"150px"}
                        />
                    </Box>
                    <HStack gap={4}>
                        <Box
                            as={Link}
                            shadow={"xl"}
                            rounded="xl"
                            href="/category/covid"
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
                        </Box>
                        <Box
                            as={Link}
                            shadow={"xl"}
                            rounded="xl"
                            href="/category/covid"
                            role="banner"
                            aria-labelledby="SAWTEEs response to COVID-19"
                            title="SAWTEEs response to COVID-19"
                        >
                            <Image
                                src="/assets/COVID-19-South-Asia-and-LDCs.webp"
                                alt="SAWTEEs response to COVID-19"
                                fit="cover"
                                rounded="xl"
                            />
                        </Box>
                    </HStack>
                </VStack> */}
        </Box>
    );
};

const InfocusSection = ({ infocus, link }) => {
    const itemBG = useColorModeValue("blackAlpha.200", "blackAlpha.300");
    return (
        <Section
            title={"In Foucs"}
            bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
        >
            <Container maxW="8xl" centerContent px={6}>
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
                                        fontSize={{ base: "md", lg: "lg" }}
                                        pl={"20px"}
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
                                    fontFamily={"mono"}
                                    fontSize="xs"
                                    color={"gray.600"}
                                    _dark={{
                                        color: "gray.300",
                                    }}
                                    mt={{ base: "4", md: 0 }}
                                    pl={"20px"}
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
                <InertiaChakraLink as={Link} mt={12} href={link}>
                    <ExploreButton
                        size="md"
                        text="Explore All "
                        variant="outline"
                        px={10}
                    />
                </InertiaChakraLink>
            </Container>
        </Section>
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
                </MultiPostsCarousel>
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
                        lg: "auto repeat(2, 220px);",
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
                                            headingSize={"2xl"}
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
                <Barchart />
                <TreemapChart />
                {/* <iframe
                    title="Reform Meter Dashboard_revised"
                    width="100%"
                    height="804"
                    src="https://app.powerbi.com/view?r=eyJrIjoiOGRhNGUzNzUtYTk2NS00YzFjLWE3NDAtM2NjMjdjYTg1NmE1IiwidCI6IjIzM2IyYmFhLTdjNzUtNGI0YS04YjNiLTE3NTNkYmQzODBmOSIsImMiOjF9"
                    allowFullScreen={true}
                ></iframe> */}
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
            title={"Latest Publications"}
            bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
        >
            <Container maxW="8xl" centerContent px={6}>
                <MultiItemCarousel
                    slides={publications}
                    itemsToShow={showPublication}
                    spacing={90}
                    my={20}
                >
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
                </MultiItemCarousel>
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
