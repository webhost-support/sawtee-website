import {
    Image,
    Box,
    LinkBox,
    Skeleton,
    Text,
    Flex,
    useBreakpointValue,
} from "@chakra-ui/react";
import InertiaChakraLinkOverlay from "./styles/inertia-chakra-link-overlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import InertiaChakraLink from "./styles/inertia-chakra-link";

const MultiItemCarousel = ({
    slides,
    className,
    showTitle = false,
    spacing = 30,
    children,
    ...rest
}) => {
    return (
        <swiper-container
            slides-per-view={1}
            space-between={spacing}
            navigation={true}
            keyboard={true}
            css-mode="true"
            breakpoints={{
                640: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            className={
                className
                    ? `multi-item-carousel ${className}`
                    : "multi-item-carousel"
            }
        >
            {children}
            {slides.length >= 1 &&
                slides.map((slide) => {
                    return (
                        <swiper-slide key={slide.id} lazy="true">
                            <Box {...rest}>
                                <LinkBox
                                    as="article"
                                    maxW={"140px"}
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
                                            objectFit="cover"
                                            w={"140px"}
                                            aspectRatio={3 / 4}
                                            loading="lazy"
                                            fallbackSrc="/assets/SM-placeholder-150x150.png"
                                        />
                                    </InertiaChakraLinkOverlay>
                                </LinkBox>
                                {showTitle && slide.title && (
                                    <InertiaChakraLink
                                        href={`/publications/${slide.file.name}`}
                                    >
                                        <Text
                                            mt={4}
                                            fontSize="sm"
                                            fontWeight="semibold"
                                            textAlign="center"
                                        >
                                            {slide.title}
                                        </Text>
                                        {slide.subtitle && (
                                            <Text
                                                mt={1}
                                                fontSize="xs"
                                                textAlign="center"
                                            >
                                                {slide.subtitle}
                                            </Text>
                                        )}
                                    </InertiaChakraLink>
                                )}
                            </Box>
                        </swiper-slide>
                    );
                })}
            {slides.length <= 0 &&
                [1, 2, 3, 4, 5, 6].map((item) => (
                    <swiper-slide key={`${item}+1`}>
                        <Box {...rest} cursor="pointer">
                            <Skeleton
                                rounded="md"
                                startColor="gray.300"
                                endColor="gray.400"
                                w={"140px"}
                                aspectRatio={3 / 4}
                                mx="auto"
                            />
                        </Box>
                    </swiper-slide>
                ))}
        </swiper-container>
    );
};

export default MultiItemCarousel;
