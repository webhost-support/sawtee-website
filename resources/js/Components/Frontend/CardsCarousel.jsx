import React from "react";
import { Image, Box, useColorModeValue, Skeleton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "../../../css/card-carousel.css";
// import required modules
import { Keyboard, Navigation, EffectCards } from "swiper/modules";

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
            modules={[Keyboard, EffectCards]}
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
                            <Image
                                src={slide.media[0].original_url}
                                alt={slide.title}
                                title={slide.title}
                                rounded={"md"}
                                border={`1px solid`}
                                borderColor={ImageBorderColor}
                                objectFit="cover"
                                // w="160px"
                                // h="220px"
                            />
                            {/* <InertiaChakraLink
                                mt={4}
                                target="_blank"
                                href={`/publications/${slide.file.name}`}
                            >
                                Open Pdf
                            </InertiaChakraLink> */}
                        </SwiperSlide>
                    );
                })}
            {!slides &&
                [1, 2, 3, 4, 5, 6].map((item) => {
                    return (
                        <SwiperSlide
                            className="card-swiper-slide"
                            key={item * 2.096}
                        >
                            {/* <Skeleton
                                rounded={"md"}
                                maxW="240px"
                                aspectRatio={3 / 4}
                            /> */}
                            {"Book " + item.toString()}
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
};

export default CardsCarousel;
