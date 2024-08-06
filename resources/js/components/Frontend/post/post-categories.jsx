import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export const PostCategory = props => (
  <Button
    className={cn(
      'category rounded-md px-3 py-1 text-sm font-semibold',
      props.className
    )}
    {...props}
  />
);

export const PostCategories = ({ category, className = '', ...props }) => {
  const ParentCategory = category.parent;
  return (
    <div
      className={cn(
        'post-categories flex flex-wrap justify-center gap-4',
        className
      )}
      {...props}
    >
      {ParentCategory && (
        <Link href={`/category/${ParentCategory.slug}`}>
          <PostCategory>{ParentCategory.name}</PostCategory>
        </Link>
      )}

      <Link
        href={
          ParentCategory
            ? `/category/${ParentCategory.slug}/${category.slug}`
            : `/category/${category.slug}`
        }
      >
        <PostCategory>{category.name}</PostCategory>
      </Link>
    </div>
  );
};

export default PostCategories;
