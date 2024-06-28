import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Blob } from './icons';

export default function Feature({ feature, ...rest }) {
  return (
    <Stack align={'center'} spacing={{ base: 8, md: 10 }} direction={{ base: 'column', lg: 'row' }} {...rest}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.2}
          fontWeight={600}
          fontSize={{
            base: 'lg',
            sm: 'xl',
            md: '2xl',
            xl: '3xl',
          }}
        >
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: '100%',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: useColorModeValue('primary.100', 'primary.400'),
              zIndex: -1,
            }}
          >
            {feature.name}
          </Text>
          <br />
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
          The <strong>Reform Monitoring Platform</strong> intends to strengthen{' '}
          <strong>monitoring and evaluation</strong> of the policy reform process through an online{' '}
          <strong>reform tracking system</strong> to increase transparency, inclusiveness, and accountability of{' '}
          <strong>trade and investment</strong> related reforms.
        </Text>
      </Stack>
      <Flex flex={1} justify={'center'} align={'center'} position={'relative'} my="10">
        <Blob
          w={'100%'}
          h={'150%'}
          position={'absolute'}
          top={'-20%'}
          left={0}
          color={useColorModeValue('primary.100', 'primary.400')}
        />

        <LinkBox
          position={'relative'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}
          role="group"
        >
          <Box
            pos="absolute"
            w="full"
            h="full"
            bg={'blackAlpha.400'}
            _groupHover={{ bg: 'blackAlpha.200' }}
            transition="all 0.25s ease"
            inset="0"
          />

          <IconButton
            aria-label={'Play Button'}
            variant={'ghost'}
            _groupHover={{ color: 'white' }}
            icon={<ExternalLinkIcon w={12} h={12} />}
            size={'lg'}
            color={'whiteAlpha.700'}
            position={'absolute'}
            left={'50%'}
            top={'50%'}
            transition="all 0.25s ease"
            transform={'translateX(-50%) translateY(-50%)'}
          />

          <LinkOverlay href={feature.link}>
            <Image alt={feature.name} fit={'cover'} align={'center'} w={'100%'} h={'100%'} src={feature.image} />
          </LinkOverlay>
        </LinkBox>
      </Flex>
    </Stack>
  );
}
