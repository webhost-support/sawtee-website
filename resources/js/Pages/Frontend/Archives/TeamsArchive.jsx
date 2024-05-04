import { GlassBox } from "@/Components/Frontend/index";
import {
    Grid,
    GridItem,
    VStack,
    LinkBox,
    SimpleGrid,
    Center,
    Heading,
    Text,
    useColorModeValue,
    Box,
    Image,
    Icon,
    UnorderedList,
    Img,
    Link,
    ListItem,
} from "@chakra-ui/react";
import React from "react";
import Section from "@/Components/Frontend/styles/section";
import SidebarWidget from "@/Components/Frontend/sidebarWidget";
import MainLayout from "../Layout/MainLayout";
import SubscriptionCard from "@/Components/Frontend/subscriptionCard";
import WebsiteHead from "@/Components/Frontend/Head";
import { PageLayout } from "../Layout/PageLayout";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamsArchive = ({
    category,
    teams,
    infocus,
    sawteeInMedia,
    showSubscriptionBox = true,
    featured_image,
    srcSet,
}) => {
    console.log(teams);
    if (!teams.data || teams.data.length <= 0) return "No posts found";

    return (
        <MainLayout>
            <WebsiteHead
                title={
                    category.meta_title ? category.meta_title : category.name
                }
                description={category.meta_description}
                image={
                    featured_image
                        ? featured_image.original_url
                        : "/assets/logo-sawtee.webp"
                }
            />
            <PageLayout
                featured_image={featured_image}
                srcSet={srcSet}
                title={category.name}
                showBackgroundPattern={false}
            >
                <Section
                    pb="80px"
                    py={{ base: "24px", lg: "80px" }}
                    px={{ base: "32px", lg: "80px" }}
                    size={"full"}
                    mx="auto"
                >
                    <Grid
                        templateColumns={{ base: "1fr", xl: "repeat(6, 1fr)" }}
                        gap={10}
                        pos={"relative"}
                        placeContent={"center"}
                    >
                        <GridItem
                            colSpan={{ base: 1, xl: 2 }}
                            className="sidebar"
                        >
                            <GlassBox
                                as={VStack}
                                maxW={["md", "lg", "xl"]}
                                py="4"
                                px="8"
                                rounded="xl"
                                minH="700px"
                                align="center"
                                justify={"center"}
                                bg={useColorModeValue(
                                    "primary.400",
                                    "primary.700"
                                )}
                                border="none"
                            >
                                <Heading as="h2">Meet Our Team</Heading>
                                <Text>Get to know our experts better</Text>
                            </GlassBox>
                        </GridItem>
                        <GridItem colSpan={{ base: 1, xl: 4 }} px={4}>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}>
                                {teams.data.map((post) => {
                                    const avatar = post.media.filter(
                                        (media) =>
                                            media.collection_name === "avatar"
                                    )[0];
                                    return (
                                        <Box
                                            key={post.id}
                                            className="our-team"
                                            borderLeft={"8px solid"}
                                            borderBottom={"8px solid"}
                                            borderColor={useColorModeValue(
                                                "primary.700",
                                                "primary.500"
                                            )}
                                            role="group"
                                            boxShadow={"lg"}
                                        >
                                            <Box
                                                pos={"relative"}
                                                textAlign={"center"}
                                                className="team-inmage"
                                            >
                                                <Image
                                                    src={avatar.original_url}
                                                    w="full"
                                                    h="full"
                                                />
                                                <Text
                                                    position={"absolute"}
                                                    w="full"
                                                    h="full"
                                                    inset="0"
                                                    fontSize={"md"}
                                                    color="#fff"
                                                    lineHeight="30px"
                                                    padding="40px 50px"
                                                    opacity="0"
                                                    backgroundColor="rgba(59, 51, 106, 0.6)"
                                                    transition="all 0.5s ease 0s"
                                                    _groupHover={{
                                                        opacity: "1",
                                                    }}
                                                >
                                                    {post.bio}
                                                </Text>
                                                <UnorderedList
                                                    className="social"
                                                    padding="10px 0 0 0"
                                                    margin=" 0"
                                                    list-style="none"
                                                    position="absolute"
                                                    top="40px"
                                                    left="-27px"
                                                    background="#3b336a"
                                                    text-align="center"
                                                    transform="translate(25px, 0px) rotateY(90deg)"
                                                    transition="all 0.5s ease 0s"
                                                    _groupHover={{
                                                        transform:
                                                            "translate(0px, 0px) rotateY(0deg)",
                                                    }}
                                                >
                                                    <ListItem>
                                                        <Link href="#">
                                                            <Icon
                                                                as={FaFacebook}
                                                            />
                                                        </Link>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Link href="#">
                                                            <Icon
                                                                as={FaTwitter}
                                                            />
                                                        </Link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Link href="#">
                                                            <Icon
                                                                as={FaLinkedin}
                                                            />
                                                        </Link>
                                                    </ListItem>
                                                </UnorderedList>
                                            </Box>
                                            <Box className="team-info" p="20px">
                                                <Heading
                                                    as="h3"
                                                    fontSize="xl"
                                                    textTransform={"capitalize"}
                                                >
                                                    {post.name}
                                                    {", "}
                                                    {post.designation}
                                                </Heading>
                                                <Text
                                                    as="span"
                                                >
                                                    {post.email}
                                                </Text>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </SimpleGrid>
                        </GridItem>
                    </Grid>
                </Section>
            </PageLayout>
        </MainLayout>
    );
};

export default TeamsArchive;
