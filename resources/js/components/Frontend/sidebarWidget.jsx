import { ExploreButton, GlassBox } from '@/components/Frontend/index';
import { formatDate, slugify } from '@/lib/helpers';
import {
  Box,
  Flex,
  ListItem,
  Skeleton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import React from 'react';
import SimpleList from './SimpleList';
import ChakraLink from './styles/inertia-chakra-link';

const SidebarWidget = ({ array, title, link, ...rest }) => {
  return (
    <GlassBox
      className="sidebar_widget"
      height="max-content"
      shadow="none"
      border="none"
      position="relative"
      rounded="md"
      {...rest}
    >
      <SimpleList className={'border-none px-8'} heading={title}>
        {array.length <= 0 && (
          <Box display={'flex'} flexDir={'column'} gap={2}>
            <Skeleton w="full" height="30px" />
            <Box display={'flex'} justifyContent={'space-between'}>
              <Skeleton w="80px" height="15px" />
              <Skeleton w="80px" height="15px" />
            </Box>
          </Box>
        )}
        {array.length > 0 &&
          array.map((post, index) => {
            return (
              <li className="mb-4" key={post.id}>
                <Box>
                  <ChakraLink
                    as={Link}
                    textDecor="underline"
                    textUnderlineOffset="3px"
                    href={`${link}/${post.slug}`}
                  >
                    <Text fontSize={'0.875rem'} lineHeight={'short'}>
                      {post.title}
                    </Text>
                  </ChakraLink>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.300')}
                    fontSize={'.75rem'}
                    mt={2}
                  >
                    {formatDate(post.published_at)}
                  </Text>
                </Box>
              </li>
            );
          })}
        <ExploreButton text={`More ${title}`} link={link} className="p-0 " />
      </SimpleList>
    </GlassBox>
  );
};

export default SidebarWidget;
