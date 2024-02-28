import React, { useRef, useEffect } from "react";
import {
    Image,
    Box,
    LinkBox,
    Skeleton,
    useColorModeValue,
} from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import InertiaChakraLinkOverlay from "./styles/inertia-chakra-link-overlay";
// import required modules

const MultiItemCarousel = ({
    slides,
    itemsToShow = 3,
    className,
    spacing = 30,
    ...rest
}) => {
    const ImageBorderColor = useColorModeValue("gray.900", "whiteAlpha.900");
    const swiperRef = useRef(null);


    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            injectStyles: [
                `
                .swiper {
                    padding-top: 65px;
                }
                .swiper-button-prev {
                    left: auto !important;
                    right: 60px !important;
                }
                .swiper-button-next,
                .swiper-button-prev {
                    top: 25px !important;
                    background-color: transparent;
                    background-size: 20px;
                    padding-inline: 8px;
                    border-radius: 5px;
                    border: 2px solid var(--color-text);
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
        <Box {...rest}>
            <swiper-container
                ref={swiperRef}
                init="false"
                slides-per-view={3}
                space-between={spacing}
                navigation={true}
                slides-per-group={3}
                centered={true}
                keyboard={true}
                class={"multi-item-carousel " + className}
            >
                {slides.length >= 1 &&
                    slides.map((slide) => {
                        return (
                            <swiper-slide key={slide.id}>
                                <LinkBox
                                    pos={"relative"}
                                    maxW="140px"
                                    mx="auto"
                                    _before={{
                                        content: `''`,
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: `100%`,
                                        height: "100%",
                                        borderRadius: "15px",
                                        background: "rgba(0,0,0,0.3)",
                                        backgroundBlendMode: "overlay",
                                    }}
                                    _hover={{
                                        _before: {
                                            background: "transparent",
                                        },
                                    }}
                                >
                                    <InertiaChakraLinkOverlay
                                        title={slide.title}
                                        href={
                                            slide.file
                                                ? `/publications/${slide.file.name}`
                                                : "#"
                                        }
                                        target="_blank"
                                    >
                                        <Image
                                            src={
                                                slide.media
                                                    ? `${slide.media[0].original_url}`
                                                    : ""
                                            }
                                            alt={slide.title}
                                            title={slide.title}
                                            rounded="xl"
                                            border={`1px solid`}
                                            borderColor={ImageBorderColor}
                                            objectFit="cover"
                                            aspectRatio={3 / 4}
                                            w="140px"
                                            h="200px"
                                        />
                                    </InertiaChakraLinkOverlay>
                                </LinkBox>
                            </swiper-slide>
                        );
                    })}
                {slides.length <= 0 &&
                    [1, 2, 3, 4, 5, 6].map((item) => (
                        <swiper-slide key={`${item}+1`}>
                            <Skeleton
                                rounded="xl"
                                startColor="primary.50"
                                endColor="primary.200"
                                w="140px"
                                h="200px"
                                mx="auto"
                            />
                        </swiper-slide>
                    ))}
            </swiper-container>
        </Box>
    );
};

export default MultiItemCarousel;
