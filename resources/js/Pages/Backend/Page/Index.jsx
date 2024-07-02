import { DataTable } from '@/Components/Backend/DataTable';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  TableDeleteAction,
  TableEditAction,
} from '@/Components/Backend/TableActions';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { Box, HStack, Text, useDisclosure } from '@chakra-ui/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';
import DeletePageModal from './Partials/DeletePageModal';

export default function Index({ auth, pages: data }) {
  const columnHelper = createColumnHelper();
  const { processing, get } = useForm();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [pageId, setPageId] = React.useState(null);
  const handleEdit = (e, id) => {
    e.preventDefault();
    get(route('admin.pages.edit', id));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setPageId(id);
    onOpen();
  };

  const defaultColumns = React.useMemo(
    () => [
      columnHelper.accessor('name', {
        cell: info => (
          <Text maxW={64} title={info.getValue()}>
            {info.getValue()}
          </Text>
        ),
        header: 'Name',
      }),
      columnHelper.accessor('slug', {
        cell: info => (
          <Text maxW={64} title={info.getValue()}>
            {info.getValue()}
          </Text>
        ),
        header: 'Slug',
      }),
      columnHelper.accessor('sections_count', {
        cell: info => info.getValue(),
        header: 'Sections Count',
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
      <Head title="Pages" />
      <DeletePageModal isOpen={isOpen} onClose={onClose} id={pageId} />
      <Box mb={4}>
        <Link href={route('admin.pages.create')}>
          <PrimaryButton>Create New Page</PrimaryButton>
        </Link>
      </Box>
      {data && <DataTable defaultColumns={defaultColumns} data={data} />}
    </AuthenticatedLayout>
  );
}
