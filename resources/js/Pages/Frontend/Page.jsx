import WebsiteHead from '@/Components/Frontend/Head';
import MainLayout from './Layout/MainLayout';
import { PageLayout } from './Layout/PageLayout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import DefaultPage from './Pages/DefaultPage';
import MediaFellows from './Pages/MediaFellows';
import OurWork from './Pages/OurWork';
import ReformMonitor from './Pages/ReformMonitor';

export default function Page({
  page,
  featured_image,
  srcSet,
  themes,
  sections,
}) {
  return (
    <>
      <WebsiteHead
        title={page.meta_title ? page.meta_title : page.name}
        description={page.meta_description}
        image={
          featured_image
            ? featured_image.original_url
            : '/assets/logo-sawtee.webp'
        }
      />

      <MainLayout>
        {page.slug !== 'reform-monitoring-platform' ? (
          <PageLayout
            featured_image={featured_image}
            srcSet={srcSet}
            title={page.name}
            showBackgroundPattern={false}
          >
            <PageContent page={page} sections={sections} themes={themes} />
          </PageLayout>
        ) : (
          <PageContent page={page} />
        )}
      </MainLayout>
    </>
  );
}

const PageContent = ({ page, sections, themes }) => {
  const { slug, content, pageData } = page;
  switch (slug) {
    case 'our-work':
      return <OurWork themes={themes} sections={sections} content={content} />;

    case 'about':
      return (
        <About
          sections={sections}
          content={content}
          pageData={pageData}
          size={'xl'}
        />
      );

    case 'contact':
      return <Contact content={content} pageData={pageData} />;

    case 'media-fellows':
      return <MediaFellows content={content} pageData={pageData} />;

    case 'reform-monitoring-platform':
      return <ReformMonitor content={content} />;

    default:
      return <DefaultPage sections={sections} content={content} size={'md'} />;
  }
};
