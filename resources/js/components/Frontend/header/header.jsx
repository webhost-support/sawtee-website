import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Show,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import MobileMenu from '../mobileMenu';

import { cn } from '@/lib/utils';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from '@inertiajs/react';
import { SearchButton, SearchForm, SearchModal } from '../search';
import Nav from './Nav';
import DesktopNavigation from './desktopNav';
import ThemeToggle from './themeToggle';

const SiteHeader = props => (
  <header
    className="flex justify-between items-center bg-[var(--color-bg)] dark:bg-[var(--color-darker)] sticky top-0 left-0 shadow-md z-50 transition-transform ease 0.25s"
    {...props}
  />
);

const SiteHeaderInner = ({ className, children }) => (
  <div
    className={cn(
      'flex justify-between items-center py-2 px-4 min-h-[5rem] w-full mx-8',
      className
    )}
  >
    {children}
  </div>
);

const Logo = ({ text = 'SAWTEE', src }) => {
  if (src) {
    return <img src={src} alt="Logo" width="120px" />;
  }
    return (
      <P className={'font-bold font-sans uppercase text-center md:text-left'}>
        {text}
      </P>
    );
};

const SiteLogo = ({ src, established }) => {
  // check if the logo is a url,
  // we assume, if it's a url, it points to an image, else it's a text
  return (
    <div className="block shrink-0 text-center">
      <Link href="/" aria-label="logo">
        <Logo src={src} />
      </Link>
      {established && (
        <p className="text-xs font-semibold">Estd: {established}</p>
      )}
    </div>
  );
};

const Header = ({
  menu = null,
  mobileMenu = null,
  socialLinks = null,
  showSocialLinks = false,
  children,
  ...props
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const searchModal = useDisclosure();
  const [posts, setPosts] = React.useState(null);
  const [query, setQuery] = React.useState(null);
  return (
    <SiteHeader {...props}>
      <SiteHeaderInner>
        <Flex flex={{ base: 1 }} align="center" justify={'space-between'}>
          {/* <Show below="lg">
            <Flex ml={{ base: -2 }} align="center">
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
          </Show> */}
          <SiteLogo src={'/assets/logo-sawtee.svg'} established={null} />
          {/* <DesktopNavigation menu={menu} /> */}
          <Nav menu={menu} />
          <div className="flex">
            <ThemeToggle />
            <SearchButton onClick={searchModal.onOpen} />
          </div>
          <SearchModal
            isOpen={searchModal.isOpen}
            onClose={() => {
              setPosts(null);
              searchModal.onClose();
            }}
            posts={posts}
            query={query}
          >
            <SearchForm setPosts={setPosts} setQuery={setQuery} />
          </SearchModal>
        </Flex>
      </SiteHeaderInner>
      {/* <Collapse
        in={isOpen}
        animateOpacity
        transition={{ enter: { duration: 0.5 } }}
        style={{ overflow: 'scroll' }}
      >
        <MobileMenu
          menu={mobileMenu}
          socialLinks={socialLinks}
          showSocialLinks={true}
        />
      </Collapse> */}
    </SiteHeader>
  );
};

export default Header;
