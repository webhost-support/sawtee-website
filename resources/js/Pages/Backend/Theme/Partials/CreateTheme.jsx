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
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

export default function CreateTheme({ isOpen, onClose }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    description: '',
  });
  const toast = useToast();

  const submit = e => {
    e.preventDefault();

    post(route('admin.themes.store'), {
      preserveScroll: true,
      onSuccess: () => {
        toast({
          position: 'top-right',
          title: 'Theme Created.',
          description: 'Theme Created Successfully',
          status: 'success',
          duration: 6000,
          isClosable: true,
        });
        reset('title', 'description');
        onClose();
      },
      onError: errors => {
        errors.title && reset('title');
        errors.description && reset('description');
      },
    });
  };

  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={submit}>
        <ModalHeader>Add new theme</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt="4" isInvalid={errors.title}>
            <FormLabel htmlFor="title">Title</FormLabel>

            <Input
              id="title"
              name="title"
              placeholder="enter theme name"
              onChange={e => setData('title', e.target.value)}
              required
            />

            <FormErrorMessage message={errors.title} className="mt-2" />
          </FormControl>

          <FormControl mt="4" isInvalid={errors.description}>
            <FormLabel htmlFor="title">Description</FormLabel>

            <Textarea
              id="description"
              name="description"
              rows={10}
              placeholder="enter theme description"
              onChange={e => setData('description', e.target.value)}
            />

            <FormErrorMessage message={errors.description} className="mt-2" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <PrimaryButton type="submit" isLoading={processing} mr={3}>
            Add
          </PrimaryButton>
          <Button variant="solid" colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
