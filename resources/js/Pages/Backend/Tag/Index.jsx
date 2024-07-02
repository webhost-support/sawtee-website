import { DataTable } from '@/Components/Backend/DataTable';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  TableDeleteAction,
  TableEditAction,
} from '@/Components/Backend/TableActions';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { HStack, Text, useDisclosure } from '@chakra-ui/react';
import { Head } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';
import CreateTag from './Partials/CreateTag';
import DeleteTag from './Partials/DeleteTag';
import EditTag from './Partials/EditTag';

export default function Index({ auth, tags }) {
  const columnHelper = createColumnHelper();
  const [tag, setTag] = React.useState(null);
  const createTag = useDisclosure();
  const editTag = useDisclosure();
  const deleteTag = useDisclosure();
  const handleEdit = (e, id) => {
    e.preventDefault();
    setTag(id);
    editTag.onOpen();
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setTag(id);
    deleteTag.onOpen();
  };

  const defaultColumns = React.useMemo(
    () => [
      columnHelper.accessor('name', {
        cell: info => (
          <Text w="64" noOfLines={1}>
            {info.getValue()}
          </Text>
        ),
        header: 'Name',
      }),
      columnHelper.accessor('posts_count', {
        cell: info => info.getValue(),
        header: 'Post Count',
      }),

      columnHelper.accessor('id', {
        cell: info => {
          return (
            <HStack spacing={4}>
              <TableEditAction onClick={e => handleEdit(e, info.getValue())} />
              <TableDeleteAction
                onClick={e => handleDelete(e, info.getValue())}
              />
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
      <Head title="Tags" />

      <PrimaryButton mb={4} onClick={createTag.onOpen}>
        Create New Tag
      </PrimaryButton>
      {tags.data && <DataTable defaultColumns={defaultColumns} data={tags} />}
      {createTag.isOpen && (
        <CreateTag isOpen={createTag.isOpen} onClose={createTag.onClose} />
      )}
      {editTag.isOpen && (
        <EditTag
          tags={tags.data}
          tag={tag}
          isOpen={editTag.isOpen}
          onClose={editTag.onClose}
        />
      )}
      {deleteTag.isOpen && (
        <DeleteTag
          tags={tags.data}
          tag={tag}
          isOpen={deleteTag.isOpen}
          onClose={deleteTag.onClose}
        />
      )}
    </AuthenticatedLayout>
  );
}
