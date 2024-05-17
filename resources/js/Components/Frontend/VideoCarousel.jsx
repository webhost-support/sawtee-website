import {
    AspectRatio,
    Grid,
    GridItem,
    HStack,
    Image,
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
    const params = {
        injectStyles: [
            `
            .mySwiper {
                height: 80%;
                width: 100%;
                }
            `,
            `.mySwiper2 {
                height: 20%;
                box-sizing: border-box;
                padding: 10px 0;
                }
            `,
            `
            .mySwiper2 swiper-slide {
                width: 25%;
                height: 100%;
                opacity: 0.4;
                }
            `,
            `
            .mySwiper2 .swiper-slide-thumb-active {
                opacity: 1;
                }
            `,
        ],
    };
    React.useEffect(() => {
        swiperElRef.current && Object.assign(swiperElRef.current, params);
    }, []);

    return (
        <Grid
            maxW={"8xl"}
            mx="auto"
            gap={10}
            gridTemplateColumns={"repeat(5, 1fr)"}
        >
            <GridItem colSpan={3}>
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view={1}
                    navigation={true}
                    pagination={true}
                    keyboard={true}
                    space-between={spacing}
                    className={"video-carousel"}
                    // style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
                >
                    {posts.map((article) => {
                        return (
                            <swiper-slide
                                key={article.id}
                                className="swiper-slide post-slide"
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
            <GridItem colSpan={2}>
                <swiper-container
                    class="mySwiper2"
                    space-between="10"
                    slides-per-view="4"
                    free-mode="true"
                    watch-slides-progress="true"
                >
                    <VStack>
                        {posts.map((article) => {
                            const media = article.media.filter(
                                (m) =>
                                    m.collection_name === "post-featured-image"
                            )[0];
                            return (
                                <swiper-slide
                                    key={article.id}
                                    className="swiper-slide thumb-slide"
                                >
                                    <HStack spacing={4}>
                                        <Image
                                            maxW={"150px"}
                                            alt={article.title}
                                            src={media.original_url}
                                        />

                                        <Text>{article.title}</Text>
                                    </HStack>
                                </swiper-slide>
                            );
                        })}
                    </VStack>
                </swiper-container>
            </GridItem>
        </Grid>
    );
};

export default VideoCarousel;
