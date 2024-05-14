import PostPreviewCard from "./PostPreviewCard";
import { Box, Flex, Skeleton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Keyboard, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    return (
        <Swiper
            slidesPerView={1}
            breakpoints={{
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
            }}
            spaceBetween={spacing}
            navigation={true}
            pagination={pagination}
            keyboard={true}
            modules={[Pagination, Navigation, Keyboard, Scrollbar]}
            scrollbar={{
                hide: scrollbar ? false : true,
            }}
            direction={direction ? direction : "horizontal"}
            className={"multi-post-carousel"}
        >
            {children}
            {posts.map((article) => {
                return (
                    <SwiperSlide
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
                    </SwiperSlide>
                );
            })}
            {posts.length <= 0 &&
                [1, 2, 3].map((_) => (
                    <Box {...rest}>
                        <SwiperSlide>
                            <Skeleton rounded="xl" h="300px" />
                        </SwiperSlide>
                    </Box>
                ))}
        </Swiper>
    );
};

export default MultiPostsCarousel;
