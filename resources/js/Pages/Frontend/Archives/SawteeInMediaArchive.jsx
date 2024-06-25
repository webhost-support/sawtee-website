import { ExploreButton, GlassBox } from '@/Components/Frontend/index';
import { formatDate } from '@/Utils/helpers';
import { Box, Heading, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import { motion, spring } from 'framer-motion';

const SawteeInMediaArchive = ({ posts, ...rest }) => {
  if (!posts || posts.length <= 0) return 'No posts found';

  return posts.map(({ title, slug, media, content, category, excerpt, published_at }) => {
    const featured_image = media.filter(media => media.collection_name === 'post-featured-image')[0];
    const file = media.filter(media => media.collection_name === 'post-files')[0];
    const hasContent = content !== null || '';
    return (
      <GlassBox
        as={motion.article}
        whileHover={{ y: '-10px', stiffness: 100, velocity: 100, transition: { duration: 0.2 } }}
        _hover={{ boxShadow: 'xl' }}
        role="group"
        w={{ base: 'xs', sm: 'md', md: 'lg', lg: 'xl' }}
        boxShadow="none"
        maxW="xl"
        {...rest}
      >
        <LinkBox p={[2, 4]}>
          <Box>
            <LinkOverlay
              as={hasContent ? Link : 'a'}
              target={hasContent || !file ? '_self' : '_blank'}
              href={hasContent || !file ? `/category/${category.slug}/${slug}` : file?.original_url}
            >
              <Heading as="h3" fontSize={['sm', 'sm', 'sm', 'md']} fontWeight="normal">
                {title}
              </Heading>
            </LinkOverlay>
            <Text fontSize={'xs'} mt={2} noOfLines={3} dangerouslySetInnerHTML={{ __html: excerpt }} />
          </Box>

          <Box mt="4">
            <Stack justify="space-between" direction={'row'} flexWrap={'wrap'} alignItems={'center'}>
              <Text as="time" fontSize={'xs'} color="gray.600">
                {formatDate(published_at)}
              </Text>

              <ExploreButton
                size="xs"
                text="Read more"
                aria-label={'Read More'}
                colorScheme={'gray'}
                w="full"
                variant={'solid'}
                link={`/category/${category.slug}/${slug}`}
              />
            </Stack>
          </Box>
        </LinkBox>
      </GlassBox>
    );
  });
};

export default SawteeInMediaArchive;
