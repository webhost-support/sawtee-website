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
} from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "@/Components/Frontend/header/social-menu";
import { MapModel, StyledChakraLink } from "@/Components/Frontend/index";

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
    <Grid maxWidth="6xl" mx="auto" width="100%" gap={8} {...rest}>
        {children}
    </Grid>
);

const FooterSectionItem = ({ children, ...rest }) => (
    <GridItem {...rest}>{children}</GridItem>
);

const ListHeader = ({ children }) => {
    return (
        <Text
            fontSize={{ base: "2xl", lg: "3xl" }}
            fontWeight={"medium"}
            mb={2}
        >
            {children}
        </Text>
    );
};

const Widget = ({ item, linkcolor }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    if (item.title.includes("Contact")) {
        return (
            <Stack align="flex-start" id={item.title}>
                <ListHeader>{item.title}</ListHeader>
                <UnorderedList
                    spacing={3}
                    color={useColorModeValue("gray.700", "whiteAlpha.700")}
                >
                    {item.children &&
                        item.children.map((child_item) => {
                            const { url, title } = child_item;
                            return (
                                <ListItem key={title}>
                                    {title.includes("Address") ? (
                                        <>
                                            <Tooltip
                                                label={"click to view map"}
                                                hasArrow
                                                placement="bottom-end"
                                                openDelay={200}
                                                closeDelay={250}
                                            >
                                                <StyledChakraLink
                                                    as="p"
                                                    onClick={onOpen}
                                                    color={linkcolor}
                                                    fontSize={"sm"}
                                                >
                                                    {title}
                                                </StyledChakraLink>
                                            </Tooltip>
                                            <MapModel
                                                isOpen={isOpen}
                                                onClose={onClose}
                                                mapLink={url}
                                            />
                                        </>
                                    ) : (
                                        <StyledChakraLink
                                            href={url ? url : null}
                                            color={linkcolor}
                                            fontSize={"sm"}
                                        >
                                            {title}
                                        </StyledChakraLink>
                                    )}
                                </ListItem>
                            );
                        })}
                </UnorderedList>
            </Stack>
        );
    } else {
        return (
            <Stack align="flex-start" id={item.title}>
                <ListHeader>{item.title}</ListHeader>
                <UnorderedList spacing={3}>
                    {item.children &&
                        item.children.map((child_item) => {
                            const { url, title } = child_item;

                            return (
                                <ListItem key={title}>
                                    <StyledChakraLink
                                        fontSize={"sm"}
                                        href={url}
                                        color={linkcolor}
                                    >
                                        {title}
                                    </StyledChakraLink>
                                </ListItem>
                            );
                        })}
                </UnorderedList>
            </Stack>
        );
    }
};

const Footer = ({ menu = null, socialMenu = null }) => {
    const StyledLinkColor = useColorModeValue("#232323", "#F1F1F1");

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
                            placeSelf="center"
                        >
                            <Widget item={item} linkcolor={StyledLinkColor} />
                        </FooterSectionItem>
                    );
                })}
                {/* <FooterSectionItem
                    colSpan={{ base: 1, md: 1, lg: 2 }}
                    placeSelf="center"
                    w="full"
                >
                    <SubscriptionCard
                        fontSize={{ base: "sm", lg: "md" }}
                        showIcon={false}
                    />
                </FooterSectionItem> */}
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
