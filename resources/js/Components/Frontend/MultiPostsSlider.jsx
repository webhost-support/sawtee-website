import React from "react";
import { HStack, IconButton, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// import required modules
import "swiper/css";
import "swiper/css/scrollbar";
import { ExploreButton } from ".";

const MultiPostsCarousel = ({
    spacing,
    pagination,
    scrollbar,
    showCategoryTag,
    direction,
    text,
    link,
    children,
    ...rest
}) => {
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
    }, []);

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
                            colorScheme="gray"
                            variant="outline"
                            icon={<ChevronLeftIcon w="5" h="5" />}
                            aria-label="previous button"
                            onClick={() =>
                                swiperElRef.current?.swiper.slidePrev()
                            }
                            isDisabled={swiperElRef.current?.swiper.isBeginning}
                            size={"sm"}
                        />

                        <IconButton
                            id="next-button"
                            colorScheme="gray"
                            variant="outline"
                            icon={<ChevronRightIcon w="5" h="5" />}
                            aria-label="next button"
                            onClick={() =>
                                swiperElRef.current?.swiper.slideNext()
                            }
                            isDisabled={swiperElRef.current?.swiper.isEnd}
                            size={"sm"}
                        />
                    </HStack>

                    <ExploreButton
                        size={["xs", "sm"]}
                        text={text}
                        px={10}
                        link={link}
                    />
                </HStack>
            </div>
            <Box {...rest}>{children}</Box>
        </swiper-container>
    );
};

export default MultiPostsCarousel;
