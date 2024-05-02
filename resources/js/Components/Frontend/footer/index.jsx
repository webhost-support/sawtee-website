import {
    Box,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
    Grid,
    GridItem,
    ListItem,
    Tooltip,
    UnorderedList,
    VStack,
    ListIcon,
} from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "@/Components/Frontend/header/social-menu";
import { MapModel, StyledChakraLink } from "@/Components/Frontend/index";
import { TriangleUpIcon } from "@chakra-ui/icons";
import {
    MdContactMail,
    MdLocationOn,
    MdOutlineFax,
    MdOutlineLocalPhone,
    MdOutlineMarkunreadMailbox,
} from "react-icons/md";

const FooterSection = ({ children, ...rest }) => (
    <Box
        as="footer"
        w="full"
        pos="relative"
        bg={useColorModeValue("blackAlpha.50", "var(--color-darker)")}
        mx={"auto"}
        {...rest}
    >
        {children}
    </Box>
);

const FooterSectionGroup = ({ children, ...rest }) => (
    <Grid maxWidth="7xl" mx="auto" width="100%" gap={8} {...rest}>
        {children}
    </Grid>
);

const FooterSectionItem = ({ children, ...rest }) => (
    <GridItem {...rest}>{children}</GridItem>
);

const ListHeader = ({ children }) => {
    return (
        <Text
            fontSize={{ base: "xl", lg: "2xl" }}
            fontWeight={"medium"}
            fontFamily={"heading"}
            mb={2}
        >
            {children}
        </Text>
    );
};

const Widget = ({ item }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const linkcolor = useColorModeValue(
        "var(--chakra-colors-gray-700)",
        "var(--chakra-colors-whiteAlpha-700)"
    );
    const hoverColor = useColorModeValue(
        "var(--chakra-colors-gray-900)",
        "var(--chakra-colors-whiteAlpha-900)"
    );

    if (item.title.includes("Contact")) {
        return (
            <Stack align="flex-start" id={item.title}>
                <ListHeader>{item.title}</ListHeader>
                <VStack
                    as={UnorderedList}
                    style={{ listStyle: "none", margin: 0 }}
                    align="flex-start"
                    spacing={3}
                >
                    {item.children &&
                        item.children.map((child_item) => {
                            const { url, title } = child_item;
                            if (title.includes("Address")) {
                                return (
                                    <ListItem key={title}>
                                        <ListIcon
                                            style={{
                                                color: linkcolor,
                                                verticalAlign: "middle",
                                            }}
                                            _hover={{ color: hoverColor }}
                                            as={MdLocationOn}
                                        />
                                        <Tooltip
                                            label={"click to view map"}
                                            hasArrow
                                            placement="bottom-end"
                                            openDelay={200}
                                            closeDelay={250}
                                        >
                                            <StyledChakraLink
                                                onClick={onOpen}
                                                color={linkcolor}
                                                hoverColor={hoverColor}
                                                fontSize={"md"}
                                            >
                                                {title}
                                            </StyledChakraLink>
                                        </Tooltip>
                                        <MapModel
                                            isOpen={isOpen}
                                            onClose={onClose}
                                            mapLink={url}
                                        />
                                    </ListItem>
                                );
                            }

                            if (title.includes("Fax")) {
                                return (
                                    <ListItem>
                                        <ListIcon
                                            style={{
                                                color: linkcolor,
                                                verticalAlign: "middle",
                                            }}
                                            _hover={{ color: hoverColor }}
                                            as={MdOutlineFax}
                                        />
                                        <StyledChakraLink
                                            href={url ? url : null}
                                            color={linkcolor}
                                            hoverColor={hoverColor}
                                            fontSize={"md"}
                                        >
                                            {title}
                                        </StyledChakraLink>
                                    </ListItem>
                                );
                            }
                            if (title.includes("Phone")) {
                                return (
                                    <ListItem>
                                        <ListIcon
                                            style={{
                                                color: linkcolor,
                                                verticalAlign: "middle",
                                            }}
                                            _hover={{ color: hoverColor }}
                                            as={MdOutlineLocalPhone}
                                        />
                                        <StyledChakraLink
                                            href={url ? url : null}
                                            color={linkcolor}
                                            hoverColor={hoverColor}
                                            fontSize={"md"}
                                        >
                                            {title}
                                        </StyledChakraLink>
                                    </ListItem>
                                );
                            }
                            if (title.includes("Email")) {
                                return (
                                    <ListItem>
                                        <ListIcon
                                            style={{
                                                color: linkcolor,
                                                verticalAlign: "middle",
                                            }}
                                            _hover={{ color: hoverColor }}
                                            as={MdContactMail}
                                        />
                                        <StyledChakraLink
                                            href={url ? url : null}
                                            color={linkcolor}
                                            hoverColor={hoverColor}
                                            fontSize={"md"}
                                        >
                                            {title}
                                        </StyledChakraLink>
                                    </ListItem>
                                );
                            }
                            if (title.includes("Box")) {
                                return (
                                    <ListItem>
                                        <ListIcon
                                            style={{
                                                color: linkcolor,
                                                verticalAlign: "middle",
                                            }}
                                            _hover={{ color: hoverColor }}
                                            as={MdOutlineMarkunreadMailbox}
                                        />
                                        <StyledChakraLink
                                            href={url ? url : null}
                                            color={linkcolor}
                                            hoverColor={hoverColor}
                                            fontSize={"md"}
                                        >
                                            {title}
                                        </StyledChakraLink>
                                    </ListItem>
                                );
                            }
                        })}
                </VStack>
            </Stack>
        );
    } else {
        return (
            <Stack align="flex-start" id={item.title}>
                <ListHeader>{item.title}</ListHeader>
                <VStack
                    as={UnorderedList}
                    style={{ listStyle: "none", margin: 0 }}
                    align={"flex-start"}
                    spacing={3}
                >
                    {item.children &&
                        item.children.map((child_item) => {
                            const { url, title } = child_item;

                            return (
                                <ListItem key={title}>
                                    <ListIcon
                                        as={TriangleUpIcon}
                                        style={{
                                            transform: "rotate(90deg)",
                                            verticalAlign: "middle",
                                            fontSize: "10px",
                                            color: linkcolor,
                                        }}
                                        _hover={{ color: hoverColor }}
                                    />
                                    <StyledChakraLink
                                        fontSize={"md"}
                                        href={url}
                                        color={linkcolor}
                                        hoverColor={hoverColor}
                                    >
                                        {title}
                                    </StyledChakraLink>
                                </ListItem>
                            );
                        })}
                </VStack>
            </Stack>
        );
    }
};

const Footer = ({ menu = null, socialMenu = null }) => {
    return (
        <FooterSection px={{ base: 8, md: 10, lg: 16 }} pt={12} pb={6}>
            <FooterSectionGroup
                templateColumns={{
                    base: "1fr",
                    sm: "repeat(3, 1fr)",
                    lg: "repeat(6, 1fr)",
                }}
                gap={4}
            >
                {Object.entries(menu).map(([key, item]) => {
                    return (
                        <FooterSectionItem
                            key={key}
                            colSpan={{ base: 1, lg: 2 }}
                            placeSelf={{ base: "start", md: "center" }}
                        >
                            <Widget item={item} />
                        </FooterSectionItem>
                    );
                })}
            </FooterSectionGroup>

            <Stack
                flexDir={{ base: "column", md: "row" }}
                justifyContent={{ md: "space-between" }}
                alignItems="center"
                maxW="3xl"
                mx="auto"
                mt="16"
                gap={6}
            >
                <FooterSectionItem
                    colSpan={1}
                    fontWeight="bold"
                    fontFamily="heading"
                    textTransform="uppercase"
                >
                    © {new Date().getFullYear()} {"SAWTEE"}
                </FooterSectionItem>

                <FooterSectionItem colSpan={1} borderColor="accent.400">
                    <SocialMenu ml="0" menu={socialMenu} />
                </FooterSectionItem>
            </Stack>
        </FooterSection>
    );
};

export default Footer;
