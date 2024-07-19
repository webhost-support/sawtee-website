import PrimaryButton from '@/components/Backend/PrimaryButton';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

export default function DeleteMenuItem({ isOpen, onClose, item, setMenuItem }) {
  const { delete: destroy, processing } = useForm();
  const toast = useToast();
  const submit = e => {
    e.preventDefault();
    destroy(route('admin.deleteMenuItem.menu', item.id), {
      preserveScroll: true,
      onSuccess: () => {
        toast({
          position: 'top-right',
          title: 'Menu Item deleted.',
          description: 'Menu Item deleted Successfully',
          status: 'error',
          duration: 6000,
          isClosable: true,
        });
        setMenuItem(null);
        onClose();
      },
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
                    {item.children.length > 0
                      ? 'This menu item has sub items. All sub items will also be deleted. Are you sure you want to delete'
                      : 'Are you sure you want to delete this menu item ?'}
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
          <Button
            variant="ghost"
            onClick={() => {
              onClose();
              setMenuItem(null);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
