import { Box } from '@chakra-ui/react';

export default function GuestLayout({ children }) {
  return (
    <Box
      as="section"
      bg="var(--color-body-bg)"
      minH="100dvh"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box as="main" transition=".3s ease">
        <Box as="section" p="4">
          <Box p={{ base: 4, md: 8 }} rounded="md">
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
