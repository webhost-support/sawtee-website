import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/shared/theme-provider';
import Footer from '@/components/Frontend/footer/footer';
import Header from '@/components/Frontend/header/header';
import { Button } from '@/components/ui/button';
import { mobileMenu, socialMenu } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import { useWindowWidth } from '@react-hook/window-size';
import { ArrowUpToLineIcon } from 'lucide-react';
import { register } from 'swiper/element/bundle';

import MobileMenu from '../Frontend/mobileMenu';
export default function MainLayout({ children, ...rest }) {
  const [visible, setVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const page = usePage();
  const { primaryMenu, footerMenu } = page.props;
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

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
  }, [window.scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  register();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main id="main">
        <Header
          menu={primaryMenu}
          mobileMenu={mobileMenu}
          socialLinks={socialMenu}
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />

        {mobileWidth && (
          <div
            className={cn(
              'absolute z-30 min-h-screen w-fit transform overflow-y-auto bg-popover text-secondary-foreground transition-all duration-300 ease-in-out',
              !showMobileMenu ? '-translate-x-full' : 'translate-x-0'
            )}
            id="sidebar"
          >
            <MobileMenu
              menu={mobileMenu}
              socialLinks={socialMenu}
              showSocialLinks={true}
            />
          </div>
        )}
        <div className="min-h-screen" {...rest}>
          {children}
        </div>

        <Footer menu={footerMenu} socialMenu={socialMenu} />

        <Button
          className={cn(
            'scroll-to-top group fixed bottom-20 right-12 z-50 flex h-10 w-10 items-center justify-center rounded-full p-2 backdrop-blur-md transition-all duration-300 ease-in-out',
            visible ? 'translate-y-0' : 'translate-y-60'
          )}
          aria-label="scroll to top"
          onClick={scrollToTop}
          size="icon"
        >
          <ArrowUpToLineIcon className="scroll-icon h-5 w-5" />
        </Button>
      </main>
    </ThemeProvider>
  );
}
