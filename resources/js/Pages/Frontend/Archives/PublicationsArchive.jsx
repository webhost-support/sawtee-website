import { GlassBox } from '@/components/Frontend';
import WebsiteHead from '@/components/Frontend/Head';
import SidebarWidget from '@/components/Frontend/sidebarWidget';
import InertiaChakraLink from '@/components/Frontend/styles/inertia-chakra-link';
import InertiaChakraLinkOverlay from '@/components/Frontend/styles/inertia-chakra-link-overlay';
import Section from '@/components/Frontend/styles/section';
import SubscriptionCard from '@/components/Frontend/subscriptionCard';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Image,
  LinkBox,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import React from 'react';
import MainLayout from '../Layout/MainLayout';
import { PageLayout } from '../Layout/PageLayout';

export default function PublicationsArchive({
  category,
  infocus,
  sawteeInMedia,
  publications,
  showSubscriptionBox = true,
  featured_image,
  srcSet,
}) {
  return (
    <MainLayout>
      <WebsiteHead
        title={category.meta_title ? category.meta_title : category.name}
        description={category.meta_description}
        image={
          featured_image
            ? featured_image.original_url
            : '/assets/logo-sawtee.webp'
        }
      />
      <PageLayout
        featured_image={featured_image}
        srcSet={srcSet}
        title={category.name}
        showBackgroundPattern={false}
      >
        <Section
          pb="80px"
          py={{ base: '24px', lg: '80px' }}
          px={{ base: '32px', lg: '80px' }}
          size={'full'}
          mx="auto"
        >
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(4, 1fr)',
              xl: 'repeat(6, 1fr)',
            }}
            gap={10}
            placeContent={'center'}
          >
            <GridItem as="section" colSpan={{ base: 1, md: 2, xl: 4 }}>
              <ItemsList
                items={category.children}
                publications={publications}
              />
            </GridItem>

            <GridItem
              colSpan={{ base: 1, md: 2, xl: 2 }}
              as={'aside'}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              className="sidebar"
              gap={12}
            >
              {sawteeInMedia && (
                <SidebarWidget
                  array={sawteeInMedia}
                  title={'SAWTEE in Media'}
                  link={'/category/sawtee-in-media'}
                  maxW={['md', 'lg', 'xl']}
                />
              )}
              {infocus && (
                <SidebarWidget
                  array={infocus}
                  title={'Infocus'}
                  link={'/category/infocus'}
                  maxW={['md', 'lg', 'xl']}
                />
              )}

              {showSubscriptionBox && (
                <GlassBox maxW={['md', 'lg', 'xl']} py="4" px="8" rounded="xl">
                  <SubscriptionCard />
                </GlassBox>
              )}
            </GridItem>
          </Grid>
        </Section>
      </PageLayout>
    </MainLayout>
  );
}

const ItemComponent = ({ item, publications, ...rest }) => {
  return (
    <Box key={item.name} w="full" {...rest}>
      <InertiaChakraLink
        as={Link}
        title={`Explore ${item.name}`}
        textDecor="underline"
        href={`/category/publications/${item.slug}`}
      >
        <Text
          as="h3"
          id={item.name}
          fontSize={{ base: 'xl', lg: '2xl' }}
          pb={8}
        >
          {item.name}
        </Text>
      </InertiaChakraLink>
      {publications[item.slug] && publications[item.slug].length > 0 && (
        <SimpleGrid minChildWidth={'140px'} spacing={10}>
          {publications[item.slug].map(publication => {
            return (
              <Box key={publication.id}>
                <LinkBox
                  as="article"
                  maxW={'140px'}
                  mx="auto"
                  _before={{
                    content: `''`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 'var(--chakra-radii-md)',
                    background: 'rgba(0,0,0,0.1)',
                    backgroundBlendMode: 'overlay',
                  }}
                  _hover={{
                    _before: {
                      background: 'transparent',
                    },
                  }}
                >
                  <InertiaChakraLinkOverlay
                    as={Link}
                    title={publication.title}
                    href={
                      publication.file
                        ? `/publications/${publication.file.name}`
                        : '#'
                    }
                    target="_blank"
                  >
                    <Image
                      src={`${publication.media[0]?.original_url}`}
                      alt={publication.title}
                      title={publication.title}
                      rounded="md"
                      objectFit="cover"
                      w={'140px'}
                      aspectRatio={3 / 4}
                      loading="lazy"
                      fallbackSrc="/assets/SM-placeholder-150x150.png"
                    />
                  </InertiaChakraLinkOverlay>
                </LinkBox>
                {publication.title && (
                  <InertiaChakraLink
                    as={Link}
                    href={`/publications/${publication.file.name}`}
                  >
                    <Text
                      mt={4}
                      fontSize="sm"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      {publication.title}
                    </Text>
                    {publication.subtitle && (
                      <Text mt={1} fontSize="xs" textAlign="center">
                        {publication.subtitle}
                      </Text>
                    )}
                  </InertiaChakraLink>
                )}
              </Box>
            );
          })}
        </SimpleGrid>
      )}
      {item.children && item.children.length > 0 && (
        <React.Fragment key={item.id}>
          <ItemsList
            items={item.children}
            publications={publications}
            ml={8}
            pt={0}
          />
        </React.Fragment>
      )}
    </Box>
  );
};

// Main component that receives the data
const ItemsList = ({ items, publications, ...rest }) => {
  return (
    <VStack spacing={4} pos="sticky" top="8rem">
      {items.map((item, i) => (
        <React.Fragment key={item.id}>
          <ItemComponent item={item} publications={publications} {...rest} />
          {i < items.length - 1 && (
            <Divider
              my={12}
              borderColor={useColorModeValue(
                'blackAlpha.400',
                'whiteAlpha.400'
              )}
            />
          )}
        </React.Fragment>
      ))}
    </VStack>
  );
};
