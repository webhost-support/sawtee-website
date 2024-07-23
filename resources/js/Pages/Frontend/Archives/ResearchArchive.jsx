import { GlassBox } from '@/components/Frontend';
import { PDFFileIcon } from '@/components/Frontend/icons';
import {
  Box,
  Circle,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const ResearchArchive = ({ posts }) => {
  // Get the data of the current list.
  if (!posts || posts.length <= 0)
    return <Text fontSize={'2xl'}>"No posts found"</Text>;

  const sortedPosts = Object.entries(posts).sort(([a], [b]) => b - a);

  return (
    <Box maxW="xl" mx="auto">
      <VStack textAlign="start" align="start" mb={5} spacing={10}>
        {sortedPosts.map(tagitem => {
          return (
            <Box zIndex={5} w="full" key={tagitem[0]}>
              <Heading fontSize={['lg', 'xl', '2xl']} fontWeight="bold" my={5}>
                {tagitem[0]}
              </Heading>
              <GlassBox
                p={4}
                rounded="xl"
                textAlign="left"
                display={'flex'}
                boxShadow={'lg'}
                flexDirection={'column'}
                alignItems="start"
                cursor="pointer"
                _hover={{
                  shadow: 'md',
                }}
              >
                {tagitem[1].map((researchItem, idx) => (
                  <ReasearchItem
                    key={researchItem.id}
                    icon={PDFFileIcon}
                    skipTrail={idx !== tagitem[1].length - 1 ? true : false}
                    minH={idx !== tagitem[1].length - 1 ? 20 : 'auto'}
                  >
                    <Text fontSize="sm">
                      <Link
                        target="_blank"
                        href={
                          researchItem.file
                            ? `/Research_Reports/${researchItem.file.name}`
                            : researchItem.link
                        }
                      >
                        {researchItem.title}
                      </Link>
                    </Text>
                  </ReasearchItem>
                ))}
              </GlassBox>
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
};

export default ResearchArchive;

const ReasearchItem = ({
  icon = CheckCircleIcon,
  boxProps = {},
  skipTrail,
  children,
  ...props
}) => {
  return (
    <Flex {...props} align={'center'}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={12}
          bg={useColorModeValue('gray.600', 'gray.500')}
          opacity={useColorModeValue(0.07, 0.15)}
        />
        <Box
          as={icon}
          size="1.25em"
          pos="absolute"
          left="0.85em"
          top="0.85em"
        />
        {skipTrail ? (
          <Box
            w="1px"
            flex={1}
            my={1}
            bg={useColorModeValue('gray.600', 'gray.500')}
            opacity={useColorModeValue(0.07, 0.15)}
          />
        ) : null}
      </Flex>
      <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
        {children}
      </Box>
    </Flex>
  );
};
