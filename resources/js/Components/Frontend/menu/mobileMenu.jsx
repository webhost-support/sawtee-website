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
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { SocialMenu } from "@/Components/Frontend/header/social-menu";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@inertiajs/react";
import InertiaChakraLink from "../styles/inertia-chakra-link";
import { BiChevronDown } from "react-icons/bi";

export function MenuDrawer({ children, ...props }) {
    return (
        <Drawer preserveScrollBarGap size="xs" placement="left" {...props}>
            <DrawerOverlay />
            <DrawerContent
                bg={useColorModeValue("whiteAlpha.700", "blackAlpha.700")}
                px={4}
                max="auto"
                backdropFilter={"blur(5px)"}
            >
                <DrawerCloseButton
                    color={useColorModeValue("black", "white")}
                />
                {children}
            </DrawerContent>
        </Drawer>
    );
}

const MenuLink = ({ title, url, onClose, index, ...rest }) => {
    return (
        <InertiaChakraLink
            as={Link}
            href={url}
            display="block"
            role="group"
            pos="relative"
            _hover={{
                bg: `rgba(0, 0, 0, 0.8)`,
            }}
            _focus={{
                bg: `rgba(0, 0, 0, 0.8)`,
            }}
            transition="all 0.3s"
            padding="10px"
            onClick={() => onClose()}
            fontSize={"md"}
            {...rest}
        >
            <MenuItem
                bg={"transparent"}
                _hover={{
                    color: "primary.700",
                }}
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
                <Text paddingLeft={10}>{title}</Text>
            </MenuItem>
        </InertiaChakraLink>
    );
};

const DropDownMenu = ({ menuItem, index, padding = "10px", size = "sm" }) => {
    return (
        <Box
            as="li"
            listStyleType="none"
            borderBottom="1px solid"
            borderColor={useColorModeValue("gray.500", "whiteAlpha.500")}
        >
            <Menu autoSelect={false} isLazy>
                {({ isOpen, onClose }) => (
                    <Flex
                        alignItems="center"
                        justify={"space-between"}
                        fontWeight="bold"
                        w="full"
                        gap="10"
                    >
                        <MenuLink
                            title={menuItem.title}
                            url={menuItem.url}
                            onClose={onClose}
                            index={`0${index + 1}`}
                            p={padding}
                        />
                        {menuItem.children && (
                            <MenuButton
                                _hover={{ color: "primary.700" }}
                                size={size}
                                flexGrow={1}
                            >
                                <Icon
                                    as={BiChevronDown}
                                    h={5}
                                    w={5}
                                    ml={1}
                                    transition="all .25s ease-in-out"
                                    transform={isOpen ? "rotate(180deg)" : ""}
                                />
                            </MenuButton>
                        )}
                        {menuItem.children && (
                            <MenuList
                                bg={useColorModeValue(
                                    "whiteAlpha.600",
                                    "blackAlpha.600"
                                )}
                                backdropFilter={"blur(5px)"}
                                p={2}
                                ml={"20px"}
                                border="2px solid"
                                borderColor={useColorModeValue(
                                    "gray.700",
                                    "gray.100"
                                )}
                                boxShadow="4px 4px 0"
                            >
                                {menuItem.children.map((item, index) => (
                                    <React.Fragment key={`0${index + 1}`}>
                                        <DropDownMenu
                                            menuItem={item}
                                            index={index}
                                            padding={"5px"}
                                            size={"xs"}
                                        />
                                    </React.Fragment>
                                ))}
                            </MenuList>
                        )}
                    </Flex>
                )}
            </Menu>
        </Box>
    );
};

// Main component that receives the data
const MenuItemsList = ({ menuItems }) => {
    return (
        <Stack mt="20%" spacing={6} direction="column" as="ul" ml="0">
            {menuItems.map((menuItem, index) => (
                <React.Fragment key={`0${index + 1}`}>
                    <DropDownMenu menuItem={menuItem} index={index} />
                </React.Fragment>
            ))}
        </Stack>
    );
};

const MobileMenu = ({
    menu = null,
    showSocialLinks = false,
    socialLinks = null,
}) => {
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
                {menu && <MenuItemsList menuItems={menu} />}
                {showSocialLinks && (
                    <Box marginTop={10} mx="auto" paddingY={5}>
                        <SocialMenu ml="0" menu={socialLinks} />
                    </Box>
                )}
            </MenuDrawer>
        </>
    );
};

export default MobileMenu;
