import PrimaryButton from '@/Components/Backend/PrimaryButton';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

export default function DeleteMenu({ isOpen, onClose, menu }) {
  const toast = useToast();
  const { processing, destroy } = useForm();

  const submit = e => {
    e.preventDefault();
    destroy(route('admin.delete.menu', menu), {
      preserveScroll: true,
      onSuccess: () =>
        toast({
          position: 'top-right',
          title: 'Menu deleted.',
          description: 'Menu deleted Successfully',
          status: 'error',
          duration: 6000,
          isClosable: true,
        }),
      onError: () => console.log('Error while deleting'),
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', md: 'md' }}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={submit}>
        <ModalHeader>Delete Menu Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Alert status="error">
            <HStack>
              <AlertIcon w="6" h="6" />
              <Box>
                <AlertTitle>
                  <Text color={'red.600'}>This action is irreversible.</Text>
                </AlertTitle>
                <AlertDescription>
                  <Text mt="2" fontSize={'sm'} lineHeight={'base'}>
                    Are you sure you want to delete this menu item?
                  </Text>
                </AlertDescription>
              </Box>
            </HStack>
          </Alert>
        </ModalBody>

        <ModalFooter>
          <PrimaryButton
            colorScheme="red"
            type="submit"
            isLoading={processing}
            mr={3}
          >
            Delete
          </PrimaryButton>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
