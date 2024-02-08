import {
    IconButton,
    Avatar,
    Box,
    Flex,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
    Menu,
    MenuButton,
    HStack,
    MenuList,
    Show,
    MenuDivider,
    Button,
    useColorMode,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown, FiSearch } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "@inertiajs/react";
import styled from "@emotion/styled";

export default function Header({ name, image, sidebar, ...rest }) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            as="header"
            aria-label="Top Navigation"
            align="center"
            justify={{ base: "space-between", md: "end" }}
            w="full"
            px="4"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            borderBottomWidth="1px"
            color="inherit"
            h="14"
            {...rest}
        >
            <Show below="md">
                <IconButton
                    aria-label="Menu Toggle"
                    display={{
                        base: "inline-flex",
                    }}
                    onClick={sidebar.onOpen}
                    icon={<FiMenu />}
                    size="sm"
                />
            </Show>
            <HStack spacing={{ base: "2", md: "6" }}>
                <InputGroup
                    w="96"
                    display={{
                        base: "none",
                        md: "flex",
                    }}
                >
                    <InputLeftElement color="gray.500">
                        <FiSearch />
                    </InputLeftElement>
                    <Input placeholder="Search for articles..." />
                </InputGroup>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
                {/* <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                /> */}
                <Flex align="center">
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}
                        >
                            <HStack>
                                <Avatar
                                    size={"sm"}
                                    name={name}
                                    src={image}
                                    title={name}
                                />

                                <Box
                                    display={{
                                        base: "none",
                                        md: "flex",
                                    }}
                                >
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            borderColor={useColorModeValue(
                                "gray.200",
                                "gray.700"
                            )}
                            px={4}
                        >
                            <Text fontSize="sm">{name.toUpperCase()}</Text>
                            <MenuDivider />
                            <MenuLink
                                href={route("admin.profile.edit")}
                                as="button"
                                type="button"
                            >
                                Profile
                            </MenuLink>
                            <MenuLink
                                href={route("logout")}
                                method="post"
                                as="button"
                                type="button"
                            >
                                Sign out
                            </MenuLink>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
}

const MenuLink = styled(Link)`
    display: block;
    padding: 10px;
    text-align: left;
    width: 100%;

    &:hover {
        background-color: var(--chakra-colors-blackAlpha-200);
    }
`;
