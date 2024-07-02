import PrimaryButton from '@/Components/Backend/PrimaryButton';
import GuestLayout from '@/Pages/Backend/Layouts/GuestLayout';
import {
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit = e => {
    e.preventDefault();
    post(route('password.email'));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />

      <Container maxW="7xl" p={{ base: 5, md: 10 }}>
        <Center>
          <Stack spacing={4} boxSize={{ base: 'sm', sm: 'md', md: 'lg' }}>
            <Stack align="center">
              <Text
                fontSize={'2xl'}
                textAlign={'center'}
                md={4}
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
              </Text>
              {status && (
                <Text
                  fontWeight={'medium'}
                  my={4}
                  color={useColorModeValue('green.600', 'green.400')}
                >
                  {status}
                </Text>
              )}
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
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>

                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="Email"
                    mt={1}
                    w={'full'}
                    onChange={e => setData('email', e.target.value)}
                  />

                  {errors.email && (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>

                <PrimaryButton ml={4} disabled={processing}>
                  Email Password Reset Link
                </PrimaryButton>
              </VStack>
            </VStack>
          </Stack>
        </Center>
      </Container>
    </GuestLayout>
  );
}
