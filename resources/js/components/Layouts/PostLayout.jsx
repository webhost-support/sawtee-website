import SocialShare from '@/components/Frontend/SocialShare';
import FeaturedMedia from '@/components/Frontend/post/featured-media';
import PostHeader from '@/components/Frontend/post/post-header';
import PostMeta from '@/components/Frontend/post/post-meta';
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
    <div className="relative z-0 pb-10 pt-10">
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
          <FeaturedMedia
            className={'rounded-xl'}
            src={featured_image}
            srcSet={srcSet}
          />
        )}
        <PostMeta
          className="py-4"
          author={post.author}
          date={post.published_at}
          readingTime={readingTime}
          mt={4}
        />
        {/* Look at the settings to see if we should include the featured image */}
        {isNewsletter && (
          <div>
            {children}
            <SocialShare url={shareUrl} />
          </div>
        )}

        {!isNewsletter && (
          <div className="post-content text-lg leading-8">
            <div className="pb-10">{children}</div>
            <SocialShare
              url={shareUrl}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostLayout;
