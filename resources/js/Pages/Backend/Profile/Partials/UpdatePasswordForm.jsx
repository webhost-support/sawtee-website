import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
  const { data, setData, errors, put, reset, processing, recentlySuccessful } =
    useForm({
      current_password: '',
      password: '',
      password_confirmation: '',
    });

  const toast = useToast();

  const updatePassword = e => {
    e.preventDefault();

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => {
        toast({
          title: 'Success',
          description: 'Paswword information updated.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        reset();
      },
      onError: errors => {
        if (errors.password) {
          reset('password', 'password_confirmation');
          passwordInput.current.focus();
        }

        if (errors.current_password) {
          reset('current_password');
          currentPasswordInput.current.focus();
        }
      },
    });
  };

  return (
    <Box as="section" className={className}>
      <header>
        <Heading
          as="h2"
          fontSize={'lg'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Update Password
        </Heading>

        <Text
          mt={1}
          fontSize={'sm'}
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Ensure your account is using a long, random password to stay secure.
        </Text>
      </header>

      <VStack
        as="form"
        gap={4}
        onSubmit={updatePassword}
        mt={6}
        py={6}
        alignItems={'start'}
      >
        <FormControl isRequired>
          <FormLabel htmlFor="current_password">Current Password</FormLabel>

          <Input
            id="current_password"
            value={data.current_password}
            onChange={e => setData('current_password', e.target.value)}
            type="password"
            mt={1}
            display={'block'}
            w="full"
            autoComplete="current-password"
          />

          <FormErrorMessage className="mt-2">
            {errors.current_password}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="password">New Password</FormLabel>

          <Input
            id="password"
            value={data.password}
            onChange={e => setData('password', e.target.value)}
            type="password"
            mt={1}
            display={'block'}
            w="full"
            autoComplete="new-password"
          />

          <FormErrorMessage className="mt-2">
            {errors.password}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="password_confirmation">
            Confirm New Password
          </FormLabel>

          <Input
            id="password_confirmation"
            value={data.password_confirmation}
            onChange={e => setData('password_confirmation', e.target.value)}
            type="password"
            mt={1}
            display={'block'}
            w="full"
            autoComplete="new-password"
          />

          <FormErrorMessage className="mt-2">
            {errors.password_confirmation}
          </FormErrorMessage>
        </FormControl>

        <Flex justifyCenter gap={4} className="flex items-center gap-4">
          <PrimaryButton type="submit" minW={64} isLoading={processing}>
            Save
          </PrimaryButton>
        </Flex>
      </VStack>
    </Box>
  );
}
