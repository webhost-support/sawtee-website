import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    VStack,
    useToast
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

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

              {errors.title && <FormErrorMessage mt={2}>{errors.title}</FormErrorMessage>}
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

              {errors.location && <FormErrorMessage mt={2}>{errors.location}</FormErrorMessage>}
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
