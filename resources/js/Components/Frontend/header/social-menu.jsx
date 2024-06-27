import { Box, Link, VisuallyHidden, useColorModeValue } from '@chakra-ui/react';
import { FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../icons';
import { SiteMenu } from './desktopNav';

// warning for showSocialLinks and menu.length
export const SocialMenu = ({ menu, ...props }) => (
  <SiteMenu spacing="20px" ml="24px" position={{ sm: 'relative' }} {...props}>
    {menu &&
      menu.map(item => {
        const SocialIcon = icons[item.name];
        return <SocialMenuItem key={item.name} label={item.name} link={item.link} icon={SocialIcon} />;
      })}
  </SiteMenu>
);

const SocialMenuItem = ({ icon, label, link, ...props }) => (
  <Box
    as={Link}
    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
    transition="all ease-out 0.3s"
    _hover={{
      color: 'white',
      bg: `${label}.600`,
    }}
    listStyleType="none"
    p="1"
    margin="0"
    rounded={'full'}
    href={link}
    target="_blank"
    {...props}
  >
    <Box as={icon} boxSize="6" />
    <VisuallyHidden>{label}</VisuallyHidden>
  </Box>
);

const icons = {
  twitter: TwitterIcon,
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
