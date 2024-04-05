import React from "react";
import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "../../../css/card-carousel.css";

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
                            <Image
                                src={slide.media[0].original_url}
                                alt={slide.title + slide.subtitle}
                                rounded={"md"}
                                objectFit="cover"
                            />
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
