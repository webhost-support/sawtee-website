import { DataTable } from '@/Components/Backend/DataTable';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  TableDeleteAction,
  TableEditAction,
} from '@/Components/Backend/TableActions';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { Box, HStack, useDisclosure } from '@chakra-ui/react';
import { Head, useForm } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';
import React, { useState } from 'react';
import CreateMenuForm from './Partials/CreateMenu';
import DeleteMenu from './Partials/DeleteMenu';

export default function Index({ auth, menus }) {
  const columnHelper = createColumnHelper();
  const { processing, get } = useForm();
  const createMenu = useDisclosure();
  const deleteMenu = useDisclosure();

  const [menuItem, setMenuItem] = useState(null);

  const handleEdit = (e, id) => {
    e.preventDefault();
    get(route('admin.manage.menus', id));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setMenuItem(id);
    deleteMenu.onOpen();
  };

  const defaultColumns = React.useMemo(
    () => [
      columnHelper.accessor('title', {
        cell: info => info.getValue(),
        header: 'Title',
      }),
      columnHelper.accessor('location', {
        cell: info => info.getValue(),
        header: 'Location',
      }),

      columnHelper.accessor('id', {
        cell: info => {
          return (
            <HStack spacing={4}>
              <TableEditAction
                onClick={e => handleEdit(e, info.getValue())}
                isDisabled={processing}
              />
              <TableDeleteAction
                onClick={e => handleDelete(e, info.getValue())}
                isDisabled={processing}
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
      <Head title="Menus" />
      {menus.length <= 0 && (
        <HStack spacing={4} variant="left-accent">
          <Alert status="warning">
            <AlertIcon />
            <AlertTitle>No menu!</AlertTitle>
            <AlertDescription>
              Create a menu to add menu items.
            </AlertDescription>
          </Alert>

          <Button onClick={onOpen}>Create new menu</Button>
        </HStack>
      )}

      {menus && (
        <>
          <Box mb={4}>
            <PrimaryButton onClick={createMenu.onOpen}>
              Add New Menu
            </PrimaryButton>
          </Box>
          <DataTable defaultColumns={defaultColumns} data={menus} />
        </>
      )}

      <CreateMenuForm
        onOpen={createMenu.onOpen}
        isOpen={createMenu.isOpen}
        onClose={createMenu.onClose}
      />
      <DeleteMenu
        onOpen={deleteMenu.onOpen}
        isOpen={deleteMenu.isOpen}
        onClose={deleteMenu.onClose}
        menu={menuItem}
      />
    </AuthenticatedLayout>
  );
}
