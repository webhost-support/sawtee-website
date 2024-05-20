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
    // const params = {

    // };
    // React.useEffect(() => {
    //     swiperElRef.current && Object.assign(swiperElRef.current, params);
    // }, [posts]);

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
                    // style={{
                    //     swiperNavigationColor: "#fff",
                    //     swiperPaginationColor: "#fff",
                    // }}
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
                                    maxWidth="700px"
                                    height="400px"
                                    src={article.link}
                                    title={article.title}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    // referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
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
                                <HStack w="full" spacing={4}>
                                    {media ? (
                                        <Image
                                            maxW={"150px"}
                                            alt={article.title}
                                            src={media.original_url}
                                            aspectRatio={5 / 3}
                                            rounded="md"
                                        />
                                    ) : (
                                        <Skeleton
                                            maxW="150px"
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
