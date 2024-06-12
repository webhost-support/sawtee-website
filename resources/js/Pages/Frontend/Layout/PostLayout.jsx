import { Box, useColorModeValue } from "@chakra-ui/react";
import { LightPatternBox } from "@/Components/Frontend/styles/pattern-box";
import PostHeader from "@/Components/Frontend/post/post-header";
import FeaturedMedia from "@/Components/Frontend/post/featured-media";
import { Content } from "@/Components/Frontend/index";
import SocialShare from "@/Components/Frontend/SocialShare";
import readingDuration from "reading-duration";
import PostMeta from "@/Components/Frontend/post/post-meta";
import Section from "@/Components/Frontend/styles/section";

const PostLayout = ({
    children,
    showPattern,
    isProgramPost,
    isNewsletter,
    post,
    featured_image,
    srcSet,
}) => {
    const postHeaderColor = useColorModeValue("gray.700", "gray.200");

    const readingTime = post.content
        ? readingDuration(post.content, {
              emoji: "stopwatch",
              wordsPerMinute: 225,
          })
        : null;

    const shareUrl = isProgramPost
        ? `https://ankursingh.com.np/programme/${post.category.slug}/${post.slug}`
        : `https://ankursingh.com.np/${post.category.slug}/${post.slug}`;

    return (
        <LightPatternBox showPattern={showPattern} pt="10px" pb={"40px"}>
            <Box maxW="5xl" mt={"20px"} mx="auto">
                <PostHeader
                    px={{ base: "32px", md: "3rem" }}
                    color={postHeaderColor}
                    categories={post.category}
                    heading={post.title}
                />
            </Box>

            {/* <PostProgressBar value={scroll} /> */}

            <Box maxW={{ base: "full", md: "3xl", xl: "4xl" }} mx="auto" px={4}>
                {!isProgramPost && featured_image && (
                    <FeaturedMedia
                        src={featured_image}
                        rounded={"xl"}
                        srcSet={srcSet}
                    />
                )}
            </Box>

            {/* Look at the settings to see if we should include the featured image */}
            {isNewsletter && (
                <Box>
                    {children}
                    <SocialShare url={shareUrl} />
                </Box>
            )}

            {!isNewsletter && (
                <Content
                    as={Section}
                    size="md"
                    pb="50px"
                    className="post-content"
                >
                    <PostMeta
                        author={post.author}
                        date={post.published_at}
                        readingTime={readingTime}
                        mt={4}
                    />
                    {children}
                    <SocialShare url={shareUrl} />
                </Content>
            )}
        </LightPatternBox>
    );
};

export default PostLayout;
