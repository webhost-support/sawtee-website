import { Box, Image } from "@chakra-ui/react";

const FeaturedMedia = ({ src, srcSet, alt, objectFit, ...props }) => {
    return (
        <Box as="figure" mt={4} height="500px" {...props}>
            <Image
                boxSize="100%"
                objectFit={objectFit ? objectFit : "cover"}
                src={src}
                srcSet={srcSet}
                sizes="(min-width: 1200px) 50vw,100vw"
                alt={alt || "Page Hero Image"}
            />
        </Box>
    );
};

export default FeaturedMedia;
