import { QuotesIcon } from '@/Components/Frontend/icons';
import { Avatar, Box, Icon, Image, Show, Stack, Text } from '@chakra-ui/react';

const TeamMember = ({ member, ...rest }) => {
  const avatar = member.media.filter(media => media.collection_name === 'avatar')[0];
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      bgGradient="linear(to-br, accent.200, primary.700)"
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
            w="180px"
            h="180px"
            rounded="lg"
            src={avatar.original_url}
            top="-3.8rem"
            boxShadow="lg"
            fit={'cover'}
          />
        </Box>
      </Show>

      <Stack direction="column" pos="relative" spacing={4} w="full" px="4" textAlign="left">
        <Icon pos={'absolute'} left="-25px" top="-10px" as={QuotesIcon} w={10} h={10} />
        <Text fontSize="sm" fontFamily={'body'}>
          {member.bio}
        </Text>
        <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
          <Show below="lg">
            <Avatar size="xl" showBorder={true} borderColor="blue.400" name="avatar" src={avatar.original_url} />
          </Show>
          <Text fontWeight="bold" fontFamily={'heading'} fontSize="md">
            {member.name}
          </Text>
          <Text fontWeight="medium" fontSize="sm" fontFamily={'mono'}>
            {member.designation}, {'SAWTEE'}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TeamMember;
