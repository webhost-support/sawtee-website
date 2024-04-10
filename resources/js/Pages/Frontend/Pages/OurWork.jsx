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
    Collapse,
    Button,
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
        <>
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
                    fontWeight="bold"
                    mb={12}
                    textAlign="center"
                >
                    Thematic Areas
                </Heading>

                {intro && (
                    <Box
                        textAlign="center"
                        fontSize={["sm", "md"]}
                        mb={20}
                        dangerouslySetInnerHTML={{ __html: intro.description }}
                    />
                )}

                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    placeItems="center"
                    spacing={10}
                    mb={4}
                    px={8}
                >
                    {themes.map((theme) => {
                        const [show, setShow] = useState(false);
                        const handleToggle = () => setShow(!show);
                        return (
                            <Box
                                key={theme.title}
                                bg={cardBackground}
                                p={6}
                                rounded="lg"
                                pos="relative"
                                role="group"
                                cursor={"pointer"}
                            >
                                <Heading
                                    as="h3"
                                    mb={3}
                                    fontWeight="semibold"
                                    fontSize={["md", "lg"]}
                                >
                                    {theme.title}
                                </Heading>
                                <Collapse startingHeight={50} in={show}>
                                    {theme.description}
                                </Collapse>
                                <Button
                                    size="sm"
                                    onClick={handleToggle}
                                    variant={"link"}
                                >
                                    Show {show ? "Less" : "More"}
                                </Button>
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
                        sectors.map(
                            ({ id, title, description, media, link }) => {
                                return (
                                    <LinkBox
                                        className="cards"
                                        key={id}
                                        boxShadow={"lg"}
                                        shadow={"md"}
                                        rounded="xl"
                                        maxW="full"
                                        overflow={"hidden"}
                                        position="relative"
                                        aspectRatio={"4/3"}
                                        minH="500px"
                                        role="group"
                                    >
                                        <Image
                                            objectFit={"cover"}
                                            aspectRatio={"4/3"}
                                            w="full"
                                            h="100%"
                                            src={
                                                media[0]
                                                    ? media[0].original_url
                                                    : "/assets/SM-placeholder-1024x512.png"
                                            }
                                        />
                                        <Box
                                            backgroundColor={
                                                "hsl(0, 0%,  0%, 0.2)"
                                            }
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
                                                py={{ base: 4, lg: 8 }}
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
                            }
                        )}
                </SimpleGrid>
            </Container>
        </>
    );
}
