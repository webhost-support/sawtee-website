import {
  CarouselSection,
  ExploreButton,
  FeaturedPublications,
  InfocusSection,
  OutreachSection,
  PublicationsSection,
  Title,
} from '@/components/Frontend';
import WebsiteHead from '@/components/Frontend/Head';
import NewsletterCallout from '@/components/Frontend/NewsletterCallout';
import VideoCarousel from '@/components/Frontend/VideoCarousel';
import FeaturedSection from '@/components/Frontend/feature';
import { cn } from '@/lib/utils';
import MainLayout from '../../../components/Layouts/MainLayout';

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
  const features = [
    {
      id: '1',
      title: 'Reform Monitoring Platform',
      image_src: '/assets/Policy-Reform-Banner-green-sized.webp',
      link: '/reform-monitoring-platform',
    },
    {
      id: '2',
      title: 'Media Fellowship',
      image_src: '/assets/Media-Fellowship-banner.webp',
      link: '/media-fellows',
    },
    {
      id: '3',
      title: "SAWTEE's Response to Covid-19",
      image_src: '/assets/COVID-19-South-Asia-and-LDCs.webp',
      link: '/category/covid',
    },

    {
      id: '4',
      title: "Advancing LDC's Trade Interests",
      image_src: '/assets/advancing-ldc_upscaled.webp',
      link: '/advancing-ldcs’-interests-in-the-wto-strengthening-participation,-securing-priorities',
    },
  ];


  return (
    <MainLayout>
      <WebsiteHead
        title={'Home'}
        description="Explore South Asia's dynamic journey since the 1980s, navigating global integration and economic challenges."
        image={'/assets/logo-sawtee.webp'}
      />
      <Section
        py={4}
        className="carousel-section lg:py-4 px-6 lg:pl-0 lg:pr-10"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-6 gap-10 "
          id="carousel-section"
        >
          <div className="lg:col-span-4 overflow-hidden shadow-xl rounded-[0_1rem_1rem_0]">
            <div className="w-full max-w-5xl mx-auto h-auto aspect-video">
              {slides && (
                <CarouselSection
                  slides={slides}
                  responsiveImages={slidesResponsiveImages}
                />
              )}
            </div>
          </div>
          <div className="lg:col-span-2 self-center">
            <FeaturedPublications publications={featuredPublications} />
          </div>
        </div>
      </Section>

      {infocus && (
        <Section className="infocus-section" dark>
          <div className="max-w-5xl mx-auto">
            <Title title={'In Focus'} />
            <InfocusSection data={infocus} />
            <ExploreButton
              size={['xs', 'sm']}
              text="More In Focus"
              px={10}
              mt="4"
              link={'/category/in-focus'}
            />
          </div>
        </Section>
      )}

      {features && (
        <Section className="reform-section">
          <div className="max-w-7xl mx-auto">
            <FeaturedSection features={features} />
          </div>
        </Section>
      )}

      {/* Add publication section here  */}
      <Section className="publications-section" dark>
        <div className="max-w-5xl mx-auto">
          <Title title={'Latest in Pubications'} />
          <PublicationsSection publications={publications} />
        </div>
      </Section>

      <Section className="outreach-section">
        <div className="max-w-5xl mx-auto">
          <Title title={'Outreach and Media'} />
          <OutreachSection sawteeInMedia={sawteeInMedia} events={events} />
        </div>
      </Section>

      <Section className="section videos-section" dark>
        <div className="max-w-5xl mx-auto">
          <Title title={'Webinar Series'} />
          <VideoCarousel posts={webinars} />
        </div>
      </Section>
      <Section
        py={{ base: '6', md: '12', lg: '16' }}
        px={{ base: '10', md: '16', lg: '20' }}
        className="subscribe-section"
      >
        {/* <Newsletter data={newsletters} /> */}
        <NewsletterCallout />
      </Section>
    </MainLayout>
  );
};

const Section = ({ children, title = null, className, dark }) => {
  return (
    <section
      className={cn(
        'w-full px-6 md:px-20 py-12 md:py-20 mx-auto',
        dark ? 'bg-bgDarker' : 'bg-background',
        className
      )}
    >
      {title && <Title title={title} />}
      {children}
    </section>
  );
};

export default Home;
