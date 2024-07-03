import WebsiteHead from '@/Components/Frontend/Head';
import InertiaChakraLink from '@/Components/Frontend/styles/inertia-chakra-link';
import { Box, Text } from '@chakra-ui/react';
import MainLayout from './Layout/MainLayout';
import PostLayout from './Layout/PostLayout';
import NewsletterPost from './Pages/NewsletterPost';
import WebinarPost from './Pages/WebinarPost';

export default function Post({ post, featured_image, srcSet, file }) {
  const { category, title, content } = post;
  const isProgramme = category.parent && category.parent.slug === 'programme';
  const isNewsletter = category.slug === 'newsletters';
  const isWebinarSeries = category.slug === 'webinar-series';
  const isDefault = !isNewsletter && !isWebinarSeries;

  return (
    <MainLayout>
      <WebsiteHead
        title={`${category.name} | ${title}`}
        description={post.meta_description}
        image={featured_image ? featured_image : '/assets/logo-sawtee.webp'}
      />

      <PostLayout
        post={post}
        featured_image={featured_image}
        srcSet={srcSet}
        isProgramPost={isProgramme}
        isNewsletter={isNewsletter}
      >
        {isNewsletter && <NewsletterPost post={post} />}
        {isWebinarSeries && <WebinarPost post={post} />}
        {isDefault && (
          <Box maxW="5xl" className="default_post_content">
            <Text
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
            {file && (
              <InertiaChakraLink target="_blank" href={file}>
                PDF
              </InertiaChakraLink>
            )}
          </Box>
        )}
      </PostLayout>
    </MainLayout>
  );
}
