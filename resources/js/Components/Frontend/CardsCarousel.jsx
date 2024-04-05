import React from "react";
import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";
import "../../../css/card-carousel.css";
import InertiaChakraLink from "./styles/inertia-chakra-link";

const CardsCarousel = ({ slides, navigation = false }) => {
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
                            <InertiaChakraLink
                                mt={4}
                                target="_blank"
                                href={`/publications/${slide.file.name}`}
                            >
                                <Image
                                    src={slide.media[0].original_url}
                                    alt={slide.title}
                                    title={slide.title}
                                    rounded={"md"}
                                    objectFit="cover"
                                />
                            </InertiaChakraLink>
                        </SwiperSlide>
                    );
                })}
            {!slides || slides.length == 0 &&
                [1, 2, 3].map((item) => {
                    return (
                        <SwiperSlide
                            className="card-swiper-slide"
                            key={item * 2.096}
                        >
                            {"Book " + item.toString()}
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
};

export default CardsCarousel;
