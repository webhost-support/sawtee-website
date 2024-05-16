import PostPreviewCard from "./PostPreviewCard";
import { Box, Flex, Skeleton } from "@chakra-ui/react";

// import required modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

const MultiPostsCarousel = ({
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
    React.useEffect(() => {
        if (swiperElRef.current !== null)
            Object.assign(swiperElRef.current, {
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                },
            });
        swiperElRef.current.initialize();
    }, []);

    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view={1}
            navigation={true}
            pagination={pagination}
            keyboard={true}
            scrollbar={scrollbar ? true : false}
            // breakpoints={breakpoints}
            space-between={spacing}
            // direction={direction ? direction : "horizontal"}
            className={"multi-post-carousel"}
            id="multi-post-slider"
        >
            {children}
            {posts.map((article) => {
                return (
                    <swiper-slide
                        key={article.id}
                        className="swiper-slide post-slide"
                    >
                        <Flex {...rest}>
                            <PostPreviewCard
                                post={article}
                                showImage={false}
                                showCategoryTag={showCategoryTag}
                                maxW="md"
                            />
                        </Flex>
                    </swiper-slide>
                );
            })}
            {posts.length <= 0 &&
                [1, 2, 3].map((_) => (
                    <Box {...rest}>
                        <swiper-slide>
                            <Skeleton rounded="xl" h="300px" />
                        </swiper-slide>
                    </Box>
                ))}
        </swiper-container>
    );
};

export default MultiPostsCarousel;
