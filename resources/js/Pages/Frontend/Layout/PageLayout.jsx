import FeaturedMedia from '@/Components/Frontend/post/featured-media';
import PostHeader from '@/Components/Frontend/post/post-header';
import { LightPatternBox } from '@/Components/Frontend/styles/pattern-box';
import { Box, useColorModeValue } from '@chakra-ui/react';

export const PageLayout = ({
  showBackgroundPattern,
  title,
  featured_image,
  srcSet,
  children,
}) => {
  const hasFeaturedImage = featured_image && featured_image !== '';
  const headingColor = useColorModeValue(
    'var(--color-dark)',
    'var(--color-light)'
  );
  return (
    <LightPatternBox showPattern={showBackgroundPattern} pt="0">
      <Box pos="relative">
        {hasFeaturedImage ? (
          <FeaturedMedia
            mt="0"
            height={'350px'}
            src={featured_image}
            srcSet={srcSet}
            _before={{
              display: 'block',
              content: '""',
              width: '100%',
              background: 'var(--chakra-colors-blackAlpha-400)',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        ) : (
          <Box
            pos="relative"
            bg={useColorModeValue('blackAlpha.50', 'blackAlpha.500')}
            height="350px"
            zIndex={0}
            _before={{
              content: `""`,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
              display: 'block',
              bgSize: '1018px',
              bgPos: 'top center',
              bgBlendMode: 'overlay',
              bgImage: useColorModeValue(
                `url(/assets/pattern-tile-green.svg)`,
                `url(/assets/pattern-tile-light-fade.svg)`
              ),
            }}
          />
        )}
        <PostHeader
          px={10}
          color={hasFeaturedImage ? 'gray.100' : headingColor}
          heading={title}
          position="absolute"
          bottom="1rem"
          left="3rem"
        />
      </Box>
      {children}
    </LightPatternBox>
  );
};
