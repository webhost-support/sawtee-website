import SocialShare from '@/components/Frontend/SocialShare';
import { Content } from '@/components/Frontend/index';
import FeaturedMedia from '@/components/Frontend/post/featured-media';
import PostHeader from '@/components/Frontend/post/post-header';
import PostMeta from '@/components/Frontend/post/post-meta';
import { LightPatternBox } from '@/components/Frontend/styles/pattern-box';
import Section from '@/components/Frontend/styles/section';
import { Box, useColorModeValue } from '@chakra-ui/react';
import readingDuration from 'reading-duration';

const PostLayout = ({
  children,
  showPattern,
  isProgramPost,
  isNewsletter,
  post,
  featured_image,
  srcSet,
}) => {
  const postHeaderColor = useColorModeValue('gray.700', 'gray.200');

  const readingTime = post.content
    ? readingDuration(post.content, {
        emoji: 'stopwatch',
        wordsPerMinute: 225,
      })
    : null;

  const shareUrl = post.category.parent
    ? `https://ankursingh.com.np/${post.category.parent.slug}/${post.category.slug}/${post.slug}`
    : `https://ankursingh.com.np/${post.category.slug}/${post.slug}`;

  return (
    <LightPatternBox showPattern={showPattern} pt="10px" pb={'40px'}>
      <Box maxW="5xl" mt={'20px'} mx="auto">
        <PostHeader
          px={{ base: '32px', md: '3rem' }}
          color={postHeaderColor}
          categories={post.category}
          heading={post.title}
        />
      </Box>

      {/* <PostProgressBar value={scroll} /> */}

      <Box maxW={{ base: 'full', md: '3xl', xl: '4xl' }} mx="auto" px={4}>
        {!isProgramPost && featured_image && (
          <FeaturedMedia src={featured_image} rounded={'xl'} srcSet={srcSet} />
        )}
      </Box>

      {/* Look at the settings to see if we should include the featured image */}
      {isNewsletter && (
        <Box>
          {children}
          <SocialShare url={shareUrl} />
        </Box>
      )}

      {!isNewsletter && (
        <Content as={Section} size="md" pb="50px" className="post-content">
          <PostMeta
            author={post.author}
            date={post.published_at}
            readingTime={readingTime}
            mt={4}
          />
          {children}
          <SocialShare
            url={shareUrl}
            title={post.title}
            excerpt={post.excerpt}
          />
        </Content>
      )}
    </LightPatternBox>
  );
};

export default PostLayout;
