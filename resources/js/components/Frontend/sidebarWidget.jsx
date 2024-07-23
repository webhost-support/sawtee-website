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
      <SimpleList heading={title} px="8" py={4} spacing={4}>
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
              <ListItem key={post.id} mb="1rem">
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
              </ListItem>
            );
          })}
        <ExploreButton
          size={['xs', 'sm']}
          text={`More ${title}`}
          link={link}
          p={0}
        />
      </SimpleList>
    </GlassBox>
  );
};

export default SidebarWidget;
