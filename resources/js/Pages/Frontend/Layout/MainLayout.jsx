import Footer from '@/components/Frontend/footer';
import Header from '@/components/Frontend/header/header';
import { FooterMenu, mobileMenu, socialMenu } from '@/lib/data';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button, Icon, ScaleFade, SlideFade } from '@chakra-ui/react';
import { usePage } from '@inertiajs/react';
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
      <ScaleFade in={url} initialScale={0.9}>
        <div id="main" className="min-h-screen" {...rest}>
          {children}
        </div>
      </ScaleFade>
      <Footer
        menu={footerMenu && footerMenu.length > 0 ? footerMenu : FooterMenu}
        socialMenu={socialMenu}
      />
      <SlideFade in={visible} offsetY="40px">
        <Box
          as={Button}
          pos={'fixed'}
          width={'50px'}
          height={'50px'}
          rounded={'full'}
          cursor={'pointer'}
          shadow={'lg'}
          right={'40px'}
          bottom={'40px'}
          zIndex={'100'}
          transform={'translateY(-60px)'}
          transition="all 0.5s ease-in-out"
          colorScheme={'primary'}
          aria-label="scroll to top"
          onClick={scrollToTop}
        >
          <Icon as={ArrowUpIcon} className="scroll-icon" />
        </Box>
      </SlideFade>
    </>
  );
}
