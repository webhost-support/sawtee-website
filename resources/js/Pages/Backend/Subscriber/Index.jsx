import { DataTable } from '@/Components/Backend/DataTable';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { Tag } from '@chakra-ui/react';
import { Head } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';

import React from 'react';

export default function Index({ auth, subscribers }) {
  const columnHelper = createColumnHelper();

  const defaultColumns = React.useMemo(
    () => [
      columnHelper.accessor('id', {
        cell: info => info.getValue(),
        header: 'ID',
      }),
      columnHelper.accessor('email', {
        cell: info => info.getValue(),
        header: 'Email',
      }),
      columnHelper.accessor('verified_at', {
        cell: info =>
          info.getValue() !== null ? (
            <Tag colorScheme="green">Verified</Tag>
          ) : (
            <Tag colorScheme="red">Not Verified</Tag>
          ),
        header: 'Verified',
      }),
    ],
    []
  );

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Subscribers" />

      {subscribers.data && (
        <DataTable defaultColumns={defaultColumns} data={subscribers} />
      )}
    </AuthenticatedLayout>
  );
}
