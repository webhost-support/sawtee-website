import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { DataTable } from '@/Components/Backend/DataTable';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { Box, HStack, useDisclosure } from '@chakra-ui/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';
import { TableDeleteAction, TableEditAction } from '@/Components/Backend/TableActions';
import React from 'react';
import DeleteCategoryModal from './Partials/DeleteCategoryModal';

export default function Index({ auth, categories: data }) {
	const columnHelper = createColumnHelper();
	const { processing, get } = useForm();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleEdit = (e, id) => {
		e.preventDefault();
		get(route('admin.categories.edit', id));
	};

	const [categoryId, setCategoryId] = React.useState(null);

	const handleDelete = (e, id) => {
		e.preventDefault();
		setCategoryId(id);
		onOpen();
	};

	const defaultColumns = React.useMemo(
		() => [
			columnHelper.accessor('name', {
				cell: info => info.getValue(),
				header: 'Name',
			}),
			columnHelper.accessor('type', {
				cell: info => info.getValue(),
				header: 'Type',
			}),
			columnHelper.accessor('parent_id', {
				cell: info => data.data.filter(item => item.id === info.getValue())[0]?.name,
				header: 'Parent Category',
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
			<Head title="Categories" />

			<DeleteCategoryModal isOpen={isOpen} onClose={onClose} categoryId={categoryId} />

			<Box mb={4}>
				<Link href={route('admin.categories.create')}>
					<PrimaryButton>Create New Category</PrimaryButton>
				</Link>
			</Box>
			{data && <DataTable defaultColumns={defaultColumns} data={data} />}
		</AuthenticatedLayout>
	);
}
