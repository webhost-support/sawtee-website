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
    itemsToShow = 3,
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
            slidesPerView={"auto"}
            spaceBetween={spacing}
            navigation={true}
            pagination={pagination}
            slidesPerGroup={itemsToShow}
            keyboard={true}
            modules={[Pagination, Navigation, Keyboard, Scrollbar]}
            scrollbar={ scrollbar ? {
                hide: false,
            } : null}
            direction={direction ? direction : "horizontal"}
            className={"multi-post-carousel"}
        >
            {children}
            {posts.map((article) => {
                return (
                    <SwiperSlide key={article.id} className="post-slide">
                        <Flex {...rest}>
                            <PostPreviewCard
                                post={article}
                                showImage={false}
                                showCategoryTag={showCategoryTag}
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
