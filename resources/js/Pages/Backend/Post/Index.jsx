import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { DataTable } from '@/Components/Backend/DataTable';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { Box, Tag, HStack, Text, Select, useDisclosure } from '@chakra-ui/react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';
import { TableDeleteAction, TableEditAction } from '@/Components/Backend/TableActions';
import React from 'react';
import DeletePostModal from './Partials/DeletePostModal';

export default function Index({ auth, posts, categories }) {
  const columnHelper = createColumnHelper();
  const { processing, get, delete: destroy } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postId, setPostId] = React.useState(null);

  const handleDelete = (e, id) => {
    e.preventDefault();
    setPostId(id);
    onOpen();
  };

  function handleCategoryFilter(e, category) {
    e.preventDefault();
    return router.visit('/filterByCategory', {
      method: 'get',
      data: { category: category },
      replace: false,
      preserveState: false,
      preserveScroll: false,

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

  const handleEdit = (e, post) => {
    e.preventDefault();
    get(route('admin.posts.edit', post));
  };

  const defaultColumns = React.useMemo(
    () => [
      columnHelper.accessor('title', {
        cell: info => (
          <Text maxW="90" noOfLines={1}>
            {info.getValue()}
          </Text>
        ),
        header: 'Title',
      }),
      columnHelper.accessor('category.name', {
        cell: info => <Tag colorScheme="green">{info.getValue()}</Tag>,
        header: 'Category',
      }),
      columnHelper.accessor('theme.title', {
        cell: info => (info.getValue() ? info.getValue() : 'None'),
        header: 'Theme',
      }),
      columnHelper.accessor('tags', {
        cell: info => <TagsColumn tags={info.getValue()} />,
        header: 'Tags',
      }),
      columnHelper.accessor('status', {
        cell: info => <Tag colorScheme={getStatusColor(info.getValue())}>{info.getValue()}</Tag>,
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
              <TableEditAction onClick={e => handleEdit(e, info.getValue())} isDisabled={processing} />
              <TableDeleteAction onClick={e => handleDelete(e, info.getValue())} isDisabled={processing} />
            </HStack>
          );
        },
        header: 'Actions',
      }),
    ],
    []
  );

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Posts" />
      <DeletePostModal isOpen={isOpen} onClose={onClose} postId={postId} />
      <HStack mb={4}>
        <Link as="button" href={route('admin.posts.create')}>
          <PrimaryButton>Create New Post</PrimaryButton>
        </Link>


        <Select
          maxW="96"
          name="category"
          placeholder="Filter posts by Category"
          onChange={e => handleCategoryFilter(e, e.target.value)}
        >
          {categories &&
            categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </Select>


      </HStack>
      <DataTable defaultColumns={defaultColumns} data={posts} showSearch={true} />
    </AuthenticatedLayout>
  );
}
