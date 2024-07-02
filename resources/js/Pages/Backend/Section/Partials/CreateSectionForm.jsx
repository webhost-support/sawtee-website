import ContentEditor from '@/Components/Backend/ContentEditor';
import FileUpload, { PreviewImage } from '@/Components/Backend/FileUpload';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  Select,
  SimpleGrid,
  Stack,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import React from 'react';

export default function CreateSectionForm({ sections, pages }) {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    type: 'default',
    link: '',
    parent_id: null,
    page_id: null,
    order: null,
    image: '',
  });
  const toast = useToast();
  const sectionTypes = ['default', 'tabs', 'accordian', 'members'];
  const [image, setImage] = React.useState(null);

  const submit = e => {
    e.preventDefault();
    post(route('admin.sections.store'), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () =>
        toast({
          position: 'top-right',
          title: 'Section Created.',
          description: `Section ${data.title} created Successfully`,
          status: 'success',
          duration: 6000,
          isClosable: true,
        }),
      onError: errors => {
        console.log(errors);
      },
    });
  };

  return (
    <form onSubmit={submit}>
      <VStack spacing={8} position={'sticky'} top={'2rem'}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems={'start'}
          w="full"
        >
          <FormControl isInvalid={errors.title} isRequired>
            <FormLabel htmlFor="title">Section Title</FormLabel>

            <Input
              type="text"
              id="title"
              name="title"
              display="flex"
              mt={1}
              autoComplete="title"
              onChange={e => setData('title', e.target.value)}
            />

            {errors.title && (
              <FormErrorMessage mt={2}>{errors.title}</FormErrorMessage>
            )}
          </FormControl>

          <HStack gap={10}>
            <FormControl isInvalid={errors.link}>
              <FormLabel htmlFor="link">Link</FormLabel>

              <Input
                type="text"
                id="link"
                name="link"
                display="flex"
                mt={1}
                autoComplete="link"
                onChange={e => setData('link', e.target.value)}
              />

              {errors.link && (
                <FormErrorMessage mt={2}>{errors.link}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl maxW="32" isRequired isInvalid={errors.order}>
              <FormLabel htmlFor="order">Order</FormLabel>
              <NumberInput
                id="order"
                name="order"
                defaultValue={0}
                onChange={e => setData('order', e.target.value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {errors.order && (
                <FormErrorMessage mt={2}>{errors.order}</FormErrorMessage>
              )}
            </FormControl>
          </HStack>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 1, md: data.type !== 'default' ? 3 : 2 }}
          spacing={10}
          alignItems={'center'}
          justifyContent="start"
          w="full"
        >
          <FormControl isRequired as="fieldset">
            <FormLabel as="legend" htmlFor="page_id">
              For Page
            </FormLabel>

            <Select
              name="page_id"
              id="page_id"
              placeholder="Select Page"
              onChange={e => {
                setData('page_id', e.target.value);
              }}
            >
              <option value={null}>{'None'}</option>
              {pages &&
                pages.length > 0 &&
                pages.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Select>
          </FormControl>

          <FormControl isInvalid={errors.type} isRequired as="fieldset">
            <FormLabel as="fieldset" htmlFor="type">
              Section Type
            </FormLabel>

            <Stack direction="row" flexWrap="wrap" spacing={8}>
              {sectionTypes.map(item => {
                return (
                  <Radio
                    key={item}
                    name="type"
                    isChecked={data.type === item}
                    value={item}
                    onChange={e => {
                      setData('type', e.target.value);
                    }}
                  >
                    {item}
                  </Radio>
                );
              })}
            </Stack>

            {errors.type && (
              <FormErrorMessage mt={2}>{errors.type}</FormErrorMessage>
            )}
          </FormControl>

          {data.type !== 'default' && (
            <FormControl as="fieldset">
              <FormLabel as="legend" htmlFor="parent_id">
                Parent Section
              </FormLabel>

              <Select
                name="parent_id"
                id="parent_id"
                placeholder="Select Parent"
                onChange={e => {
                  setData('parent_id', e.target.value);
                }}
              >
                <option value={null}>{'None'}</option>
                {sections &&
                  sections.length > 0 &&
                  sections.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
              </Select>
            </FormControl>
          )}
        </SimpleGrid>

        <FormControl mt={4}>
          <FormLabel htmlFor="image">Image</FormLabel>

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
          {errors.image && (
            <FormErrorMessage mt={2}>{errors.image}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt={4} isInvalid={errors.description}>
          <FormLabel htmlFor="description">Description</FormLabel>

          <ContentEditor
            name="description"
            id="description"
            initialValue=""
            onChange={(evt, editor) =>
              setData('description', editor.getContent())
            }
          />

          {errors.description && (
            <FormErrorMessage mt={2}>{errors.description}</FormErrorMessage>
          )}
        </FormControl>

        <Box display="flex" gap="4" mt="4">
          <PrimaryButton type="submit" isLoading={processing}>
            Save
          </PrimaryButton>
        </Box>
      </VStack>
    </form>
  );
}
