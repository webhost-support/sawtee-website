import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    Icon,
    Image,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";

export const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    const color = useColorModeValue("gray.600", "gray.300");
    return (
        <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            color="inherit"
            _dark={{
                color: "gray.400",
            }}
            _hover={{
                bg: "gray.100",
                _dark: {
                    bg: "gray.900",
                },
                color: "gray.900",
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
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

export default function DrawerMenu({ menu, props }) {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            border
            color="inherit"
            borderRightWidth="1px"
            w="xs"
            {...props}
        >
            <Flex flexDir={"column"} px="4" py="5" align="center">
                <Image src="/assets/logo-sawtee.webp" alt="logo" />
                <Text

                    fontSize="2xl"
                    ml="2"
                    color="brand.500"
                    _dark={{
                        color: "white",
                    }}
                    fontWeight="semibold"
                >
                    SAWTEE BLOG
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
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
