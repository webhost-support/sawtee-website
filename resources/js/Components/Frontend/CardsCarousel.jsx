import React from "react";
import { Image, Box, useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
// import required modules
import { Keyboard, Navigation, EffectCards } from "swiper/modules";
import InertiaChakraLink from "./styles/inertia-chakra-link";

const CardsCarousel = ({ slides, navigation = false }) => {
    const ImageBorderColor = useColorModeValue("gray.900", "whiteAlpha.900");

    return (
        <Swiper
            effect="cards"
            grabCursor={true}
            keyboard={{
                enabled: true,
            }}
            navigation={navigation}
            modules={[Keyboard, Navigation, EffectCards]}
        >
            {slides.map((slide) => {
                return (
                    <>
                        <SwiperSlide key={slide.id}>
                            <Image
                                src={slide.media[0].original_url}
                                alt={slide.title}
                                title={slide.title}
                                rounded={"md"}
                                border={`1px solid`}
                                borderColor={ImageBorderColor}
                                objectFit="cover"
                                w="160px"
                                h="220px"
                            />
                            {/* <InertiaChakraLink
                                mt={4}
                                target="_blank"
                                href={`/publications/${slide.file.name}`}
                            >
                                Open Pdf
                            </InertiaChakraLink> */}
                        </SwiperSlide>
                    </>
                );
            })}
        </Swiper>
    );
};

export default CardsCarousel;
