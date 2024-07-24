import React from 'react';
import MobileMenu from '../mobileMenu';

import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import DesktopNavigation from './DesktopNavigation';
import { ModeToggle } from './mode-toggle';
import SearchModal from './searchModal';

const SiteHeader = props => (
  <header
    className="flex justify-between items-center bg-white/60 backdrop-blur-md sticky top-0 left-0 shadow-md z-40 transition-transform ease 0.25s dark:bg-black/90"
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
    return <img src={src} alt="Logo" className="w-[120px] h-full" />;
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

  return (
    <SiteHeader {...props}>
      <SiteHeaderInner>
        <div
          className="flex justify-between w-full"
          flex={{ base: 1 }}
          align="center"
          justify={'space-between'}
        >
          <SiteLogo src={'/assets/logo-sawtee.svg'} established={null} />
          {/* <DesktopNavigation menu={menu} /> */}
          <DesktopNavigation menu={menu} />
          <div className="flex gap-4">
            <ModeToggle />

            <SearchModal />
          </div>
        </div>
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
