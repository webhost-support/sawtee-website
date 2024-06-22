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

export default function EditTheme({ themeId, themes, isOpen, onClose }) {
  const Theme = themes.filter(t => t.id === themeId)[0];
  const { data, setData, post, processing, errors, reset } = useForm({
    title: Theme.title,
    description: Theme.description,
  });
  const toast = useToast();

  const submit = e => {
    e.preventDefault();

    post(
      route('admin.themes.update', {
        _method: 'patch',
        theme: Theme,
      }),
      {
        preserveScroll: true,
        onSuccess: () => {
          toast({
            position: 'top-right',
            title: 'Theme edited.',
            description: 'Theme edited Successfully',
            status: 'success',
            duration: 6000,
            isClosable: true,
          });

          reset('title', 'description');
          onClose();
        },
        onError: errors => {
          if (errors.title) {
            reset('title');
          }
        },
      }
    );
  };

  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={submit}>
        <ModalHeader>Edit theme</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt="4" isInvalid={errors.title}>
            <FormLabel htmlFor="title">Title</FormLabel>

            <Input
              id="title"
              name="title"
              placeholder="enter theme title"
              value={data.title}
              onChange={e => setData('title', e.target.value)}
              required
            />

            {errors.title && <FormErrorMessage className="mt-2">{errors.title}</FormErrorMessage>}
          </FormControl>

          <FormControl mt="4" isInvalid={errors.description}>
            <FormLabel htmlFor="title">Description</FormLabel>

            <Textarea
              id="description"
              name="description"
              rows={10}
              value={data.description}
              placeholder="enter theme description"
              onChange={e => setData('description', e.target.value)}
            />

            {errors.description && <FormErrorMessage className="mt-2">{errors.description}</FormErrorMessage>}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <PrimaryButton type="submit" isLoading={processing} mr={3}>
            Save
          </PrimaryButton>
          <Button variant="solid" colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
