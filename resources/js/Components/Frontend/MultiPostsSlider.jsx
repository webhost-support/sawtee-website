import PostPreviewCard from "./PostPreviewCard";
import { Box, Skeleton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MultiPostsCarousel = ({
    posts,
    itemsToShow = 3,
    spacing,
    pagination,
    showCategoryTag = false,
}) => {
    return (
        <Swiper
            slidesPerView={itemsToShow}
            spaceBetween={spacing}
            navigation={true}
            pagination={true}
            slidesPerGroup={itemsToShow}
            keyboard={true}
            modules={[Pagination, Navigation, Keyboard]}
            class={"multi-post-carousel"}
        >
            {posts.map((article) => {
                return (
                    <SwiperSlide key={article.id} class="post-slide">
                        <PostPreviewCard
                            post={article}
                            showImage={false}
                            showCategoryTag={showCategoryTag}
                        />
                    </SwiperSlide>
                );
            })}
            {posts.length <= 0 &&
                [1, 2, 3].map((_) => (
                    <SwiperSlide>
                        <Skeleton rounded="xl" h="300px" />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default MultiPostsCarousel;
