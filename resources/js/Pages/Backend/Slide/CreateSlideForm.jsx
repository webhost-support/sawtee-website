import PrimaryButton from '@/components/Backend/PrimaryButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

import DropZone from '@/components/Backend/DropZone';
import InputError from '@/components/Backend/InputError';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useForm } from '@inertiajs/react';
import { XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

function CreateSlideForm({ open, setOpen, slider }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    subtitle: '',
    slider_id: slider.id,
  });
  const { toast } = useToast();
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

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

    post(route('admin.slides.store'), {
      preserveScroll: true,
      onSuccess: () => {
        toast({
          title: 'Slide Created.',
          description: 'Slide Created Successfully',
        });
        setImage(null);
        setOpen(!open);
      },
      onError: errors => {
        if (errors.title) {
          reset('title');
        }
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Slide</DialogTitle>
          <DialogDescription>Add new slide.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit}>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="title">Title</Label>

              <Input
                id="title"
                name="title"
                placeholder="enter title"
                onChange={e => setData('title', e.target.value)}
              />

              {errors.title && (
                <InputError className="mt-2">{errors.title}</InputError>
              )}
            </div>

            <div>
              <Label htmlFor="subtitle">Subtitle</Label>

              <Input
                id="subtitle"
                name="subtitle"
                placeholder="enter subtitle"
                onChange={e => setData('subtitle', e.target.value)}
              />
              {errors.subtitle && (
                <InputError className="mt-2">{errors.subtitle}</InputError>
              )}
            </div>

            <div>
              <Label htmlFor="image">Slide Image</Label>
              <DropZone
                htmlFor={'image'}
                onValueChange={setDataImage}
                files={files}
                setFiles={setFiles}
                className={image ? 'hidden' : 'h-48'}
              />
              {image && (
                <div className="relative flex h-48 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-700 bg-gray-50 p-4 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800">
                  <div className="absolute inset-0 h-full w-full">
                    <AspectRatio ratio={5 / 3}>
                      <img
                        src={image}
                        alt="section hero"
                        className="h-full w-full rounded-md object-cover"
                      />
                    </AspectRatio>
                    <Button
                      className="absolute right-2 top-2 rounded-lg"
                      onClick={() => {
                        setImage(null);
                        setFiles([]);
                        setData('image', null);
                      }}
                    >
                      <XIcon className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              )}
              {errors.image && <InputError mt={2}>{errors.image}</InputError>}
            </div>
            <div className="space-x-2">
              <PrimaryButton type="submit" isLoading={processing}>
                Save
              </PrimaryButton>
              <Button variant="ghost" onClick={() => setOpen(!open)}>
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateSlideForm;
