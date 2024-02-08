import { Box, useColorModeValue, Heading } from "@chakra-ui/react";
import { LightPatternBox } from "@/Components/Frontend/styles/pattern-box";
import FeaturedMedia from "@/Components/Frontend/post/featured-media";
import React from "react";

export const PageLayout = ({
    showBackgroundPattern,
    title,
    featured_image,
    srcSet,
    children,
}) => {
    // const postHeaderColor = useColorModeValue("gray.900", "whiteAlpha.900");
    const headingColor = useColorModeValue(
        "var(--color-dark)",
        "var(--color-light)"
    );
    return (
        <LightPatternBox showPattern={showBackgroundPattern} pt="0">
            <Box pos="relative">
                {featured_image && featured_image !== "" ? (
                    <FeaturedMedia
                        mt="0"
                        height={"350px"}
                        src={featured_image}
                        srcSet={srcSet}
                        _after={{
                            display: "block",
                            content: '""',
                            width: "100%",
                            // height: "350px",
                            background: "rgba(0,0,0,0.4)",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                    />
                ) : (
                    <Box
                        pos="relative"
                        bg={useColorModeValue(
                            "blackAlpha.400",
                            "blackAlpha.700"
                        )}
                        opacity={"0.4"}
                        height="350px"
                        zIndex={0}
                        _before={{
                            content: `""`,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            display: "block",
                            opacity: 0.4,
                            borderBottom: "1px solid ",
                            borderColor: useColorModeValue(
                                "gray.400",
                                "gray.500"
                            ),
                            bgSize: "1018px",
                            bgPos: "top center",
                            bgImage: useColorModeValue(
                                `url(/assets/pattern-tile-green.svg)`,
                                `url(/assets/pattern-tile-light-fade.svg)`
                            ),
                        }}
                    />
                )}
                {/* <PostHeader
                    mt={{ base: "20px", lg: "4rem" }}
                    px={{ base: "32px", md: "0" }}
                    color={featured_image ? "whiteAlpha.900" : postHeaderColor}
                    heading={title}
                    position="absolute"
                    bottom="15px"
                    left="50px"
                /> */}
                <Box
                    textAlign="center"
                    mt={{ base: "20px", lg: "4rem" }}
                    px={{ base: "32px", md: "0" }}
                    color={headingColor}
                    position="absolute"
                    bottom="15%"
                    left="15%"
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
                        mt="30px"
                        mb={{ base: "20px", lg: "32px" }}
                        textTransform="capitalize"
                    >
                        {title}
                    </Heading>
                </Box>
            </Box>
            {children}
        </LightPatternBox>
    );
};
