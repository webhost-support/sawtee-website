import { ListItemVariant } from '@/components/Frontend';
import { NewspaperIcon } from '@/components/Frontend/icons';
import InertiaChakraLink from '@/components/Frontend/styles/inertia-chakra-link';
import { formatDate } from '@/lib/helpers';
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  List,
  Text,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
// Here we have used react-icons package for the icons

const NewsletterArchive = ({ posts }) => {
  if (!posts || posts.length <= 0) return 'No posts found';

  return (
    <Container as="section" role="group" maxWidth="4xl">
      <Box textAlign="center" mb={'12'}>
        <Heading
          as="h2"
          mb={'2'}
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
          lineHeight={1}
          fontFamily={'heading'}
        >
          Trade, Climate Change and Development Monitor
        </Heading>
        <Text as={'span'} fontSize={'sm'}>
          Monthly E-Newsletter of South Asia Watch on Trade, Economics and
          Environment
        </Text>
      </Box>
      <List>
        {posts.map(post => {
          return (
            <Flex
              as={motion.article}
              variants={ListItemVariant}
              initial={'closed'}
              whileInView={'open'}
              transitionDuration={'400ms'}
              viewport={{ once: true }}
              key={post.id}
              mb="20"
            >
              <LineWithDot />
              <Card {...post} />
            </Flex>
          );
        })}
      </List>
    </Container>
  );
};

export default NewsletterArchive;

const Card = ({ title, category, excerpt, published_at, media }) => {
  const file = media.filter(m => m.collection_name === 'post-files')[0];
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'var(--color-darker)')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      w="full"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue(
          'var(--chakra-colors-gray-50)',
          'var(--color-darker)'
        )} transparent`,
        borderStyle: 'solid',
        borderWidth: '15px 15px 15px 0',
        position: 'absolute',
        left: '-15px',
        display: 'block',
      }}
    >
      <Icon
        as={NewspaperIcon}
        w={10}
        h={10}
        color={useColorModeValue('primary.500', 'primary.200')}
      />
      <Box flex={1}>
        {category && (
          <HStack spacing={2} justify={'space-between'} mb={1}>
            <Text fontSize="xs">{category.name}</Text>
            <Text fontSize="xs">{formatDate(published_at)}</Text>
          </HStack>
        )}
        <Heading
          as={'h3'}
          fontSize="lg"
          lineHeight={1.2}
          fontWeight="bold"
          w="100%"
        >
          <InertiaChakraLink href={file ? file.original_url : ''}>
            {title}
          </InertiaChakraLink>
        </Heading>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + var(--chakra-space-20))"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor={useColorModeValue('gray.50', 'var(--color-darker)')}
          borderRadius="100px"
          border="3px solid "
          borderColor={useColorModeValue('primary.500', 'primary.200')}
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};
