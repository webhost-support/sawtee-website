import { Box, Image } from '@chakra-ui/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function AirBnbCard({
  img,
  title = 'media fellowship',
  mediaSrc,
}) {
  return img.length > 0 ? (
    img.map(image_src => {
      return (
        <Box w="full" key={image_src}>
          <Zoom>
            <Image
              w="full"
              maxH="337px"
              borderRadius="12px"
              src={image_src}
              alt={title}
              fontSize="16px"
              objectFit="cover"
            />
          </Zoom>
        </Box>
      );
    })
  ) : (
    <Box w="full">
      <iframe
        width="673"
        height="489"
        src={mediaSrc}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </Box>
  );
}
