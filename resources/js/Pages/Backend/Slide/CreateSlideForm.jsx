import FileUpload, { PreviewImage } from '@/Components/Backend/FileUpload';
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
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

function CreateSlideForm({ isOpen, onClose, slider }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    subtitle: '',
    slider_id: slider.id,
  });
  const toast = useToast();
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(null);
  }, []);

  const addSlide = e => {
    e.preventDefault();

    post(route('admin.slides.store'), {
      preserveScroll: true,
      onSuccess: () => {
        toast({
          position: 'top-right',
          title: 'Slide Created.',
          description: 'Slide Created Successfully',
          status: 'success',
          duration: 6000,
          isClosable: true,
        });
        setImage(null);
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
      <ModalContent as="form" onSubmit={addSlide}>
        <ModalHeader>Add slide</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap="6" alignItems={'start'}>
            <FormControl mt="4" isInvalid={errors.title}>
              <FormLabel htmlFor="title">Title</FormLabel>

              <Input
                id="title"
                name="title"
                placeholder="enter title"
                onChange={e => setData('title', e.target.value)}
              />

              <FormErrorMessage message={errors.title} className="mt-2" />
            </FormControl>

            <FormControl mt="4">
              <FormLabel htmlFor="subtitle">Subtitle</FormLabel>

              <Input
                id="subtitle"
                name="subtitle"
                placeholder="enter subtitle"
                onChange={e => setData('subtitle', e.target.value)}
              />
              <FormErrorMessage message={errors.subtitle} className="mt-2" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="image">Slide Image</FormLabel>

              {image && (
                <>
                  <PreviewImage src={image} aspectRatio={16 / 9} />
                  <Button
                    mt={4}
                    size={'sm'}
                    colorScheme="red"
                    onClick={() => {
                      setImage(null);
                    }}
                  >
                    Remove/Change Image
                  </Button>
                </>
              )}

              {!image && (
                <FileUpload accept="image/.png,.jpg,.jpeg,.webp">
                  <Input
                    type="file"
                    height="100%"
                    width="100%"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    aria-hidden="true"
                    accept="image/.png,.jpg,.jpeg,.webp"
                    id="image"
                    name="image"
                    size="md"
                    onChange={e => {
                      setData('image', e.target.files[0]);
                      setImage(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                </FileUpload>
              )}
              {errors.image && <FormErrorMessage mt={2}>{errors.image}</FormErrorMessage>}
            </FormControl>
          </VStack>
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

export default CreateSlideForm;
