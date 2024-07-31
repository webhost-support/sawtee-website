import { PostImageWithOverlay } from '@/components/Frontend/featured-post/components';
import Glassbox from '@/components/Frontend/Glassbox';
import PostCategories from '@/components/Frontend/post/post-categories';
import { formatDate } from '@/lib/helpers';
import { htmlToText } from '@/lib/utils';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';

const PostPreviewCard = ({
  post,
  showImage = false,
  showCategoryTag = false,
  ...rest
}) => {
  const { title, slug, excerpt, media, category, published_at } = post;
  const color = useColorModeValue('gray.600', 'gray.300');
  const featured_image = media
    ? media.filter(item => item.collection_name === 'post-featured-image')[0]
    : null;
  return (
    <Glassbox className="group rounded-md p-4 shadow-md" {...rest}>
      {showImage && featured_image && (
        <PostImageWithOverlay
          borderRadius={'0.5rem 0.5rem 0 0'}
          src={featured_image.original_url}
        />
      )}

      <div
        className={`flex flex-col justify-center gap-2 ${showImage ? 'mt-4' : 'mt-0'}`}
      >
        <div className="flex items-center justify-between">
          {showCategoryTag && (
            <PostCategories
              justify="flex-start"
              category={category}
              mt="0px"
              color={color}
              colorScheme="black"
            />
          )}

          <time className={`text-xs text-[${color}]`}>
            {formatDate(published_at)}
          </time>
        </div>

        <Link href={`/category/${category.slug}/${slug}`}>
          <h4 className="text-xs lg:text-sm">{title}</h4>
        </Link>

        <p className={`line-clamp-3 text-xs lg:text-sm text-[${color}]`}>
          {htmlToText(excerpt)}
        </p>
      </div>
    </Glassbox>
  );
};

export default PostPreviewCard;
