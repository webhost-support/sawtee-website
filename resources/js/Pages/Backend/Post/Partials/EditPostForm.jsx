import ContentEditor from '@/Components/Backend/ContentEditor';
import FileUpload, { PreviewImage } from '@/Components/Backend/FileUpload';
import ControlledMultiSelect from '@/Components/Backend/MultiSelect';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { createExcerpt, filterByReference } from '@/Utils/helpers';
import { CloseIcon, QuestionOutlineIcon } from '@chakra-ui/icons';

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    IconButton,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Radio,
    Select,
    Stack,
    Textarea,
    Tooltip,
    VStack,
    useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import React from 'react';
import { FiFile } from 'react-icons/fi';

export default function EditPostForm({ post: postData, categories, tags, themes }) {
  const { data, setData, post, processing, errors } = useForm({
    title: postData.title,
    slug: postData.slug,
    category_id: postData.category_id,
    theme_id: postData.theme_id,
    content: postData.content,
    excerpt: postData.excerpt,
    status: postData.status,
    author: postData.author,
    image: postData.media?.filter(m => m.collection_name === 'post-featured-image')[0],
    file: postData.media?.filter(m => m.collection_name === 'post-files')[0],
    files: [],
    link: postData.link,
    genre: postData.genre,
    published_at: postData.published_at,
    meta_title: postData.meta_title,
    meta_description: postData.meta_description,
  });

  const toast = useToast();
  const [imageUrl, setImageUrl] = React.useState(data.image ? data.image.preview_url : null);
  const [filename, setFilename] = React.useState(data.file ? data.file.file_name : null);
  const [files, setFiles] = React.useState(postData.post_content_files);

  const [postTags, setPostTags] = React.useState(() => {
    let tagsarray = [];
    postData.tags.map(tag => {
      tagsarray.push({
        value: tag.id,
        label: tag.name,
      });
    });

    return tagsarray;
  });

  const [tagOptions, setTagOptions] = React.useState([]);

  function setDataTags(e) {
    let array = [];
    setPostTags(e);
    e.forEach(item =>
      array.push({
        tag_id: item.value,
        post_id: postData.id,
      })
    );

    setData('tags', array);
  }

  const [selectedCategory, setSelectedCategory] = React.useState(
    categories ? categories.filter(cat => cat.id == data.category_id)[0].name : null
  );

  React.useEffect(() => {
    if (postTags && tags) {
      const filteredTags = filterByReference(tags, postTags);
      if (filteredTags.length > 0) {
        let array = [];
        filteredTags.map(item => {
          array.push({ value: item.id, label: item.name });
        });
        setTagOptions([...array]);
      }
    }
  }, [postTags, tags]);

  const submit = e => {
    e.preventDefault();
    console.log(data);
    post(
      route('admin.posts.update', {
        _method: 'patch',
        post: postData.id,
      }),
      {
        preserveScroll: true,
        onSuccess: () =>
          toast({
            position: 'top-right',
            title: 'Post edited.',
            description: 'Post edited Successfully',
            status: 'success',
            duration: 6000,
            isClosable: true,
          }),
        onError: errors => console.error(`Something went wrong: ${errors.message}`),
      }
    );
  };

  React.useEffect(() => {
    files && setData('files', files);
  }, [files]);

  React.useEffect(() => {
    if (data.content) {
      const content = data.content
        .toString()
        .replace(/^-+/, '')
        .replace(/-+$/, '')
        .replace(/(<([^>]+)>)/gi, '');
      const excerpt = createExcerpt(content, 30);
      excerpt && setData('excerpt', excerpt);
    }
  }, [data.content]);

  return (
    <form onSubmit={submit}>
      <Grid
        templateColumns={{
          base: '1fr',
          xl: 'repeat(7, minmax(auto, 1fr))',
        }}
        gap={8}
      >
        <GridItem colSpan={{ base: 1, lg: 5 }}>
          <VStack spacing={8} align={'start'} position={'sticky'} top={'2rem'}>
            <FormControl isInvalid={errors.title} isRequired>
              <FormLabel htmlFor="title">Title</FormLabel>

              <Input
                type="text"
                id="title"
                name="title"
                display="block"
                mt={1}
                value={data.title}
                autoComplete="title"
                onChange={e => setData('title', e.target.value)}
              />

              {errors.title && <FormErrorMessage mt={2}>{errors.title}</FormErrorMessage>}
            </FormControl>

            <FormControl mt={4} isInvalid={errors.content}>
              <FormLabel htmlFor="content">Content</FormLabel>

              <ContentEditor
                id="content"
                name="content"
                initialValue={postData.content || ''}
                onChange={(e, editor) => {
                  console.log(editor.getContent());
                  setData('content', editor.getContent());
                }}
              />

              {errors.content && <FormErrorMessage mt={2}>{errors.content}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.excerpt}>
              <FormLabel htmlFor="excerpt">Excerpt/Short Description</FormLabel>

              <Textarea
                id="excerpt"
                isInvalid={errors.excerpt}
                resize={'vertical'}
                name="excerpt"
                display="flex"
                rows={6}
                defaultValue={postData.excerpt}
                mt={1}
                onChange={e => setData('excerpt', e.target.value)}
              />

              {errors.excerpt && <FormErrorMessage mt={2}>{errors.excerpt}</FormErrorMessage>}
            </FormControl>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <VStack spacing={8} position={'sticky'} top={'2rem'}>
            <Accordion allowToggle w="full">
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: 'gray.600',
                      color: 'white',
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
                      {'SEO Meta Tags '}
                      <Tooltip label="Add title and description for SEO" fontSize="xs">
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

                      <FormErrorMessage message={errors.meta_title} className="mt-2" />
                    </FormControl>

                    <FormControl mt="4" isInvalid={errors.meta_description}>
                      <FormLabel htmlFor="meta_description">Meta Description</FormLabel>

                      <Textarea
                        id="meta_description"
                        name="meta_description"
                        placeholder="enter meta_description"
                        value={data.meta_description}
                        rows={3}
                        resize="vertical"
                        onChange={e => setData('meta_description', e.target.value)}
                      />

                      <FormErrorMessage message={errors.meta_description} className="mt-2" />
                    </FormControl>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowToggle w="full">
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: 'gray.600',
                      color: 'white',
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
                      {'Optional Fields'}
                      <Tooltip label="Add theme and post tags for this post" fontSize="xs">
                        <QuestionOutlineIcon ml="2" boxSize={3} />
                      </Tooltip>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack gap="6" alignItems={'start'}>
                    <FormControl isInvalid={errors.theme_id} as="fieldset">
                      <FormLabel as="legend" htmlFor="theme_id">
                        Theme
                      </FormLabel>

                      <Select
                        name="theme_id"
                        placeholder="Select theme"
                        value={data.theme_id}
                        onChange={e => {
                          setData('theme_id', e.target.value);
                        }}
                      >
                        {themes &&
                          themes.map(theme => (
                            <option key={theme.id} value={theme.id}>
                              {theme.title}
                            </option>
                          ))}
                      </Select>

                      {errors.theme_id && <FormErrorMessage mt={2}>{errors.theme_id}</FormErrorMessage>}
                    </FormControl>
                    <FormControl py={4} id={'tags'}>
                      <FormLabel htmlFor="tags">{' Add Tags'}</FormLabel>

                      <ControlledMultiSelect
                        isMulti
                        name={'tags'}
                        options={tagOptions}
                        variant="filled"
                        tagVariant="solid"
                        placeholder="Select Tags"
                        value={postTags}
                        onChange={e => {
                          setPostTags(e);
                          setDataTags(e);
                        }}
                        selectedOptionColorScheme="blue"
                      />
                    </FormControl>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowToggle w="full">
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: 'gray.600',
                      color: 'white',
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
                      {'Upload files'}
                      <Tooltip label="Upload files associated with this post" fontSize="xs">
                        <QuestionOutlineIcon ml="2" boxSize={3} />
                      </Tooltip>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack gap="6" alignItems={'start'}>
                    <FormControl mt={4}>
                      <FormLabel htmlFor="file">File Upload</FormLabel>

                      <>
                        <InputGroup>
                          <InputLeftAddon children={<FiFile />} />
                          <Box position="relative">
                            <Input size="md" isReadOnly placeholder={filename ? filename : 'No file selected'} />
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
                      </>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel htmlFor="files">Content Files Upload</FormLabel>

                      <Box pos="relative">
                        <Button colorScheme={files ? 'orange' : 'blue'}>{'click to select/reselect the files'}</Button>
                        <Input
                          type="file"
                          height="100%"
                          width="100%"
                          position="absolute"
                          multiple
                          top="0"
                          left="0"
                          opacity="0"
                          cursor={'pointer'}
                          aria-hidden="true"
                          accept=".pdf,.doc,.docx,.ppt,.pptx"
                          id="files"
                          name="files"
                          size="md"
                          onChange={e => {
                            const newFiles = [...files, ...e.target.files];
                            setFiles(newFiles);
                          }}
                        />
                      </Box>

                      <VStack spacing={4} mt={2}>
                        {files.length &&
                          files.map(file => {
                            return (
                              <InputGroup key={file.name}>
                                <Input
                                  isReadOnly
                                  size="md"
                                  value={`/Featured_Events/${file.name}`}
                                  title={`/Featured_Events/${file.name}`}
                                />
                                {file.name && (
                                  <InputRightAddon
                                    children={
                                      <IconButton
                                        icon={<CloseIcon />}
                                        color={'red.500'}
                                        onClick={() => {
                                          const newfiles = files.filter(prevfile => prevfile.name !== file.name);

                                          setFiles(newfiles);
                                        }}
                                      />
                                    }
                                  />
                                )}
                              </InputGroup>
                            );
                          })}
                      </VStack>
                    </FormControl>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <FormControl isRequired as="fieldset">
              <FormLabel as="legend" htmlFor="category_id">
                Category
              </FormLabel>

              <Select
                name="category_id"
                id="category_id"
                placeholder="Select Category"
                value={data.category_id}
                onChange={e => {
                  setData('category_id', e.target.value);
                  setSelectedCategory(categories.filter(cat => cat.id == e.target.value)[0].name);
                }}
              >
                {categories &&
                  categories.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </Select>
            </FormControl>

            <FormControl isInvalid={errors.published_at} isRequired>
              <FormLabel as="legend" htmlFor="published_at">
                Published At
              </FormLabel>
              <Input
                type="date"
                placeholder="Select Date"
                id="published_at"
                name="published_at"
                value={data.published_at}
                onChange={e => {
                  setData('published_at', e.target.value);
                }}
              />

              {errors.published_at && <FormErrorMessage mt={2}>{errors.published_at}</FormErrorMessage>}
            </FormControl>

            <FormControl mt={4} isInvalid={errors.status} isRequired>
              <FormLabel htmlFor="status">Status</FormLabel>

              <Stack direction="row" flexWrap={'wrap'} spacing={4}>
                {['unpublished', 'draft', 'published'].map(item => {
                  return (
                    <Radio
                      key={item}
                      name="status"
                      isChecked={data.status === item}
                      value={item}
                      size={'sm'}
                      onChange={e => {
                        setData('status', e.target.value);
                      }}
                    >
                      {item}
                    </Radio>
                  );
                })}
              </Stack>

              {errors.status && <FormErrorMessage mt={2}>{errors.status}</FormErrorMessage>}
            </FormControl>

            {selectedCategory === ('Covid' || 'Opinion in Lead' || 'Blog') && (
              <FormControl isInvalid={errors.author} mt={4}>
                <FormLabel htmlFor="name">
                  {'Author/s '}
                  <Tooltip
                    label="Add author name, if multple authors use comma seperated format. Eg: Paras Kharel, Dikshya Singh, Kshitiz Dahal"
                    fontSize="xs"
                    float={'right'}
                  >
                    <QuestionOutlineIcon boxSize={3} />
                  </Tooltip>
                </FormLabel>

                <Input
                  type="text"
                  id="author"
                  name="author"
                  display="block"
                  w="full"
                  mt={1}
                  autoComplete="author"
                  value={data.author}
                  onChange={e => setData('author', e.target.value)}
                />

                {errors.author && <FormErrorMessage mt={2}>{errors.author}</FormErrorMessage>}
              </FormControl>
            )}

            {selectedCategory === 'Covid' && (
              <FormControl isInvalid={errors.genre} mt={4}>
                <FormLabel htmlFor="genre">Genre</FormLabel>

                <Input
                  type="text"
                  id="genre"
                  name="genre"
                  display="block"
                  value={data.genre}
                  w="full"
                  mt={1}
                  autoComplete="genre"
                  onChange={e => setData('genre', e.target.value)}
                />

                {errors.genre && <FormErrorMessage mt={2}>{errors.genre}</FormErrorMessage>}
              </FormControl>
            )}

            {selectedCategory === ('Covid' || 'Opinion in Lead' || 'Webinar Series') && (
              <FormControl isInvalid={errors.link} mt={4}>
                <FormLabel htmlFor="link">External Link</FormLabel>

                <Input
                  type="text"
                  id="link"
                  name="link"
                  display="block"
                  w="full"
                  mt={1}
                  value={data.link}
                  autoComplete="link"
                  onChange={e => setData('link', e.target.value)}
                />

                {errors.link && <FormErrorMessage mt={2}>{errors.link}</FormErrorMessage>}
              </FormControl>
            )}

            <FormControl mt={4}>
              <FormLabel htmlFor="image">{'Featured Image'}</FormLabel>

              {imageUrl && (
                <>
                  <PreviewImage id="preview_image" src={postData.featured_image ? imageUrl : imageUrl} />

                  <Button
                    mt={4}
                    size={'sm'}
                    colorScheme="red"
                    onClick={() => {
                      setImageUrl(null);
                    }}
                  >
                    Change Image
                  </Button>
                </>
              )}
              {!imageUrl && (
                <FileUpload accept="image/.png,.jpg,.jpeg,.webp">
                  <Input
                    type="file"
                    multiple
                    height="100%"
                    width="100%"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    aria-hidden="true"
                    accept="image/.png,.jpg,.jpeg,.webp"
                    id={'image'}
                    name={'image'}
                    size="md"
                    onChange={e => {
                      setData('image', e.target.files[0]);
                      setImageUrl(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                </FileUpload>
              )}
            </FormControl>

            <PrimaryButton type="submit" isLoading={processing} w="md" maxW="full">
              Save
            </PrimaryButton>
          </VStack>
        </GridItem>
      </Grid>
    </form>
  );
}
