import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Section from "./section";

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBox = ({ showPattern = true, ...props }) => (
    <Box
        as="section"
        bg="primary.700"
        borderTop="5px solid"
        borderColor="primary.900"
        {...(showPattern && {
            bgImage: `url(assets/pattern-tile-green.svg)`,
            bgSize: "1018px",
            bgPos: "top center",
        })}
        {...props}
    />
);

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBoxInner = (props) => (
    <Section
        py="80px"
        position="relative"
        zIndex="1"
        overflow="hidden"
        textAlign="center"
        size="sm"
        px={6}
        {...props}
    />
);

export const LightPatternBox = React.forwardRef(
    ({ showPattern = true, ...props }, ref) => (
        <Box
            ref={ref}
            pt="40px"
            pos="relative"
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
                ...(showPattern && {
                    bgSize: "1018px",
                    bgPos: "top center",
                    bgImage: useColorModeValue(
                        `url(assets/pattern-tile-green.svg)`,
                        `url(assets/pattern-tile-light-fade.svg)`
                    ),
                }),
            }}
            {...props}
        />
    )
);
