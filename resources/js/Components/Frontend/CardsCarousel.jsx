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
                            <Box rounded={"md"} overflow={"hidden"}>
                                <InertiaChakraLink
                                    href={`/publications/${slide.file.name}`}
                                    target="_blank"
                                    fontWeight="semibold"
                                    fontSize="sm"
                                    textDecor={"underline"}
                                    display={"flex"}
                                    textAlign={"center"}
                                    mb={4}
                                    p={4}
                                    maxW="280px"
                                    rounded={"sm"}
                                    cursor={"pointer"}
                                    color="gray.700"
                                    _dark={{
                                        color: "gray.300",
                                    }}
                                    bg={useColorModeValue(
                                        "white",
                                        "var(--color-darker)"
                                    )}
                                    _hover={{
                                        textUnderlineOffset: "3px",
                                    }}
                                >
                                    {slide.title + " "}
                                    {slide.subtitle && slide.subtitle}
                                </InertiaChakraLink>
                                <Image
                                    border={"1px solid var(--color-text)"}
                                    src={slide.media[0]?.original_url}
                                    alt={slide.title + slide.subtitle}
                                    rounded={"md"}
                                    objectFit="cover"
                                    w="180px"
                                    aspectRatio={3 / 4}
                                    fallbackSrc="/assets/SM-placeholder-300x150.png"
                                />
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
