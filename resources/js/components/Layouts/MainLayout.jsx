// import Footer from '@/components/Frontend/footer';
import Footer from '@/components/Frontend/footer/footer';
import Header from '@/components/Frontend/header/header';
import { Button } from '@/components/ui/button';
import { FooterMenu, mobileMenu, socialMenu } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import { ArrowUpToLineIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MapModel } from '../Frontend/MapModal';

export default function MainLayout({ children, ...rest }) {
  const [visible, setVisible] = useState(false);
  const [mapModal, setMapModal] = useState(false);

  const page = usePage();
  const { primaryMenu, footerMenu } = page.props;
  const url = page.url;
  const toggleVisibility = () => {
    if (window.scrollY > 570) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header
        menu={primaryMenu}
        mobileMenu={mobileMenu}
        socialLinks={socialMenu}
      />
      <main id="main" className="min-h-screen" {...rest}>
        {children}
      </main>

      <Footer
        menu={footerMenu?.length > 0 ? footerMenu : FooterMenu}
        socialMenu={socialMenu}
        setMapModal={setMapModal}
      />
      <MapModel isOpen={mapModal} onOpenChange={setMapModal} />

      <Button
        className={cn(
          'scroll-to-top fixed bottom-20 right-12 z-50 flex h-16 items-center justify-center rounded-full bg-theme-100 p-2 text-theme-800 backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-theme-50 hover:text-theme-700 focus:bg-theme-200 focus:text-theme-700',
          visible ? 'translate-y-0' : 'translate-y-60'
        )}
        aria-label="scroll to top"
        onClick={scrollToTop}
        size="icon"
      >
        <ArrowUpToLineIcon className="scroll-icon h-6 w-6 animate-bounce" />
      </Button>
    </>
  );
}
