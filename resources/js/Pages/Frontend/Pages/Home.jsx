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
    SimpleGrid,
    Show,
    Tag,

} from "@chakra-ui/react";
import { FancyTitle, ExploreButton, Title } from "@/Components/Frontend/index";
import FullWidthCarousel from "@/Components/Frontend/FullWidthCarousel";
import { formatDate } from "@/Utils/helpers";
import MainLayout from "../Layout/MainLayout";
import MultiPostsCarousel from "@/Components/Frontend/MultiPostsSlider";
import PostCard from "@/Components/Frontend/PostCard";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";
import { Newsletter } from "@/Components/Frontend/newsletter";
import WebsiteHead from "@/Components/Frontend/Head";
// import CardsCarousel from "@/Components/Frontend/CardsCarousel";
import Feature from "@/Components/Frontend/feature";
import DottedBox from "../DottedBox";
import { Fragment } from "react";
// import { Barchart, TreemapChart } from "@/Components/Frontend/Charts";

const Home = ({
    infocus,
    slides,
    events,
    publications,
    sawteeInMedia,
    newsletters,
}) => {
    const introText =
        "Dedicated to fair, equitable, inclusive, and sustainable growth and development in South Asia, SAWTEE is working towards poverty reduction, food and livelihood security, gender equity, and biodiversity conservation and environmental sustainability.";
    const introImage = "/assets/hero-image.webp";

    const feature = {
        name: "Reform Monitoring Platform",
        image: "/assets/Policy-Reform-Banner-green-sized.webp",
        link: "/reform-monitoring-platform",
    };
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

            <CarouselSection slides={slides} infocus={infocus} />
            <Feature feature={feature} />
            <AboutSection intro={introText} image={introImage} />

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
            <NewsletterSection />
        </MainLayout>
    );
};

export default Home;

const CarouselSection = ({ slides, infocus }) => {
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
                maxH={{ base: "auto", md: "calc(100dvh - 15rem)" }}
                overflowY={"scroll"}
            >
                <InfocusSection infocus={infocus} link={"/category/infocus"} />
                {/* <CardsCarousel slides={books} /> */}

            </GridItem>
        </Grid>
    );
};

const AboutSection = ({}) => {
    return (
        <Box maxW={"7xl"} mx="auto">
            <SimpleGrid
                px={10}
                py={16}
                minChildWidth={"200px"}
                spacing={16}
                alignItems="center"
            >
                <Box ml={{ base: 0, md: 5 }} pos="relative">
                    <DottedBox />
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
                </Box>
                <Box ml={{ base: 0, md: 5 }} pos="relative">
                    <DottedBox />
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
                </Box>
                <Box ml={{ base: 0, md: 5 }} pos="relative">
                    <DottedBox />
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
                </Box>
            </SimpleGrid>
        </Box>
    );
};

const InfocusSection = ({ infocus, link }) => {
    const itemBG = useColorModeValue("blackAlpha.200", "blackAlpha.300");
    return (
        <Container maxW="8xl" centerContent px={4}>
            {/* <Title
                text={"In Focus"}
                my={{ base: "4", md: "6", lg: "0" }}
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "5xl", lg: "4xl" }}
                bgGradient="linear(to-br, #228be6, #15aabf)"
                bgClip="text"
            /> */}
            <InertiaChakraLink as={Link} my={3} href={link}>
                <ExploreButton
                    size="md"
                    text="In Focus"
                    variant="outline"
                    fontSize="2xl"
                    px={10}
                    w="full"
                />
            </InertiaChakraLink>
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
                            px={{ base: 4, sm: 6 }}
                            py={{ base: 2, sm: 3 }}
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
                                        base: "sm",
                                        md: "md",
                                    }}
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
                                            base: "xs",
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
                                fontSize={"xs"}
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

const PublicationSection = ({ publications, showPublication, newsletters }) => {
    return (
        <Section bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 2 }}
                gap={8}
                maxW={"7xl"}
                mx="auto"
            >
                <Container maxW="5xl" p={{ base: 5, md: 10 }}>
                    <Flex justify={"center"} mb={3}>
                        <InertiaChakraLink
                            href="/category/publications"
                            textAlign={"center"}
                            my={6}
                        >
                            <ExploreButton
                                size="md"
                                text="Newsletters"
                                variant="outline"
                                px={10}
                            />
                        </InertiaChakraLink>
                    </Flex>
                    <VStack
                        border="1px solid"
                        borderColor="gray.400"
                        rounded="md"
                        overflow="hidden"
                        spacing={0}
                        align={"space-between"}
                    >
                        {newsletters &&
                            newsletters.map(({ id, title, slug }, i) => (
                                <Fragment key={id}>
                                    <Heading
                                        as={"h4"}
                                        fontWeight="bold"
                                        fontSize="md"
                                        p={6}
                                    >
                                        <InertiaChakraLink
                                            href={`/category/newsletters/${slug}`}
                                        >
                                            {title}
                                        </InertiaChakraLink>
                                    </Heading>
                                    {newsletters.length - 1 !== i && (
                                        <Divider m={0} />
                                    )}
                                </Fragment>
                            ))}
                    </VStack>
                </Container>

                <Container maxW="5xl" p={{ base: 5, md: 10 }}>
                    <Flex justify={"center"} mb={3}>
                        <InertiaChakraLink
                            href="/category/publications"
                            textAlign={"center"}
                            my={6}
                        >
                            <ExploreButton
                                size="md"
                                text="Latest Publications"
                                variant="outline"
                                px={10}
                            />
                        </InertiaChakraLink>
                    </Flex>
                    <VStack
                        border="1px solid"
                        borderColor="gray.400"
                        rounded="md"
                        spacing={0}
                        align={"space-between"}
                    >
                        {publications &&
                            publications.map(
                                (
                                    {
                                        id,
                                        title,
                                        subtitle,
                                        file,
                                        media,
                                        category,
                                    },
                                    i
                                ) => (
                                    <Fragment key={id}>
                                        <Grid
                                            templateRows={{
                                                base: "auto auto",
                                                md: "auto",
                                            }}
                                            templateColumns={{
                                                base: "4fr",
                                                md: "4fr 2fr",
                                            }}
                                            p={{ base: 3, sm: 6 }}
                                            gap={3}
                                            _hover={{
                                                bg: useColorModeValue(
                                                    "gray.200",
                                                    "var(--color-darker)"
                                                ),
                                            }}
                                        >
                                            <GridItem
                                                gridTemplateColumns={{
                                                    base: "span 3",
                                                    md: "span 4",
                                                }}
                                            >
                                                <Tag
                                                    w="max-content"
                                                    colorScheme="primary"
                                                    mb={2}
                                                >
                                                    {category.name}
                                                </Tag>

                                                <InertiaChakraLink
                                                    href={`publication/${file.name}`}
                                                >
                                                    <Heading
                                                        as="h3"
                                                        fontWeight="bold"
                                                        fontSize="md"
                                                        m="0"
                                                    >
                                                        {title}
                                                    </Heading>
                                                    {subtitle && (
                                                        <Text
                                                            as="span"
                                                            fontWeight="medium"
                                                            fontSize="xs"
                                                            color={useColorModeValue(
                                                                "gray.600",
                                                                "gray.300"
                                                            )}
                                                        >
                                                            {" " + subtitle}
                                                        </Text>
                                                    )}
                                                </InertiaChakraLink>
                                            </GridItem>

                                            <GridItem
                                                gridTemplateColumns={{
                                                    base: "span 1",
                                                    md: "span 2",
                                                }}
                                                justifySelf={"flex-end"}
                                                alignSelf="start"
                                            >
                                                <InertiaChakraLink
                                                    href={`/publicaitons/${file.name}`}
                                                >
                                                    <Image
                                                        src={
                                                            media.length
                                                                ? media.filter(
                                                                      (media) =>
                                                                          media.collection_name ===
                                                                          "publication_featured_image"
                                                                  )[0]
                                                                      .original_url
                                                                : "/assets/SM-placeholder-150x150.png"
                                                        }
                                                        alt={title}
                                                        w="60px"
                                                        aspectRatio={3 / 4}
                                                        // h="190px"
                                                    />
                                                </InertiaChakraLink>
                                            </GridItem>
                                        </Grid>
                                        {publications.length - 1 !== i && (
                                            <Divider m={0} />
                                        )}
                                    </Fragment>
                                )
                            )}
                    </VStack>
                </Container>
            </SimpleGrid>
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


