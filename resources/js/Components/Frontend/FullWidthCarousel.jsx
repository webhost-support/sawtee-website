import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Stack,
    Text,
    Image,
    Heading,
    Flex,
    IconButton,
} from "@chakra-ui/react";
import React from "react";
// Import Swiper styles
import "swiper/css/bundle";

const FullWidthCarousel = ({
    slides,
    pagination,
    navigation,
    loop = true,
    ...rest
}) => {
    const swiperElRef = React.useRef(null);
    const params = {};
    React.useEffect(() => {
        swiperElRef.current && Object.assign(swiperElRef.current, params);
    }, []);
    return (
        <swiper-container
            ref={swiperElRef}
            space-between={30}
            pagination={pagination}
            navigation={navigation}
            centered-slides={true}
            autoplay-delay="2500"
            autoplay-disable-on-interaction="true"
            effect="fade"
            loop={loop}
            class="full-width-carousel"
            {...rest}
        >
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
                        <Box
                            position="absolute"
                            top="50%"
                            transform="translate(0%, 50%)"
                            w={"full"}
                        >
                            <IconButton
                                position="absolute"
                                colorScheme="blackAlpha"
                                icon={<ChevronLeftIcon w="8" h="8" />}
                                left="10"
                                onClick={() =>
                                    swiperElRef.current?.swiper.slidePrev()
                                }
                            />

                            <IconButton
                                position="absolute"
                                colorScheme="blackAlpha"
                                icon={<ChevronRightIcon w="8" h="8" />}
                                right="10"
                                onClick={() =>
                                    swiperElRef.current?.swiper.slideNext()
                                }
                            />
                        </Box>
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
