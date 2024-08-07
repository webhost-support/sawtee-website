import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
// import MobileMenu from '../mobileMenu';
import DesktopNavigation from './DesktopNavigation';
import { ModeToggle } from './mode-toggle';
import SearchModal from './searchModal';

const SiteHeader = props => (
  <header
    className="ease 0.25s sticky left-0 top-0 z-40 flex items-center justify-between bg-zinc-50/50 py-2 shadow-md backdrop-blur-xl transition-transform dark:bg-bgDarker/95"
    {...props}
  />
);

const SiteHeaderInner = ({ className, children }) => (
  <div
    className={cn(
      'mx-8 flex min-h-[5rem] w-full items-center justify-between px-4 py-2',
      className
    )}
  >
    {children}
  </div>
);

const Logo = ({ text = 'SAWTEE', src }) => {
  if (src) {
    return <img src={src} alt="Logo" className="w-32 object-cover" />;
  }
  return (
    <P
      className={
        'text-center font-sans font-bold uppercase text-theme-500 md:text-left'
      }
    >
      {text}
    </P>
  );
};

const SiteLogo = ({ src, established }) => {
  // check if the logo is a url,
  // we assume, if it's a url, it points to an image, else it's a text
  return (
    <div className="block shrink-0 text-center">
      <Link href="/" className=" " aria-label="logo">
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
          className="flex w-full justify-between"
          flex={{ base: 1 }}
          align="center"
          justify={'space-between'}
        >
          <SiteLogo src={'/assets/logo-sawtee.svg'} established={null} />
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
