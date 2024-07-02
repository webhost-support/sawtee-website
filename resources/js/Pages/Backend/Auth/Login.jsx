import PrimaryButton from '@/Components/Backend/PrimaryButton';
import GuestLayout from '@/Pages/Backend/Layouts/GuestLayout';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: '',
  });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const submit = e => {
    e.preventDefault();
    post(route('login'), {
      preserveState: true,
      onError: errors => {
        reset('password');
      },
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <Box mb={4} fontWeight={'medium'} fontSize={'sm'} color={'green.600'}>
          {status}
        </Box>
      )}

      <Container maxW="7xl" p={{ base: 5, md: 10 }}>
        <Center>
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl">Sign in to your account</Heading>
            </Stack>
            <VStack
              boxSize={{ base: 'sm', sm: 'md', md: 'lg' }}
              h="max-content !important"
              bg={useColorModeValue('white', 'gray.700')}
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
              spacing={8}
              as={'form'}
              onSubmit={submit}
            >
              <VStack spacing={4} w="100%">
                <FormControl id="email" isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    rounded="md"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="username"
                    onChange={e => setData('email', e.target.value)}
                  />
                  {errors.email && (
                    <FormErrorMessage mt={2}>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="password" isInvalid={errors.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      rounded="md"
                      type={show ? 'text' : 'password'}
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      onChange={e => setData('password', e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <IconButton
                        h="1.75rem"
                        size="sm"
                        rounded="md"
                        bg={useColorModeValue('gray.300', 'gray.700')}
                        _hover={{
                          bg: useColorModeValue('gray.400', 'gray.800'),
                        }}
                        onClick={handleClick}
                        icon={show ? <ViewIcon /> : <ViewOffIcon />}
                      />
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                    <FormErrorMessage mt={2}>
                      {errors.password}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </VStack>
              <VStack w="100%" spacing={4}>
                <Stack
                  direction="row"
                  justify="space-between"
                  w="100%"
                  alignItems={'center'}
                >
                  <Checkbox
                    colorScheme="blue"
                    size="md"
                    name="remember"
                    defaultChecked={true}
                    onChange={e => setData('remember', e.target.checked)}
                  >
                    Remember me
                  </Checkbox>
                  {canResetPassword && (
                    <Link href={route('password.request')}>
                      <Button
                        fontSize={{
                          base: 'md',
                          sm: 'md',
                        }}
                        variant={'link'}
                      >
                        Forgot your password?
                      </Button>
                    </Link>
                  )}
                </Stack>
                <Stack
                  direction="row"
                  justify="space-between"
                  w="100%"
                  alignItems={'center'}
                >
                  <PrimaryButton
                    type="submit"
                    rounded="md"
                    w="100%"
                    isLoading={processing}
                  >
                    Sign in
                  </PrimaryButton>
                </Stack>
              </VStack>
            </VStack>
          </Stack>
        </Center>
      </Container>
    </GuestLayout>
  );
}
