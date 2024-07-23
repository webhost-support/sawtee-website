import { Button } from '@/components/ui/button';
import { Box, Link, VisuallyHidden, useColorModeValue } from '@chakra-ui/react';
import { XIcon } from 'react-share';
import { FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../icons';
import { SiteMenu } from './desktopNav';

// warning for showSocialLinks and menu.length
export const SocialMenu = ({ menu, ...props }) => (
  <ul
    className="flex gap-5 ml-6 relative list-none items-center text-white"
    {...props}
  >
    {menu?.map(item => {
      const SocialIcon = icons[item.name];
      return (
        <SocialMenuItem
          key={item.name}
          label={item.name}
          link={item.link}
          icon={SocialIcon}
        />
      );
    })}
  </ul>
);

const SocialMenuItem = ({ icon, label, link, ...props }) => (
  <Link
    className="p-1 m-0 rounded-full transition-all ease-out 0.25s text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 "
    href={link}
    target="_blank"
    {...props}
  >
    <Button variant="unstyled">{icon}</Button>
    <p className="sr-only">{label}</p>
  </Link>
);

const icons = {
  twitter: XIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
};

const SocialNav = ({ menu, ...props }) => (
  <Box ml="auto" display={{ base: 'none', lg: 'block' }} {...props}>
    <SocialMenu menu={menu} />
  </Box>
);

export default SocialNav;
