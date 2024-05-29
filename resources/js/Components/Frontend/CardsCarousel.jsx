import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, EffectCards } from "swiper/modules";
import { Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "../../../css/card-carousel.css";
import InertiaChakraLink from "./styles/inertia-chakra-link";

const CardsCarousel = ({ slides, navigation }) => {
    return (
        <Swiper
            effect="cards"
            grabCursor={true}
            keyboard={{
                enabled: true,
            }}
            navigation={navigation}
            modules={[Keyboard, EffectCards, Navigation]}
            className="card-swiper"
        >
            {slides &&
                slides.length > 0 &&
                slides.map((slide) => {
                    return (
                        <SwiperSlide
                            key={slide.id}
                            className="card-swiper-slide"
                        >
                            <Box
                                rounded={"md"}
                                overflow={"hidden"}
                                shadow={"2xl"}
                                border={"1px solid var(--color-text)"}
                            >
                                <Image
                                    src={slide.media[0]?.original_url}
                                    alt={slide.title + slide.subtitle}
                                    roundedTop={"md"}
                                    objectFit="cover"
                                    aspectRatio={3 / 4}
                                    fallbackSrc="/assets/SM-placeholder-300x150.png"
                                />
                                <Flex
                                    p={4}
                                    alignItems="center"
                                    justifyContent={"space-between"}
                                    roundedBottom={"sm"}
                                    cursor={"pointer"}
                                    w="full"
                                    borderTop={"1px"}
                                    color="gray.700"
                                    _dark={{
                                        color: "gray.300",
                                    }}
                                    bg={useColorModeValue(
                                        "gray.50",
                                        "var(--color-darker)"
                                    )}
                                >
                                    <InertiaChakraLink
                                        href={`/publications/${slide.file.name}`}
                                        target="_blank"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                        noOfLines={1}
                                        textDecor={"underline"}
                                        _hover={{
                                            textUnderlineOffset: "3px",
                                        }}
                                    >
                                        {slide.title + " "}
                                        {slide.subtitle && slide.subtitle}
                                    </InertiaChakraLink>
                                </Flex>
                            </Box>
                        </SwiperSlide>
                    );
                })}
            {!slides ||
                (slides.length == 0 &&
                    ["1", "2", "3"].map((item) => {
                        return (
                            <SwiperSlide
                                className="card-swiper-slide"
                                key={"Item " + item}
                            >
                                {"Book " + item}
                            </SwiperSlide>
                        );
                    }))}
        </Swiper>
    );
};

export default CardsCarousel;
