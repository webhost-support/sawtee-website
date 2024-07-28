// import Footer from '@/components/Frontend/footer';
import Footer from '@/components/Frontend/footer/footer';
import Header from '@/components/Frontend/header/header';
import { Button } from '@/components/ui/button';
import { FooterMenu, mobileMenu, socialMenu } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import { ArrowUpToLineIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MainLayout({ children, ...rest }) {
  const [visible, setVisible] = useState(false);

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
      {/* <Footer
        menu={footerMenu && footerMenu.length > 0 ? footerMenu : FooterMenu}
        socialMenu={socialMenu}
      /> */}
      <Footer
        menu={footerMenu?.length > 0 ? footerMenu : FooterMenu}
        socialMenu={socialMenu}
      />
      <Button
        className={cn(
          'scroll-to-top fixed bottom-20 right-12 z-50 h-16 p-2 flex items-center justify-center transition-all duration-300 ease-in-out rounded-full bg-bgDarker/80 hover:bg-bgDarker/90 focus:bg-bgDarker/90 text-primary dark:text-white hover:text-white backdrop-blur-md',
          visible ? 'translate-y-0' : 'translate-y-60'
        )}
        aria-label="scroll to top"
        onClick={scrollToTop}
        size="icon"
      >
        <ArrowUpToLineIcon className="scroll-icon w-6 h-6 animate-bounce" />
      </Button>
    </>
  );
}
