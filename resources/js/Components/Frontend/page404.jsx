import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import PrimaryButton from '../Backend/PrimaryButton';
import InertiaChakraLink from './styles/inertia-chakra-link';

const Page404 = ({ status, message }) => (
  <Box textAlign="center" py={10} px={6}>
    <Heading
      display="inline-block"
      as="h2"
      size="4xl"
      bgGradient="linear(to-r, primary.400,primary.500, teal.600)"
      backgroundClip="text"
    >
      {status}
    </Heading>
    <Text fontSize="18px" mt={3} mb={2}>
      {message}
    </Text>
    <Text color={'gray.500'} mb={6}>
      The page you&apos;re looking for does not seem to exist
    </Text>
    <InertiaChakraLink href="/">
      <PrimaryButton
        bgGradient="linear(to-r, primary.400, primary.500, teal.600)"
        color="white"
        variant="solid"
        _hover={{
          bgGradient: 'linear(to-r, primary.400, primary.500, teal.600)',
        }}
      >
        <Icon as={ArrowBackIcon} mr={2} /> {'Go back Home'}
      </PrimaryButton>
    </InertiaChakraLink>
  </Box>
);

export default Page404;
