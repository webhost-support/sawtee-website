import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';
import React from 'react';
import { ExploreButton } from '.';
import SimpleList from './SimpleList';
import { SendPlaneIcon } from './icons';
import InertiaChakraLink from './styles/inertia-chakra-link';

export const PatternBox = ({ showPattern = false, ...props }) => (
  <Box
    as="section"
    bg={useColorModeValue('primary.50', 'primary.700')}
    backdropFilter={'blur(5px)'}
    borderTop="10px solid"
    borderColor={'primary.500'}
    {...(showPattern && {
      bgImage: 'url(/assets/pattern-tile-green.svg)',
      bgSize: '1018px',
      bgPos: 'top center',
    })}
    {...props}
  />
);

export const PatternBoxInner = props => (
  <Box
    py="80px"
    position="relative"
    zIndex="1"
    overflow="hidden"
    textAlign="center"
    maxW="3xl"
    mx="auto"
    px={6}
    {...props}
  />
);

// TODO: Add the logic to show this component based on if newsletter package exists
export const Newsletter = ({ data, props }) => {
  return (
    <PatternBox {...props}>
      <Grid
        gridTemplateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
        placeItems="center"
        p="40px"
        gap={10}
        maxW="6xl"
        mx="auto"
      >
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <Box
            position="relative"
            zIndex="1"
            overflow="hidden"
            textAlign="center"
            mx="auto"
            px={6}
          >
            <Heading
              as="h4"
              fontSize={'2xl'}
              color="var(--color-text)"
              textTransform="uppercase"
            >
              Never miss an update!
            </Heading>
            <Text mt={2} fontSize="sm" color="primary.500">
              Receive the latest publication releases, update and monthly
              newsletter.
            </Text>
            <SubscribeForm />
          </Box>
        </GridItem>
        <GridItem
          className="scroll-container"
          colSpan={{ base: 1, md: 2 }}
          maxH="72"
          overflowY={'scroll'}
        >
          <SimpleList heading={'e-newsletters'} my="10">
            {data.map(item => {
              const file = item.media.filter(
                m => m.collection_name === 'post-files'
              )[0];
              return (
                <li className="mb-4" key={item.id}>
                  <InertiaChakraLink
                    textDecor="underline"
                    textUnderlineOffset="3px"
                    href={file?.original_url}
                  >
                    <Text fontSize={'0.875rem'} lineHeight={'short'}>
                      {item.title}
                    </Text>
                  </InertiaChakraLink>
                </li>
              );
            })}
          </SimpleList>

          <ExploreButton
            size="sm"
            text="More newsletters"
            link={'/category/newsletters'}
          />
        </GridItem>
      </Grid>
    </PatternBox>
  );
};

const SubscribeForm = ({ ...rest }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
  });

  const [message, setMessage] = React.useState(null);

  const submit = e => {
    e.preventDefault();
    post(route('subscription.store'), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setMessage(`${data.email} has subscribed successfully.`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        reset('email');
      },
      onError: errors => {
        console.log(errors);
      },
    });
  };

  return (
    <Box maxW="640px" mx="auto">
      <Flex as="form" onSubmit={submit} mt="20px" {...rest}>
        <FormControl isInvalid={errors.email} isRequired>
          <InputGroup>
            <Input
              type="email"
              id="email"
              name="email"
              bg="white"
              height="40px"
              value={data.email}
              px="15px"
              fontSize="sm"
              placeholder="Subscribe to our newsletter"
              _placeholder={{ color: 'gray.500' }}
              onChange={e => {
                setData('email', e.target.value);
              }}
            />
            <InputRightElement>
              <IconButton
                transition="background-color ease .25s"
                cursor="pointer"
                textAlign="center"
                colorScheme={'primary'}
                h="30px"
                type="submit"
                mr="3"
                isLoading={processing}
                icon={<SendPlaneIcon />}
              />
            </InputRightElement>
          </InputGroup>

          {errors.email && (
            <FormErrorMessage mt={2}>{errors.email}</FormErrorMessage>
          )}

          {message && (
            <FormHelperText color={'green.500'}>{message}</FormHelperText>
          )}
        </FormControl>
      </Flex>
    </Box>
  );
};
