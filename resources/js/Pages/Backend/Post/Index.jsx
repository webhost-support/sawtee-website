import { FrontDataTable } from '@/Components/Backend/FrontDataTable';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  TableDeleteAction,
  TableEditAction,
} from '@/Components/Backend/TableActions';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { HStack, Select, Tag, useDisclosure } from '@chakra-ui/react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';
import DeletePostModal from './Partials/DeletePostModal';
export default function Index({ auth, posts, categories, categoryID }) {
  const columnHelper = createColumnHelper();
  const { processing, get } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postId, setPostId] = React.useState(null);

  const [selectedCategory, setSelectedCategory] = React.useState(categoryID);

  const handleDelete = (e, id) => {
    e.preventDefault();
    setPostId(id);
    onOpen();
  };

  function handleCategoryFilter(e, category) {
    e.preventDefault();
    setSelectedCategory(category);
    router.visit('/admin/posts', {
      data: { category_id: category },
      preserveState: true,
    });
  }

  function getStatusColor(status) {
    if (status === 'unpublished') {
      return 'red';
    }
    if (status === 'draft') {
      return 'blue';
    }
    return 'green';
  }

  const TagsColumn = ({ tags }) => {
    if (!tags.length) {
      return 'N/A';
    }
    return (
      <HStack columns={{ base: 1, lg: 2 }} spacing={2}>
        {tags.map(tag => {
          return (
            <Tag colorScheme="blue" key={tag.id}>
              {tag.name}
            </Tag>
          );
        })}
      </HStack>
    );
  };

  const handleEdit = (e, post_id, category_id) => {
    e.preventDefault();
    get(route('admin.posts.edit', post_id, category_id));
  };

  const defaultColumns = React.useMemo(
    () => [
      columnHelper.accessor('title', {
        cell: info => info.getValue(),
        header: 'Title',
      }),
      columnHelper.accessor('category.name', {
        cell: info => {
          <Tag colorScheme="green">{info.getValue()}</Tag>;
        },
        header: 'Category',
      }),
      columnHelper.accessor('theme.title', {
        cell: info => (info.getValue() ? info.getValue() : 'N/A'),
        header: 'Theme',
      }),
      columnHelper.accessor('tags', {
        cell: info => {
          <TagsColumn tags={info.getValue()} />;
        },
        header: 'Tags',
      }),
      columnHelper.accessor('status', {
        cell: info => (
          <Tag colorScheme={getStatusColor(info.getValue())}>
            {info.getValue()}
          </Tag>
        ),
        header: 'Status',
      }),
      columnHelper.accessor('author', {
        cell: info => info.getValue(),
        header: 'author',
        enableHiding: true,
      }),
      columnHelper.accessor('id', {
        cell: info => {
          return (
            <HStack spacing={4}>
              <TableEditAction
                onClick={e => handleEdit(e, info.getValue(), selectedCategory)}
                isDisabled={processing}
              />
              <TableDeleteAction
                onClick={e =>
                  handleDelete(e, info.getValue(), selectedCategory)
                }
                isDisabled={processing}
              />
            </HStack>
          );
        },
        header: 'Actions',
      }),
    ],
    [selectedCategory, processing]
  );

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Posts" />
      <DeletePostModal
        isOpen={isOpen}
        onClose={onClose}
        postId={postId}
        categoryId={selectedCategory}
      />
      <HStack mb={4}>
        <Link href={route('admin.posts.create', selectedCategory)}>
          <PrimaryButton>Create New Post</PrimaryButton>
        </Link>

        <Select
          maxW="96"
          name="category"
          placeholder="Filter posts by Category"
          onChange={e => handleCategoryFilter(e, e.target.value)}
          defaultValue={selectedCategory}
        >
          {categories?.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </HStack>
      <FrontDataTable defaultColumns={defaultColumns} data={posts} />
    </AuthenticatedLayout>
  );
}
