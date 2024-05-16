import { Box, Stack, Text, Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css/bundle";

const FullWidthCarousel = ({
    slides,
    loop = true,
    pagination,
    paginationType,
}) => {
    return (
        <swiper-container
            space-between={30}
            centered-slides={true}
            autoplay-delay="2500"
            autoplay-disable-on-interaction="true"
            pagination={pagination}
            pagination-type={paginationType}
            navigation={true}
            effect="fade"
            loop={loop}
            className="full-width-carousel"
        >
            {slides.map((slide) => (
                <swiper-slide className="swiper-slide" key={slide.id}>
                    <Box backgroundColor="rgba(0,0,0,0.4)" h="full">
                        <Image
                            src={`${slide.media[0].original_url}`}
                            alt={slide.title}
                            mixBlendMode="overlay"
                        />
                        <Stack
                            pos="absolute"
                            bottom="0px"
                            color="whiteAlpha.800"
                            py={2}
                            px={6}
                            gap="0"
                            w="full"
                        >
                            <Text fontSize={{ base: "lg", md: "2xl" }}>
                                {slide.title}
                            </Text>
                            <Text fontSize={{ base: "xs", md: "sm" }}>
                                {slide.subtitle}
                            </Text>
                        </Stack>
                    </Box>
                </swiper-slide>
            ))}
        </swiper-container>
    );
};

export default FullWidthCarousel;
