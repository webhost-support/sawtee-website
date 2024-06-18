import { useForm } from '@inertiajs/react';
import {
	Box,
	Button,
	useToast,
	Modal,
	ModalOverlay,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from '@chakra-ui/react';
import DangerButton from '@/Components/Backend/DangerButton';

export default function DeleteCategoryModal({ isOpen, onClose, categoryId }) {
	const { delete: destroy, processing } = useForm();
	const toast = useToast();
	const submit = e => {
		e.preventDefault();
		destroy(route('admin.categories.destroy', categoryId), {
			preserveScroll: true,
			onSuccess: () => {
				toast({
					position: 'top-right',
					title: 'Category deleted.',
					description: 'Category deleted Successfully',
					status: 'warning',
					duration: 6000,
					isClosable: true,
				});

				onClose();
			},
			onError: () => console.log('Error while deleting'),
		});
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose} size={'lg'} isCentered>
			<ModalOverlay />
			<ModalContent as="form" onSubmit={submit}>
				<ModalHeader>Delete Category : {categoryId}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Alert status="warning">
						<AlertIcon />
						<Box>
							<AlertTitle>This action is irreversible.</AlertTitle>
							<AlertDescription>{'Are you sure you want to delete category?'}</AlertDescription>
						</Box>
					</Alert>
				</ModalBody>

				<ModalFooter>
					<DangerButton type="submit" isLoading={processing} mr={3}>
						Delete
					</DangerButton>
					<Button variant="ghost" onClick={onClose}>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
