import { cn } from '@/lib/utils';
import PostCategories from './post-categories';

const PostHeader = ({
  heading,
  categories = null,
  description,
  color,
  className,
  children,
  ...rest
}) => (
  <div
    className={cn('post-header text-left md:text-center', className)}
    {...rest}
  >
    {categories && <PostCategories category={categories} />}
    {heading && (
      <h1 className="captialize my-3 text-2xl font-bold text-slate-800 dark:text-slate-300 md:text-3xl lg:my-5 xl:text-5xl">
        {heading}
      </h1>
    )}

    {description && <Text>{description}</Text>}
    {children}
  </div>
);

export default PostHeader;
