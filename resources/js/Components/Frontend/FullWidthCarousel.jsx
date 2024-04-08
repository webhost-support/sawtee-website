import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import {
    Autoplay,
    Pagination,
    Navigation,
    EffectCreative,
} from "swiper/modules";
// register Swiper custom elements

const FullWidthCarousel = ({
    slides,
    rewind,
    loop,
    pagination,
    paginationType,
}) => {
    const paginationBullet = {
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span className="' + className + '">' + "</span>";
        },
    };

    const creativeEffect = {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    };

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={
                paginationType
                    ? {
                          type: paginationType,
                      }
                    : pagination
                    ? paginationBullet
                    : pagination
            }
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
            effect="creative"
            loop={loop}
            rewind={rewind}
            creativeEffect={creativeEffect}
            className="full-width-carousel"
        >
            {slides &&
                slides.length > 0 &&
                slides.map((slide) => (
                    <SwiperSlide className="swiper-slide" key={slide.id}>
                        <Box
                            w="full"
                            h="full"
                            backgroundColor="rgba(0,0,0,0.2)"
                        >
                            <Image
                                src={`${slide.media[0].original_url}`}
                                alt={slide.title}
                                objectFit={"cover"}
                                mixBlendMode="darken"
                            />
                            <Stack
                                pos="absolute"
                                bottom="0px"
                                color="whiteAlpha.800"
                                bg={"blackAlpha.500"}
                                p={2}
                                px={6}
                            >
                                <Text fontSize={{ base: "md", md: "3xl" }}>
                                    {slide.title}
                                </Text>
                                <Text fontSize={{ base: "xs", md: "sm" }}>
                                    {slide.subtitle}
                                </Text>
                            </Stack>
                        </Box>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default FullWidthCarousel;
