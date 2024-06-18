import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { DataTable } from '@/Components/Backend/DataTable';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { HStack, useToast, Alert, AlertIcon, useDisclosure } from '@chakra-ui/react';
import { Head, useForm } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';
import { TableDeleteAction, TableEditAction } from '@/Components/Backend/TableActions';
import React from 'react';
import CreateSliderForm from './Partials/CreateSliderForm';

export default function Index({ auth, sliders }) {
	const toast = useToast();
	const columnHelper = createColumnHelper();
	const { processing, delete: destroy, get } = useForm();
	const createSliderModal = useDisclosure();

	const handleEdit = (e, id) => {
		e.preventDefault();
		get(route('admin.sliders.edit', id));
	};

	const handleDelete = (e, id) => {
		e.preventDefault();
		destroy(route('admin.sliders.destroy', id), {
			preserveScroll: true,
			onSuccess: () =>
				toast({
					position: 'top-right',
					title: 'Slider deleted.',
					description: 'Slider deleted Successfully',
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
			<Head title="Manage Sliders" />
			{sliders.data.length <= 0 && (
				<Alert mb="4" status="warning" p="4" rounded="md" variant={'left-accent'}>
					<AlertIcon />
					There are no sliders to add slides to, please create a slider first by clicking the add new slider button
					below.
				</Alert>
			)}
			<HStack gap="6" mb={4}>
				<PrimaryButton onClick={() => createSliderModal.onOpen()}>Create Slider</PrimaryButton>
			</HStack>
			{sliders && <DataTable defaultColumns={defaultColumns} data={sliders} />}
			{createSliderModal.isOpen && (
				<CreateSliderForm isOpen={createSliderModal.isOpen} onClose={createSliderModal.onClose} />
			)}
		</AuthenticatedLayout>
	);
}
