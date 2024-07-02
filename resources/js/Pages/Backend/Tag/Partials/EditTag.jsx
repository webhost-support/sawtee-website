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

export default function EditTag({ tag, tags, isOpen, onClose }) {
  const Tag = tags.filter(t => t.id === tag)[0];
  const { data, setData, post, processing, errors, reset } = useForm({
    name: Tag.name,
  });
  const toast = useToast();

  const submit = e => {
    e.preventDefault();

    post(
      route('admin.tags.update', {
        _method: 'patch',
        tag: Tag,
      }),
      {
        onSuccess: () => {
          toast({
            position: 'top-right',
            title: 'Tag edited.',
            description: 'Tag edited Successfully',
            status: 'success',
            duration: 6000,
            isClosable: true,
          });
          reset('name');
          onClose();
        },
        onError: errors => {
          if (errors.name) {
            reset('name');
            console.error(errors);
          }
        },
      }
    );
  };

  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={submit}>
        <ModalHeader>Edit tag</ModalHeader>
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
