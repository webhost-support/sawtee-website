import FileUpload, { PreviewImage } from '@/Components/Backend/FileUpload';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { FileIcon } from '@/Components/Frontend/icons';
import { CloseIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  Tooltip,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateResearchForm({ research }) {
  const { data, setData, post, processing, errors } = useForm({
    title: research.title,
    subtitle: research.subtitle,
    description: research.description,
    year: research.year,
    image: research.featured_image ? research.featured_image.name : null,
    file: research.media[0] ? research.media[0].original_url : null,
    meta_title: research.meta_title,
    meta_description: research.meta_description,
  });
  const toast = useToast();
  const [image, setImage] = useState(data.image);
  const [filename, setFilename] = useState(
    research.file ? research.file.name : ''
  );

  const submit = e => {
    e.preventDefault();
    post(
      route('admin.research.update', {
        _method: 'patch',
        research: research.id,
      }),
      {
        preserveScroll: true,
        onSuccess: () =>
          toast({
            position: 'top-right',
            title: 'Research Edited.',
            description: `Research ${data.title} Successfully`,
            status: 'success',
            duration: 6000,
            isClosable: true,
          }),
        onError: errors => {
          console.error(errors);
        },
      }
    );
  };

  return (
    <form onSubmit={submit}>
      <Grid
        templateColumns={{
          base: '1fr',
          xl: 'repeat(6, minmax(100px, 1fr))',
        }}
        autoRows={'auto'}
        gap={8}
      >
        <GridItem colSpan={{ base: 1, xl: 4 }}>
          <VStack spacing={8} position={'sticky'} top={'2rem'}>
            <FormControl isInvalid={errors.title} isRequired>
              <FormLabel htmlFor="title">Title</FormLabel>

              <Input
                type="text"
                id="title"
                name="title"
                display="flex"
                mt={1}
                autoComplete="title"
                value={data.title}
                onChange={e => setData('title', e.target.value)}
              />

              {errors.title && (
                <FormErrorMessage mt={2}>{errors.title}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={errors.subtitle}>
              <FormLabel htmlFor="subtitle">Subtitle</FormLabel>

              <Input
                type="text"
                id="subtitle"
                name="subtitle"
                display="flex"
                mt={1}
                autoComplete="subtitle"
                value={data.subtitle}
                onChange={e => setData('subtitle', e.target.value)}
              />

              {errors.title && (
                <FormErrorMessage mt={2}>{errors.title}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4} isInvalid={errors.description}>
              <FormLabel htmlFor="description">Description</FormLabel>

              <Textarea
                name="description"
                id="description"
                rows={6}
                resize={'vertical'}
                value={data.description}
                onChange={e => setData('description', e.target.value)}
              />

              {errors.description && (
                <FormErrorMessage mt={2}>{errors.description}</FormErrorMessage>
              )}
            </FormControl>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <VStack spacing={8}>
            <Accordion allowToggle w="full">
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: 'gray.600',
                      color: 'white',
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={'semibold'}
                    >
                      {'SEO Meta Tags '}
                      <Tooltip
                        label="Add title and description for SEO"
                        fontSize="xs"
                      >
                        <QuestionOutlineIcon boxSize={3} />
                      </Tooltip>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack gap="6" alignItems={'start'}>
                    <FormControl mt="4" isInvalid={errors.meta_title}>
                      <FormLabel htmlFor="meta_title">Meta Title</FormLabel>

                      <Input
                        id="meta_title"
                        name="meta_title"
                        placeholder="enter meta title"
                        value={data.meta_title}
                        onChange={e => setData('meta_title', e.target.value)}
                      />

                      <FormErrorMessage
                        message={errors.meta_title}
                        className="mt-2"
                      />
                    </FormControl>

                    <FormControl mt="4" isInvalid={errors.meta_description}>
                      <FormLabel htmlFor="meta_description">
                        Meta Description
                      </FormLabel>

                      <Textarea
                        id="meta_description"
                        name="meta_description"
                        placeholder="enter meta_description"
                        value={data.meta_description}
                        rows={3}
                        resize="vertical"
                        onChange={e =>
                          setData('meta_description', e.target.value)
                        }
                      />

                      <FormErrorMessage
                        message={errors.meta_description}
                        className="mt-2"
                      />
                    </FormControl>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <FormControl isInvalid={errors.year} isRequired as="fieldset">
              <FormLabel as="legend" htmlFor="year">
                Year
              </FormLabel>
              <Input
                name="year"
                id="year"
                value={data.year}
                onChange={e => setData('year', Number(e.target.value))}
              />
              {errors.year && (
                <FormErrorMessage mt={2}>{errors.year}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4} isInvalid={errors.image}>
              <FormLabel htmlFor="image">Featured Image</FormLabel>

              {image && (
                <>
                  <AspectRatio w={'64'} ratio={3 / 4}>
                    <PreviewImage src={image} />
                  </AspectRatio>
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
                <FileUpload>
                  <Input
                    type="file"
                    height="100%"
                    width="100%"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    aria-hidden="true"
                    accept="image/*"
                    id="image"
                    name="image"
                    placeholder="Browse Image"
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
            <FormControl mt={4} isInvalid={errors.file}>
              <FormLabel htmlFor="file">File Upload</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FileIcon />} />
                <Box position="relative">
                  <Input
                    size="md"
                    isReadOnly
                    placeholder={filename ? filename : 'No file selected'}
                  />
                  <Input
                    type="file"
                    height="100%"
                    width="100%"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    aria-hidden="true"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    id="file"
                    name="file"
                    size="md"
                    onChange={e => {
                      setFilename(e.target.files[0].name);
                      setData('file', e.target.files[0]);
                    }}
                  />
                </Box>
                {filename && (
                  <InputRightAddon
                    children={
                      <CloseIcon
                        color={'red.500'}
                        onClick={() => {
                          setFilename(null);
                        }}
                      />
                    }
                  />
                )}
              </InputGroup>
              {errors.file && (
                <FormErrorMessage mt={2}>{errors.file}</FormErrorMessage>
              )}
            </FormControl>
            <PrimaryButton type="submit" isLoading={processing} mt={4} w="64">
              Save
            </PrimaryButton>
          </VStack>
        </GridItem>
      </Grid>
    </form>
  );
}
