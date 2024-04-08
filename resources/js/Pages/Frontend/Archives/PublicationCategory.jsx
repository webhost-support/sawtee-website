import {
    Box,
    Grid,
    GridItem,
    Image,
    LinkBox,
    SimpleGrid,
    Skeleton,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Section from "@/Components/Frontend/styles/section";
import SidebarWidget from "@/Components/Frontend/sidebarWidget";
import MainLayout from "../Layout/MainLayout";
import CategoryLayout from "../Layout/CategoryLayout";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";
import WebsiteHead from "@/Components/Frontend/Head";

export default function Publications({ category, publications, infocus, sawteeInMedia }) {
    const contentColor = useColorModeValue(
        "rgba(12, 17, 43, 0.8)",
        "whiteAlpha.800"
    );

    console.log(category);

    return (
        <MainLayout>
            <WebsiteHead
                title={category.meta_title || category.name}
                description={category.meta_description}
                image={
                    category.featured_image
                        ? category.featured_image.original_url
                        : "/assets/logo-sawtee.webp"
                }
            />
            <CategoryLayout
                showBackgroundPattern={false}
                image={`/assets/publications-1-resized.jpg`}
                category={category}
                headingColor={"white"}
            >
                <Section
                    pb="80px"
                    px={{ base: "24px", md: "40px" }}
                    size={"full"}
                    mx="auto"
                    pt="50px"
                    color={contentColor}
                >
                    <Grid
                        templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
                        gap={20}
                        pos={"relative"}
                        placeContent={"center"}
                    >
                        <GridItem colSpan={{ base: 1, lg: 3 }} px={4}>
                            <SimpleGrid
                                spacingX={6}
                                spacingY={12}
                                columns={{ base: 2, md: 3 }}
                            >
                                {publications.length > 0 ? (
                                    publications.map((publication) => {
                                        return (
                                            <LinkBox
                                                key={publication.id}
                                                as="article"
                                                maxW="180px"
                                                mx="auto"
                                                _before={{
                                                    content: `''`,
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: `100%`,
                                                    height: "100%",
                                                    borderRadius:
                                                        "var(--chakra-radii-md)",
                                                    background:
                                                        "rgba(0,0,0,0.1)",
                                                    backgroundBlendMode:
                                                        "overlay",
                                                }}
                                                _hover={{
                                                    _before: {
                                                        background:
                                                            "transparent",
                                                    },
                                                }}
                                            >
                                                <InertiaChakraLinkOverlay
                                                    href={`/category/publications/${publication.file.name}`}
                                                    target="_blank"
                                                >
                                                    <Image
                                                        src={`${publication.media[0].original_url}`}
                                                        alt={publication.title}
                                                        rounded="md"
                                                        objectFit="cover"
                                                        w="180px"
                                                        fallbackSrc="/assets/SM-placeholder-150x150.png"
                                                        aspectRatio={3 / 4}
                                                    />
                                                </InertiaChakraLinkOverlay>
                                            </LinkBox>
                                        );
                                    })
                                ) : (
                                    <>
                                        {[
                                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                                            12,
                                        ].map((item) => {
                                            return (
                                                <Box
                                                    key={`100 + ${item.toString()}`}
                                                >
                                                    <Skeleton
                                                        height="240px"
                                                        width="180px"
                                                        rounded={"md"}
                                                    />
                                                </Box>
                                            );
                                        })}
                                    </>
                                )}
                            </SimpleGrid>
                        </GridItem>

                        <GridItem
                            colSpan={{ base: 1, lg: 2 }}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            className="sidebar"
                        >
                            {sawteeInMedia && (
                                <SidebarWidget
                                    array={sawteeInMedia}
                                    title={"SAWTEE in Media"}
                                    link={"/category/sawtee-in-media"}
                                    maxW={"md"}
                                    mt={12}
                                />
                            )}
                            {infocus && (
                                <SidebarWidget
                                    array={infocus}
                                    title={"Infocus"}
                                    link={"/category/infocus"}
                                    maxW={"md"}
                                    mt={12}
                                    position={"sticky"}
                                    top={"8.5rem"}
                                />
                            )}
                        </GridItem>
                    </Grid>
                </Section>
            </CategoryLayout>
        </MainLayout>
    );
}
