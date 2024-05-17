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
    const params = {};
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
            space-between={spacing}
            className={"video-carousel"}
        >
            {posts.map((article) => {
                return (
                    <swiper-slide
                        key={article.id}
                        className="swiper-slide post-slide"
                    ></swiper-slide>
                );
            })}
        </swiper-container>
    );
};

export default VideoCarousel;
