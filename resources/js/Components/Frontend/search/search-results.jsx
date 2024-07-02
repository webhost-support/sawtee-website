import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  LinkBox,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import React from 'react';
import { SearchForm } from '.';
import { GlassBox } from '..';
import InertiaChakraLinkOverlay from '../styles/inertia-chakra-link-overlay';
import { PatternBox, PatternBoxInner } from '../styles/pattern-box';

const SearchHeader = ({ label, title, ...props }) => (
  <Box {...props}>
    <Heading
      size="md"
      as="h6"
      fontWeight="medium"
      textTransform="uppercase"
      color="accent.400"
    >
      {label}
    </Heading>

    <Heading
      mt={4}
      fontWeight="medium"
      as="h1"
      textTransform="uppercase"
      fontSize="3.5rem"
      color="white"
    >
      {title}
    </Heading>
  </Box>
);

const SearchResultTitle = ({ resultCount, query }) => (
  <SearchHeader
    title={`‘${query}’`}
    label={`${resultCount} ${resultCount > 1 ? 'results' : 'result'} for`}
  />
);

const NoResultTitle = ({ query }) => (
  <SearchHeader label={`0 result for`} title={`‘${query}’`} />
);

const NoResultContent = props => (
  <Box
    p="80px"
    maxW="1400px"
    position="relative"
    mx="auto"
    mt="-60px"
    bg={useColorModeValue('gray.50', 'var(--color-darker)')}
    width="92%"
    {...props}
  />
);

export const SearchResults = ({ data, query }) => {
  // Get the total pages that match the current path/url
  const isEmpty = data.length === 0;

  return (
    <Box bg="primary.100">
      <PatternBox showPattern={false} pb="60px" border={'none'}>
        <PatternBoxInner>
          {isEmpty ? (
            <NoResultTitle query={query.replace(/\+/g, ' ')} />
          ) : (
            <SearchResultTitle
              query={query.replace(/\+/g, ' ')}
              resultCount={data.length}
            />
          )}
        </PatternBoxInner>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          maxW={'7xl'}
          spacing={10}
          mx="auto"
          px={{ base: '24px', md: '80px' }}
        >
          {data &&
            data.map(post => {
              console.log(post);
              return (
                <LinkBox
                  as={GlassBox}
                  role="group"
                  shadow="md"
                  rounded="xl"
                  p={6}
                  mb={4}
                >
                  <Flex gap={6} justify={'center'} direction="column">
                    <InertiaChakraLinkOverlay
                      as={Link}
                      href={`/category/${post.category.slug}/${post.slug}`}
                      _groupHover={{
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      <Heading
                        fontSize={{
                          base: 'lg',
                          lg: 'xl',
                        }}
                        as="h4"
                      >
                        {post.title}
                      </Heading>
                    </InertiaChakraLinkOverlay>

                    <Text
                      fontSize={{ base: 'sm', lg: 'md' }}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      display="-webkit-box"
                      noOfLines="3"
                      sx={{
                        webkitLineClamp: '3',
                        webkitBoxOrient: 'vertical',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                      }}
                    />
                  </Flex>
                </LinkBox>
              );
            })}
        </SimpleGrid>
      </PatternBox>

      {isEmpty && (
        <NoResultContent>
          <Box maxW="600px" mx="auto">
            <Text fontSize="xl" textAlign="center" mb={6}>
              We could not find any results for your search. You can give it
              another try through the search form below.
            </Text>
            <SearchForm />
          </Box>
        </NoResultContent>
      )}
    </Box>
  );
};

export default SearchResults;
