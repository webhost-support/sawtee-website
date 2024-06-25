import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { SmallAddIcon } from '@chakra-ui/icons';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Select,
    SimpleGrid,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import CreateSlideForm from '../../Slide/CreateSlideForm';
import Slides from '../../Slide/Slides';

export default function EditSliderForm({ slider, slides, pages }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: slider.name,
    page_id: slider.page_id,
  });
  const toast = useToast();
  const createSlideForm = useDisclosure();

  const submit = e => {
      e.preventDefault();
      console.log(data)
    post(
      route('admin.sliders.update', {
        _method: 'patch',
        slider: slider.id,
      }),
      {
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
      }
    );
  };
  return (
    <>
      {slides.data.length < 1 && (
        <Alert mb="4" status="warning" p="4" rounded="md" variant={'left-accent'}>
          <AlertIcon />
          No slides added yet.
        </Alert>
      )}

      <form onSubmit={submit}>
        <SimpleGrid gap="4" columns={{ base: 1, md: 3 }} alignItems={'end'}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" name="name" value={data.name} onChange={e => setData('name', e.target.value)} />
            {errors.name && <FormErrorMessage mt={2}>{errors.name}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={errors.page_id}>
            <FormLabel htmlFor="pages">Pages</FormLabel>
            <Select
              id="pages"
              name="pages"
              value={data.page_id}
              placeholder="Select pages"
              onChange={e => setData('page_id', e.target.value)}
            >
              {pages.map(page => (
                <option key={page.id} value={page.id}>
                  {page.name}
                </option>
              ))}
            </Select>
            {errors.page_id && <FormErrorMessage mt={2}>{errors.page_id}</FormErrorMessage>}
          </FormControl>
          <HStack gap={4} justify={'center'}>
            <Button onClick={createSlideForm.onOpen} leftIcon={<SmallAddIcon />}>
              Add slide
            </Button>
            <PrimaryButton type="submit" disabled={processing}>
              Save slider
            </PrimaryButton>
          </HStack>
        </SimpleGrid>
      </form>

      {slides.data.length > 0 && (
        <Box mt={6}>
          <Slides slides={slides} slider={slider} />
        </Box>
      )}

      {createSlideForm.isOpen && (
        <CreateSlideForm isOpen={createSlideForm.isOpen} onClose={createSlideForm.onClose} slider={slider} />
      )}
    </>
  );
}
