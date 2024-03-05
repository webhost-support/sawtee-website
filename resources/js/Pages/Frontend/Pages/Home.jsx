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
    Skeleton,
    useBreakpointValue,
    useColorModeValue,
    Flex,
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
import PostPreviewCard from "@/Components/Frontend/PostPreviewCard";
import WebsiteHead from "@/Components/Frontend/Head";

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

            <CarouselSection
                slides={slides}
                tradeInsights={tradeInsights}
                books={books}
                infocus={infocus}
            />
            <AboutSection intro={introText} image={introImage} />
            {/* {infocus && <InFocusSection articles={infocus} />} */}

            <PublicationSection
                publications={[...tradeInsights, ...books]}
                showPublication={showPublication}
            />
            
            {events && <BlogSection events={events} />}
            {sawteeInMedia && (
                <SawteeInMediaSection
                    sawteeInMedia={sawteeInMedia}
                    show={show}
                />
            )}
            <InfoSection />
            <NewsletterSection />
        </MainLayout>
    );
};

export default Home;

const CarouselSection = ({ slides, infocus }) => {
    const itemBG = useColorModeValue("blackAlpha.200", "blackAlpha.300");

    return (
        <Box
            as={Grid}
            templateColumns={{
                base: "1fr",
                lg: "repeat(7, 1fr)",
            }}
            id="carousel-section"
            width="full"
        >
            <GridItem as={Flex} w="full" colSpan={{ base: 1, md: 4 }}>
                <FullWidthCarousel slides={slides} loop={true} pagination={true} />
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 3 }} alignSelf={"center"} p={10}>
                <VStack alignItems={"center"} gap={10} justify={"center"}>
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

                    <MultiPostsCarousel
                        itemsToShow={1}
                        spacing={30}
                        w="full"
                        title="In Focus"
                        pagination={true}
                    >

                        {infocus.map((article) => {
                            return (
                                <swiper-slide
                                    key={article.id}
                                    class="post-slide"
                                >
                                    <LinkBox w="full" py={20}>
                                        <Box
                                            w="100%"
                                            p={{ base: 2, sm: 4 }}
                                            alignItems="center"
                                            _hover={{ bg: itemBG }}
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
                                                        lg: "md",
                                                    }}
                                                >
                                                    <InertiaChakraLinkOverlay
                                                        as={Link}
                                                        href={`/category/infocus/${article.slug}`}
                                                    >
                                                        {article.title}
                                                    </InertiaChakraLinkOverlay>
                                                </Heading>
                                                <HStack
                                                    pos="relative"
                                                    mt="20px"
                                                >
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
                                                            lg: "sm",
                                                        }}
                                                    >
                                                        {article.excerpt}
                                                    </Text>
                                                </HStack>
                                            </Box>
                                        </Box>
                                        <Divider m={0} />
                                    </LinkBox>
                                </swiper-slide>
                            );
                        })}
                        {infocus.length <= 0 &&
                            [1, 2, 3].map((_) => (
                                <swiper-slide>
                                    <Skeleton rounded="xl" h="260px" />
                                </swiper-slide>
                            ))}
                    </MultiPostsCarousel>
                </VStack>
            </GridItem>
        </Box>
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
                        // color={"whiteAlpha.800"}
                        m="0"
                        alignSelf={"center"}
                        zIndex={10}
                        fontFamily="system"
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

const SawteeInMediaSection = ({ sawteeInMedia }) => {
    return (
        <Section
            title={"SAWTEE in Media"}
            id="media-section"
            className="section"
            bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
        >
            <Container maxW="8xl">
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
                                        py={20}
                                        minH="260px"
                                    />
                                </swiper-slide>
                            );
                        })}
                        {sawteeInMedia.length <= 0 &&
                            [1, 2, 3].map((_) => (
                                <swiper-slide>
                                    <Skeleton rounded="xl" w="auto" h="260px" />
                                </swiper-slide>
                            ))}
                    </MultiPostsCarousel>

                    <InertiaChakraLink
                        as={Link}
                        href={"/category/sawtee-in-media"}
                        w="50%"
                        textAlign={"center"}
                    >
                        <ExploreButton
                            text="Explore All "
                            w="full"
                            variant="outline"
                            size="md"
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
                            lg: "auto repeat(2, 220px);",
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
                        href={`/category/featured-events`}
                    >
                        <ExploreButton
                            size="md"
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
                            size="md"
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
        <Box className="section">
            <Box
                id="chart-wrapper"
                p={{ base: "6", lg: "8" }}
                display="flex"
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
            </Box>
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

    const titleColor = useColorModeValue("gray.800", "whiteAlpha.900");

    return (
        <Section mx="auto">
            <Box
                px={6}
                w="full"
                bg={useColorModeValue("white", "var(--color-dark)")}
                py={{ base: "6", md: "8", lg: "10" }}
            >
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
                            <HStack
                                justify={{
                                    base: "center",
                                    md: "space-between",
                                }}
                                wrap={"wrap"}
                                w="full"
                            >
                                <Title
                                    text={"Latest Publications"}
                                    fontWeight="semibold"
                                    color={titleColor}
                                    fontSize={["lg", "xl"]}
                                />
                                <Link href="/category/publications">
                                    <ExploreButton
                                        text={"View All"}
                                        variant={"solid"}
                                        size="md"
                                    />
                                </Link>
                            </HStack>
                            <Box
                                h="5px"
                                w="full"
                                bg="repeating-linear-gradient(135deg,#fff 3px,#fff 3px,var(--color-grey-lighter) 6px)"
                            />
                        </VStack>

                        <MultiItemCarousel
                            slides={publications}
                            itemsToShow={showPublication}
                            spacing={120}
                            className={"books-slider"}
                        />
                    </Box>
                </VStack>
            </Box>
        </Section>
    );
};

const Section = ({ children, title = null, ...props }) => {
    return (
        <Box
            maxW="full"
            w="9xl"
            mx="auto"
            py={6}
            px={{ base: "6", md: "24" }}
            className="section"
            {...props}
        >
            {title && <FancyTitle title={title} mb={0} />}
            {children}
        </Box>
    );
};
