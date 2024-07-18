import InputError from '@/components/Backend/InputError';
import PrimaryButton from '@/components/Backend/PrimaryButton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import { AlertCircleIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import CreateSlideForm from '../../Slide/CreateSlideForm';
import Slides from '../../Slide/Slides';

export default function EditSliderForm({ slider, slides, pages }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: slider.name,
    page_id: slider.page_id,
  });
  const { toast } = useToast();
  const [createSlideFormShow, setCreateSlideFormShow] = useState(false);

  const submit = e => {
    e.preventDefault();
    post(
      route('admin.sliders.update', {
        _method: 'patch',
        slider: slider.id,
      }),
      {
        preserveScroll: true,
        onSuccess: () => {
          toast({
            title: 'Slider edited.',
            description: 'Slider changes saved Successfully',
          });
        },
        onError: errors => {
          console.error(errors);
          if (errors.title) {
            reset('title');
          }
        },
      }
    );
  };
  return (
    <>
      {slides.length < 1 && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>No Slides</AlertTitle>
          <AlertDescription>No slides added yet.</AlertDescription>
        </Alert>
      )}
      <form onSubmit={submit}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="col-span-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={data.name}
              onChange={e => setData('name', e.target.value)}
            />
            {errors.name && (
              <InputError className="mt-2">{errors.name}</InputError>
            )}
          </div>
          <div className="col-span-1">
            <Label htmlFor="pages">Pages</Label>
            <Select
              id="pages"
              name="pages"
              value={data.page_id}
              placeholder="Select pages"
              onValueChange={value => setData('page_id', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select pages" />
              </SelectTrigger>
              <SelectContent className="w-[280px]">
                <SelectGroup>
                  <SelectLabel>Pages</SelectLabel>

                  {pages.map(page => (
                    <SelectItem key={page.id} value={page.id}>
                      {page.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.page_id && (
              <InputError className="mt-2">{errors.page_id}</InputError>
            )}
          </div>
          <div className="col-span-1 flex gap-4 items-end ">
            <Button
              variant="outline"
              className="inline-flex"
              onClick={() => setCreateSlideFormShow(!createSlideFormShow)}
            >
              Add slide
              <PlusIcon className="ml-2 w-4 h-4" />
            </Button>

            <PrimaryButton type="submit" disabled={processing}>
              Save slider
            </PrimaryButton>
          </div>
        </div>
      </form>

      {createSlideFormShow && (
        <CreateSlideForm
          open={createSlideFormShow}
          setOpen={setCreateSlideFormShow}
          slider={slider}
        />
      )}
      {slides.length > 0 && <Slides slides={slides} slider={slider} />}
    </>
  );
}
