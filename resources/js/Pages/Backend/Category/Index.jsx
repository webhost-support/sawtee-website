import DataTableActions from '@/components/Backend/DataTableActions';
import { DataTableColumnHeader } from '@/components/Backend/DatatableColumnHelper';
import { DataTable } from '@/components/Backend/FrontDataTable';
import PrimaryButton from '@/components/Backend/PrimaryButton';
import AuthenticatedLayout from '@/components/Layouts/AuthenticatedLayout';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import CreateCategoryForm from './Partials/CreateCategoryForm';
export default function Index({ auth, categories: data }) {
  const { processing, get, delete: destroy } = useForm();
  const { toast } = useToast();
  const handleEdit = (e, id) => {
    e.preventDefault();
    get(route('admin.categories.edit', id));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    destroy(route('admin.categories.destroy', id), {
      preserveScroll: true,
      onSuccess: () => {
        toast({
          title: `Category ID:${id} deleted.`,
          description: 'Category deleted successfully.',
          action: <ToastAction altTxt="Dismiss">Dismiss</ToastAction>,
        });
      },
      onError: () => {
        toast({
          variant: 'destructive',
          title: 'Error.',
          description: 'Something went wrong. Please try again.',
          action: <ToastAction altTxt="Dismiss">Dismiss</ToastAction>,
        });
      },
    });
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
          className="mx-4"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={value => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="mx-4"
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
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: 'type',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Type" />
      ),
    },
    {
      accessorKey: 'parent.name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Parent Category" />
      ),
    },
    {
      accessorKey: 'id',
      header: 'Actions',
      cell: ({ row }) => {
        return (
          <AlertDialog>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this item and remove it from the servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className={cn(buttonVariants({ variant: 'destructive' }))}
                  onClick={e => handleDelete(e, row.original.id)}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
            <DataTableActions id={row.original.id} handleEdit={handleEdit} />
          </AlertDialog>
        );
      },
    },
  ];

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Categories" />
      <Dialog>
        <DialogTrigger asChild>
          <PrimaryButton>Create New Category</PrimaryButton>
        </DialogTrigger>
        <CreateCategoryForm categories={data} />
      </Dialog>
      {data && (
        <DataTable
          defaultColumns={defaultColumns}
          data={data}
          showTypeFilter={false}
        />
      )}
    </AuthenticatedLayout>
  );
}
