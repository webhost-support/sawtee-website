import { FrontDataTable } from '@/Components/Backend/FrontDataTable';
import PrimaryButton from '@/Components/Backend/PrimaryButton';

import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { DataTableColumnHeader } from '@/components/DatatableColumnHelper';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HStack, Select, Tag, useDisclosure } from '@chakra-ui/react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import React from 'react';
import DeletePostModal from './Partials/DeletePostModal';
export default function Index({ auth, posts, categories, categoryID }) {
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

  const defaultColumns = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={value => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
    },
    {
      accessorKey: 'title',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
    },
    {
      accessorKey: 'theme.title',
      header: 'Theme',
    },
    {
      accessorKey: 'tags',
      header: 'Tags',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'author',
      header: 'Author',
    },
    {
      accessorKey: 'id',
      header: 'Actions',
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Actions</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={e => handleEdit(e, row.original.id)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={e => handleDelete(e, row.original.id)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },

    //   columnHelper.accessor('title', {
    //     cell: info => info.getValue(),
    //     header: 'Title',
    //   }),
    //   columnHelper.accessor('category.name', {
    //     cell: info => {
    //       <Tag colorScheme="green">{info.getValue()}</Tag>;
    //     },
    //     header: 'Category',
    //   }),
    //   columnHelper.accessor('theme.title', {
    //     cell: info => (info.getValue() ? info.getValue() : 'N/A'),
    //     header: 'Theme',
    //   }),
    //   columnHelper.accessor('tags', {
    //     cell: info => {
    //       <TagsColumn tags={info.getValue()} />;
    //     },
    //     header: 'Tags',
    //   }),
    //   columnHelper.accessor('status', {
    //     cell: info => (
    //       <Tag colorScheme={getStatusColor(info.getValue())}>
    //         {info.getValue()}
    //       </Tag>
    //     ),
    //     header: 'Status',
    //   }),
    //   columnHelper.accessor('author', {
    //     cell: info => info.getValue(),
    //     header: 'author',
    //     enableHiding: true,
    //   }),
    //   columnHelper.accessor('id', {
    //     cell: info => {
    //       return (
    //         <HStack spacing={4}>
    //           <TableEditAction
    //             onClick={e => handleEdit(e, info.getValue(), selectedCategory)}
    //             isDisabled={processing}
    //           />
    //           <TableDeleteAction
    //             onClick={e =>
    //               handleDelete(e, info.getValue(), selectedCategory)
    //             }
    //             isDisabled={processing}
    //           />
    //         </HStack>
    //       );
    //     },
    //     header: 'Actions',
    //   }),
  ];

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
