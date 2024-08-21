import PostCategories from '@/components/Frontend/post/post-categories';
import { formatDate } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import ExploreButton from './ExploreButton';

const PostPreviewCard = ({
  post,
  showImage = false,
  showCategoryTag = false,
  className,
}) => {
  const { title, slug, excerpt, media, category, published_at } = post;
  const file = post.media.filter(
    media => media.collection_name === 'post-files'
  )[0];
  const hasContent = post.content !== null || '';

  const featured_image = media
    ? media.filter(item => item.collection_name === 'post-featured-image')[0]
    : null;
  return (
    <Card className={cn('group rounded-md bg-bgDarker shadow-md', className)}>
      <CardHeader>
        {showImage && featured_image && (
          <div className="rounded-md">
            <img
              className="aspect-video w-full object-cover transition-all duration-500 ease-in group-hover:scale-105"
              loading="lazy"
              src={featured_image?.original_url}
              alt={title}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent" />
          </div>
        )}
        <div className="flex items-center justify-between">
          {showCategoryTag && (
            <PostCategories className="justify-start" category={category} />
          )}

          <time className={`text-sm text-muted-foreground`}>
            {formatDate(published_at)}
          </time>
        </div>
      </CardHeader>

      <CardContent>
        <div
          className={`flex flex-col justify-center gap-2 ${showImage ? 'mt-4' : 'mt-0'}`}
        >
          {hasContent ? (
            <Link
              href={
                category.parent
                  ? `/category/${category.parent.slug}/${category.slug}/${slug}`
                  : `/category/${category.slug}/${slug}`
              }
            >
              <h5 className="text-sm text-secondary-foreground lg:text-lg">
                {title}
              </h5>
            </Link>
          ) : (
            <a
              href={
                hasContent || !file
                  ? category.parent
                    ? `/category/${category.parent.slug}/${category.slug}/${slug}`
                    : `/category/${category.slug}/${slug}`
                  : file?.original_url
              }
            >
              <h5 className="text-sm text-secondary-foreground lg:text-lg">
                {title}
              </h5>
            </a>
          )}

          <p
            className={`line-clamp-3 text-sm text-muted-foreground`}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </CardContent>
      <CardFooter>
        <ExploreButton
          href={`/category/${category.slug}/${slug}`}
          className="w-full"
          label="Read more"
        />
      </CardFooter>
    </Card>
  );
};

export default PostPreviewCard;
