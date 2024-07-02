import DangerButton from '@/Components/Backend/DangerButton';
import SecondaryButton from '@/Components/Backend/SecondaryButton';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  });

  const deleteUser = e => {
    e.preventDefault();

    destroy(route('admin.profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset(),
    });
  };
  return (
    <Box as="section" py={6} className={className}>
      <header>
        <Heading
          as="h2"
          fontSize={'lg'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Delete Account
        </Heading>

        <Text
          mt={1}
          fontSize={'sm'}
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </Text>
      </header>

      <DangerButton mt={3} onClick={onOpen}>
        Delete Account
      </DangerButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack as="form" p={6} gap={4} onSubmit={deleteUser}>
              <Heading
                as="h2"
                fontSize={'lg'}
                fontWeight={'medium'}
                color={useColorModeValue('gray.900', 'gray.100')}
              >
                Are you sure you want to delete your account?
              </Heading>

              <Text
                mt={1}
                fontSize={'sm'}
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Please enter your password to confirm
                you would like to permanently delete your account.
              </Text>

              <FormControl mt={6}>
                <FormLabel htmlFor="password" className="sr-only">
                  Password
                </FormLabel>

                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={e => setData('password', e.target.value)}
                  mt={1}
                  display={'block'}
                  w="3/4"
                  placeholder="Password"
                />

                <FormErrorMessage className="mt-2">
                  {errors.password}
                </FormErrorMessage>
              </FormControl>

              <Flex justiftContents="flex-end" mt={6}>
                <SecondaryButton mr={3} onClick={onClose}>
                  Cancel
                </SecondaryButton>
                <DangerButton ml={3} disabled={processing}>
                  Delete Account
                </DangerButton>
              </Flex>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
