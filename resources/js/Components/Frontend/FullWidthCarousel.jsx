import { Box, Stack, Text, Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// register Swiper custom elements

const FullWidthCarousel = ({ slides, loop = true, pagination }) => {
    const paginationBullet = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
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
            pagination={pagination ? paginationBullet : pagination}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            loop={loop}
            class="full-width-carousel"
        >
            {slides.map((slide) => (
                <SwiperSlide class="swiper-slide" key={slide.id}>
                    <Flex
                        pos="relative"
                        _before={{
                            content: `''`,
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,0,0,0.3)",
                            backgroundBlendMode: "multiply",
                        }}
                        h="100%"
                    >
                        <Image
                            src={`${slide.media[0].original_url}`}
                            alt={slide.title}
                            objectFit={"cover"}
                            w='full'
                            h="full"
                        />
                        <Stack
                            pos="absolute"
                            bottom="60px"
                            textAlign="center"
                            w="full"
                            color="whiteAlpha.800"
                            zIndex={1}
                            gap={2}
                            justify="center"
                            align="center"
                        >
                            <Text fontSize="3xl">{slide.title}</Text>
                            <Text fontSize="sm">{slide.subtitle}</Text>
                        </Stack>
                    </Flex>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FullWidthCarousel;
