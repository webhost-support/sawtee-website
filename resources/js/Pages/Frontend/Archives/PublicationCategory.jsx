import { GlassBox } from '@/components/Frontend';
import WebsiteHead from '@/components/Frontend/Head';
import Pagination from '@/components/Frontend/Pagination';
import SidebarWidget from '@/components/Frontend/sidebarWidget';
import InertiaChakraLink from '@/components/Frontend/styles/inertia-chakra-link';
import InertiaChakraLinkOverlay from '@/components/Frontend/styles/inertia-chakra-link-overlay';
import Section from '@/components/Frontend/styles/section';
import SubscriptionCard from '@/components/Frontend/subscriptionCard';
import {
  Box,
  Grid,
  GridItem,
  Image,
  LinkBox,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layout/MainLayout';
import { PageLayout } from '../Layout/PageLayout';

export default function Publications({
  category,
  publications,
  infocus,
  sawteeInMedia,
  featured_image,
  showSubscriptionBox = true,
  srcSet,
}) {
  return (
    <MainLayout>
      <WebsiteHead
        title={category.meta_title || category.name}
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
            templateColumns={{ base: '1fr', xl: 'repeat(6, 1fr)' }}
            gap={10}
            placeContent={'center'}
          >
            <GridItem colSpan={{ base: 1, lg: 4 }} px={4} as="section">
              <SimpleGrid
                minChildWidth={'140px'}
                spacing={10}
                spacingY={24}
                pos="sticky"
                top="8rem"
              >
                {publications.data.length > 0 &&
                  publications.data.map(publication => {
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
              {publications.data.length >= 12 && (
                <Pagination
                  links={publications.links}
                  currentPage={publications.current_page}
                  totalPages={publications.last_page}
                  nextPage={publications.next_page_url}
                  prevPage={publications.prev_page_url}
                  width="full"
                  mt={12}
                />
              )}
            </GridItem>

            <GridItem
              colSpan={{ base: 1, lg: 2 }}
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
                />
              )}
              {infocus && (
                <SidebarWidget
                  array={infocus}
                  title={'Infocus'}
                  link={'/category/infocus'}
                />
              )}

              {showSubscriptionBox && (
                <GlassBox className={'p-4 w-full '}>
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
