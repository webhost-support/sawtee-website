import WebsiteHead from '@/Components/Frontend/Head';
import MainLayout from './Layout/MainLayout';
import { PageLayout } from './Layout/PageLayout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import DefaultPage from './Pages/DefaultPage';
import MediaFellows from './Pages/MediaFellows';
import OurWork from './Pages/OurWork';
import ReformMonitor from './Pages/ReformMonitor';

export default function Page({ page, featured_image, srcSet, themes = null, sections }) {
  const { name, content, meta_description, meta_title, slug } = page;
  return (
    <>
      <WebsiteHead
        title={meta_title ? meta_title : name}
        description={meta_description}
        image={featured_image ? featured_image.original_url : '/assets/logo-sawtee.webp'}
      />

      <MainLayout>
        {slug !== 'reform-monitoring-platform' ? (
          <PageLayout featured_image={featured_image} srcSet={srcSet} title={name} showBackgroundPattern={false}>
            <PageContent slug={slug} themes={themes} sections={sections} content={content} />
          </PageLayout>
        ) : (
          <PageContent slug={slug} themes={themes} sections={sections} content={content} />
        )}
      </MainLayout>
    </>
  );
}

const PageContent = ({ slug, themes, sections, content }) => {
  switch (slug) {
    case 'our-work':
      return <OurWork themes={themes} sections={sections} content={content} />;

    case 'about':
      return <About sections={sections} content={content} size={'xl'} />;

    case 'contact':
      return <Contact content={content} />;

    case 'media-fellows':
      return <MediaFellows content={content} />;

    case 'reform-monitoring-platform':
      return <ReformMonitor content={content} />;

    default:
      return (
        <DefaultPage
          sections={sections}
          content={content}
          size={slug === 'reform-monitoring-platform' ? 'full' : 'md'}
        />
      );
  }
};
