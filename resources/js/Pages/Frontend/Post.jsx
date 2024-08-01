import WebsiteHead from '@/components/Frontend/Head';
import MainLayout from '@/components/Layouts/MainLayout';
import PostLayout from '@/components/Layouts/PostLayout';
import { Link } from '@inertiajs/react';
import NewsletterPost from './Pages/NewsletterPost';
import WebinarPost from './Pages/WebinarPost';

export default function Post({
  post,
  featured_image,
  srcSet,
  file,
  relatedPosts,
}) {
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
        relatedPosts={relatedPosts}
      >
        {isNewsletter && <NewsletterPost post={post} />}
        {isWebinarSeries && <WebinarPost post={post} />}
        {isDefault && (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
            {file && (
              <Link target="_blank" href={file}>
                PDF
              </Link>
            )}
          </>
        )}
      </PostLayout>
    </MainLayout>
  );
}
