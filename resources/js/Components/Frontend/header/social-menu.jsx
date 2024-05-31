import { Box, VisuallyHidden, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { SiteMenu } from "./desktopNav";
import { FiTwitter, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { Link } from "@inertiajs/react";

// warning for showSocialLinks and menu.length
export const SocialMenu = ({ menu, ...props }) => (
    <SiteMenu spacing="20px" ml="24px" position={{ sm: "relative" }} {...props}>
        {menu &&
            menu.map((item) => {
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
    </SiteMenu>
);

const SocialMenuItem = ({ icon, label, link, ...props }) => (
    <Box
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        transition="all ease-out 0.3s"
        _hover={{
            color: "white",
            bg: `${label}.600`,
        }}
        as="li"
        listStyleType="none"
        p="2"
        margin="0"
        rounded={"full"}
        {...props}
    >
        <Link href={link}>
            <Box as={icon} boxSize="24px" />
        </Link>
        <VisuallyHidden>{label}</VisuallyHidden>
    </Box>
);

const icons = {
    twitter: FiTwitter,
    linkedin: FiLinkedin,
    facebook: FiFacebook,
    youtube: FiYoutube,
};

const SocialNav = ({ menu, ...props }) => (
    <Box ml="auto" display={{ base: "none", lg: "block" }} {...props}>
        <SocialMenu menu={menu} />
    </Box>
);

export default SocialNav;
