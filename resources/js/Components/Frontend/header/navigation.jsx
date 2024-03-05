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
} from "@chakra-ui/react";
import { StyledChakraLink } from "@/Components/Frontend/index";
import { Link, usePage } from "@inertiajs/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion } from "framer-motion";
import MenuLink from "../styles/inertia-chakra-link";
import React, { Fragment } from "react";

const MenuLink = styled(InertiaChakraLink)`
    position: relative;
    text-decoration: none;
    // text-align: center;
    font-size: inherit;
    font-family: var(--chakra-fonts-heading);
    font-weight: normal;
    &:hover {
        text-decoration: none;
    }
    &:focus,
    :focus-within,
    :focus-visible {
        outline: none;
        box-shadow: none;
    }
`;

const StyledLink = ({ children, ...rest }) => {
    return (
        <StyledChakraLink
            as={Link}
            fontSize={"md"}
            {...rest}
        >
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
        <>
            <MenuLink
                as={Link}
                className={active ? "active " : ""}
                href={slug}
                preserveState
            >
           
                <Button
                    alignItems="center"
                    variant={active ? "solid" : "ghost"}
                    colorScheme={active ? "primary" : "gray"}
                    size="sm"
                    borderRadius={showIcon ? "5px 0 0 5px" : "5px"}
                    {...rest}
                  >
                    {title}
                </Button>
            </MenuLink>
            {showIcon && (
                <IconButton
                    aria-label={title}
                    variant={active ? "solid" : "ghost"}
                    colorScheme={active ? "primary" : "gray"}
                    size="sm"
                    borderRadius={"0 5px 5px 0"}
                    onClick={isOpen ? onClose : onOpen}
                    icon={isOpen ? <HiChevronUp /> : <HiChevronDown />}
                />
            )}
        </>
    );
};

const ExpertCard = ({ expert }) => {
    const image = expert.media[0].original_url;
    return (
            <Flex
                shadow="lg"
                rounded="lg"
                bg={"whiteAlpha.500"}
                _dark={{
                    bg: "blackAlpha.500",
                }}
                direction="column"
                justifyContent="center"
                minH="180px"
            >
                <Box
                    height="100%"
                    width="100%"
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
                        boxSize="65px"
                    />
                </Box>
                <Box
                    gridColumn="span 8"
                    p={2}
                    width="full"
                    height="full"
                    borderRadius="lg"
                    textAlign="center"
                    mt={3}
                >
                    <Text
                        fontSize="xs"
                        fontWeight="bold"
                        color="gray.800"
                        _dark={{
                            color: "white",
                        }}
                    >
                        {expert.name}
                    </Text>

                    <Text
                        fontSize="0.65rem"
                        fontWeight="normal"
                        color="gray.800"
                        _dark={{
                            color: "gray.200",
                        }}
                    >
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
        <Box bg={"primary.500"} mx="auto" px={4} py={10} pb={20}>
            <Grid
                templateColumns="repeat(6, 1fr)"
                pos="relative"
                gap={6}
                px={6}
                m="0 auto"
                {...rest}
            >
                <GridItem colSpan={1} placeSelf="center">
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
                                    fontSize={"md"}
                                    fontWeight="medium"
                                    position="relative"
                                    cursor="pointer"
                                    pb={6}
                                >
                                    <Link href={child.url}>{child.title}</Link>
                                </Box>
                            );
                        })}
                    </Box>
                </GridItem>
                <GridItem colSpan={3} width="full" placeSelf="center">
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
                        py={24}
                        _before={{
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
                            fontSize={"md"}
                            color={"gray-100"}
                            m="0"
                            alignSelf={"center"}
                            zIndex={10}
                            px={6}
                            lineHeight="1.8"
                        >
                            {introText}
                        </Text>
                    </Box>
                </GridItem>
                <GridItem
                    colSpan={2}
                    gap={4}
                >
                    <Text fontSize="xl" pb={4} fontWeight={"semibold"}>
                        Our Experts
                    </Text>
                    <Grid
                        templateColumns={"repeat(3, 1fr)"}
                        templateRows={"repeat(2, auto)"}
                        gap={2}
                    >
                        {experts &&
                            experts.length > 0 &&
                            experts.map((expert) => {
                                return (
                                    <GridItem key={expert.name} colSpan={1}>
                                        <ExpertCard expert={expert} />
                                    </GridItem>
                                );
                            })}
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
};

const OurWorkMegaMenu = ({ item, isOpen, ...rest }) => {
    return (
        <Box
            bg={"primary.500"}
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
                                <Link href={grandChild.url}>
                                    {grandChild.title}
                                </Link>
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
                                <Text fontSize="2xl" fontWeight="bold">
                                    <Link href={grandChildren.url}>
                                        {grandChildren.title}
                                    </Link>
                                </Text>
                                <SimpleGrid columns={2} spacing={6}>
                                    {grandChildren.children &&
                                        grandChildren.children.map((child) => {
                                            return (
                                                <Text
                                                    key={child.title}
                                                    as={motion.li}
                                                    variants={ListVariants}
                                                >
                                                    <MenuLink
                                                        href={child.url}
                                                        textAlign="center"
                                                    >
                                                        {child.title}
                                                    </MenuLink>
                                                </Text>
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
        <Box as="li" role="group" {...rest}>
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

const Navigation = ({ menu, ...rest }) => {
    const ref = React.useRef();

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
                    menu.map((item) => {
                        const { isOpen, onOpen, onClose } = useDisclosure();
                        return (
                            <Fragment key={item.title}>
                                {item.children && (
                                    <Box
                                        ref={ref}
                                        as={motion.div}
                                        pos="absolute"
                                        left={0}
                                        top={"80px"}
                                        w="full"
                                        display={isOpen ? "block" : "none"}
                                        animate={isOpen ? "open" : "closed"}
                                        variants={MegaMenuWrapperVariants}
                                        transition={{
                                            durations: 0.6,
                                        }}
                                    >
                                        <MegaMenu item={item} isOpen={isOpen} />
                                    </Box>
                                )}
                                <SiteMenuItem
                                    item={item}
                                    onOpen={onOpen}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    megamenuref={ref}
                                />
                            </Fragment>
                        );
                    })}
            </SiteMenu>
        </Box>
    );
};

export default Navigation;
