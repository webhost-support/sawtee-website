import { Box, Image } from "@chakra-ui/react";

export default function AirBnbCard({ img, title }) {
    return (
        img.length > 0 &&
        img.map((image_src) => {
            return (
                <Box w="full">
                    <Image
                        w="full"
                        maxH="337px"
                        borderRadius="12px"
                        src={image_src}
                        alt={title || "media fellowship"}
                        fontSize="16px"
                        objectFit="cover"
                    />
                </Box>
            );
        })
    );
}
