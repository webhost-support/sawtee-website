import { DataTable } from '@/Components/Backend/DataTable';
import { TableDeleteAction, TableEditAction } from '@/Components/Backend/TableActions';
import { HStack, Image, useDisclosure, useToast } from '@chakra-ui/react';
import { useForm } from '@inertiajs/inertia-react';
import { createColumnHelper } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import EditSlideForm from './EditSlideForm';

const Slides = ({ slides, slider }) => {
  const toast = useToast();
  const columnHelper = createColumnHelper();
  const { processing, delete: destroy } = useForm();
  const [editSlide, setEditSlide] = useState(null);
  const editSlideModal = useDisclosure();

  const handleEdit = (e, id) => {
    e.preventDefault();
    const slideToEdit = slides.data.filter(slide => slide.id == id)[0];
    if (slideToEdit) setEditSlide(slideToEdit);
    editSlideModal.onOpen();
  };

  useEffect(() => {
    !editSlideModal.isOpen && setEditSlide(null);
  }, [editSlideModal.onToggle]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    destroy(route('admin.slides.destroy', id, slider.id), {
      preserveScroll: true,
      onSuccess: () =>
        toast({
          position: 'top-right',
          title: 'Slider deleted.',
          description: 'Slider deleted Successfully',
          status: 'error',
          duration: 6000,
          isClosable: true,
        }),
      onError: () => console.log('Error while deleting'),
    });
  };

  const defaultColumns = useMemo(
    () => [
      columnHelper.accessor('title', {
        cell: info => info.getValue(),
        header: 'Title',
      }),
      columnHelper.accessor('subtitle', {
        cell: info => info.getValue(),
        header: 'Subtitle',
      }),
      columnHelper.accessor('media', {
        cell: info =>
          info.getValue() && (
            <Image
              border={'1px solid var(--color-text)'}
              width={'150px'}
              aspectRatio={5 / 2}
              // height="75px"
              objectFit="cover"
              alt="preview_image"
              rounded="md"
              src={info.getValue()[0].preview_url}
            />
          ),
        header: 'Image',
      }),

      columnHelper.accessor('id', {
        cell: info => {
          return (
            <HStack spacing={4}>
              <TableEditAction
                onClick={e => {
                  handleEdit(e, info.getValue());
                }}
                isDisabled={processing}
              />
              <TableDeleteAction onClick={e => handleDelete(e, info.getValue())} isDisabled={processing} />
            </HStack>
          );
        },
        header: 'Actions',
      }),
    ],
    []
  );
  return (
    <>
      {editSlide && (
        <EditSlideForm
          isOpen={editSlideModal.isOpen}
          onClose={editSlideModal.onClose}
          slide={editSlide}
          setEditSlide={setEditSlide}
        />
      )}
      <DataTable defaultColumns={defaultColumns} data={slides} pagination={false} showColumnFilters={false} />
    </>
  );
};

export default Slides;
