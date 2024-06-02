import {
    Box,
    Stack,
    Grid,
    Button,
    IconButton,
    Icon,
    GridItem,
    Text,
    Flex,
    Avatar,
    SimpleGrid,
    VStack,
    Divider,
    useColorModeValue,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuList,
    MenuDivider,
} from "@chakra-ui/react";
import { Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import MenuLink from "../styles/inertia-chakra-link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

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

const ExpertCard = ({ expert }) => {
    const image = expert.media[0].original_url;
    return (
        <Flex
            shadow="lg"
            rounded="lg"
            bg={"blackAlpha.400"}
            // _dark={{
            //     bg: "blackAlpha.400",
            // }}
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
        <Box
            bg={"rgba(8, 126, 164,1)"}
            as={motion.div}
            mx="auto"
            px={4}
            py={10}
            pb={20}
            variants={MegaMenuWrapperVariants}
        >
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
                        initial={"closed"}
                        whileInView={"open"}
                    >
                        {item.children.map((child) => {
                            return (
                                <Box
                                    key={child.title}
                                    as={motion.li}
                                    variants={ListVariants}
                                    initial={"closed"}
                                    whileInView={"open"}
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
            bg={"rgba(8, 126, 164,0.9)"}
            pos="relative"
            gap="16"
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
                    variants={ListContainerVariants}
                    initial={"closed"}
                    whileInView={"open"}
                    columns={3}
                    spacing={6}
                    // placeItems="center"
                >
                    {item.children[0].children.map((grandChild) => {
                        return (
                            <Text
                                key={grandChild.title}
                                as={motion.li}
                                variants={ListVariants}
                                initial={"closed"}
                                whileInView={"open"}
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
                                <SimpleGrid
                                    columns={2}
                                    spacing={6}
                                    as={motion.ul}
                                    variants={ListContainerVariants}
                                    initial={"closed"}
                                    whileInView={"open"}
                                >
                                    {grandChildren.children &&
                                        grandChildren.children.map((child) => {
                                            return (
                                                <Box
                                                    key={child.title}
                                                    as={motion.li}
                                                    variants={ListVariants}
                                                    initial={"closed"}
                                                    whileInView={"open"}
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

const SiteMenuItem = ({ item, ...rest }) => {
    const { url } = usePage();
    const active = item.url === url;
    return (
        <Menu isLazy placement="bottom">
            {({ isOpen, onClose }) => {
                return (
                    <>
                        <Box
                            as="li"
                            role={"group"}
                            display={"block"}
                            p={2}
                            fontSize={{ base: "sm", md: "sm" }}
                            rounded={"md"}
                            color={useColorModeValue("gray.700", "gray.200")}
                            _hover={{
                                bg: useColorModeValue(
                                    "primary.50",
                                    "primary.700"
                                ),
                                color: useColorModeValue(
                                    "gray.700",
                                    "gray.200"
                                ),
                            }}
                        >
                            <Stack direction={"row"} align={"center"}>
                                <Box as="a" href={item.url}>
                                    <Text
                                        transition={"all .3s ease"}
                                        fontWeight={500}
                                    >
                                        {item.title}
                                    </Text>
                                </Box>
                                <Flex
                                    justify={"flex-end"}
                                    align={"center"}
                                    flex={1}
                                >
                                    {item.children && (
                                        <MenuButton
                                            isActive={isOpen}
                                            as={Button}
                                            variant="link"
                                            size={"1rem"}
                                            rounded={"none"}
                                            aria-label="Menu DropDown"
                                        >
                                            <Icon
                                                transform={
                                                    isOpen
                                                        ? "rotate(180deg)"
                                                        : ""
                                                }
                                                transition="all .25s ease-in-out"
                                                w={5}
                                                h={5}
                                                as={ChevronDownIcon}
                                            />
                                        </MenuButton>
                                    )}
                                </Flex>
                            </Stack>
                        </Box>
                        {/* <ButtonGroup
                            role="group"
                            colorScheme={"primary"}
                            isAttached
                            variant={active ? "solid" : "ghost"}
                            w="full"
                            justifyContent={"start"}
                            size="md"
                            {...rest}
                        >
                            <Button
                                as={Link}
                                _hover={{ textDecor: "none" }}
                                href={item.url}
                                variant={"link"}
                                rounded={"none"}
                                aria-label={item.title}
                                justifyContent={"start"}
                                px="4"
                                // w="full"
                            >
                                {item.title}
                            </Button>

                            {item.children && (
                                <MenuButton
                                    isActive={isOpen}
                                    as={Button}
                                    rightIcon={
                                        <ChevronDownIcon
                                            m={0}
                                            transform={
                                                isOpen ? "rotate(180deg)" : ""
                                            }
                                            transition="all .25s ease-in-out"
                                        />
                                    }
                                    rounded={"none"}
                                    aria-label="Menu DropDown"
                                />
                            )}
                        </ButtonGroup> */}

                        {item.title === "Our Work" ||
                        item.title === "Know Us" ? (
                            <MenuList zIndex={5} maxW={"8xl"} p={0}>
                                <MegaMenu item={item} isOpen={isOpen} />
                            </MenuList>
                        ) : (
                            <MenuList
                                zIndex={5}
                                border="2px solid"
                                borderColor={useColorModeValue(
                                    "gray.700",
                                    "gray.100"
                                )}
                                boxShadow="4px 4px 0"
                            >
                                {item.children?.map((child) => {
                                    return (
                                        <Stack
                                            key={child.title}
                                            gap={0}
                                            w="full"
                                        >
                                            <MenuLink w="full">
                                                <SiteMenuItem item={child} />
                                            </MenuLink>
                                        </Stack>
                                    );
                                })}
                            </MenuList>
                        )}

                        <MenuDivider m={0} />
                    </>
                );
            }}
        </Menu>
    );
};

const DesktopNavigation = ({ menu, ...rest }) => {
    return (
        <Box
            as="ul"
            width="100%"
            display={{ base: "none", lg: "flex" }}
            zIndex={"999"}
            {...rest}
        >
            <SiteMenu ml="20px">
                {menu &&
                    menu.map((navItem) => {
                        return (
                            <React.Fragment key={navItem.title}>
                                <SiteMenuItem item={navItem} />
                            </React.Fragment>
                        );
                    })}
            </SiteMenu>
        </Box>
    );
};

export default DesktopNavigation;
