import ContentEditor from '@/components/Backend/ContentEditor';
import InputError from '@/components/Backend/InputError';
import { MultiSelect } from '@/components/Backend/MultiSelect';

import PrimaryButton from '@/components/Backend/PrimaryButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { createExcerpt } from '@/lib/helpers';
import { useForm } from '@inertiajs/react';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import React from 'react';

export default function CreatePostForm({ categories, themes, tags }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    category_id: 2,
    theme_id: '',
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    status: 'unpublished',
    image: '',
    file: '',
    files: [],
    tags: [],
    link: null,
    genre: '',
    published_at: null,
    meta_title: '',
    meta_description: '',
  });
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [tagOptions, setTagOptions] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState(null);

  React.useEffect(() => {
    tags.map(tag => {
      setTagOptions(prev => [
        ...prev,
        { value: tag.id, label: tag.name, icon: null },
      ]);
    });
  }, [tags]);

  const submit = e => {
    e.preventDefault();
    post(route('admin.posts.store'), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () =>
        toast({
          title: 'Post Created.',
          description: `${data.title} post was created successfully`,
        }),
      onError: errors => {
        for (const key in errors) {
          if (Object.hasOwnProperty.call(errors, key)) {
            const value = errors[key];
            reset(key);
            return toast({
              title: `${key.toUpperCase()} field error`,
              description: value,
            });
          }
        }
      },
    });
  };

  React.useEffect(() => {
    const content = data.content
      .toString()
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
      .replace('<p>', '');
    const excerpt = createExcerpt(content, 30);
    excerpt && setData('excerpt', excerpt);
  }, [data.content, setData]);

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-12 gap-4">
        <div className="flex flex-col gap-8 col-span-12 md:col-span-8 px-4">
          <div>
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
          <div mt={4}>
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
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
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
          <Accordion type="single" collapsible className="w-full">
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
                  <div>
                    <Label htmlFor="meta_title">Meta Title</Label>
                    <Input
                      id="meta_title"
                      name="meta_title"
                      className="block mt-1"
                      placeholder="enter meta title"
                      onChange={e => setData('meta_title', e.target.value)}
                    />

                    <InputError className="mt-2">
                      {errors.meta_title}
                    </InputError>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="meta_description">Meta Description</Label>

                    <Textarea
                      id="meta_description"
                      name="meta_description"
                      className="block mt-1"
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
          <Accordion type="single" collapsible className="w-full">
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
                  <fieldset>
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

                  <div className={'py-4'}>
                    <Label htmlFor="tags">{' Add Tags'}</Label>

                    <MultiSelect
                      name={'tags'}
                      id="tags"
                      //   ref={tabsRef}
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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex gap-2">
                  Upload File/Files
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <QuestionMarkCircledIcon className="w-3 h-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add post and post content attachments </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div>
                    <Label htmlFor="file">File Upload</Label>

                    <div className=" flex relative">
                      <Input
                        type="file"
                        accept=".pdf,.docx,.pptx"
                        className=" mt-1"
                        id="file"
                        name="file"
                        onChange={e => {
                          setData('file', e.target.files[0]);
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="files">Content Files Upload</Label>

                    <Input
                      type="file"
                      multiple
                      className=" mt-1"
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      id="files"
                      name="files"
                      onChange={e => {
                        setData('files', Array.from(e.target.files));
                      }}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <fieldset required>
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
          <div>
            <Label as="legend" htmlFor="published_at">
              Published At
            </Label>

            <Input
              type="date"
              className="block mt-1"
              placeholder="Select Date"
              id="published_at"
              name="published_at"
              onChange={e => {
                setData('published_at', e.target.value);
              }}
            />

            {errors.published_at && (
              <InputError className={'mt-2'}>{errors.published_at}</InputError>
            )}
          </div>
          <fieldset  required>
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
            <div >
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
            <div >
              <Label htmlFor="genre">Genre</Label>

              <Input
                type="text"
                id="genre"
                name="genre"
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
            <div >
              <Label htmlFor="link">External Link</Label>

              <Input
                type="text"
                id="link"
                name="link"
                className="block  mt-1"
                autoComplete="link"
                onChange={e => setData('link', e.target.value)}
              />

              {errors.author && (
                <InputError className={'mt-2'}>{errors.author}</InputError>
              )}
            </div>
          )}
          <div >
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
