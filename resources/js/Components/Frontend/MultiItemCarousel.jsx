import {
    Image,
    Box,
    LinkBox,
    Skeleton,
    useColorModeValue,
} from "@chakra-ui/react";
import InertiaChakraLinkOverlay from "./styles/inertia-chakra-link-overlay";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MultiItemCarousel = ({
    slides,
    itemsToShow = 3,
    className,
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
                                pos={"relative"}
                                maxW="180px"
                                aspectRatio={3 / 4}
                                mx="auto"
                                _before={{
                                    content: `''`,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: "100%",
                                    borderRadius: "15px",
                                    background: "rgba(0,0,0,0.3)",
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
                                    maxW="180px"
                                    aspectRatio={3 / 4}
                                >
                                    <Image
                                        src={
                                            slide.media
                                                ? `${slide.media[0].original_url}`
                                                : ""
                                        }
                                        alt={slide.title}
                                        title={slide.title}
                                        rounded="xl"
                                        border={`1px solid`}
                                        borderColor={ImageBorderColor}
                                        objectFit="cover"
                                    />
                                </InertiaChakraLinkOverlay>
                            </LinkBox>
                        </SwiperSlide>
                    );
                })}
            {slides.length <= 0 &&
                [1, 2, 3, 4, 5, 6].map((item) => (
                    <SwiperSlide className="swiper-slide" key={`${item}+1`}>
                        <Box {...rest}>
                            <Skeleton
                                rounded="xl"
                                startColor="primary.100"
                                endColor="primary.300"
                                aspectRatio={3 / 4}
                                maxW={"180px"}
                                mx="auto"
                            />
                        </Box>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default MultiItemCarousel;
