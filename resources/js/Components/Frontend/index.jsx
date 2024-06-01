import {
    Box,
    Button,
    Divider,
    HStack,
    Heading,
    Icon,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    createIcon,
    Flex,
    useBreakpointValue,
    useColorModeValue,
    Grid,
    GridItem,
    Container,
    LinkBox,
    SimpleGrid,
    Show,
    Tag,
    IconButton,
    LinkOverlay,
    ListItem,
    Badge,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { HiArrowRight, HiChevronDown, HiChevronRight } from "react-icons/hi";
import FullWidthCarousel from "@/Components/Frontend/FullWidthCarousel";
import { formatDate } from "@/Utils/helpers";
import MultiPostsCarousel from "@/Components/Frontend/MultiPostsSlider";
import PostCard from "@/Components/Frontend/PostCard";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";
import { Newsletter } from "@/Components/Frontend/newsletter";
// import CardsCarousel from "@/Components/Frontend/CardsCarousel";
import Feature from "@/Components/Frontend/feature";
import { motion } from "framer-motion";
import DottedBox from "@/Pages/Frontend/DottedBox";
import VideoCarousel from "./VideoCarousel";
import SimpleList from "./SimpleList";
// import { Barchart, TreemapChart } from "@/Components/Frontend/Charts";
export const ListItemVariant = {
    initial: {
        y: 50,
        // opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
    whileInView: {
        y: 0,
        // opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
};

export const ListVariant = {
    initial: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    whileInView: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
};

export const CarouselSection = ({
    slides,
    responsiveImages,
    carouselHeight,
}) => {
    return (
        slides &&
        slides.length > 0 && (
            <FullWidthCarousel
                slides={slides}
                navigation={false}
                loop={true}
                rewind={true}
                carouselHeight={carouselHeight}
                responsiveImages={responsiveImages}
            />
        )
    );
};

export const AboutSection = ({ data }) => {
    return (
        <SimpleGrid
            minChildWidth={"320px"}
            spacing={16}
            rowGap={28}
            alignItems="center"
            maxW={"7xl"}
            py={{ base: 10, lg: 16 }}
            px={{ base: 6, lg: 10 }}
            mx="auto"
        >
            {data.map((item) => {
                return (
                    <Box key={item.id} ml={{ base: 0, md: 5 }} pos="relative">
                        <DottedBox />
                        <LinkBox
                            position={"relative"}
                            rounded={"2xl"}
                            boxShadow={"2xl"}
                            role="group"
                        >
                            <IconButton
                                aria-label={"Play Button"}
                                variant={"ghost"}
                                _groupHover={{ color: "white" }}
                                icon={<PlayIcon w={12} h={12} />}
                                size={"lg"}
                                color={"whiteAlpha.700"}
                                position={"absolute"}
                                left={"50%"}
                                top={"50%"}
                                transform={"translateX(-50%) translateY(-50%)"}
                            />

                            <LinkOverlay href={item.link}>
                                <Image
                                    src={item.image_src}
                                    alt={item.title}
                                    fit="cover"
                                    rounded="xl"
                                    align={"center"}
                                />
                            </LinkOverlay>
                        </LinkBox>
                    </Box>
                );
            })}
        </SimpleGrid>
    );
};

export const InfocusSection = ({ infocus, link }) => {
    const itemBG = useColorModeValue("blackAlpha.200", "blackAlpha.300");
    return (
        <GlassBox p={{ base: 4, sm: 10 }}>
            {infocus.map((article) => {
                return (
                    <Box key={article.id}>
                        <LinkBox
                            key={article.id}
                            px={{ base: 4, sm: 6 }}
                            py={{ base: 2, sm: 3 }}
                            _hover={{ bg: itemBG }}
                        >
                            <Box>
                                <Heading
                                    as="h3"
                                    fontFamily={"heading"}
                                    fontWeight="bold"
                                    py="6"
                                    fontSize={{
                                        base: "sm",
                                        md: "xl",
                                    }}
                                >
                                    <InertiaChakraLinkOverlay
                                        href={`/category/${article.category.slug}/${article.slug}`}
                                    >
                                        {article.title}
                                    </InertiaChakraLinkOverlay>
                                </Heading>

                                <Text
                                    pl="20px"
                                    noOfLines={3}
                                    fontSize={{
                                        base: "xs",
                                        md: "md",
                                    }}
                                    borderLeft={
                                        "5px solid var(--chakra-colors-primary-400) "
                                    }
                                >
                                    {article.excerpt}
                                </Text>
                            </Box>
                        </LinkBox>
                        <Divider m={0} />
                    </Box>
                );
            })}
        </GlassBox>
    );
};

export const SawteeInMediaSection = ({ articles, link }) => {
    return (
        <MultiPostsCarousel
            posts={articles}
            spacing={30}
            pagination={false}
            showCategoryTag={true}
            scrollbar={true}
            my={10}
        >
            <InertiaChakraLink as={Link} href={link}>
                <ExploreButton
                    size={["xs", "sm"]}
                    text="More on sawtee in media "
                    variant="link"
                    px={10}
                />
            </InertiaChakraLink>
        </MultiPostsCarousel>
    );
};

export const BlogSection = ({ events }) => {
    return (
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
                                <PostCard post={article} headingSize={"3xl"} />
                            </GridItem>
                        );
                    } else {
                        return (
                            <GridItem key={article.id} colSpan={1} rowSpan="1">
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
    );
};

export const InfoSection = () => {
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

export const ReformMonitorSection = ({ feature }) => {
    return <Feature feature={feature} />;
};

export const PublicationSection = ({ publications, infocus, events }) => {
    return (
        <Grid
            gridTemplateColumns={{ base: "1fr", lg: "repeat(6, 1fr)" }}
            gap={10}
            maxW={"8xl"}
            mx="auto"
        >
            <GridItem colSpan={{ base: 1, md: 2 }}>
                <SimpleList heading={"in focus"}>
                    {infocus.map((item) => {
                        return (
                            <ListItem key={item.id} mb="1rem">
                                <Box>
                                    <InertiaChakraLink
                                        textDecor="underline"
                                        textUnderlineOffset="3px"
                                        href={`/category/in-focus/${item.slug}`}
                                    >
                                        <Text
                                            fontSize={"0.875rem"}
                                            lineHeight={"short"}
                                        >
                                            {item.title}
                                        </Text>
                                    </InertiaChakraLink>
                                    <Text
                                        color={useColorModeValue(
                                            "gray.600",
                                            "gray.300"
                                        )}
                                        fontSize={".75rem"}
                                        mt={2}
                                    >
                                        {formatDate(item.published_at)}
                                    </Text>
                                </Box>
                            </ListItem>
                        );
                    })}
                </SimpleList>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}>
                <SimpleList heading={"publications"}>
                    {publications.map((publication) => {
                        const media = publication.media.length
                            ? publication.media.filter(
                                  (media) =>
                                      media.collection_name ===
                                      "publication_featured_image"
                              )[0].original_url
                            : "/assets/SM-placeholder-150x150.png";
                        return (
                            <ListItem key={publication.id} mb="1rem">
                                <Badge size={"sm"} colorScheme="blue">
                                    {publication.category?.name}
                                </Badge>
                                <LinkBox
                                    as={HStack}
                                    justify="space-between"
                                    gap={6}
                                >
                                    <Box>
                                        <InertiaChakraLinkOverlay
                                            as={Link}
                                            textDecor="underline"
                                            textUnderlineOffset="3px"
                                            href={
                                                publication.file
                                                    ? `/publications/${publication.file.name}`
                                                    : "#"
                                            }
                                        >
                                            <Text
                                                fontSize={"0.875rem"}
                                                lineHeight={"short"}
                                            >
                                                {publication.title}
                                            </Text>
                                        </InertiaChakraLinkOverlay>
                                        <Text
                                            color={useColorModeValue(
                                                "gray.600",
                                                "gray.300"
                                            )}
                                            fontSize={".75rem"}
                                            mt={2}
                                        >
                                            {publication.subtitle}
                                        </Text>
                                    </Box>

                                    {media && (
                                        <Box>
                                            <Image
                                                src={media}
                                                alt={publication.title}
                                                w="60px"
                                                border="1px solid"
                                                borderColor={"gray.400"}
                                                p={1}
                                                rounded="sm"
                                                aspectRatio={3 / 4}
                                            />
                                        </Box>
                                    )}
                                </LinkBox>
                            </ListItem>
                        );
                    })}
                </SimpleList>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 2 }}>
                <SimpleList heading={"Featured Events"}>
                    {events.map((event) => {
                        const featured_image =
                            event.media.length > 0
                                ? event.media.filter(
                                      (item) =>
                                          item.collection_name ===
                                          "post-featured-image"
                                  )[0].original_url
                                : "/assets/SM-placeholder-150x150.png";
                        // const srcSet = featured_image
                        //     ? featured_image.responsive_images.responsive.urls
                        //     : null;

                        return (
                            <ListItem
                                key={event.id}
                                className="list-tem"
                                mb="1rem"
                            >
                                <LinkBox
                                    as={HStack}
                                    // w="full"
                                    align="center"
                                    justify="space-between"
                                    gap={4}
                                >
                                    <Box flexGrow={1} maxW="70%">
                                        <InertiaChakraLinkOverlay
                                            as={Link}
                                            textDecor="underline"
                                            textUnderlineOffset="3px"
                                            href={`/category/events/${event.slug}`}
                                        >
                                            <Text
                                                fontSize={"0.875rem"}
                                                lineHeight={"short"}
                                            >
                                                {event.title}
                                            </Text>
                                        </InertiaChakraLinkOverlay>
                                        <Text
                                            color={useColorModeValue(
                                                "gray.600",
                                                "gray.300"
                                            )}
                                            fontSize={".75rem"}
                                            mt={2}
                                        >
                                            {formatDate(event.published_at)}
                                        </Text>
                                    </Box>

                                    {featured_image && (
                                        <Box maxW="70%" boxSize={"90px"}>
                                            <Image
                                                src={featured_image}
                                                alt={event.title}
                                                w="full"
                                                border="1px solid"
                                                borderColor={"gray.400"}
                                                p={1}
                                                rounded="sm"
                                                aspectRatio={3 / 2}
                                            />
                                        </Box>
                                    )}
                                </LinkBox>
                            </ListItem>
                        );
                    })}
                </SimpleList>
            </GridItem>
        </Grid>
    );
};

export const VideosSection = ({ posts }) => {
    return <VideoCarousel posts={posts} navigation={true} />;
};

export const Section = ({ children, title = null, ...rest }) => {
    return (
        <Box
            as="section"
            mx="auto"
            pb={{ base: 20, md: 28 }}
            px={{ base: "24px", md: "80px" }}
            className="section"
            {...rest}
        >
            {title && <FancyTitle title={title} />}
            {children}
        </Box>
    );
};

export const publicationsection = ({ newsletters }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container maxW="full" centerContent>
            <Flex justify={"center"} w="full" mb={3}>
                <InertiaChakraLink
                    href="/category/newsletters"
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
            {newsletters.map((newsletter, index) => (
                <Flex key={newsletter.id} w="full">
                    {/* Desktop view(left card) */}
                    {isDesktop && index % 2 === 0 && (
                        <>
                            <EmptyCard />
                            <LineWithDot isMobile={isMobile} />
                            <NewsletterCard {...newsletter} index={index} />
                        </>
                    )}

                    {/* Mobile view */}
                    {isMobile && (
                        <>
                            <LineWithDot isMobile={isMobile} />
                            <NewsletterCard {...newsletter} index={index} />
                        </>
                    )}

                    {/* Desktop view(right NewsletterCard) */}
                    {isDesktop && index % 2 !== 0 && (
                        <>
                            <NewsletterCard {...newsletter} index={index} />

                            <LineWithDot isMobile={isMobile} />
                            <EmptyCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};

// A debounced input react component
export function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <Input
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export const PlayIcon = createIcon({
    displayName: "PlayIcon",
    viewBox: "0 0 58 58",
    d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export const Blob = (props) => {
    return (
        <Icon
            width={"100%"}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};

export const NewsletterCard = ({ index, title, excerpt, published_at }) => {
    // For even id show card on left side
    // For odd id show card on right side
    const isEvenId = index % 2 == 0;
    let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
    let leftValue = isEvenId ? "-15px" : "unset";
    let rightValue = isEvenId ? "unset" : "-15px";

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = "-15px";
        rightValue = "unset";
        borderWidthValue = "15px 15px 15px 0";
    }

    return (
        <HStack
            as={motion.article}
            mb={isMobile ? "20px" : 0}
            initial={
                isEvenId
                    ? {
                          x: 50,
                          opacity: 0,
                          transition: {
                              y: { stiffness: 1000 },
                          },
                      }
                    : {
                          x: -50,
                          opacity: 0,
                          transition: {
                              y: { stiffness: 1000 },
                          },
                      }
            }
            whileInView={
                isEvenId
                    ? {
                          x: 0,
                          opacity: 1,
                          transition: {
                              y: { stiffness: 1000, velocity: -100 },
                          },
                      }
                    : {
                          x: 0,
                          opacity: 1,
                          transition: {
                              y: { stiffness: 1000, velocity: -100 },
                          },
                      }
            }
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue("blackAlpha.50", "blackAlpha.300")}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: "0",
                h: "0",
                borderColor: `transparent ${useColorModeValue(
                    "var(--chakra-colors-blackAlpha-50)",
                    "var(--chakra-colors-blackAlpha-300)"
                )} transparent`,
                borderStyle: "solid",
                borderWidth: borderWidthValue,
                position: "absolute",
                left: leftValue,
                right: rightValue,
                display: "block",
            }}
        >
            <Box>
                <Text fontSize="sm" color={"primary.500"} mb={2}>
                    {formatDate(published_at)}
                </Text>

                <VStack spacing={2} textAlign="left">
                    <Heading
                        as="h3"
                        fontSize="lg"
                        lineHeight={1.2}
                        fontWeight="bold"
                        w="100%"
                    >
                        {title}
                    </Heading>
                </VStack>
            </Box>
        </HStack>
    );
};

export const LineWithDot = ({ isMobile }) => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: "40px", md: "40px" }}
            ml={{ base: "0", md: "40px" }}
            mb={isMobile ? "20px" : 0}
        >
            <Text
                as="span"
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                top="0px"
            ></Text>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bg={useColorModeValue("gray.600", "gray.200")}
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

export const EmptyCard = () => {
    return (
        <Box
            flex={{ base: 0, md: 1 }}
            p={{ base: 0, md: 6 }}
            bg="transparent"
        ></Box>
    );
};

export const Content = styled(Box)`
    word-break: break-word;
    font-size: var(--chakra-fontSizes-md);
    white-space: collapse balance;

    line-height: var(--chakra-lineHeights-taller);

    p {
        padding-block: 10px;
        font-size: 16px;
        line-height: var(--chakra-lineHeights-tall);
    }

    * {
        max-width: 100%;
    }

    ul,
    ol {
        padding: 0;
        margin-left: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        word-break: break-word;
    }

    h1 {
        font-size: var(--chakra-fontSizes-4xl);
        margin-block: 35px;
    }

    h2 {
        font-size: var(--chakra-fontSizes-3xl);
        margin-block: 30px;
    }

    h3 {
        font-size: var(--chakra-fontSizes-2xl);
        margin-block: 25px;
    }

    h4 {
        font-size: var(--chakra-fontSizes-xl);
        margin-block: 20px;
    }

    h5 {
        font-size: var(--chakra-fontSizes-lg);
        margin-block: 15px;
    }

    h6 {
        font-size: var(--chakra-fontSizes-md);
        margin-block: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    figure {
        margin: 24px auto;
        /* next line overrides an inline style of the figure element. */
        width: 100% !important;
    }

    iframe {
        display: block;
        margin: auto;
    }
`;

export const GlassBox = ({ children, ...rest }) => {
    return (
        <Box
            border="1px solid"
            borderColor={useColorModeValue("#ebebeb", "#333")}
            rounded="md"
            shadow="md"
            w="full"
            bg="var(--color-bg)"
            {...rest}
        >
            {children}
        </Box>
    );
};

export const Accordian = ({ data }) => {
    const [accordianData, setAccordianData] = useState([...data]);

    const ChangeAccordianOpenState = (id, open) => {
        const newState = accordianData.map((obj) => {
            // 👇️ if id equals 2d, update open property
            if (obj.open === true) {
                return { ...obj, open: false };
            }
            if (obj.id === id) {
                return { ...obj, open: !open };
            }

            // 👇️ otherwise return object as is
            return obj;
        });

        setAccordianData(newState);
    };

    function createMarkup(content) {
        return { __html: `${content}` };
    }

    return (
        <Wrapper>
            {accordianData.map(({ name, content, id, open }) => {
                return (
                    <li
                        key={id}
                        onClick={() => ChangeAccordianOpenState(id, open)}
                    >
                        <div className="accordian-item">
                            <p>{name}</p>
                            {open ? (
                                <HiChevronDown size={"3rem"} />
                            ) : (
                                <HiChevronRight size={"3rem"} />
                            )}
                        </div>
                        {open ? (
                            <div className="accordian-content">
                                <p
                                    dangerouslySetInnerHTML={createMarkup(
                                        content
                                    )}
                                />
                            </div>
                        ) : null}
                    </li>
                );
            })}
        </Wrapper>
    );
};

export const FancyTitle = ({ title, ...rest }) => {
    return (
        <Heading
            as="h3"
            fontSize={"1.5rem"}
            fontWeight="bold"
            fontFamily={
                "Gotham Narrow SSm A,Gotham Narrow SSm B,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
            }
            marginBottom={"3rem !important"}
            display={"flex"}
            alignItems={"center"}
            _after={{
                content: `""`,
                height: "2px",
                bg: useColorModeValue("gray.800", "gray.200"),
                ml: "1rem",
                borderRadius: "4px",
                opacity: 0.25,
                flexGrow: 1,
            }}
            {...rest}
        >
            {title}
        </Heading>
    );
};

export const MapModel = ({ isOpen, onClose, mapLink }) => {
    const modalContentColor = useColorModeValue(
        "rgba(255, 255, 255, 0.7)",
        "rgba(0, 0, 0, 0.7)"
    );
    const modelHeaderColor = useColorModeValue("gray.700", "whiteAlpha.900");
    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
            closeOnOverlayClick={true}
            scrollBehavior="inside"
            size={"xl"}
        >
            <ModalOverlay />
            <ModalContent bg={modalContentColor}>
                <ModalHeader color={modelHeaderColor}>Our Location</ModalHeader>
                <ModalCloseButton />
                <ModalBody margin={"0 auto"}>
                    <Image
                        objectFit={"cover"}
                        src={"/assets/location-map-resized.webp"}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button
                        as={InertiaChakraLink}
                        size="sm"
                        variant="solid"
                        colorScheme={"primary"}
                        href="https://goo.gl/maps/fwZuwNSbjN5jwZia7"
                        target="_blank"
                        onClick={onClose}
                    >
                        Open in Google Map
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export const Title = ({ text, color, ...rest }) => {
    return (
        <Text
            as="h3"
            fontFamily="heading"
            color={
                color ? color : useColorModeValue("gray.800", "whiteAlpha.800")
            }
            {...rest}
        >
            {text}
        </Text>
    );
};

export const ExploreButton = ({ text = "Explore All", ...rest }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Button
            variant="solid"
            colorScheme={"primary"}
            aria-label="view all"
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(!hovered)}
            rightIcon={hovered ? <HiArrowRight /> : <HiChevronRight />}
            maxW="md"
            fontFamily={"body"}
            fontWeight={"semibold"}
            {...rest}
        >
            {text}
        </Button>
    );
};

export const StyledLink = styled(Link)`
    position: relative;
    text-decoration: none;
    font-size: ${(props) =>
        props.fontSize ? props.fontSize : "var(--chakra-fontSizes-sm)"};
    color: ${(props) => (props.color ? props.color : "inherit")};

    &::after {
        content: "";
        width: 0%;
        height: 2px;
        position: absolute;
        bottom: 1;
        left: 0;
        margin: 0;

        background: ${(props) => (props.color ? props.color : "#fff")};
        opacity: 0;
        transition: all 0.5s ease;
    }

    &:hover {
        text-decoration: none;
        &::after {
            width: 100%;
            opacity: 1;
        }
    }
`;

export const StyledChakraLink = styled(InertiaChakraLink)`
    position: relative;
    text-decoration: none;
    font-family: ${(props) =>
        props.fontFamily
            ? `var(--chakra-fonts-${props.fontFamily})`
            : "var(--chakra-fonts-body)"};
    font-size: ${(props) =>
        props.fontSize
            ? `var(--chakra-fontSizes-${props.fontSize})`
            : "var(--chakra-fontSizes-md)"};
    color: ${(props) =>
        props.color ? props.color : "var(--chakra-colors-gray-700)"};

    &::after {
        content: "";
        width: 0%;
        height: 2px;
        position: absolute;
        bottom: -2px;
        left: 0;
        margin: 0;

        background: ${(props) => (props.color ? props.color : "#fff")};
        opacity: 0;
        transition: all 0.5s ease;
    }

    &:hover {
        text-decoration: none;

        &::after {
            width: 100%;
            opacity: 1;
        }
    }
`;
