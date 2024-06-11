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
    showCategoryTag,
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
                    <HStack
                        spacing={4}
                        justify={{ base: "justify-between", md: "end" }}
                    >
                        <IconButton
                            id="prev-button"
                            colorScheme="primary"
                            variant="outline"
                            icon={<ChevronLeftIcon w="5" h="5" />}
                            aria-label="previous button"
                            onClick={() =>
                                swiperElRef.current?.swiper.slidePrev()
                            }
                            size={"sm"}
                        />

                        <IconButton
                            id="next-button"
                            colorScheme="primary"
                            variant="outline"
                            icon={<ChevronRightIcon w="5" h="5" />}
                            aria-label="next button"
                            onClick={() =>
                                swiperElRef.current?.swiper.slideNext()
                            }
                            size={"sm"}
                        />
                    </HStack>
                    {children}
                </HStack>
            </div>
            {posts.map((article) => {
                const media = publication.media.length
                    ? publication.media.filter(
                          (media) =>
                              media.collection_name ===
                              "publication_featured_image"
                      )[0].original_url
                    : "/assets/SM-placeholder-150x150.png";
                return (
                    <swiper-slide
                        key={article.id}
                        class="swiper-slide post-slide"
                    >
                        <Flex {...rest} justify="center">
                            <Image
                                src={media}
                                alt={article.title}
                                rounded="sm"
                                aspectRatio={3 / 4}
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
