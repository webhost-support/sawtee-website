import InputError from '@/components/Backend/InputError';
import { MultiSelect } from '@/components/Backend/MultiSelect';
import PrimaryButton from '@/components/Backend/PrimaryButton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { useToast } from '@/components/ui/use-toast';

import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';

export default function CreatePublicationForm({ categories, tags }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    category_id: '',
    title: '',
    subtitle: '',
    description: '',
    image: null,
    file: '',
    tags: [],
  });
  const [image, setImage] = useState(null);
  const [postTags, setPostTags] = useState([]);
  const [tagOptions, setTagOptions] = useState([]);
  const [publicationTags, setPublicationTags] = React.useState([]);
  const { toast } = useToast();

  React.useEffect(() => {
    tags.map(tag => {
      setTagOptions(prev => [
        ...prev,
        { value: tag.id, label: tag.name, id: undefined },
      ]);
    });
  }, [tags]);

  const submit = e => {
    e.preventDefault();
    post(route('admin.publications.store'), {
      preserveScroll: true,
      onSuccess: () =>
        toast({
          title: 'Publication Created.',
          description: `Publication ${data.title} Successfully`,
        }),
      onError: () => {
        for (const key in errors) {
          if (Object.hasOwnProperty.call(errors, key)) {
            const value = errors[key];
            reset([key], { keepErrors: true });
            return toast({
              title: `${key.toUpperCase()} field error`,
              description: value,
            });
          }
        }
      },
    });
  };

  function setDataTags(selectedValues) {
    const array = [];
    selectedValues.map(item => {
      array.push({
        post_id: item.id,
        tag_id: item.value,
      });
    });
    setData('tags', array);
  }

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-12 gap-4">
        <div className="flex flex-col gap-8 col-span-12 self-center md:col-span-8 px-4">
          <div className="mx-2">
            <Label htmlFor="title">Title/Issue</Label>
            <Input
              type="text"
              required
              id="title"
              name="title"
              className="mt-1"
              autoComplete="title"
              onChange={e => setData('title', e.target.value)}
            />

            {errors.title && (
              <InputError className="mt-2">{errors.title}</InputError>
            )}
          </div>
          <div className="mx-2">
            <Label htmlFor="subtitle">Subtitle</Label>
            <Input
              type="text"
              id="subtitle"
              name="subtitle"
              className="mt-1"
              autoComplete="subtitle"
              onChange={e => setData('subtitle', e.target.value)}
            />

            {errors.title && (
              <InputError className="mt-2">{errors.title}</InputError>
            )}
          </div>
          <div className="mx-2">
            <Label htmlFor="description">Description</Label>

            <Textarea
              name="description"
              id="description"
              rows={10}
              placeholder="Write something about your publication"
              onChange={e => setData('description', e.target.value)}
            />

            {errors.description && (
              <InputError className="mt-2">{errors.description}</InputError>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-8 self-center col-span-12 px-3 md:col-span-4">
          <fieldset className="mx-2">
            <Label as="legend" htmlFor="category_id">
              Category
            </Label>

            <Select
              name="category_id"
              value={data.category_id}
              onValueChange={value => {
                setData('category_id', Number(value));
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

          <div id={'tags'} className="mx-2">
            <Label htmlFor="tags">{' Add Tags'}</Label>
            <MultiSelect
              name={'tags'}
              options={tagOptions}
              defaultValue={publicationTags}
              placeholder="Select Tags"
              variant="inverted"
              maxCount={2}
              onValueChange={setPublicationTags}
              setValues={setDataTags}
            />
          </div>
          <div className="mx-2">
            <Label htmlFor="image">Featured Image</Label>
            {image && (
              <div className="w-[minmax(auto, 450px)]">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={image}
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
              className="mt-1"
              name="image"
              onChange={e => {
                setData('image', e.target.files[0]);
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
            />

            {errors.image && (
              <FormErrorMessage className="mt-2">
                {errors.image}
              </FormErrorMessage>
            )}
          </div>

          <div className="mx-2">
            <Label htmlFor="file">File Upload</Label>
            <Input
              type="file"
              accept=".pdf,.doc,.docx,.ppt,.pptx"
              id="file"
              className="mt-1"
              name="file"
              onChange={e => {
                setData('file', e.target.files[0]);
              }}
            />

            {errors.file && (
              <InputError className="mt-2">{errors.file}</InputError>
            )}
          </div>

          <PrimaryButton type="submit" disabled={processing}>
            Add
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
}
