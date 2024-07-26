import { cn } from '@/lib/utils';
import PostCategories from './post-categories';

const PostHeader = ({
  heading,
  categories = null,
  description,
  color,
  className,
  ...rest
}) => (
  <div
    className={cn('post-header text-left md:text-center', className)}
    {...rest}
  >
    {categories && (
      <PostCategories
        colorScheme="accent"
        category={categories}
        justifyContent="center"
        size={'xs'}
      />
    )}
    <h1 className="captialize font-bold text-2xl md:text-3xl xl:text-5xl my-3 lg:my-5">
      {heading}
    </h1>

    {/* {description && <Text>{description}</Text>} */}
  </div>
);

export default PostHeader;
