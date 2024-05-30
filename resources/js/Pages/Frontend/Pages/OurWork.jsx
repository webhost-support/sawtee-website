import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
    Box,
    Text,
    Heading,
    Container,
    SimpleGrid,
    Image,
    LinkBox,
    useColorModeValue,
} from "@chakra-ui/react";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";

export default function OurWork({ themes, sections }) {
    const [intro, setIntro] = useState(null);
    const [sectors, setSectors] = useState(null);
    useEffect(() => {
        const intro = sections.filter(
            (section) => section.title === "Intro"
        )[0];
        const sectors = sections.filter(
            (section) => section.parent_id !== null
        );
        intro && setIntro(intro);
        sectors && setSectors(sectors);
    }, [sections]);
    const cardBackground = useColorModeValue(
        "blackAlpha.100",
        "blackAlpha.300"
    );

    return (
        <Container
            className="intro"
            pos="relative"
            py="80px"
            maxW="6xl"
            px={{ base: 5, md: 10 }}
            centerContent
        >
            <Heading
                as={"h2"}
                fontSize={{ base: "xl", md: "2xl" }}
                mb={6}
                textAlign="center"
            >
                Thematic Areas
            </Heading>

            <Box
                width="full"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                position="relative"
                mb={24}
            >
                {intro && (
                    <Text
                        as="blockquote"
                        className="blockquote"
                        m="0"
                        py={10}
                        color="var(--color-text)"
                        alignSelf={"center"}
                        maxW="6xl"
                        dangerouslySetInnerHTML={{
                            __html: intro.description,
                        }}
                    />
                )}
            </Box>

            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                placeItems="center"
                spacing={10}
                mb={4}
                px={8}
            >
                {themes.map((theme, index) => {
                    return (
                        <Box
                            key={theme.title}
                            bg={cardBackground}
                            p={6}
                            rounded="lg"
                            pos="relative"
                            role="group"
                            cursor={"pointer"}
                            id={"theme" + (index + 1)}
                            textAlign="center"
                        >
                            <Heading
                                as="h3"
                                mb={3}
                                fontWeight="semibold"
                                fontSize={["md", "lg"]}
                            >
                                {theme.title}
                            </Heading>

                            <Text mt={1} fontSize={"sm"} textAlign="left">
                                {theme.description}
                            </Text>
                        </Box>
                    );
                })}
            </SimpleGrid>
            <SimpleGrid
                className="page_content"
                px={{ base: "32px", md: "16px" }}
                paddingBlock="50px"
                mx="auto"
                columns={{ base: 1, md: 2 }}
                gap="10"
                maxW="5xl"
            >
                {sectors &&
                    sectors.map(({ id, title, description, media, link }) => {
                        return (
                            <LinkBox
                                className="cards"
                                key={id}
                                boxShadow={"lg"}
                                shadow={"md"}
                                rounded="xl"
                                overflow={"hidden"}
                                position="relative"
                                role="group"
                            >
                                <Image
                                    objectFit={"cover"}
                                    aspectRatio={"3/4"}
                                    w={["xs", "sm"]}
                                    src={
                                        media[0]
                                            ? media[0].original_url
                                            : "/assets/SM-placeholder-300x150.png"
                                    }
                                />
                                <Box
                                    backgroundColor={"hsl(0, 0%,  0%, 0.2)"}
                                    backgroundBlendMode={"lighten"}
                                    backdropFilter={"blur(3px)"}
                                    _groupHover={{
                                        backdropFilter: "blur(1px)",
                                    }}
                                    overflow={"hidden"}
                                    pos={"absolute"}
                                    rounded="xl"
                                    inset={"0"}
                                    w="full"
                                    h="full"
                                >
                                    <Heading
                                        as="h2"
                                        fontSize={["md", "xl"]}
                                        className="title"
                                        textAlign={"center"}
                                        py={{ base: 4, lg: 6 }}
                                    >
                                        <InertiaChakraLinkOverlay
                                            as={Link}
                                            href={`/category/${link}`}
                                        >
                                            {title}
                                        </InertiaChakraLinkOverlay>
                                    </Heading>
                                    <Text
                                        className="content"
                                        flex={1}
                                        height={"auto"}
                                        display="flex"
                                        alignItems={"center"}
                                        fontSize={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        fontWeight="bold"
                                        px={{ base: 4, lg: 10 }}
                                        opacity="0"
                                        textAlign={"center"}
                                    >
                                        {description}
                                    </Text>
                                </Box>
                            </LinkBox>
                        );
                    })}
            </SimpleGrid>
        </Container>
    );
}
