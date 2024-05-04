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
                                rounded={"sm"}
                                overflow={"hidden"}
                                bg={useColorModeValue(
                                    "white",
                                    "var(--color-darker)"
                                )}
                                border={"1px"}
                                borderColor="black"
                            >
                                <Box
                                    aspectRatio={3 / 4}
                                    borderBottom={"2px"}
                                    borderColor="black"
                                >
                                    <Image
                                        src={slide.media[0].original_url}
                                        alt={slide.title + slide.subtitle}
                                        roundedTop={"sm"}
                                        objectFit="cover"
                                    />
                                </Box>
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
                                >
                                    <InertiaChakraLink
                                        href={`/publications/${slide.file.name}`}
                                        target="_blank"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        {slide.title + " " + slide.subtitle}
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
