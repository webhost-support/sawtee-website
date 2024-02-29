import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { LightPatternBox } from "@/Components/Frontend/styles/pattern-box";
import PostHeader from "@/Components/Frontend/post/post-header";
import Section from "@/Components/Frontend/styles/section";
import FeaturedMedia from "@/Components/Frontend/post/featured-media";
import { Content } from "@/Components/Frontend/index";
import PostCategories from "@/Components/Frontend/post/post-categories";

const PostLayout = ({
    children,
    showPattern,
    isProgramPost,
    isNewsletter,
    post,
}) => {
    const postHeaderColor = useColorModeValue("gray.600", "whiteAlpha.600");
    const featured_media = post.media.filter(
        (m) => m.collection_name === "post-featured-image"
    )[0];
    // const srcSet = Object.values(
    //     featured_media.responsive_images.responsive.urls
    // );
    return (
        <LightPatternBox showPattern={showPattern} pb={"40px"}>
            {isProgramPost ? (
                <Box pb={{ base: "2rem", lg: "50px" }} maxW="5xl" mx="auto">
                    <Box
                        mt={{ base: "20px", lg: "4rem" }}
                        px={{ base: "32px", md: "3rem" }}
                    >
                        <PostCategories
                            color="black"
                            category={post.category}
                            justifyContent="center"
                        />

                        <Heading
                            fontWeight="bold"
                            size={"2xl"}
                            mt="30px"
                            mb={{ base: "20px", lg: "32px" }}
                            textTransform="uppercase"
                            textAlign="center"
                            dangerouslySetInnerHTML={{ __html: post.title }}
                        />
                    </Box>
                </Box>
            ) : (
                <Box pb={{ base: "2rem", lg: "50px" }} maxW="5xl" mx="auto">
                    <PostHeader
                        mt={{ base: "20px", lg: "4rem" }}
                        px={{ base: "32px", md: "3rem" }}
                        color={postHeaderColor}
                        categories={post.category}
                        heading={post.title}
                        author={post.author}
                        date={post.published_at}
                    />
                </Box>
            )}

            {/* <PostProgressBar value={scroll} /> */}

            {/* Look at the settings to see if we should include the featured image */}
            <Box maxW={isNewsletter ? "full" : "4xl"} mx="auto">
                {featured_media != null && (
                    <FeaturedMedia
                        src={featured_media.original_url}
                        rounded={"xl"}
                        // srcSet={srcSet}
                    />
                )}

                <Content
                    as={Section}
                    px={{ base: "1rem", md: "2rem" }}
                    size={isNewsletter ? "full" : "lg"}
                    pb="80px"
                >
                    {children}
                </Content>
            </Box>
        </LightPatternBox>
    );
};

export default PostLayout;
