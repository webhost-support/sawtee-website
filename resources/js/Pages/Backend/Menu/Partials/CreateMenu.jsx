import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { useForm } from '@inertiajs/react';
import {
	useColorModeValue,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	VStack,
	useToast,
	Input,
	Modal,
	ModalOverlay,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@chakra-ui/react';

export default function CreateMenuForm({ isOpen, onOpen, onClose }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		title: '',
		location: '',
	});
	const toast = useToast();

	const submit = e => {
		e.preventDefault();

		post(route('admin.create.menu'), {
			preserveScroll: true,
			onSuccess: () => {
				toast({
					position: 'top-right',
					title: 'Menu Created.',
					description: 'Menu Created Successfully',
					status: 'success',
					duration: 6000,
					isClosable: true,
				});
				onClose();
			},
			onError: errors => {
				if (errors.title) {
					reset('title');
				}
				if (errors.location) {
					reset('location');
				}
			},
		});
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', md: 'md' }}>
			<ModalOverlay />
			<ModalContent as="form" onSubmit={submit}>
				<ModalHeader>Add Menu</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack gap="6" alignItems={'start'}>
						<FormControl mt="4" isInvalid={errors.title}>
							<FormLabel htmlFor="title">Menu Name</FormLabel>

							<Input
								id="title"
								name="title"
								placeholder="enter menu title"
								onChange={e => setData('title', e.target.value)}
								required
							/>

							<FormErrorMessage message={errors.title} classtitle="mt-2" />
						</FormControl>

						<FormControl mt="4" isInvalid={errors.location}>
							<FormLabel htmlFor="location">Menu Location</FormLabel>

							<Input
								id="location"
								name="location"
								placeholder="enter menu location"
								onChange={e => setData('location', e.target.value)}
								required
							/>

							<FormErrorMessage message={errors.location} classlocation="mt-2" />
						</FormControl>
					</VStack>
				</ModalBody>

				<ModalFooter>
					<PrimaryButton colorScheme="blue" type="submit" isLoading={processing} mr={3}>
						Add
					</PrimaryButton>
					<Button variant="ghost" onClick={onClose}>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
