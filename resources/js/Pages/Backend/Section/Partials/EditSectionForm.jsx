import ContentEditor from '@/components/Backend/ContentEditor';
import InputError from '@/components/Backend/InputError';
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
import { useToast } from '@/components/ui/use-toast';

import { useForm } from '@inertiajs/react';
import { XCircleIcon } from 'lucide-react';
import React from 'react';

export default function EditSectionForm({ sections, section, pages }) {
  const { data, setData, post, processing, errors } = useForm({
    title: section.title,
    description: section.description,
    type: section.type,
    link: section.link,
    parent_id: section.parent_id,
    order: section.order || 0,
    page_id: section.page_id,
  });

  const { toast } = useToast();
  const sectionTypes = ['default', 'tabs', 'accordian', 'members'];
  const [image, setImage] = React.useState(
    section.media[0] ? section.media[0].original_url : null
  );

  const submit = e => {
    e.preventDefault();
    post(
      route('admin.sections.update', {
        _method: 'patch',
        section: section.id,
      }),
      {
        preserveScroll: true,
        onSuccess: () =>
          toast({
            title: 'Section edited.',
            description: 'Section edited Successfully',
          }),
        onError: errors => {
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
      }
    );
  };

  return (
    <form onSubmit={submit}>
      <div className="grid lg:grid-cols-[repeat(4,minmax(100px,1fr))] grid-rows-[minmax(auto, 1fr)] gap-4">
        <div className="col-span-4">
          <Label htmlFor="title">Section Title</Label>

          <Input
            type="text"
            id="title"
            name="title"
            autoComplete="title"
            className="mt-1"
            value={data.title}
            onChange={e => setData('title', e.target.value)}
          />

          {errors.title && <InputError mt={2}>{errors.title}</InputError>}
        </div>

        <div class="col-span-2">
          <div className="col-span-1">
            <Label
              htmlFor="image"
              className="relative flex flex-col items-center justify-center w-full h-72 border-2 border-slate-700 border-dashed rounded-xl overflow-hidden cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
            >
              <div>
                {!image && (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG or webp (MAX. 800x400px)
                    </p>
                  </div>
                )}
                {image && (
                  <div className="w-full absolute inset-0">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={image}
                        alt="section hero"
                        className="rounded-md object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <XCircleIcon
                      className="absolute top-0 right-0 cursor-pointer text-white"
                      onClick={() => {
                        setImage(null);
                        setData('image', null);
                      }}
                      title="Remove image"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/.png,.jpg,.jpeg,.webp"
                className="hidden"
                onChange={e => {
                  setData('image', e.target.files[0]);
                  setImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </Label>

            {errors.image && (
              <InputError className="mt-2">{errors.image}</InputError>
            )}
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid w-full gap-4">
          <div className="col-span-1">
            <fieldset>
              <Label as="legend" htmlFor="page_id">
                For Page
              </Label>

              <Select
                name="page_id"
                id="page_id"
                value={data.page_id.toString()}
                onValueChange={value => {
                  setData('page_id', value);
                }}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Page" />
                </SelectTrigger>
                <SelectContent className="w-[300px]">
                  <SelectGroup>
                    <SelectLabel>Pages</SelectLabel>
                    {pages &&
                      pages.length > 0 &&
                      pages.map(item => (
                        <SelectItem key={item.id} value={item.id.toString()}>
                          {item.name}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>
          </div>

          <div className="col-span-1">
            <Label htmlFor="order">Order</Label>
            <Input
              type="number"
              id="order"
              name="order"
              className="mt-1"
              value={data.order}
              onChange={e => setData('order', e.target.value)}
            />
            {errors.order && <InputError mt={2}>{errors.order}</InputError>}
          </div>

          <div className="col-span-2">
            <Label htmlFor="link">Link</Label>

            <Input
              type="text"
              id="link"
              name="link"
              className="mt-1"
              autoComplete="link"
              value={data.link}
              onChange={e => setData('link', e.target.value)}
            />

            {errors.link && (
              <InputError className="mt-2">{errors.link}</InputError>
            )}
          </div>

          <div className="col-span-1">
            <fieldset>
              <Label htmlFor="type">Section Type</Label>

              <Select
                name="type"
                id="type"
                value={data.type}
                onValueChange={value => setData('type', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Section Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Section Types</SelectLabel>
                    {sectionTypes.map(item => (
                      <SelectItem key={item} value={item.toString()}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {errors.type && <InputError mt={2}>{errors.type}</InputError>}
            </fieldset>
          </div>
          <div className="col-span-1">
            <fieldset>
              <Label as="legend" htmlFor="parent_id">
                Parent Section
              </Label>

              <Select
                name="parent_id"
                id="parent_id"
                disabled={data.type === 'default'}
                value={data.parent_id}
                onValueChange={value => {
                  setData('parent_id', value);
                }}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Parent" />
                </SelectTrigger>
                <SelectContent className="w-[300px]">
                  <SelectGroup>
                    <SelectLabel>Sections</SelectLabel>
                    {sections?.map(item => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>
          </div>
        </div>

        <div className="col-span-4">
          <Label htmlFor="description">Description</Label>
          <ContentEditor
            name="description"
            id="description"
            className="mt-1"
            initialValue={data.description}
            onChange={(evt, editor) =>
              setData('description', editor.getContent())
            }
          />

          {errors.description && (
            <InputError mt={2}>{errors.description}</InputError>
          )}
        </div>
        <PrimaryButton type="submit" isLoading={processing}>
          Save
        </PrimaryButton>
      </div>
    </form>
  );
}
