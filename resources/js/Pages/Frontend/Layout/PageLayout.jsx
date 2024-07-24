import FeaturedMedia from '@/components/Frontend/post/featured-media';
import PostHeader from '@/components/Frontend/post/post-header';
import { LightPatternBox } from '@/components/Frontend/styles/pattern-box';
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
    <div>
      <div class="relative">
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
          <div className="relative z-0 h-80 bg-gray-400/20 dark:bg-black/85 ">
            <div
              className="w-full h-full absolute inset-0 -z-[1] bg-[url(/assets/pattern-tile-green.svg)] dark:bg-[url(/assets/pattern-tile-light-fade.svg)] "
              style={{
                backgroundSize: '1018px',
                backgroundPosition: 'top center',
                backgroundBlendMode: 'overlay',
              }}
            />
          </div>
        )}
        <PostHeader
          px={10}
          color={hasFeaturedImage ? 'gray.100' : headingColor}
          heading={title}
          position="absolute"
          bottom="1rem"
          left="3rem"
        />
      </div>
      {children}
    </div>
  );
};
