import React, { useRef, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Title } from "@/Components/Frontend/index";
import { Link } from "@inertiajs/react";
import PostPreviewCard from "./PostPreviewCard";

// import required modules

const MultiPostsCarousel = ({
    posts,
    itemsToShow = 3,
    spacing,
    pagination,
    ...rest
}) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            pagination: pagination ? pagination : false,
            injectStyles: [
                `
                .swiper-button-prev {
                    left: auto !important;
                    right: 60px !important;
                }
                .swiper-button-next,
                .swiper-button-prev {
                    top: 40px !important;
                    background-color: transparent;
                    background-size: 20px;
                    padding-inline: 8px;
                    border-radius: 5px;
                    border: 2px solid var(--color-text);
                    color: var(--color-text);
                    width: 24px !important;
                    height: 35px !important;
                }
                .swiper-button-next > svg ,
                .swiper-button-prev > svg{
                    height: 20px !important;
                    color: var(--color-text);
                }
            `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);
    return (

            
            <swiper-container
                ref={swiperRef}
                init="false"
                slides-per-view={itemsToShow}
                space-between={spacing}
                navigation={true}
                pagination
                slides-per-group={itemsToShow}
                centered={true}
                keyboard={true}
                class={"multi-post-carousel"}
            >
                {posts.map((article) => {
                    return (
                        <swiper-slide
                            key={article.id}
                            class="post-slide"
                        >
                            <PostPreviewCard
                                post={article}
                                showImage={false}
                                {...rest}
                            />
                        </swiper-slide>
                    );
                })}
                {posts.length <= 0 &&
                    [1, 2, 3].map((_) => (
                        <swiper-slide>
                            <Skeleton rounded="xl" h="300px" />
                        </swiper-slide>
                    ))}
            </swiper-container>
    );
};

export default MultiPostsCarousel;
