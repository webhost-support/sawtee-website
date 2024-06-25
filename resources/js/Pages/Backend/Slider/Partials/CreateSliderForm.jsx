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
    Select,
    useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

export default function CreateSliderForm({ isOpen, onClose, pages }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    page_id: null,
  });
  const toast = useToast();

  const submit = e => {
    e.preventDefault();

    post(route('admin.sliders.store'), {
      preserveScroll: true,
      onSuccess: () => {
        toast({
          position: 'top-right',
          title: 'Slider Created.',
          description: 'Slider Created Successfully',
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
      },
    });
  };

  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={submit}>
        <ModalHeader>Add new slider</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt="4" isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>

            <Input
              id="name"
              name="name"
              placeholder="enter name of slider"
              onChange={e => setData('name', e.target.value)}
            />

            {errors.name && <FormErrorMessage mt={2}>{errors.name}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.page_id}>
            <FormLabel htmlFor="pages">Pages</FormLabel>
            <Select id="pages" name="pages" placeholder="Select pages">
              {pages.map(page => (
                <option key={page.id} value={page.id}>
                  {page.name}
                </option>
              ))}
            </Select>
            {errors.page_id && <FormErrorMessage mt={2}>{errors.page_id}</FormErrorMessage>}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <PrimaryButton type="submit" isLoading={processing} mr={3}>
            Create
          </PrimaryButton>
          <Button variant="solid" colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
