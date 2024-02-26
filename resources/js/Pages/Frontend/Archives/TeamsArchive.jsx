import { Box, LinkBox, Text, Heading, Stack } from "@chakra-ui/react";
import { ExploreButton, GlassBox } from "@/Components/Frontend/index";
import { formatDate } from "@/Utils/helpers";
import { PostImageWithOverlay } from "@/Components/Frontend/featured-post/components";
import { Link } from "@inertiajs/react";
import InertiaChakraLinkOverlay from "@/Components/Frontend/styles/inertia-chakra-link-overlay";

const TeamsArchive = ({ posts, headingColor, textColor }) => {
    if (!posts.data || posts.data.length <= 0) return "No posts found";

    return posts.data.map((post) => {
        const featured_image = post.media.filter(
            (media) => media.collection_name === "post-featured-image"
        )[0];
        return (
            <GlassBox
                key={post.id}
                as="article"
                spacing={4}
                role="group"
                shadow="xl"
                maxW="2xl"
            >
                <LinkBox>

                </LinkBox>
            </GlassBox>
        );
    });
};

export default TeamsArchive;
