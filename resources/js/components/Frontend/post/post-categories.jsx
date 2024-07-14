import { Button, Flex } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import React from 'react';
import InertiaChakraLink from '../styles/inertia-chakra-link';

export const PostCategory = props => (
  <Button
    px={3}
    py={1}
    className="category"
    fontSize="sm"
    fontWeight="600"
    rounded="md"
    variant="solid"
    colorScheme="gray"
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
    <Flex className="post-categories" flexWrap="wrap" gap={4} {...props}>
      {ParentCategory && (
        <InertiaChakraLink
          as={Link}
          href={`/category/${ParentCategory.slug}`}
          _hover={{ textDecor: 'underline' }}
        >
          <PostCategory
            colorScheme={colorScheme}
            size={size}
            fontSize={size}
            mr="6px"
            mb="6px"
          >
            {ParentCategory.name}
          </PostCategory>
        </InertiaChakraLink>
      )}

      <Link
        href={
          ParentCategory
            ? `/category/${ParentCategory.slug}/${category.slug}`
            : `/category/${category.slug}`
        }
        _hover={{ textDecor: 'underline' }}
      >
        <PostCategory colorScheme={colorScheme} size={size} mr="6px" mb="6px">
          {category.name}
        </PostCategory>
      </Link>
    </Flex>
  );
};

export default PostCategories;
