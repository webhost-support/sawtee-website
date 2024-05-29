import { Box } from "@chakra-ui/react";
import { LightPatternBox } from "@/Components/Frontend/styles/pattern-box";
import PostHeader from "@/Components/Frontend/post/post-header";
import Section from "@/Components/Frontend/styles/section";
import FeaturedMedia from "@/Components/Frontend/post/featured-media";
import { Content } from "@/Components/Frontend/index";
import SocialShare from "@/Components/Frontend/SocialShare";
import readingDuration from "reading-duration";
import PostMeta from "@/Components/Frontend/post/post-meta";

const PostLayout = ({
    children,
    showPattern,
    isProgramPost,
    isNewsletter,
    post,
    featured_image,
    srcSet,
}) => {
    const postHeaderColor = "var(--color-text)";

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
            <Box maxW="5xl" mx="auto">
                <PostHeader
                    mt={"20px"}
                    px={{ base: "32px", md: "3rem" }}
                    color={postHeaderColor}
                    categories={post.category}
                    heading={post.title}
                />
            </Box>

            {/* <PostProgressBar value={scroll} /> */}

            {/* Look at the settings to see if we should include the featured image */}
            <Box maxW={"5xl"} mx="auto" px={4}>
                {!isProgramPost && featured_image && (
                    <FeaturedMedia
                        src={featured_image}
                        rounded={"xl"}
                        srcSet={srcSet}
                    />
                )}

                <PostMeta
                    author={post.author}
                    date={post.published_at}
                    readingTime={readingTime}
                />

                {isNewsletter && (
                    <Box>
                        {children}
                        <SocialShare url={shareUrl} />
                    </Box>
                )}

                {!isNewsletter && (
                    <Content
                        as={Section}
                        px={{ base: "1.5rem", md: "3rem" }}
                        size={"lg"}
                        pb="50px"
                        className="post-content"
                    >
                        {children}
                        <SocialShare url={shareUrl} />
                    </Content>
                )}
            </Box>
        </LightPatternBox>
    );
};

export default PostLayout;
