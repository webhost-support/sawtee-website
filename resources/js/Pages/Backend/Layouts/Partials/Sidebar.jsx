import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    Icon,
    Show,
    Image,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";

export const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    const color = useColorModeValue("gray.700", "gray.300");

    return (
        <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            color={color}
            _hover={{
                bg: "gray.100",
                _dark: {
                    bg: "blackAlpha.300",
                },
            }}
            role="group"
            transition=".15s ease"
            fontSize={{ base: "xs", md: "sm" }}
            {...rest}
        >
            {icon && (
                <Icon
                    mx="2"
                    boxSize="4"
                    _groupHover={{
                        color: color,
                    }}
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
};

export default function Sidebar({ menu, props }) {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowY="auto"
            bg="white"
            _dark={{
                bg: "var(--color-darker)",
            }}
            border
            color="inherit"
            borderRightWidth="1px"
            w={48}
            {...props}
        >
            <Flex
                flexDir={"column"}
                gap="2"
                px="4"
                py="5"
                justify="center"
                align="center"
            >
                <Show below="lg">
                    <Image maxW="30px" src="/favicon.ico" alt="logo" />
                </Show>

                <Show above="lg">
                    <Image src="/assets/logo-sawtee.webp" alt="logo" />
                </Show>
                <Text
                    fontSize="xs"
                    color="primary.500"
                    _dark={{
                        color: "primary.200",
                    }}
                >
                    CMS
                </Text>
            </Flex>
            <Flex direction="column" as="nav" aria-label="Main Navigation">
                {menu &&
                    menu.map((item) => {
                        return (
                            <Box key={item.name} role="group">
                                <Link
                                    href={route(item.route)}
                                    preserveState={true}
                                    preserveScroll={true}
                                >
                                    <NavItem icon={item.icon}>
                                        {item.name}
                                    </NavItem>
                                </Link>
                            </Box>
                        );
                    })}
            </Flex>
        </Box>
    );
}
