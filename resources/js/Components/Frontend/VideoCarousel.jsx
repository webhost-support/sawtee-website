import {
    AspectRatio,
    Grid,
    GridItem,
    HStack,
    Image,
    Skeleton,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";

// import required modules
import "swiper/css";
import "swiper/css/scrollbar";

const VideoCarousel = ({
    posts,
    spacing,
    pagination,
    scrollbar,
    showCategoryTag = false,
    direction,
    children,
    ...rest
}) => {
    const swiperElRef = React.useRef(null);

    return (
        <Grid
            maxW={"8xl"}
            mx="auto"
            gap={10}
            gridTemplateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
        >
            <GridItem colSpan={{ base: 1, lg: 3 }}>
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view={1}
                    pagination={pagination}
                    keyboard={true}
                    space-between={spacing}
                    thumbs-swiper=".thumbs-swiper"
                    class={"video-carousel"}
                    {...rest}
                >
                    {posts.map((article) => {
                        return (
                            <swiper-slide
                                key={article.id}
                                class="swiper-slide video-slide"
                            >
                                <iframe
                                    width="100%"
                                    height="400px"
                                    src={article.link}
                                    title={article.title}
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </swiper-slide>
                        );
                    })}
                </swiper-container>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
                <swiper-container
                    class="thumbs-swiper"
                    space-between="10"
                    slides-per-view="4"
                    direction="vertical"
                    free-mode="true"
                    watch-slides-progress="true"
                >
                    {posts.map((article) => {
                        const media = article.media.filter(
                            (m) => m.collection_name === "post-featured-image"
                        )[0];
                        return (
                            <swiper-slide key={article.id} class="thumb-slide">
                                <HStack w="full" spacing={4} cursor="pointer">
                                    {media ? (
                                        <Image
                                            maxW={"120px"}
                                            alt={article.title}
                                            src={media.original_url}
                                            aspectRatio={5 / 3}
                                            rounded="md"
                                        />
                                    ) : (
                                        <Skeleton
                                            maxW="120px"
                                            w="full"
                                            aspectRatio={5 / 3}
                                            rounded="md"
                                        />
                                    )}

                                    <Text
                                        fontSize={"sm"}
                                        fontWeight={"semibold"}
                                    >
                                        {article.title}
                                    </Text>
                                </HStack>
                            </swiper-slide>
                        );
                    })}
                </swiper-container>
            </GridItem>
        </Grid>
    );
};

export default VideoCarousel;
