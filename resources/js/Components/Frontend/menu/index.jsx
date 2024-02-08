import {
    Stack,
    Box,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Show,
    Button,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { SocialMenu } from "@/Components/Frontend/header/social-menu";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@inertiajs/react";
import InertiaChakraLink from "../styles/inertia-chakra-link";

export function MenuDrawer({ children, ...props }) {
    return (
        <Drawer preserveScrollBarGap size="sm" placement="left" {...props}>
            <DrawerOverlay />
            <DrawerContent
                bg={useColorModeValue("white", "primary.700")}
                px={8}
                max="auto"
            >
                <DrawerCloseButton
                    color={useColorModeValue("black", "white")}
                />
                {children}
            </DrawerContent>
        </Drawer>
    );
}

export const MenuItem = ({ index, children, mb, link, ...rest }) => (
    <Box as="li" listStyleType="none" mb={mb} {...rest}>
        <InertiaChakraLink
            as={Link}
            display="block"
            role="group"
            pos="relative"
            minH="40px"
            borderBottom="1px solid"
            borderColor={useColorModeValue("gray.500", "whiteAlpha.500")}
            _hover={{
                bg: `rgba(0, 0, 0, 0.1)`,
            }}
            _focus={{
                bg: `rgba(0, 0, 0, 0.4)`,
            }}
            transition="all 0.3s"
            padding="12px"
            href={link}
        >
            <Box
                as="span"
                pos="absolute"
                top="50%"
                transform="translateY(-50%)"
                fontSize="md"
            >
                {index}
            </Box>
            <Box paddingLeft={10} fontSize="1.125rem" cursor="pointer">
                {children}
            </Box>
        </InertiaChakraLink>
    </Box>
);

const Menu = ({ menu = null, showSocialLinks = false, socialLinks = null }) => {
    const mobileMenu = useDisclosure();
    const buttonRef = useRef();
    return (
        <>
            <Show below="lg">
                <Button
                    ref={buttonRef}
                    id="hamburger-menu"
                    aria-label="Menu Toggle"
                    // mr={{ base: "auto", lg: "0" }}
                    onClick={mobileMenu.onOpen}
                    ml={{ base: "12px", sm: "0" }}
                >
                    <HamburgerIcon />
                </Button>
            </Show>
            <MenuDrawer
                finalFocusRef={buttonRef}
                isOpen={mobileMenu.isOpen}
                onClose={mobileMenu.onClose}
            >
                <Stack mt="20%" spacing={6} direction="column" as="ul" ml="0">
                    {menu &&
                        menu.map((menuItem, index) => (
                            <MenuItem
                                link={menuItem.url}
                                key={menuItem.title}
                                index={`0${index + 1}`}
                            >
                                {menuItem.title}
                            </MenuItem>
                        ))}
                </Stack>

                {showSocialLinks && (
                    <Box marginTop={10} paddingY={5}>
                        <SocialMenu ml="0" menu={socialLinks} />
                    </Box>
                )}
            </MenuDrawer>
        </>
    );
};

export default Menu;
