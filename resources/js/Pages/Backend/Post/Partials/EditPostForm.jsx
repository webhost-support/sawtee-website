import ContentEditor from '@/components/Backend/ContentEditor';
import InputError from '@/components/Backend/InputError';
import { MultiSelect } from '@/components/Backend/MultiSelect';

import PrimaryButton from '@/components/Backend/PrimaryButton';
import TextInput from '@/components/Backend/TextInput';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { createExcerpt, filterByReference } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { useForm } from '@inertiajs/react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import React from 'react';

export default function EditPostForm({
  post: postData,
  categories,
  tags,
  themes,
}) {
  const { data, setData, post, processing, errors } = useForm({
    title: postData.title,
    slug: postData.slug,
    category_id: postData.category_id,
    theme_id: postData.theme_id,
    content: postData.content ? postData.content : ' ',
    excerpt: postData.excerpt,
    status: postData.status,
    author: postData.author,
    image: postData.media?.filter(
      m => m.collection_name === 'post-featured-image'
    )[0],
    file: postData.media?.filter(m => m.collection_name === 'post-files')[0],
    files: [],
    link: postData.link,
    genre: postData.genre,
    published_at: postData.published_at,
    meta_title: postData.meta_title,
    meta_description: postData.meta_description,
  });

  const toast = useToast();
  const [imageUrl, setImageUrl] = React.useState(
    data.image ? data.image.preview_url : null
  );
  const [filename, setFilename] = React.useState(
    data.file ? data.file.file_name : null
  );
  const [files, setFiles] = React.useState(postData.post_content_files);

  const [postTags, setPostTags] = React.useState(() => {
    const tagsarray = [];
    postData.tags.map(tag => {
      tagsarray.push({
        value: tag.id,
        label: tag.name,
      });
    });

    return tagsarray;
  });

  const [tagOptions, setTagOptions] = React.useState([]);

  React.useEffect(() => {
    tags.map(tag => {
      setTagOptions(prev => [
        ...prev,
        { value: tag.id, label: tag.name, icon: null },
      ]);
    });
  }, [tags]);

  const [selectedCategory, setSelectedCategory] = React.useState(
    categories
      ? categories.filter(cat => cat.id === data.category_id)[0].name
      : null
  );

  React.useEffect(() => {
    if (postTags && tags) {
      const filteredTags = filterByReference(tags, postTags);
      if (filteredTags.length > 0) {
        const array = [];
        filteredTags.map(item => {
          array.push({ value: item.id, label: item.name });
        });
        setTagOptions([...array]);
      }
    }
  }, [postTags, tags]);

  const submit = e => {
    e.preventDefault();
    post(
      route('admin.posts.update', {
        _method: 'patch',
        id: postData.id,
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
        onError: errors =>
          console.error(`Something went wrong: ${errors.message}`),
      }
    );
  };

  React.useEffect(() => {
    files && setData('files', files);
  }, [files, setData]);

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
  }, [data.content, setData]);

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-12 gap-4">
        <div className="flex flex-col gap-8 col-span-12 md:col-span-8 px-4">
          <div className="mx-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              className="mt-1 block w-full"
              value={data.title}
              onChange={e => setData('title', e.target.value)}
              required
              autoComplete="title"
            />
            {errors.title && (
              <InputError className="mt-2" message={errors.title} />
            )}
          </div>
          <div className="mx-2">
            <Label htmlFor="content">Content</Label>

            <ContentEditor
              // type="classic"
              name="content"
              initialValue=""
              id="content"
              onChange={(evt, editor) =>
                setData('content', editor.getContent())
              }
            />

            {errors.content && (
              <InputError className={'mt-2'}>{errors.content}</InputError>
            )}
          </div>
          <div className="mx-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={data.excerpt}
              className="mt-1 block w-full"
              rows={8}
              onChange={e => setData('excerpt', e.target.value)}
              required
            />

            {errors.excerpt && (
              <InputError className={'mt-2'}>{errors.excerpt}</InputError>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8 col-span-12 px-3 md:col-span-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-2">
                  SEO Meta Tags
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <QuestionMarkCircledIcon className="w-3 h-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add meta-title and meta-description for SEO</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col justify-start gap-4">
                  <div className="mx-2">
                    <Label htmlFor="meta_title">Meta Title</Label>
                    <Input
                      id="meta_title"
                      name="meta_title"
                      value={data.meta_title}
                      className="block mt-1"
                      placeholder="enter meta title"
                      onChange={e => setData('meta_title', e.target.value)}
                    />

                    <InputError className="mt-2">
                      {errors.meta_title}
                    </InputError>
                  </div>

                  <div className="mx-2">
                    <Label htmlFor="meta_description">Meta Description</Label>

                    <Textarea
                      id="meta_description"
                      name="meta_description"
                      className="block mt-1"
                      value={data.meta_description}
                      placeholder="enter meta_description"
                      rows={3}
                      onChange={e =>
                        setData('meta_description', e.target.value)
                      }
                    />
                    <InputError className="mt-2">
                      {errors.meta_description}
                    </InputError>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex gap-2">
                  Optional Fields
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <QuestionMarkCircledIcon className="w-3 h-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add theme and post tags for this post</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col justify-start gap-4">
                  <fieldset className="mx-2">
                    <Label as="legend" htmlFor="theme_id">
                      Theme
                    </Label>

                    <Select
                      name="theme_id"
                      value={data.theme_id}
                      onValueChange={value => {
                        setData('theme_id', Number(value));
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Themes</SelectLabel>
                          {themes?.map(theme => (
                            <SelectItem key={theme.id} value={theme.id}>
                              {theme.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    {errors.theme_id && (
                      <InputError className={'mt-2'}>
                        {errors.theme_id}
                      </InputError>
                    )}
                  </fieldset>

                  <div className="mx-2">
                    <Label htmlFor="tags">{' Add Tags'}</Label>

                    <MultiSelect
                      name={'tags'}
                      id="tags"
                      //   ref={tabsRef}
                      defaultValue={postTags}
                      options={tagOptions}
                      placeholder="Select Tags"
                      variant="inverted"
                      maxCount={2}
                      setData={setData}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex gap-2">
                  {'Upload files'}

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <QuestionMarkCircledIcon className="w-3 h-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Upload files associated with this post
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="mx-2">
                    <Label htmlFor="file">File Upload</Label>
                    {filename && (
                      <Input className="mt-1" readOnly value={filename} />
                    )}
                    <div className=" flex relative">
                      <Input
                        type="file"
                        accept=".pdf,.docx,.pptx"
                        id="file"
                        name="file"
                        placeholder={filename}
                        onChange={e => {
                          setData('file', e.target.files[0]);
                          setFilename(e.target.files[0].name);
                        }}
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <Label htmlFor="files">Content Files Upload</Label>

                    {files?.map(file => {
                      return (
                        <Input
                          key={file.name}
                          className="mt-1"
                          value={file.name}
                        />
                      );
                    })}

                    <Input
                      type="file"
                      multiple
                      className="mt-1"
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      id="files"
                      name="files"
                      size="md"
                      onChange={e => {
                        setData('files', Array.from(e.target.files));
                        setFiles(Array.from(e.target.files));
                      }}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <fieldset required className="mx-2">
            <Label as="legend" htmlFor="category_id">
              Category
            </Label>

            <Select
              name="category_id"
              value={data.category_id}
              onValueChange={value => {
                setData('category_id', Number(value));

                setSelectedCategory(
                  categories.filter(cat => cat.id === Number(value))[0]?.name
                );
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                </SelectGroup>

                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {errors.category_id && (
              <InputError className={'mt-2'}>{errors.category_id}</InputError>
            )}
          </fieldset>
          <div className="mx-2">
            <Label as="legend" htmlFor="published_at">
              Published At
            </Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'flex w-full pl-3 text-left mt-1 font-normal',
                    !data.published_at && 'text-muted-foreground'
                  )}
                >
                  {data.published_at ? (
                    new Date(data.published_at).toDateString()
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  name="published_at"
                  className="block mt-1"
                  id="published_at"
                  mode="single"
                  selected={data.published_at}
                  onSelect={value => {
                    // console.log(new Date(value));
                    setData('published_at', new Date(value).toDateString());
                  }}
                  disabled={date =>
                    date > new Date() || date < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {errors.published_at && (
              <InputError className={'mt-2'}>{errors.published_at}</InputError>
            )}
          </div>
          <fieldset required className="mx-2">
            <Label as="legend" htmlFor="status">
              Status
            </Label>

            <RadioGroup
              className="flex gap-4 flex-wrap mt-1"
              defaultValue={data.status}
              onValueChange={value => {
                setData('status', value);
              }}
            >
              {['unpublished', 'draft', 'published'].map(item => {
                return (
                  <div
                    key={item}
                    className="flex w-[auto] items-center space-x-2"
                  >
                    <RadioGroupItem value={item} id={item} />
                    <Label className="capitalize" htmlFor={item}>
                      {item}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>

            {errors.status && (
              <InputError className={'mt-2'}>{errors.status}</InputError>
            )}
          </fieldset>
          {selectedCategory === ('Covid' || 'Opinion in Lead' || 'Blog') && (
            <div className="mx-2">
              <TooltipProvider>
                <Label htmlFor="author">
                  {'Author/s '}
                  <Tooltip>
                    <TooltipTrigger>
                      <QuestionMarkCircledIcon className="w-3 h-3" />
                    </TooltipTrigger>
                    <TooltipContent>
                      Add author name, if multple authors use comma seperated
                      format. Eg: Paras Kharel, Dikshya Singh, Kshitiz Dahal
                    </TooltipContent>
                  </Tooltip>
                </Label>
              </TooltipProvider>
              <Input
                type="text"
                id="author"
                name="author"
                value={data.author}
                className="block  mt-1"
                placeholder="Add author full name"
                autoComplete="author"
                onChange={e => setData('author', e.target.value)}
              />

              {errors.author && (
                <InputError className={'mt-2'}>{errors.author}</InputError>
              )}
            </div>
          )}
          {selectedCategory === 'Covid' && (
            <div className="mx-2">
              <Label htmlFor="genre">Genre</Label>

              <Input
                type="text"
                id="genre"
                name="genre"
                value={data.genre}
                className="block mt-1"
                autoComplete="genre"
                onChange={e => setData('genre', e.target.value)}
              />

              {errors.genre && (
                <InputError className={'mt-2'}>{errors.genre}</InputError>
              )}
            </div>
          )}
          {selectedCategory ===
            ('Covid' || 'Opinion in Lead' || 'Webinar Series') && (
            <div className="mx-2">
              <Label htmlFor="link">External Link</Label>

              <Input
                type="text"
                id="link"
                name="link"
                value={data.link}
                className="block  mt-1"
                autoComplete="link"
                onChange={e => setData('link', e.target.value)}
              />

              {errors.author && (
                <InputError className={'mt-2'}>{errors.author}</InputError>
              )}
            </div>
          )}
          <div className="mx-2">
            <Label htmlFor="image">Featured Image</Label>

            {imageUrl && (
              <div className="w-[minmax(auto, 450px)]">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={imageUrl}
                    alt="featured"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            )}

            <Input
              type="file"
              accept="image/.png,.jpg,.jpeg,.webp"
              id="image"
              className="mt-8"
              name="image"
              onChange={e => {
                setData('image', e.target.files[0]);
                setImageUrl(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>
          <PrimaryButton
            type="submit"
            className="text-center"
            disabled={processing}
          >
            Save
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
}
