import React from "react";
import PostPreviewCard from "./PostPreviewCard";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Skeleton,
    useBreakpoint,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// import required modules
import "swiper/css";
import "swiper/css/scrollbar";

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
    const windowSize = useBreakpoint();
    const swiperElRef = React.useRef(null);
    const params = {
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
    };
    React.useEffect(() => {
        if (swiperElRef.current !== null)
            Object.assign(swiperElRef.current, params);
    }, [windowSize]);

    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view={1}
            navigation={false}
            pagination={pagination}
            keyboard={true}
            scrollbar={scrollbar ? true : false}
            space-between={spacing}
            grab-cursor={true}
            direction={direction ? direction : "horizontal"}
            class={"multi-post-carousel"}
            id="multi-post-slider"
        >
            <div slot="container-start">
                <HStack w="full" justify={"space-between"} spacing={4}>
                    {children}
                    <HStack spacing={4}>
                        <IconButton
                            id="prev-button"
                            colorScheme="primary"
                            variant="outline"
                            icon={<ChevronLeftIcon w="8" h="8" />}
                            aria-label="previous"
                            onClick={() =>
                                swiperElRef.current?.swiper.slidePrev()
                            }
                        />

                        <IconButton
                            id="next-button"
                            colorScheme="primary"
                            variant="outline"
                            icon={<ChevronRightIcon w="8" h="8" />}
                            aria-label="next"
                            onClick={() =>
                                swiperElRef.current?.swiper.slideNext()
                            }
                        />
                    </HStack>
                </HStack>
            </div>
            {posts.map((article) => {
                return (
                    <swiper-slide
                        key={article.id}
                        class="swiper-slide post-slide"
                    >
                        <Flex {...rest} justify="center">
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
                [1, 2, 3].map((item) => (
                    <Box {...rest} key={item}>
                        <swiper-slide class="swiper-slide post-slide">
                            <Skeleton rounded="xl" h="300px" />
                        </swiper-slide>
                    </Box>
                ))}
        </swiper-container>
    );
};

export default MultiPostsCarousel;
