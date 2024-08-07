import ContentEditor from '@/components/Backend/ContentEditor';
import InputError from '@/components/Backend/InputError';
import PrimaryButton from '@/components/Backend/PrimaryButton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { slugify } from '@/lib/helpers';
import { useForm } from '@inertiajs/react';
import { XCircleIcon } from 'lucide-react';
import React from 'react';

export default function CreatePageForm() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    slug: null,
    content: '',
    image: '',
    meta_title: '',
    meta_description: '',
    file: null,
  });
  const { toast } = useToast();
  const [slug, setSlug] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [filename, setFilename] = React.useState(null);

  const submit = e => {
    e.preventDefault();

    post(route('admin.pages.store'), {
      preserveScroll: true,
      onSuccess: () =>
        toast({
          title: 'Page Created.',
          description: 'Page Created Successfully',
        }),
      onError: errors => {
        if (errors.name) {
          reset('name');
        }
      },
    });
  };

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="enter page name"
              onChange={e => {
                setData('name', e.target.value);
                setSlug(slugify(e.target.value));
              }}
            />

            {errors.name && (
              <InputError className="mt-2">{errors.name}</InputError>
            )}
          </div>
          <div className="col-span-1">
            <Label htmlFor="slug">Slug</Label>
            <Input
              type="text"
              id="slug"
              name="slug"
              value={slug}
              display="flex"
              mt={1}
            />
            {errors.slug && (
              <InputError className="mt-2">{errors.slug}</InputError>
            )}
          </div>

          <div>
            <Label htmlFor="file">File Upload</Label>
            <Input
              type="file"
              accept=".json"
              id="file"
              name="file"
              onChange={e => {
                setFilename(e.target.files[0].name);
                setData('file', e.target.files[0]);
              }}
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-4 self-center">
          <div className="col-span-1">
            <Label htmlFor="meta_title">Meta Title</Label>

            <Input
              id="meta_title"
              name="meta_title"
              placeholder="enter meta title"
              onChange={e => setData('meta_title', e.target.value)}
            />

            {errors.meta_title && (
              <InputError className="mt-2">{errors.meta_title}</InputError>
            )}
          </div>
          <div>
            <Label htmlFor="meta_description">Meta Description</Label>

            <Textarea
              id="meta_description"
              name="meta_description"
              placeholder="enter meta description"
              rows={5}
              onChange={e => setData('meta_description', e.target.value)}
            />

            {errors.meta_description && (
              <InputError className="mt-2">
                {errors.meta_description}
              </InputError>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <div>
            <Label htmlFor="image">Hero Image</Label>
            <Input
              type="file"
              accept="image/.png,.jpg,.jpeg,.webp"
              id="image"
              name="image"
              onChange={e => {
                setData('image', e.target.files[0]);
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
            />

            {errors.image && (
              <InputError className="mt-2">{errors.image}</InputError>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative mx-auto">
            {image && (
              <div className="w-[minmax(auto, 450px)] relative">
                <AspectRatio ratio={16 / 9}>
                  <div className="200ms absolute inset-0 h-full w-full rounded-md bg-slate-800/40 transition-all ease-linear hover:bg-transparent" />

                  <img
                    src={image}
                    alt="post hero"
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
                <XCircleIcon
                  className="absolute right-0 top-0 cursor-pointer text-white"
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
        </div>
        <div className="col-span-2">
          <Label htmlFor="content">Content</Label>
          <ContentEditor
            name="content"
            id="content"
            onChange={(evt, editor) => setData('content', editor.getContent())}
          />

          {errors.content && (
            <InputErrorMessage className="mt-2">
              {errors.content}
            </InputErrorMessage>
          )}
        </div>

        <PrimaryButton type="submit" isLoading={processing}>
          Save
        </PrimaryButton>
      </div>
    </form>
  );
}
