import SocialShare from '@/components/Frontend/SocialShare';
import FeaturedMedia from '@/components/Frontend/post/featured-media';
import PostHeader from '@/components/Frontend/post/post-header';
import PostMeta from '@/components/Frontend/post/post-meta';
import { LightPatternBox } from '@/components/Frontend/styles/pattern-box';
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
    <LightPatternBox className="pb-10 pt-3" showPattern={showPattern}>
      <div className="mx-auto mt-5 max-w-5xl">
        <PostHeader
          className={`px-8 md:px-12`}
          categories={post.category}
          heading={post.title}
        />
      </div>

      {/* <PostProgressBar value={scroll} /> */}

      <div className="mx-auto max-w-full px-4 md:max-w-3xl xl:max-w-4xl">
        {!isProgramPost && featured_image && (
          <FeaturedMedia src={featured_image} rounded={'xl'} srcSet={srcSet} />
        )}
      </div>

      {/* Look at the settings to see if we should include the featured image */}
      {isNewsletter && (
        <div>
          {children}
          <SocialShare url={shareUrl} />
        </div>
      )}

      {!isNewsletter && (
        <section className="post-content pb-10 max-w-5xl">
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
        </section>
      )}
    </LightPatternBox>
  );
};

export default PostLayout;
