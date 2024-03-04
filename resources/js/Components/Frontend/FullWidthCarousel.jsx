import { Box, Stack, Text, Image, AspectRatio } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
const FullWidthCarousel = ({ slides, loop = true }) => {
    const swiperRef = useRef(null);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    };

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            pagination: pagination,
            navigatioin: true,
            injectStyles: [
                `
                    .swiper-pagination-bullet {
                        width: 1.125rem !important;
                        height: 1.125rem !important;
                        text-align: center;
                        line-height: 1.5rem;
                        font-size: 12px;
                        opacity: 1;
                        background: rgba(0, 0, 0, 0.4);
                    }

                    .swiper-pagination-bullet-active {
                        background: #eee;
                    }
                    .swiper-button-prev {
                        left: 1rem !important;
                    }
                    .swiper-button-next {
                        right: 1rem !important;
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        bottom: 50% !important;
                        background-color: transparent;
                        background-size: 1.5rem;
                        padding-inline: 8px;
                        border-radius: 5px;
                        border: 2px solid var(--color-text);
                        width: 2rem !important;
                        height: 2.75rem !important;
                    }
                    .swiper-button-next > svg ,
                    .swiper-button-prev > svg{
                        height: 1.5rem !important;
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
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            lazy={true}
            keyboard={true}
            effect="fade"
            loop={loop}
            class="carousel"
        >
            {slides.map((slide) => (
                <swiper-slide key={slide.id}>
                    <Box
                        pos="relative"
                        _before={{
                            content: `''`,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: `100%`,
                            height: "100%",
                            background: "rgba(0,0,0,0.3)",
                            backgroundBlendMode: "multiply",
                        }}
                        maxH="600px"
                    >
                        <Image
                            src={`${slide.media[0].original_url}`}
                            alt={slide.title}
                            objectFit={"cover"}
                            boxSize={'full'}
                        />
                        <Stack
                            p="8px 12px"
                            pos="absolute"
                            bottom="1.5rem"
                            textAlign="center"
                            mb="8"
                            color="white"
                            zIndex={1}
                        >
                            <Text fontSize="xl">{slide.title}</Text>
                            <Text fontSize="md">{slide.subtitle}</Text>
                        </Stack>
                    </Box>
                </swiper-slide>
            ))}
        </swiper-container>
    );
};

export default FullWidthCarousel;
