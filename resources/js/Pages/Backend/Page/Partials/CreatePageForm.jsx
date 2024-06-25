import ContentEditor from '@/Components/Backend/ContentEditor';
import FileUpload, { PreviewImage } from '@/Components/Backend/FileUpload';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { slugify } from '@/Utils/helpers';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    SimpleGrid,
    Textarea,
    VStack,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import React from 'react';

export default function CreatePageForm() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    slug: null,
    content: '',
    image: '',
    meta_title: '',
    meta_description: '',
  });
  const toast = useToast();
  const [slug, setSlug] = React.useState('');
  const [image, setImage] = React.useState(null);
  const submit = e => {
    e.preventDefault();

    post(route('admin.pages.store'), {
      preserveScroll: true,
      onSuccess: () =>
        toast({
          position: 'top-right',
          title: 'Page Created.',
          description: 'Page Created Successfully',
          status: 'success',
          duration: 6000,
          isClosable: true,
        }),
      onError: errors => {
        if (errors.name) {
          reset('name');
        }
      },
    });
  };

  // Set Slug if title value changes
  React.useEffect(() => {
    if (data.name) {
      setSlug(slugify(data.name));
    }
  }, [data.name]);

  return (
    <form onSubmit={submit}>
      <SimpleGrid columns={2} spacing={4}>
        <VStack gap="6" alignItems="start">
          <FormControl mt="4" isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>

            <Input
              type="text"
              id="name"
              name="name"
              placeholder="enter page name"
              onChange={e => {
                setData('name', e.target.value);
              }}
            />

            {errors.name && <FormErrorMessage mt={2}>{errors.name}</FormErrorMessage>}
          </FormControl>

          <FormControl mt="4" isInvalid={errors.slug}>
            <FormLabel htmlFor="slug">Slug</FormLabel>

            <Input
              type="text"
              id="slug"
              isReadOnly
              name="slug"
              color={useColorModeValue('blue.600', 'blue.300')}
              value={slug}
              display="flex"
              mt={1}
            />
            {errors.slug && <FormErrorMessage mt={2}>{errors.slug}</FormErrorMessage>}
          </FormControl>
        </VStack>
        <VStack gap="6" alignItems="start">
          <FormControl mt="4" isInvalid={errors.meta_title}>
            <FormLabel htmlFor="meta_title">Meta Title</FormLabel>

            <Input
              id="meta_title"
              name="meta_title"
              placeholder="enter meta title"
              value={data.name}
              onChange={e => setData('meta_title', e.target.value)}
            />

            <FormErrorMessage message={errors.meta_title} className="mt-2" />
          </FormControl>

          <FormControl mt="4" isInvalid={errors.meta_description}>
            <FormLabel htmlFor="meta_description">Meta Description</FormLabel>

            <Textarea
              id="meta_description"
              name="meta_description"
              placeholder="enter meta description"
              rows={3}
              resize="vertical"
              onChange={e => setData('meta_description', e.target.value)}
            />

            <FormErrorMessage message={errors.meta_description} className="mt-2" />
          </FormControl>
        </VStack>
      </SimpleGrid>
      <FormControl mt={4}>
        <FormLabel htmlFor="image">Hero Image</FormLabel>

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
      <FormControl mt={4} isInvalid={errors.content}>
        <FormLabel htmlFor="content">Content</FormLabel>

        <ContentEditor
          name="content"
          id="content"
          onChange={(evt, editor) => setData('content', editor.getContent())}
        />

        {errors.content && <FormErrorMessage mt={2}>{errors.content}</FormErrorMessage>}
      </FormControl>

      <Box display="flex" gap="4" mt="4">
        <PrimaryButton minW={'64'} type="submit" isLoading={processing}>
          Save
        </PrimaryButton>
      </Box>
    </form>
  );
}
