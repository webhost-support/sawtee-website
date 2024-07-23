import { formatDate } from '@/lib/helpers';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  LinkBox,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import React from 'react';
import InertiaChakraLink from './styles/inertia-chakra-link';
import InertiaChakraLinkOverlay from './styles/inertia-chakra-link-overlay';

function PostCard({ post, ...rest }) {
  const {
    headingSize,
    showDate,
    showDescription,
    showImage = true,
    showTags,
    imageHeadgingGap,
    aspect,
  } = { ...rest };
  const color = useColorModeValue('var(--color-dark', 'var(--color-light)');
  const featured_image =
    post.media.length > 0
      ? post.media.filter(
          item => item.collection_name === 'post-featured-image'
        )[0]
      : null;
  const srcSet = featured_image
    ? featured_image.responsive_images.responsive.urls
    : null;
  return (
    <Box>
      <LinkBox as="article" role="group">
        {showImage && (
          <Box
            as="figure"
            pos={'relative'}
            rounded="md"
            mb={imageHeadgingGap ? imageHeadgingGap : '20px'}
            overflow="hidden"
          >
            <Image
              width={'100%'}
              height="auto"
              fit={'cover'}
              alt={post.title}
              aspectRatio={aspect ? aspect : 'unset'}
              src={
                featured_image
                  ? featured_image.original_url
                  : '/assets/SM-placeholder-150x150.png'
              }
              style={srcSet ? { srcSet: srcSet } : null}
            />
            <Box
              as="span"
              pos={'absolute'}
              inset="0"
              zIndex={'80'}
              width="full"
              _groupHover={{
                borderTop: '5px solid',
                borderColor: useColorModeValue('primary.500', 'primary.300'),
              }}
            />
            <Box
              pos={'absolute'}
              inset="0"
              zIndex={'70'}
              _groupHover={{
                bg: 'blackAlpha.500',
              }}
            />
          </Box>
        )}
        <Flex flexGrow="1" direction="column" gap={4}>
          <Heading
            fontSize={headingSize ? headingSize : 'md'}
            as="h3"
            // noOfLines={2}
          >
            <InertiaChakraLinkOverlay
              as={Link}
              className="primary-link"
              href={`/category/${post.category.slug}/${post.slug}`}
              _groupHover={{
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              {post.title}
            </InertiaChakraLinkOverlay>
          </Heading>

          {showDescription && (
            <Text
              flex="1"
              fontSize="sm"
              textOverflow="ellipsis"
              display="-webkit-box"
              noOfLines={2}
              color={color}
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          )}
        </Flex>
      </LinkBox>
      <Flex mt={3} gap={2} justify={'space-between'} flexWrap={'wrap'}>
        {showDate && (
          <Box as="time" fontSize={'xs'}>
            {formatDate(post.published_at)}
          </Box>
        )}
        {showTags && post.tags && post.tags.length > 0 && (
          <HStack flexWrap={'wrap'}>
            {post.tags.map(tag => {
              return (
                <InertiaChakraLink
                  as={Link}
                  key={tag.id}
                  href={`/tag/${tag.slug}`}
                  fontSize={'xs'}
                  fontWeight={'semibold'}
                  color="primary.500"
                  textDecor={'underline'}
                  textDecorationStyle={'dotted'}
                  _hover={{
                    textDecorationStyle: 'solid',
                  }}
                >
                  {tag.name}
                </InertiaChakraLink>
              );
            })}
          </HStack>
        )}
      </Flex>
    </Box>
  );
}

export default PostCard;
