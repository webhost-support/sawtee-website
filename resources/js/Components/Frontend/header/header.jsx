import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MobileMenu from "../menu/mobileMenu";

import { Link } from "@inertiajs/react";

const SiteHeader = (props) => (
    <Box
        as="header"
        transition="transform ease .25s"
        width="100%"
        pos="sticky"
        top="0"
        left="0"
        bg={useColorModeValue("var(--color-bg)", "var(--color-darker)")}
        zIndex="90"
        boxShadow="md"
        justifyContent="space-between"
        {...props}
    />
);

const SiteHeaderInner = (props) => (
    <Flex
        // align="center"
        width={{ base: "auto", sm: "92%" }}
        mx="auto"
        height={"5rem"}
        maxW="1550px"
        justifyContent="space-between"
        alignItems="center"
        {...props}
    />
);

const Logo = ({ text = "SAWTEE", src }) => {
    const TextLogoColor = useColorModeValue("primary.700", "primary.300");

    if (src) {
        return (
            <Image
                src={src}
                alt="Logo Image"
                height="45"
                w="full"
                maxW="180px"
            />
        );
    } else {
        return (
            <Text
                fontSize="2xl"
                color={TextLogoColor}
                fontFamily="heading"
                textTransform="uppercase"
                fontWeight="bold"
            >
                {text}
            </Text>
        );
    }
};

const SiteLogo = ({ src, established }) => {
    // check if the logo is a url,
    // we assume, if it's a url, it points to an image, else it's a text
    return (
        <Box display="block" flexShrink="0" textAlign="center">
            <Link href="/" aria-label="logo">
                <Logo src={src} />
            </Link>
            {established && (
                <Text fontSize={".65rem"} fontWeight={"semibold"}>
                    Estd: {established}
                </Text>
            )}
        </Box>
    );
};

const Header = ({
    menu = null,
    mobileMenu = null,
    socialLinks = null,
    showSocialLinks = false,
    children,
    ...props
}) => (
    <SiteHeader {...props}>
        <SiteHeaderInner>
            <MobileMenu
                menu={mobileMenu}
                socialLinks={socialLinks}
                showSocialLinks={true}
            />
            <SiteLogo src={"/assets/logo-sawtee.svg"} established={null} />
            {children}
        </SiteHeaderInner>
    </SiteHeader>
);

export default Header;
