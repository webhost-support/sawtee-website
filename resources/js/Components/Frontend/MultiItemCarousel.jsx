import {
    Image,
    Box,
    LinkBox,
    Skeleton,
    useColorModeValue,
} from "@chakra-ui/react";
import InertiaChakraLinkOverlay from "./styles/inertia-chakra-link-overlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MultiItemCarousel = ({
    slides,
    className,
    itemsToShow = 3,
    spacing = 30,
    children,
    ...rest
}) => {
    const ImageBorderColor = useColorModeValue("gray.900", "whiteAlpha.900");

    return (
        <Swiper
            slidesPerView={itemsToShow}
            spaceBetween={spacing}
            navigation={true}
            slidesPerGroup={itemsToShow}
            keyboard={true}
            modules={[Navigation, Pagination, Keyboard]}
            className={"multi-item-carousel " + className}
        >
            {children}
            {slides.length >= 1 &&
                slides.map((slide) => {
                    return (
                        <SwiperSlide className="swiper-slide" key={slide.id}>
                            <LinkBox
                                as="article"
                                maxW="180px"
                                mx="auto"
                                _before={{
                                    content: `''`,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: "100%",
                                    borderRadius: "var(--chakra-radii-md)",
                                    background: "rgba(0,0,0,0.1)",
                                    backgroundBlendMode: "overlay",
                                }}
                                _hover={{
                                    _before: {
                                        background: "transparent",
                                    },
                                }}
                                {...rest}
                            >
                                <InertiaChakraLinkOverlay
                                    title={slide.title}
                                    href={
                                        slide.file
                                            ? `/publications/${slide.file.name}`
                                            : "#"
                                    }
                                    target="_blank"
                                >

                                    <Image
                                        src={`${slide.media[0]?.original_url}`}
                                        alt={slide.title}
                                        title={slide.title}
                                        rounded="md"
                                        // border={`1px solid`}
                                        // borderColor={ImageBorderColor}
                                        objectFit="cover"
                                        w="180px"
                                        fallbackSrc="/assets/SM-placeholder-150x150.png"
                                        aspectRatio={3 / 4}
                                    />
                                </InertiaChakraLinkOverlay>
                            </LinkBox>
                        </SwiperSlide>
                    );
                })}
            {slides.length <= 0 &&
                [1, 2, 3, 4, 5, 6].map((item) => (
                    <SwiperSlide className="swiper-slide" key={`${item}+1`}>
                        <Box {...rest} cursor='pointer'>
                            <Skeleton
                                rounded="md"
                                startColor="gray.300"
                                endColor="gray.400"
                                w="180px"
                                h="240px"
                                mx="auto"

                            />
                        </Box>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default MultiItemCarousel;
