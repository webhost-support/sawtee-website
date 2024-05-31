import {
    Box,
    Stack,
    Grid,
    Button,
    IconButton,
    useDisclosure,
    GridItem,
    Text,
    Flex,
    Avatar,
    SimpleGrid,
    VStack,
    Divider,
    useOutsideClick,
    Popover,
    PopoverTrigger,
    Icon,
    PopoverContent,
    useColorModeValue,
} from "@chakra-ui/react";
import { StyledChakraLink } from "@/Components/Frontend/index";
import { Link, usePage } from "@inertiajs/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion } from "framer-motion";
import MenuLink from "../styles/inertia-chakra-link";
import React, { Fragment } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const StyledLink = ({ children, ...rest }) => {
    return (
        <StyledChakraLink as={Link} fontSize={"md"} {...rest}>
            {children}
        </StyledChakraLink>
    );
};

const MegaMenuWrapperVariants = {
    open: {
        opacity: 1,
        y: 0,
    },
    closed: {
        opacity: 0,
        y: "-50px",
    },
};

const ListVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const ListContainerVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const MenuItem = ({
    children,
    title,
    slug,
    onOpen,
    isOpen,
    onClose,
    showIcon,
    megamenuref,
    ...rest
}) => {
    const { url } = usePage();
    const active = url === slug;
    useOutsideClick({
        ref: megamenuref,
        handler: onClose,
    });
    return (
        <li>
            <Button
                alignItems="center"
                variant={active ? "solid" : "ghost"}
                colorScheme={active ? "primary" : "gray"}
                size="sm"
                fontFamily={"heading"}
                fontWeight={"normal"}
                fontSize={"md"}
                rounded="md"
                {...rest}
            >
                <MenuLink
                    as={Link}
                    className={active ? "active " : ""}
                    _hover={{ textDecor: "none" }}
                    href={slug}
                >
                    {title}
                </MenuLink>
                {showIcon && (
                    <Icon
                        aria-label={title}
                        ml="3"
                        w={6}
                        h={6}
                        as={isOpen ? HiChevronUp : HiChevronDown}
                    />
                )}
            </Button>
        </li>
    );
};

const ExpertCard = ({ expert }) => {
    const image = expert.media[0].original_url;
    return (
        <Flex
            shadow="lg"
            rounded="lg"
            bg={"whiteAlpha.200"}
            _dark={{
                bg: "blackAlpha.400",
            }}
            direction="column"
            justifyContent="space-between"
            h={48}
            py={3}
            backdropFilter={"blur(3px)"}
            maxW="40"
        >
            <Box
                borderRadius="lg"
                p={3}
                display="flex"
                alignItems="center"
                justifyContent={"center"}
            >
                <Avatar
                    src={image}
                    name={expert.name}
                    borderRadius="full"
                    boxSize="75px"
                />
            </Box>
            <Box p={2} textAlign="center" mt={3} color="gray.200">
                <Text fontSize="sm" fontWeight="semibold">
                    {expert.name}
                </Text>

                <Text fontSize="xs" fontWeight="normal">
                    {expert.designation}
                </Text>
            </Box>
        </Flex>
    );
};

export const SiteMenu = ({ ...styles }) => (
    <Stack
        m="0"
        spacing="20px"
        as="ul"
        listStyleType="none"
        alignItems="center"
        direction="row"
        color="white"
        {...styles}
    />
);

const AboutMegaMenu = ({
    item,
    experts,
    introText,
    introImage,
    isOpen,
    ...rest
}) => {
    return (
        <Box bg={"primary.700"} mx="auto" px={4} py={10} pb={20}>
            <Grid
                templateColumns={{
                    base: 1,
                    md: "repeat(5, 1fr)",
                    xl: "repeat(7, 1fr)",
                }}
                templateRows={{
                    base: "auto",
                    md: "repeat(2, minmax(auto, 250px))",
                    xl: "auto",
                }}
                pos="relative"
                gap={6}
                px={6}
                m="0 auto"
                {...rest}
            >
                <GridItem colSpan={1} rowSpan={1} placeSelf="center">
                    <Box
                        as={motion.ul}
                        variants={ListContainerVariants}
                        animate={isOpen ? "open" : "closed"}
                    >
                        {item.children.map((child) => {
                            return (
                                <Box
                                    key={child.title}
                                    as={motion.li}
                                    variants={ListVariants}
                                    fontSize={{ md: "sm", xl: "md" }}
                                    fontWeight="medium"
                                    position="relative"
                                    cursor="pointer"
                                    pb={{ md: 3, xl: 6 }}
                                    color={"gray.200"}
                                >
                                    <MenuLink as={Link} href={child.url}>
                                        {child.title}
                                    </MenuLink>
                                </Box>
                            );
                        })}
                    </Box>
                </GridItem>
                <GridItem
                    colSpan={{ md: 4, xl: 3 }}
                    rowSpan={1}
                    width="full"
                    placeSelf="center"
                >
                    <Box
                        position="relative"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        overflow="hidden"
                        rounded="xl"
                        backgroundImage={`url(${introImage})`}
                        backgroundSize="cover"
                        bgRepeat={"no-repeat"}
                        bgPos={"center center"}
                        px={6}
                        py={{ md: 12, xl: 16 }}
                        _after={{
                            content: "''",
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            backdropFilter: "blur(3px)",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            backgroundBlendMode: "multiply",
                        }}
                    >
                        <Text
                            fontSize={"sm"}
                            color={"gray.200"}
                            m="0"
                            alignSelf={"center"}
                            zIndex={1}
                            px={6}
                            lineHeight="taller"
                        >
                            {introText}
                        </Text>
                    </Box>
                </GridItem>
                <GridItem
                    colSpan={{ md: 5, xl: 3 }}
                    rowSpan={{ md: 1, xl: 1 }}
                    gap={4}
                >
                    <Text fontSize="xl" pb={4} fontWeight={"semibold"}>
                        Our Experts
                    </Text>
                    <SimpleGrid columns={{ base: 6, md: 6, xl: 3 }} gap={2}>
                        {experts &&
                            experts.length > 0 &&
                            experts.map((expert) => {
                                return (
                                    <Box key={expert.name} colSpan={1}>
                                        <ExpertCard expert={expert} />
                                    </Box>
                                );
                            })}
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Box>
    );
};

const OurWorkMegaMenu = ({ item, isOpen, ...rest }) => {
    return (
        <Box
            bg={"primary.700"}
            pos="relative"
            gap="16"
            backdropFilter="blur(5px) saturate(180%)"
            px={8}
            py={10}
            display="flex"
            flexDirection={"column"}
            {...rest}
        >
            <VStack spacing={10} maxW="90%" m="0 auto">
                <Text fontSize="2xl" fontFamily={"body"}>
                    <MenuLink as={Link} href={item.children[0].url}>
                        {item.children[0].title}
                    </MenuLink>
                </Text>
                <SimpleGrid
                    as={motion.ul}
                    columns={3}
                    spacing={6}
                    placeItems="center"
                    variants={ListContainerVariants}
                    animate={isOpen ? "open" : "closed"}
                >
                    {item.children[0].children.map((grandChild) => {
                        return (
                            <Text
                                key={grandChild.title}
                                as={motion.li}
                                variants={ListVariants}
                            >
                                <MenuLink as={Link} href={grandChild.url}>
                                    {grandChild.title}
                                </MenuLink>
                            </Text>
                        );
                    })}
                </SimpleGrid>
            </VStack>

            <Divider borderBottomWidth="2px" />
            <SimpleGrid columns={2} spacing={6}>
                {item.children.map((grandChildren, idx) => {
                    if (idx !== 0) {
                        return (
                            <VStack spacing={10} key={grandChildren.title}>
                                <MenuLink as={Link} href={grandChildren.url}>
                                    <Text fontSize="2xl" fontWeight="bold">
                                        {grandChildren.title}
                                    </Text>
                                </MenuLink>
                                <SimpleGrid columns={2} spacing={6}>
                                    {grandChildren.children &&
                                        grandChildren.children.map((child) => {
                                            return (
                                                <Box
                                                    key={child.title}
                                                    as={motion.li}
                                                    variants={ListVariants}
                                                    fontSize={{
                                                        md: "sm",
                                                        xl: "md",
                                                    }}
                                                    fontWeight="medium"
                                                    position="relative"
                                                    cursor="pointer"
                                                    pb={{ md: 3, xl: 6 }}
                                                    color={"gray.200"}
                                                >
                                                    <MenuLink
                                                        as={Link}
                                                        href={child.url}
                                                    >
                                                        {child.title}
                                                    </MenuLink>
                                                </Box>
                                            );
                                        })}
                                </SimpleGrid>
                            </VStack>
                        );
                    }
                })}
            </SimpleGrid>
        </Box>
    );
};

const MegaMenu = ({ item, isOpen }) => {
    // const li = useColorModeValue("rgb(8, 126, 164,1)", "whiteAlpha.800");

    if (item.title === "Know Us") {
        return (
            <AboutMegaMenu
                item={item}
                experts={item.experts}
                introText={item.introText}
                introImage={item.introImage}
                isOpen={isOpen}
            />
        );
    } else if (item.title === "Our Work") {
        return <OurWorkMegaMenu item={item} isOpen={isOpen} />;
    }
};

const SiteMenuItem = ({
    item,
    isOpen,
    onOpen,
    onClose,
    megamenuref,
    ...rest
}) => {
    return (
        <Box role="group" {...rest}>
            <MenuItem
                aria-label={item.title}
                title={item.title}
                slug={item.url}
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                showIcon={item.children}
                megamenuref={megamenuref}
            />
        </Box>
    );
};

const DesktopSubNav = ({ title, url }) => {
    return (
        <Box
            as="a"
            href={url}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        {title}
                    </Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"pink.400"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Box>
    );
};

const DesktopNavigation = ({ menu, ...rest }) => {
    const ref = React.useRef();
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
    return (
        <Box
            as="nav"
            width="100%"
            display={{ base: "none", lg: "flex" }}
            zIndex={"999"}
            {...rest}
        >
            <SiteMenu ml="20px">
                {menu &&
                    menu.map((navItem) => {
                        const { isOpen, onOpen, onClose } = useDisclosure();
                        return (
                            <Popover
                                trigger={"hover"}
                                placement={"bottom-start"}
                            >
                                <PopoverTrigger>
                                    <Box key={navItem.title}>
                                        <SiteMenuItem
                                            item={navItem}
                                            onOpen={onOpen}
                                            isOpen={isOpen}
                                            onClose={onClose}
                                            megamenuref={ref}
                                        />
                                    </Box>
                                </PopoverTrigger>
                                {navItem.children && (
                                    <PopoverContent
                                        border={0}
                                        boxShadow={"xl"}
                                        bg={popoverContentBgColor}
                                        p={4}
                                        rounded={"xl"}
                                        minW={"sm"}
                                    >
                                        {navItem.children.map((child) => {
                                            if (child.title === "Know Us") {
                                                return (
                                                    <AboutMegaMenu
                                                        item={child}
                                                        experts={child.experts}
                                                        introText={
                                                            child.introText
                                                        }
                                                        introImage={
                                                            child.introImage
                                                        }
                                                        isOpen={isOpen}
                                                    />
                                                );
                                            } else if (
                                                child.title === "Our Work"
                                            ) {
                                                return (
                                                    <OurWorkMegaMenu
                                                        item={child}
                                                        isOpen={isOpen}
                                                    />
                                                );
                                            }
                                        })}
                                    </PopoverContent>
                                )}
                            </Popover>
                        );
                    })}
            </SiteMenu>
        </Box>
    );
};

export default DesktopNavigation;
