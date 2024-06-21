import { PostImageWithOverlay } from '@/Components/Frontend/featured-post/components';
import { ExploreButton, GlassBox } from '@/Components/Frontend/index';
import { formatDate } from '@/Utils/helpers';
import { Box, Heading, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';

const DefaultArchive = ({ posts, headingColor, textColor, showFallbackImage, ...rest }) => {
  if (!posts || posts.length <= 0) return 'No posts found';
  return posts.map(post => {
    const featured_image = post.media.filter(media => media.collection_name === 'post-featured-image')[0];
    const file = post.media.filter(media => media.collection_name === 'post-files')[0];

    return (
      <GlassBox
        key={post.id}
        role="group"
        w={{ base: 'xs', sm: 'md', md: 'lg', lg: 'xl' }}
        as={'article'}
        _hover={{ boxShadow: 'xl' }}
        pos={'relative'}
        {...rest}
      >
        <ArchivePost
          post={post}
          file={file}
          featured_image={featured_image}
          headingColor={headingColor}
          textColor={textColor}
          showFallbackImage={showFallbackImage}
        />
      </GlassBox>
    );
  });
};

export default DefaultArchive;

const ArchivePost = ({ post, featured_image, showFallbackImage, file, rest }) => {
  return (
    <LinkBox {...rest}>
      {showFallbackImage && (
        <PostImageWithOverlay
          height="240px"
          borderRadius="var(--chakra-radii-md) var(--chakra-radii-md) 0 0"
          overflow="hidden"
          _groupHover={{
            transition: 'transform 0.4s ease-in-out',
            borderRadius: 'var(--chakra-radii-md) var(--chakra-radii-md) 0 0',
            cusrsor: 'pointer',
          }}
          src={featured_image && featured_image.original_url}
          srcSet={
            featured_image
              ? ''
              : `/assets/SM-placeholder.png,
                    /assets/SM-placeholder-1024x512.png
                    /assets/SM-placeholder-300x150.png,
                    /assets/SM-placeholder-150x150.png,
                                            `
          }
        />
      )}
      <Box p={[2, 4]}>
        <Box>
          <LinkOverlay
            as={post.content ? Link : 'a'}
            target={post.content ? '_self' : '_blank'}
            href={
              post.content
                ? post.category.parent
                  ? `/category/${post.category.parent.slug}/${post.category.slug}/${post.slug}`
                  : `/category/${post.category.slug}/${post.slug}`
                : file?.original_url
            }
          >
            <Heading as="h3" fontSize={['sm', 'sm', 'sm', 'md']} fontWeight="normal">
              {post.title}
            </Heading>
          </LinkOverlay>
          <Text fontSize={'xs'} mt={2} noOfLines={3}>
            {post.excerpt}
          </Text>
        </Box>

        <Box mt="4">
          <Stack justify="space-between" direction={'row'} flexWrap={'wrap'} alignItems={'center'}>
            <Text as="time" fontSize={'xs'} color="gray.600">
              {formatDate(post.published_at)}
            </Text>

            <ExploreButton
              size="xs"
              text="Read more"
              aria-label={'Read More'}
              colorScheme={'gray'}
              w="full"
              variant={'solid'}
              link={`/category/${post.category.slug}/${post.slug}`}
            />
          </Stack>
        </Box>
      </Box>
    </LinkBox>
  );
};
