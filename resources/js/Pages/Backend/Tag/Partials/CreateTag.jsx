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
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

export default function CreateTag({ isOpen, onClose }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
  });
  const toast = useToast();

  const submit = e => {
    e.preventDefault();

    post(route('admin.tags.store'), {
      onSuccess: () => {
        toast({
          position: 'top-right',
          title: 'Tag Created.',
          description: 'Tag Created Successfully',
          status: 'success',
          duration: 6000,
          isClosable: true,
        });
        onClose();
      },
      onError: errors => {
        if (errors.name) {
          reset('name');
        }
      },
    });
  };

  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={submit}>
        <ModalHeader>Add tag</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt="4" isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>

            <Input
              id="name"
              name="name"
              placeholder="enter tag name"
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              required
            />

            {errors.name && (
              <FormErrorMessage className="mt-2">
                {errors.name}
              </FormErrorMessage>
            )}
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
