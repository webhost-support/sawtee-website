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
            {/* <InfoSection /> */}
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
                <SimpleGrid columns={2} spacing="4">
                    <CardsCarousel slides={books} />

                    <VStack
                        spacing={5}
                        alignItems="center"
                        justify="center"
                        maxW="300px"
                    >
                        {books &&
                            books.length > 0 &&
                            books.map((slide, i) => {
                                return (
                                    <Box key={slide.id}>
                                        <HStack spacing={4}>
                                            <Text
                                                fontWeight="bold"
                                                boxShadow="md"
                                                color="white"
                                                bg="primary.400"
                                                rounded="md"
                                                px="2"
                                            >
                                                {i + 1}
                                            </Text>
                                            <InertiaChakraLink
                                                href={`/publications/${slide.file.name}`}
                                                target="_blank"
                                                fontWeight="semibold"
                                                fontSize="md"
                                                color="gray.700"
                                                _dark={{
                                                    color: "gray.400",
                                                }}
                                            >
                                                {slide.title +
                                                    " " +
                                                    slide.subtitle}
                                            </InertiaChakraLink>
                                        </HStack>
                                    </Box>
                                );
                            })}
                    </VStack>
                </SimpleGrid>
                <Spacer h="60px" />
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    w="sm"
                    mx="auto"
                >
                    <LinkBox shadow={"xl"} rounded="xl" w="sm">
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
            </GridItem>
        </Grid>
    );
};

const AboutSection = ({ intro, image }) => {
    return (
        <Box>
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
            </Box>
            <SimpleGrid
                px={10}
                py={16}
                columns={{ base: 1, md: 3 }}
                spacing={6}
            >
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w="sm"
                    mx="auto"
                >
                    <LinkBox shadow={"xl"} rounded="xl">
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
                </Flex>

                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w="sm"
                    mx="auto"
                >
                    <LinkBox shadow={"xl"} rounded="xl">
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
                </Flex>
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w="sm"
                    mx="auto"
                >
                    <LinkBox shadow={"xl"} rounded="xl">
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
                </Flex>
            </SimpleGrid>
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
