import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import React from 'react';
import InertiaChakraLink from '../styles/inertia-chakra-link';

export const PostCategory = props => (
  <Button
    px={3}
    py={1}
    className="category rounded-md text-sm font-semibold"
    variant="outline"
    {...props}
  />
);

export const PostCategories = ({
  category,
  colorScheme = 'gray',
  size = 'xs',
  ...props
}) => {
  const ParentCategory = category.parent;
  return (
    <div className="post-categories flex flex-wrap gap-4" {...props}>
      {ParentCategory && (
        <Link href={`/category/${ParentCategory.slug}`}>
          <PostCategory
            colorScheme={colorScheme}
            size={size}
            fontSize={size}
            mr="6px"
            mb="6px"
          >
            {ParentCategory.name}
          </PostCategory>
        </Link>
      )}

      <Link
        href={
          ParentCategory
            ? `/category/${ParentCategory.slug}/${category.slug}`
            : `/category/${category.slug}`
        }
      >
        <PostCategory colorScheme={colorScheme} size={size} mr="6px" mb="6px">
          {category.name}
        </PostCategory>
      </Link>
    </div>
  );
};

export default PostCategories;
