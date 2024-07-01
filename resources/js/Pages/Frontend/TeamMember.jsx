import { RightQuotesIcon } from '@/Components/Frontend/icons';
import { Avatar, Icon, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react';

const TeamMember = ({ member, ...rest }) => {
  const avatar = member.media.filter(media => media.collection_name === 'avatar')[0];
  return (
    <VStack
      spacing={3}
      p={4}
      bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.400')}
      border="3px solid"
      borderColor="primary.400"
      maxW="xl"
      margin="0 auto"
      boxShadow="lg"
      pos="relative"
      {...rest}
    >
      <Icon
        as={RightQuotesIcon}
        w={10}
        h={10}
        color="primary.400"
        left="-1.3rem"
        position="absolute"
        top="-1.5rem"
      />
      <Text>{member.bio}</Text>
      <Stack direction="column" w="full" spacing={0}>
        <Text fontWeight="semibold" fontSize="lg" align="right" mr="3rem !important">
          {member.name}
        </Text>
        <Text fontSize="sm" align="right" mr="3rem !important">
          {member.designation}, {'SAWTEE'}
        </Text>
      </Stack>
      <Avatar
        name={member.name}
        src={avatar.original_url}
        showBorder={true}
        borderColor="primary.400"
        size="xl"
        pos="absolute"
        right="-48px"
        bottom="-20px"
        shadow="lg"
      />
    </VStack>
  );
};

export default TeamMember;
