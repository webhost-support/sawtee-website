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
import { Head, Link } from "@inertiajs/react";
import React from "react";
import Section from "@/Components/Frontend/styles/section";
import SidebarWidget from "@/Components/Frontend/sidebarWidget";
import MainLayout from "../Layout/MainLayout";
import CategoryLayout from "../Layout/CategoryLayout";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";
// import NumberedPagination from "@/Components/NumberedPagination";

export default function Publications({
    category,
    publications,
    infocus,
    sawteeInMedia,
}) {
    const news = sawteeInMedia;
    const contentColor = useColorModeValue(
        "rgba(12, 17, 43, 0.8)",
        "whiteAlpha.800"
    );
    console.log(category);

    return (
        <MainLayout>
            <Head>
                <title>
                    {category.parent
                        ? category.parent.name
                        : null + " | " + category.name}
                </title>
                <meta http-equiv="imagetoolbar" content="no" />
                <meta
                    head-key="description"
                    name="description"
                    content={category.meta_description}
                />
                <meta
                    head-key="imagetoolbar"
                    http-equiv="imagetoolbar"
                    content="no"
                />
                <meta
                    head-key="og:title"
                    property="og:title"
                    content={"SAWTEE | " + category.name}
                />
                <meta
                    head-key="og:type"
                    property="og:type"
                    content="category page"
                />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content={category.meta_description}
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content={
                        category.featured_image
                            ? category.featured_image
                            : "/assets/logo-sawtee.webp"
                    }
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
            </Head>
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
                                spacing={6}
                                columns={{ base: 2, md: 3 }}
                            >
                                {publications.length > 0 ? (
                                    publications.map((publication) => {
                                        return (
                                            <LinkBox
                                                key={publication.id}
                                                pos={"relative"}
                                                role="group"
                                                display={"flex"}
                                                justifyContent={"center"}
                                            >
                                                {
                                                    <InertiaChakraLinkOverlay
                                                        target="_blank"
                                                        href={`/category/publications/${publication.file.name}`}
                                                    >
                                                        <Box
                                                            cursor="pointer"
                                                            height="240px"
                                                            width={"180px"}
                                                            pos="relative"
                                                            rounded="xl"
                                                        >
                                                            <Box
                                                                zIndex={1}
                                                                boxSize="100%"
                                                                position="absolute"
                                                                rounded="xl"
                                                                top="0"
                                                                left="0"
                                                                background="rgba(0,0,0,0.4)"
                                                                transition="background-color ease 0.25s"
                                                                _groupHover={{
                                                                    background:
                                                                        "rgba(0,0,0,0.1)",
                                                                }}
                                                            />
                                                            <Image
                                                                height="280px"
                                                                width="220px"
                                                                position="absolute"
                                                                boxSize="100%"
                                                                objectFit="cover"
                                                                aspectRatio={
                                                                    3 / 4
                                                                }
                                                                alt={
                                                                    publication.title
                                                                }
                                                                rounded="xl"
                                                                border={`1px solid`}
                                                                borderColor={
                                                                    "var(--color-border)"
                                                                }
                                                                top="0"
                                                                left="0"
                                                                src={`${publication.media[0].original_url}`}
                                                            />
                                                        </Box>
                                                    </InertiaChakraLinkOverlay>
                                                }
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
                                                        height="280px"
                                                        width="220px"
                                                        rounded={"xl"}
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
                            {news && (
                                <SidebarWidget
                                    array={news}
                                    title={"SAWTEE in Media"}
                                    link={"/category/sawtee-in-media"}
                                    maxW={"xl"}
                                    mt={12}
                                />
                            )}
                            {infocus && (
                                <SidebarWidget
                                    array={infocus}
                                    title={"Infocus"}
                                    link={"/category/infocus"}
                                    maxW={"xl"}
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
