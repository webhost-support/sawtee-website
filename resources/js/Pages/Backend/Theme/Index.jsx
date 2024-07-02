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
import CreateThemeForm from './Partials/CreateTheme';
import DeleteTheme from './Partials/DeleteTheme';
import EditThemeForm from './Partials/EditTheme';

export default function Index({ auth, themes: data }) {
  const columnHelper = createColumnHelper();
  const createThemeModal = useDisclosure();
  const editThemeModal = useDisclosure();
  const deleteThemeModal = useDisclosure();
  const [themeId, setThemeId] = React.useState(null);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setThemeId(id);
    editThemeModal.onOpen();
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setThemeId(id);
    deleteThemeModal.onOpen();
  };

  const defaultColumns = React.useMemo(
    () => [
      columnHelper.accessor('title', {
        cell: info => (
          <Text w="64" noOfLines={1}>
            {info.getValue()}
          </Text>
        ),
        header: 'Name',
      }),
      columnHelper.accessor('description', {
        cell: info => (
          <Text w="96" noOfLines={1}>
            {info.getValue()}
          </Text>
        ),
        header: 'Description',
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
      <Head title="Themes" />
      {data.data.length <= 0 && (
        <Alert
          mb="4"
          status="warning"
          p="4"
          rounded="md"
          variant={'left-accent'}
        >
          <AlertIcon />
          There are no themes available, please create new theme.
        </Alert>
      )}

      <PrimaryButton mb={4} onClick={() => createThemeModal.onOpen()}>
        Add new theme
      </PrimaryButton>
      {data && <DataTable defaultColumns={defaultColumns} data={data} />}

      {createThemeModal.isOpen && (
        <CreateThemeForm
          className="max-w-xl"
          isOpen={createThemeModal.isOpen}
          onClose={createThemeModal.onClose}
        />
      )}
      {editThemeModal.isOpen && (
        <EditThemeForm
          themeId={themeId}
          themes={data.data}
          isOpen={editThemeModal.isOpen}
          onClose={editThemeModal.onClose}
        />
      )}
      {deleteThemeModal.isOpen && (
        <DeleteTheme
          themes={data.data}
          isOpen={deleteThemeModal.isOpen}
          onClose={deleteThemeModal.onClose}
          themeId={themeId}
        />
      )}
    </AuthenticatedLayout>
  );
}
