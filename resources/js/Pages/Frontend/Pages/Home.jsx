import {
    ExploreButton,
    FeaturedPublications,
    InfocusSection,
    OutreachSection,
    PublicationsSection,
    Title,
} from '@/components/Frontend';
import FullWidthCarousel from '@/components/Frontend/FullWidthCarousel';
import WebsiteHead from '@/components/Frontend/Head';
import NewsletterCallout from '@/components/Frontend/NewsletterCallout';
import Particles from '@/components/Frontend/Particles';
import SimpleList from '@/components/Frontend/SimpleList';
import VideoCarousel from '@/components/Frontend/VideoCarousel';
import FeaturedSection from '@/components/Frontend/feature';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
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
      description:
        'The Reform Monitoring Platform intends to strengthen monitoring and evaluation of the policy reform process through an online reform tracking system to increase transparency, inclusiveness, and accountability of trade and investment related reforms.',
    },
    {
      id: '2',
      title: 'Media Fellowship',
      image_src: '/assets/Media-Fellowship-banner.webp',
      link: '/media-fellows',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est feugiat, venenatis eros at, vestibulum arcu. Donec efficitur efficitur nisi, nec faucibus purus. Vivamus bibendum leo ac justo pellentesque accumsan. Ut cursus nisl nulla, ut hendrerit .',
    },
    {
      id: '3',
      title: "SAWTEE's Response to Covid-19",
      image_src: '/assets/COVID-19-South-Asia-and-LDCs.webp',
      link: '/category/covid',
      description:
        'Donec ipsum augue, condimentum pulvinar consequat et, rhoncus sit amet ipsum. Nullam id ante dictum sapien condimentum venenatis nec eget lorem. Etiam ac cursus ipsum, eget auctor velit. Morbi non enim non nunc dignissim rutrum. Vestibulum eu enim eget .',
    },

    // {
    //   id: '4',
    //   title: "Advancing LDC's Trade Interests",
    //   image_src: '/assets/advancing-ldc_upscaled.webp',
    //   link: '/advancing-ldcs’-interests-in-the-wto-strengthening-participation,-securing-priorities',
    //   description: ""
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
        py={4}
        className="carousel-section px-6 lg:py-4 lg:pl-0 lg:pr-10"
      >
        <div
          className="grid grid-cols-1 gap-10 lg:grid-cols-6"
          id="carousel-section"
        >
          <div className="overflow-hidden rounded-xl shadow-xl lg:col-span-4 lg:rounded-[0_1rem_1rem_0]">
            <div className="mx-auto w-full max-w-5xl">
              {slides && (
                <FullWidthCarousel
                  slides={slides}
                  responsiveImages={slidesResponsiveImages}
                />
              )}
            </div>
          </div>
          <div className="self-center lg:col-span-2">
            <FeaturedPublications publications={featuredPublications} />
          </div>
        </div>
      </Section>

      {infocus && (
        <Section className="infocus-section" dark>
          <div className="mx-auto max-w-5xl">
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
          <Particles className="pointer-events-none absolute inset-0" />
          <div className="max-w-9xl relative mx-auto">
            <FeaturedSection features={features} />
          </div>
        </Section>
      )}

      {/* Add publication section here  */}
      <Section className="publications-section" dark>
        <div className="mx-auto max-w-5xl">
          <Title title={'Latest in Pubications'} />
          <PublicationsSection publications={publications} />
          <ExploreButton
            className="mt-8"
            text="More In Publications"
            link={'/category/publications'}
          />
        </div>
      </Section>

      <Section className="outreach-section">
        <div className="mx-auto max-w-5xl">
          <Title title={'Outreach and Media'} />
          <OutreachSection sawteeInMedia={sawteeInMedia} events={events} />
        </div>
      </Section>

      <Section className="section videos-section" dark>
        <div className="mx-auto max-w-5xl">
          <Title title={'Webinar Series'} />
          <VideoCarousel posts={webinars} />
          <ExploreButton
            className="mt-8"
            text="More In Webinar Series"
            link={'/category/webinar-series'}
          />
        </div>
      </Section>
      <Section className="scroll-container">
        <div className="mx-auto max-w-5xl">
          <Title title={'Newsletters'} />
          <SimpleList heading={'e-newsletters'} my="10">
            {newsletters.map(item => {
              const file = item.media.filter(
                m => m.collection_name === 'post-files'
              )[0];
              return (
                <li className="mb-4" key={item.id}>
                  <Link
                    className="md:text-md text-sm leading-5 text-secondary-foreground underline underline-offset-2 group-hover:text-primary/80 group-hover:underline-offset-4 dark:group-hover:text-secondary-foreground/80"
                    textDecor="underline"
                    textUnderlineOffset="3px"
                    href={file?.original_url}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </SimpleList>
        </div>

        <ExploreButton
          size="sm"
          text="More newsletters"
          link={'/category/newsletters'}
        />
      </Section>
      <Section
        py={{ base: '6', md: '12', lg: '16' }}
        px={{ base: '10', md: '16', lg: '20' }}
        className="subscribe-section"
      >
        <NewsletterCallout />
      </Section>
    </MainLayout>
  );
};

const Section = ({ children, title = null, className, dark }) => {
  return (
    <section
      className={cn(
        'mx-auto w-full px-6 py-12 md:px-20 md:py-20',
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
