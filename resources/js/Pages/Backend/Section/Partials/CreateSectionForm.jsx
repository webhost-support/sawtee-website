import ContentEditor from '@/components/Backend/ContentEditor';
import DropZone from '@/components/Backend/DropZone';
import InputError from '@/components/Backend/InputError';
import PrimaryButton from '@/components/Backend/PrimaryButton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
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
import { XIcon } from 'lucide-react';
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
  const { toast } = useToast();
  const sectionTypes = ['default', 'tabs', 'accordian', 'members'];
  const [files, setFiles] = React.useState([]);
  const [image, setImage] = React.useState(null);

  function setDataImage(array) {
    const reader = new FileReader();
    reader.onload = e => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(array[0]);
    setData('image', array[0]);
  }
  const submit = e => {
    e.preventDefault();
    post(route('admin.sections.store'), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () =>
        toast({
          title: 'Section Created.',
          description: `Section ${data.title} created Successfully`,
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
    });
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
            onChange={e => setData('title', e.target.value)}
          />

          {errors.title && <InputError mt={2}>{errors.title}</InputError>}
        </div>

        <div className="col-span-2">
          <DropZone
            htmlFor={'image'}
            onValueChange={setDataImage}
            files={files}
            setFiles={setFiles}
            className={image ? 'hidden' : 'h-72'}
          />

          {image && (
            <div className="relative  flex flex-col items-center justify-center w-full h-72 rounded-xl overflow-hidden cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-200 p-4 border-2 border-slate-700 border-dashed dark:border-gray-600 dark:hover:border-gray-500 ">
              <div className="w-full h-full absolute inset-0">
                <AspectRatio ratio={5 / 3}>
                  <img
                    src={image}
                    alt="section hero"
                    className="rounded-md object-cover w-full h-full "
                  />
                </AspectRatio>
                <Button
                  className="absolute top-2 right-2 rounded-lg"
                  onClick={() => {
                    setImage(null);
                    setFiles([]);
                    setData('image', null);
                  }}
                >
                  <XIcon className=" w-6 h-6 " />
                </Button>
              </div>
            </div>
          )}

          {errors.image && (
            <InputError className="mt-2">{errors.image}</InputError>
          )}
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
              defaultValue={0}
              onChange={e => {
                setData('order', Number(e.target.value));
              }}
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
            initialValue=""
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
