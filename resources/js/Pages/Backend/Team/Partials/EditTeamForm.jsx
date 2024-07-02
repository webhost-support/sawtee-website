import FileUpload, { PreviewImage } from '@/Components/Backend/FileUpload';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import React from 'react';

export default function EditTeamForm({ team }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: team.name,
    email: team.email,
    designation: team.designation,
    bio: team.bio,
    order: team.order ? team.order : 0,
    image: '',
  });

  const toast = useToast();
  const [image, setImage] = React.useState(
    team.media[0] ? team.media[0].original_url : null
  );

  const submit = e => {
    e.preventDefault();
    console.log(data);
    post(
      route('admin.teams.update', {
        _method: 'patch',
        team: team.id,
      }),
      {
        preserveScroll: true,
        onSuccess: () =>
          toast({
            position: 'top-right',
            title: 'Member edited.',
            description: 'Member edited Successfully',
            status: 'success',
            duration: 6000,
            isClosable: true,
          }),
        onError: errors => {
          if (errors.name) {
            reset('name');
          }
        },
      }
    );
  };

  return (
    <VStack as="form" onSubmit={submit} gap="10" alignItems={'start'}>
      <HStack
        w="full"
        gap={8}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <FormControl isRequired isInvalid={errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>

          <Input
            id="name"
            name="name"
            placeholder="enter member name"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
            required
          />

          <FormErrorMessage message={errors.name} className="mt-2" />
        </FormControl>

        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">email</FormLabel>

          <Input
            type="email"
            id="email"
            name="email"
            value={data.email}
            placeholder="enter member email"
            onChange={e => setData('email', e.target.value)}
          />

          <FormErrorMessage message={errors.email} mt={2} />
        </FormControl>

        <FormControl isRequired as="fieldset">
          <FormLabel htmlFor="designation">Designation</FormLabel>
          <Input
            id="designation"
            name="designation"
            value={data.designation}
            placeholder="enter member designation"
            onChange={e => setData('designation', e.target.value)}
          />
          <FormErrorMessage mt={2} message={errors.designation} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="order">Order</FormLabel>
          <NumberInput
            id="order"
            name="order"
            value={data.order}
            onChange={e => setData('order', Number(e))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage message={errors.order} />
        </FormControl>
      </HStack>

      <HStack
        w="full"
        gap={8}
        justifyContent="space-between"
        alignItems="center"
      >
        <FormControl>
          <FormLabel htmlFor="bio">Bio</FormLabel>
          <Textarea
            id="bio"
            name="bio"
            placeholder="enter member bio"
            value={data.bio}
            rows={10}
            resize={'vertical'}
            onChange={e => setData('bio', e.target.value)}
          />
          <FormErrorMessage message={errors.bio} mt={2} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="image">Image</FormLabel>

          {image && (
            <>
              <Box w="48">
                <PreviewImage src={image} aspectRatio={3 / 4} />
              </Box>
              <Button
                mt={4}
                size={'sm'}
                colorScheme="red"
                onClick={() => {
                  setImage(null);
                }}
              >
                Remove/Change Image
              </Button>
            </>
          )}

          {!image && (
            <FileUpload accept="image/.png,.jpg,.jpeg,.webp">
              <Input
                type="file"
                height="100%"
                width="100%"
                position="absolute"
                top="0"
                left="0"
                opacity="0"
                aria-hidden="true"
                accept="image/.png,.jpg,.jpeg,.webp"
                id="image"
                name="image"
                size="md"
                onChange={e => {
                  setData('image', e.target.files[0]);
                  setImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </FileUpload>
          )}
          {errors.image && (
            <FormErrorMessage mt={2}>{errors.image}</FormErrorMessage>
          )}
        </FormControl>
      </HStack>
      <PrimaryButton type="submit" isLoading={processing} minW="64">
        Save
      </PrimaryButton>
    </VStack>
  );
}
