import { Box, Image } from "@chakra-ui/react";

const FeaturedMedia = ({ src, srcSet, alt, objectFit, rounded, ...rest }) => {
    return (
        <Box as="picture" rounded={rounded ? rounded : "none"} {...rest}>
            <Image
                boxSize="100%"
                objectFit={objectFit ? objectFit : "cover"}
                src={src}
                srcSet={srcSet}
                borderRadius={rounded ? rounded : "none"}
                sizes="(min-width: 1200px) 50vw,100vw"
                alt={alt || "Image Description"}
                maxH="500px"
            />
        </Box>
    );
};

export default FeaturedMedia;
