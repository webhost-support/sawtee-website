import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MobileMenu from "../menu";

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
    const TextLogoColor = useColorModeValue("primary.700", "white");

    if (src) {
        return <Box as="img" src={src} alt="Logo Image" width="120px" />;
    } else {
        return (
            <Box
                fontSize="2xl"
                color={TextLogoColor}
                fontFamily="heading"
                textTransform="uppercase"
                fontWeight="bold"
            >
                {text}
            </Box>
        );
    }
};

const SiteLogo = ({ src }) => {
    // check if the logo is a url,
    // we assume, if it's a url, it points to an image, else it's a text
    return (
        <Box display="block" flexShrink="0" textAlign="center">
            <Link href="/">
                <Logo src={src} />
            </Link>
            <Text fontSize={".65rem"} fontWeight={"semibold"}>
                Estd: 1994
            </Text>
        </Box>
    );
};

const Header = ({ menu = null, children, ...props }) => (
    <SiteHeader {...props}>
        <SiteHeaderInner>
            <MobileMenu menu={menu} />
            <SiteLogo src={"/assets/logo-sawtee.webp"} />
            {children}
        </SiteHeaderInner>
    </SiteHeader>
);

export default Header;
