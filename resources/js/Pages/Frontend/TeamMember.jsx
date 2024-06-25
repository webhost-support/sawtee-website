import { Avatar, Box, Icon, Image, Show, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ImQuotesLeft } from 'react-icons/im';

const TeamMember = ({ member, ...rest }) => {
  const avatar = member.media.filter(media => media.collection_name === 'avatar')[0];
  const color = useColorModeValue('gray.900', 'gray.200');
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      bgGradient="linear(to-br, accent.800, primary.300)"
      spacing={{ base: 0, sm: 10 }}
      p={{ base: 4, sm: 8 }}
      rounded="lg"
      justifyContent="center"
      {...rest}
    >
      <Show above="lg">
        <Box width="15rem" pos="relative">
          <Image
            pos="absolute"
            w="full"
            h="full"
            rounded="lg"
            src={avatar.original_url}
            top="-3.8rem"
            boxShadow="lg"
            fit={'cover'}
          />
        </Box>
      </Show>

      <Stack direction="column" spacing={4} w="full" textAlign="left">
        <Icon as={ImQuotesLeft} w={10} h={10} />
        <Text fontSize="sm" color={color} fontWeight="semibold">
          {member.bio}
        </Text>
        <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
          <Show below="lg">
            <Avatar size="xl" showBorder={true} borderColor="blue.400" name="avatar" src={avatar.original_url} />
          </Show>
          <Text fontWeight="bold" fontSize="md" color={color}>
            {member.name}
          </Text>
          <Text fontWeight="medium" fontSize="sm" color={color}>
            {member.designation}, {'SAWTEE'}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TeamMember;
