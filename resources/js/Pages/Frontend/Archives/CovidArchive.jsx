import { GlassBox } from '@/Components/Frontend/index';
import { DateFormat } from '@/Utils/helpers';
import {
  Badge,
  Divider,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

const CovidArchive = ({ posts }) => {
  return (
    <SimpleGrid
      w="full"
      px={[4, 8]}
      columns={{ base: 1, md: 2 }}
      gap={4}
      rowGap={10}
    >
      {posts.map(post => {
        return (
          <VStack
            as={GlassBox}
            key={post.id}
            borderColor={'var(--chakra-colors-gray-600)'}
            role="group"
            rounded="none"
            p={6}
            align="start"
            justify="space-evenly"
            transition="all 0.25s ease"
            spacing={6}
            _hover={{
              shadow: 'dark-lg',
              transform: 'scale(1.02)',
            }}
            w="full"
          >
            <HStack w="full" justify="space-between">
              {post.genre && (
                <Badge
                  colorScheme="gray"
                  px={2}
                  py={1}
                  rounded="md"
                  fontSize={'xs'}
                >
                  {post.genre}
                </Badge>
              )}

              <Text
                as="time"
                fontSize={'xs'}
                fontWeight="medium"
                justifySelf={'flex-end'}
                dangerouslySetInnerHTML={{
                  __html: DateFormat(post.published_at),
                }}
              />
            </HStack>
            <Link href={post.link} className="primary-link">
              <Heading as="h3" fontSize={'md'} fontWeight={'normal'}>
                {post.title}
              </Heading>
            </Link>
            <Divider borderColor="var(--color-border)" />

            <HStack align="center" __css={{ columnGap: 2, flexWrap: 'wrap' }}>
              {post.author && (
                <Text key={post.author} fontSize="sm">
                  {post.author}
                </Text>
              )}
            </HStack>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
};

export default CovidArchive;
