import { Box, useColorModeValue } from "@chakra-ui/react";

const DottedBox = () => {
    const dotcolor = useColorModeValue(
        "var(--chakra-colors-blackAlpha-300)",
        "var(--chakra-colors-whiteAlpha-700)"
    );
    return (
        <Box
            position="absolute"
            left={{ base: "-25px", md: "-45px" }}
            top="-30px"
            maxW="minmax(320px, auto)"
            zIndex={-1}
        >
            <svg width="320px" color={dotcolor} fill="none">
                <defs>
                    <pattern
                        id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            fill="currentColor"
                        ></rect>
                    </pattern>
                </defs>
                <rect
                    width="320"
                    height="150"
                    fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                ></rect>
            </svg>
        </Box>
    );
};

export default DottedBox;
