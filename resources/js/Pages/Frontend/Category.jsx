import { GlassBox } from '@/components/Frontend';
import WebsiteHead from '@/components/Frontend/Head';
import Pagination from '@/components/Frontend/Pagination';
import SidebarWidget from '@/components/Frontend/sidebarWidget';
import SubscriptionCard from '@/components/Frontend/subscriptionCard';
import { Grid, GridItem, VStack } from '@chakra-ui/react';
import MainLayout from '../../components/Layouts/MainLayout';
import PageLayout from '../../components/Layouts/PageLayout';
import BlogArchive from './Archives/BlogArchive';
import CovidArchive from './Archives/CovidArchive';
import DefaultArchive from './Archives/DefaultArchive';
import NewsletterArchive from './Archives/NewsletterArchive';
import ResearchArchive from './Archives/ResearchArchive';
import SawteeInMediaArchive from './Archives/SawteeInMediaArchive';

export default function Category({
  category,
  posts,
  infocus,
  sawteeInMedia,
  events,
  showSubscriptionBox = true,
  showFacebookEmbed = true,
  featured_image,
  srcSet,
}) {
  const isEvent = category.slug === 'featured-events';
  const isInFocus = category.slug === 'infocus';
  const isMedia = category.slug === 'sawtee-in-media';
  const isNewsletter = category.slug === 'newsletters';
  const isBlog = category.slug === 'blog';
  const isCovid = category.slug === 'covid';
  const isResearch = category.slug === 'research';
  const isDefault =
    !isNewsletter && !isBlog && !isResearch && !isCovid && !isMedia;

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
      >
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0"
          nonce="fqoExb8K"
        />
      </WebsiteHead>
      <PageLayout
        featured_image={featured_image}
        srcSet={srcSet}
        title={category.name}
        showBackgroundPattern={false}
      >
        <div className="grid  md:grid-cols-2 lg:grid-cols-6 gap-12 px-8 md:px-10 py-8 md:py-20 mx-auto">
          <section className="flex flex-col items-center gap-12 col-span-1 lg:col-span-4 archive-list">
            {isDefault && (
              <DefaultArchive posts={posts.data} showFallbackImage={isEvent} />
            )}
            {isCovid && <CovidArchive posts={posts.data} />}

            {isResearch && <ResearchArchive posts={posts} />}

            {isBlog && <BlogArchive posts={posts.data} />}

            {isNewsletter && <NewsletterArchive posts={posts.data} />}

            {isMedia && <SawteeInMediaArchive posts={posts.data} />}

            {!isResearch && (
              <Pagination
                links={posts.links}
                currentPage={posts.current_page}
                totalPages={posts.last_page}
                nextPage={posts.next_page_url}
                prevPage={posts.prev_page_url}
                width="full"
              />
            )}
          </section>
          <aside className="sidebar col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-12">
              {!isMedia && sawteeInMedia && (
                <SidebarWidget
                  array={sawteeInMedia}
                  title={'Sawtee in Media'}
                  link={'/category/sawtee-in-media'}
                />
              )}
              {isInFocus && events && (
                <SidebarWidget
                  array={events}
                  title={'Featured Events'}
                  link={'/category/featured-events'}
                />
              )}
              {isMedia && events && (
                <SidebarWidget
                  array={events}
                  title={'Featured Events'}
                  link={'/category/featured-events'}
                />
              )}
              {!isInFocus && infocus && (
                <SidebarWidget
                  array={infocus}
                  link={'/category/in-focus'}
                  title={'In Focus'}
                />
              )}
              {showFacebookEmbed && (
                <GlassBox className={'w-full text-center'}>
                  <div id="fb-root" />
                  <div
                    className="fb-page"
                    data-href="https://www.facebook.com/sawteenp/"
                    data-tabs="timeline"
                    data-width=""
                    data-height=""
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false"
                  >
                    <blockquote
                      cite="https://www.facebook.com/sawteenp/"
                      className="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/sawteenp/">
                        South Asia Watch on Trade, Economics and Environment
                        (SAWTEE)
                      </a>
                    </blockquote>
                  </div>
                </GlassBox>
              )}

              {showSubscriptionBox && (
                <GlassBox className={'p-4 w-full '}>
                  <SubscriptionCard />
                </GlassBox>
              )}
            </div>
          </aside>
        </div>
      </PageLayout>
    </MainLayout>
  );
}
