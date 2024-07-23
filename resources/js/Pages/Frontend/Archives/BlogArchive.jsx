import PostPreviewCard from '@/components/Frontend/PostPreviewCard';
import { FeaturedPostSection } from '@/components/Frontend/featured-post';
import { splitPosts } from '@/lib/helpers';
import { Box, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const BlogArchive = ({ posts }) => {
  // Get the data of the current list.
  const [firstThreePosts, othersPosts] = splitPosts(posts);

  return (
    <Box as="section">
      <FeaturedPostSection data={firstThreePosts} />

      <Box
        // bg={useColorModeValue("whiteAlpha.700", "gray.700")}
        py={{ base: '64px', md: '80px' }}
        px={{ base: '24px', md: '40px' }}
        width={{ base: 'auto', lg: '80%' }}
        maxWidth="1200px"
        mx="auto"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          textAlign="center"
          fontSize={{ base: '4xl', md: '6xl' }}
          color={useColorModeValue('accent.400', 'accent.50')}
        >
          Latest Blog Posts
        </Heading>

        <SimpleGrid
          mt={{ base: '64px', md: '80px' }}
          columns={{ base: 1, md: 2 }}
          spacing="40px"
        >
          {othersPosts.map((post, idx) => {
            return (
              <PostPreviewCard
                showImage={false}
                key={post.id}
                data={post}
                color={'gray.700'}
                _dark={{ color: 'whiteAlpha.700' }}
                rounded="xl"
              />
            );
          })}
        </SimpleGrid>
        {/* <Box as="section" w="full">
          {postsPerCategory.map(({ posts, category }) => (
            <Box key={category.id}>
              <Heading as="h4">{category.name}</Heading>
              {posts.map((post) => (
                <Box as="article" key={post.id}>
                  <Box>
                    <Box px={2}>
                      <Link link={post.link}>
                        <h2>
                          <Html2React html={post.title.rendered} />
                        </h2>
                      </Link>
                      <Html2React html={post.excerpt.rendered} />
                    </Box>
                  </Box>
                </Box>
              ))}
              <Link link={category.link}>
                <Text>
                  &gt;&gt; See more posts at <strong>{category.name}</strong>
                </Text>
              </Link>
            </Box>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
};

export default BlogArchive;
