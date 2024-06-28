import {
    AboutSection,
    CarouselSection,
    ExploreButton,
    FeaturedPublications,
    InfocusSection,
    OutreachSection,
    PublicationsSection,
    ReformMonitorSection,
    Title,
    VideosSection,
} from '@/Components/Frontend';
import WebsiteHead from '@/Components/Frontend/Head';
import { Newsletter } from '@/Components/Frontend/newsletter';
import { feature } from '@/Utils/data';
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import MainLayout from '../Layout/MainLayout';

const Home = ({
  infocus,
  slides,
  events,
  featuredPublications,
  publications,
  sawteeInMedia,
  newsletters,
  webinars,
  slidesResponsiveImages,
}) => {
  const AboutSectionData = [
    {
      id: '1',
      title: 'Media Fellowship',
      image_src: '/assets/Media-Fellowship-banner.webp',
      link: '/media-fellows',
    },
    {
      id: '2',
      title: "SAWTEE's Response to Covid-19",
      image_src: '/assets/COVID-19-South-Asia-and-LDCs.webp',
      link: '/category/covid',
    },
    // {
    //     id: "3",
    //     title: "Advancing LDC's Trade Interests",
    //     image_src: "/assets/advancing-ldc_upscaled.webp",
    //     link: "/advancing-ldcs’-interests-in-the-wto-strengthening-participation,-securing-priorities",
    // },
  ];

  return (
    <MainLayout>
      <WebsiteHead
        title={'Home'}
        description="Explore South Asia's dynamic journey since the 1980s, navigating global integration and economic challenges."
        image={'/assets/logo-sawtee.webp'}
      />
      <Section
        py={{ base: '5', lg: ' 5' }}
        className="carousel-section"
        paddingLeft={{ base: '24px', lg: '0' }}
        paddingRight={{ base: '24px', lg: '40px' }}
      >
        <Grid
          templateColumns={{
            base: '1fr',
            lg: 'repeat(6, 1fr)',
          }}
          id="carousel-section"
          gap={8}
          rowGap={20}
        >
          <GridItem colSpan={{ base: 1, lg: 4 }} shadow={'xl'} overflow={'hidden'}>
            <Box
              maxW="5xl"
              mx="auto"
              overflow="hidden"
              borderRadius={{
                base: 'var(--chakra-radii-2xl)',
                lg: '0 var(--chakra-radii-2xl) var(--chakra-radii-2xl) 0',
              }}
            >
              <CarouselSection
                slides={slides}
                responsiveImages={slidesResponsiveImages}
                carouselHeight={{ base: 'auto', md: '450px' }}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }} alignSelf={'center'}>
            <FeaturedPublications publications={featuredPublications} rounded="2xl" />
          </GridItem>
        </Grid>
      </Section>

      {feature && (
        <Section className="reform-section">
          <Box maxW="5xl" mx="auto">
            <ReformMonitorSection feature={feature} />
          </Box>
        </Section>
      )}

      {infocus && (
        <Section className="infocus-section">
          <Box maxW="5xl" mx="auto">
            <Title title={'In Focus'} />
            <InfocusSection data={infocus} />

            <ExploreButton size={['xs', 'sm']} text="More In Focus" px={10} mt="4" link={'/category/in-focus'} />
          </Box>
        </Section>
      )}
      <Section className="about-section">
        <AboutSection data={AboutSectionData} />
      </Section>

      {/* Add publication section here  */}
      <Section className="publications-section">
        <Box maxW={'5xl'} mx="auto">
          <Title title={'Latest in Pubications'} />
          <PublicationsSection publications={publications} />
        </Box>
      </Section>

      <Section className="outreach-section">
        <Box maxW={'5xl'} mx="auto">
          <Title title={'Outreach and Media'} />
          <OutreachSection sawteeInMedia={sawteeInMedia} events={events} />
        </Box>
      </Section>

      {/* <InfoSection /> */}
      <Section
        className="section videos-section"
        // bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
      >
        <Box maxW="5xl" mx="auto">
          <Title title={'Webinar Series'} />
          <VideosSection posts={webinars} />
        </Box>
      </Section>
      <Section
        py={{ base: '6', md: '12', lg: '16' }}
        px={{ base: '10', md: '16', lg: '20' }}
        className="subscribe-section"
      >
        <Newsletter data={newsletters} />
      </Section>
    </MainLayout>
  );
};

const Section = ({ children, title = null, bgDark, ...rest }) => {
  return (
    <Box
      as="section"
      mx="auto"
      py={{ base: 12, md: 20 }}
      px={{ base: '24px', md: '80px' }}
      bg={bgDark ? useColorModeValue('blackAlpha.50', 'var(--color-darker)') : 'unset'}
      className="section"
      {...rest}
    >
      {title && <Title title={title} />}
      {children}
    </Box>
  );
};

export default Home;
