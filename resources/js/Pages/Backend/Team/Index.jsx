import { DataTable } from '@/Components/Backend/DataTable';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  TableDeleteAction,
  TableEditAction,
} from '@/Components/Backend/TableActions';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { Box, HStack, Image, Text, useToast } from '@chakra-ui/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';

export default function Index({ auth, teams, images }) {
  const toast = useToast();
  const columnHelper = createColumnHelper();
  const { processing, delete: destroy, get } = useForm();

  const handleEdit = (e, id) => {
    e.preventDefault();
    get(route('admin.teams.edit', id));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    destroy(route('admin.teams.destroy', id), {
      preserveScroll: true,
      onSuccess: () =>
        toast({
          position: 'top-right',
          title: 'Team member deleted.',
          description: 'Team member deleted Successfully',
          status: 'error',
          duration: 6000,
          isClosable: true,
        }),
      onError: () => console.log('Error while deleting'),
    });
  };

  const defaultColumns = React.useMemo(
    () => [
      columnHelper.accessor('name', {
        cell: info => info.getValue(),
        header: 'Name',
      }),
      columnHelper.accessor('email', {
        cell: info => info.getValue(),
        header: 'Email',
      }),
      columnHelper.accessor('designation', {
        cell: info => info.getValue(),
        header: 'Designation',
      }),
      columnHelper.display({
        id: 'image',
        cell: info => (
          <Image
            // width={"50px"}
            aspectRatio={3 / 4}
            src={images[info.row.original.id]}
          />
        ),
        header: 'Image',
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
      <Head title="Team Members" />

      <Box mb={4}>
        <Link href={route('admin.teams.create')}>
          <PrimaryButton>Create New Member</PrimaryButton>
        </Link>
      </Box>
      {teams && <DataTable defaultColumns={defaultColumns} data={teams} />}
    </AuthenticatedLayout>
  );
}
