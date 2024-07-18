import PrimaryButton from '@/components/Backend/PrimaryButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

import DropZone from '@/components/Backend/DropZone';
import InputError from '@/components/Backend/InputError';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

function CreateSlideForm({ open, setOpen, slider }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    subtitle: '',
    slider_id: slider.id,
  });
  const { toast } = useToast();
  const [image, setImage] = useState(null);

  const addSlide = e => {
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
        <form onSubmit={addSlide}>
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
              <DropZone setImage={setImage} image={image} htmlFor={'image'} />
              {errors.image && <InputError mt={2}>{errors.image}</InputError>}
            </div>
          </div>
        </form>

        <div>
          <PrimaryButton type="submit" isLoading={processing}>
            Save
          </PrimaryButton>
          <Button variant="ghost" onClick={() =>setOpen(!open)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateSlideForm;
