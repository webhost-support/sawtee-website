import {
    Box,
    Stack,
    Text,
    Image,
    Heading,
    HStack,
    Flex,
} from "@chakra-ui/react";
import React from "react";
// Import Swiper styles
import "swiper/css/bundle";
const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
        opacity: 0.8,
        bg: "black",
    },
};

const FullWidthCarousel = ({ slides, pagination, loop = true, ...rest }) => {
    const FullWidthCarouselRef = React.useRef(null);
    const params = {};
    React.useEffect(() => {
        if (FullWidthCarouselRef.current !== null)
            Object.assign(FullWidthCarouselRef.current, params);
    }, []);
    return (
        <swiper-container
            ref={FullWidthCarouselRef}
            space-between={30}
            pagination={pagination}
            centered-slides={true}
            autoplay-delay="2500"
            autoplay-disable-on-interaction="true"
            effect="fade"
            loop={loop}
            class="full-width-carousel"
            {...rest}
        >
            {/* <Box
                slot="container-start"
                position="absolute"
                top="50%"
                transform="translate(0%, -50%)"
                w={"full"}
            >
                <Text
                    style={{ ...arrowStyles }}
                    left="0"
                    onClick={() => swiperElRef.current.swiper.slidePrev()}
                >
                    &#10094;
                </Text>
                <Text
                    style={{ ...arrowStyles }}
                    right="0"
                    onClick={() => swiperElRef.current.swiper.slideNext()}
                >
                    &#10095;
                </Text>
            </Box> */}
            {slides.map((slide) => (
                <swiper-slide class="swiper-slide" key={slide.id}>
                    <Flex
                        backgroundColor="rgba(0,0,0,0.4)"
                        position={"relative"}
                        height={"full"}
                        width={"full"}
                        justify="center"
                        alignItems="center"
                        overflow={"hidden"}
                    >
                        <Image
                            src={`${slide.media[0].original_url}`}
                            alt={slide.title}
                            mixBlendMode="overlay"
                            boxSize="full"
                            backgroundSize="cover"
                        />
                        <Stack
                            spacing={4}
                            w={"full"}
                            maxW={"lg"}
                            position="absolute"
                            justify="center"
                            alignItems="center"
                            color="white"
                        >
                            <Heading
                                fontSize={{
                                    base: "3xl",
                                    md: "4xl",
                                    lg: "5xl",
                                }}
                            >
                                {slide.title}
                            </Heading>
                            <Text fontSize={{ base: "md", lg: "lg" }}>
                                {slide.subtitle}
                            </Text>
                        </Stack>
                    </Flex>
                </swiper-slide>
            ))}
        </swiper-container>
    );
};

export default FullWidthCarousel;
