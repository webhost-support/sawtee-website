import { PostImageWithOverlay } from '@/components/Frontend/featured-post/components';
import { ExploreButton, GlassBox } from '@/components/Frontend/index';
import { formatDate } from '@/lib/helpers';
import { htmlToText } from '@/lib/utils';

import { Link } from '@inertiajs/react';

const DefaultArchive = ({ posts, showFallbackImage, ...rest }) => {
  if (!posts || posts.length <= 0) return 'No posts found';
  return posts.map(post => {
    const featured_image = post.media.filter(
      media => media.collection_name === 'post-featured-image'
    )[0];

    return (
      <GlassBox
        key={post.id}
        className={'group relative max-w-sm md:max-w-lg lg:max-w-xl hover:shadow-xl'}
        {...rest}
      >
        <ArchivePost
          post={post}
          featured_image={featured_image}
          showFallbackImage={showFallbackImage}
        />
      </GlassBox>
    );
  });
};

export default DefaultArchive;

const ArchivePost = ({ post, featured_image, showFallbackImage, ...rest }) => {
  return (
    <Link
      href={
        post.category.parent
          ? `/category/${post.category.parent.slug}/${post.category.slug}/${post.slug}`
          : `/category/${post.category.slug}/${post.slug}`
      }
    >
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
          src={featured_image?.original_url}
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
      <div className="px-4 pt-4">
        <h3 as="h3" className="text-lg font-medium">
          {post.title}
        </h3>
        <p className="text-sm text-zinc-600 mt-2 line-clamp-3">
          {htmlToText(post.excerpt)}
        </p>

        <div className="flex flex-wrap justify-between items-center gap-4 ">
          <time className="text-sm text-zinc-600">
            {formatDate(post.published_at)}
          </time>

          <ExploreButton
            size="xs"
            text="Read more"
            aria-label={'Read More'}
            link={`/category/${post.category.slug}/${post.slug}`}
          />
        </div>
      </div>
    </Link>
  );
};
