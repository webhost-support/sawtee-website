import { Content } from "@/Components/Frontend/index";
import Section from "@/Components/Frontend/styles/section";
import {
    Box,
    Heading,
    useColorModeValue,
    SlideFade,
    Divider,
    Tabs,
    TabList,
    Tab,
    Link,
    TabPanels,
    TabPanel,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    List,
    ListItem,
    HStack,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { convertToSlug } from "@/Utils/helpers";

export default function About({ sections }) {
    const memberInstitutions = [
        {
            id: 1,
            country: "Bangladesh",
            institutes: [
                {
                    id: 1,
                    member_name:
                        "Bangladesh Environmental Lawyers’ Association (BELA), Dhaka",
                    member_website_link: "https://www.belabangla.org/",
                },
                {
                    id: 2,
                    member_name: "Unnayan Shamannay, Dhaka",
                    member_website_link: "https://www.unsy.org/",
                },
            ],
        },
        {
            id: 2,
            country: "India",
            institutes: [
                {
                    id: 1,
                    member_name:
                        "Citizen consumer and civic Action Group (CAG), Chennai",
                    member_website_link: "https://www.cag.org.in/",
                },
                {
                    id: 2,
                    member_name:
                        "Consumer Unity & Trust Society (CUTS), Jaipur",
                    member_website_link: "https://cuts-international.org/",
                },
                {
                    id: 3,
                    member_name:
                        "Development Research and Action Group (DRAG), New Delhi",
                    member_website_link: "https://dragindia.org/",
                },
            ],
        },
        {
            id: 3,
            country: "Nepal",
            institutes: [
                {
                    id: 1,
                    member_name:
                        "Society for Legal and Environmental Analysis and Development Research (LEADERS), Kathmandu",
                    member_website_link: "https://leadersnepal.org.np/",
                },
                {
                    id: 2,
                    member_name:
                        "Forum for Protection of Public Interest (Pro Public), Kathmandu",
                    member_website_link: "http://propublic.org/",
                },
            ],
        },
        {
            id: 4,
            country: "Pakistan",
            institutes: [
                {
                    id: 1,
                    member_name:
                        "Journalists for Democracy and Human Rights (JDHR), Islamabad",
                    member_website_link: "http://www.jdhr.org/",
                },
                {
                    id: 2,
                    member_name:
                        "Sustainable Development Policy Institute (SDPI), Islamabad",
                    member_website_link: "https://sdpi.org/",
                },
            ],
        },
        {
            id: 5,
            country: "Sri Lanka",
            institutes: [
                {
                    id: 1,
                    member_name: "Institute of Policy Studies (IPS), Colombo",
                    member_website_link: "https://www.ips.lk/",
                },
                {
                    id: 2,
                    member_name: "Law & Society Trust (LST), Colombo",
                    member_website_link: "https://www.lstlanka.org/",
                },
            ],
        },
    ];

    return (
        <Content
            className="page_content"
            as={Section}
            px={{ base: "32px", md: "0" }}
            py={"80px"}
            size={"lg"}
            fontSize={{ base: "md", lg: "lg" }}
        >
            {sections !== null &&
                sections.map((section) => {
                    if (section.parent_id === null) {
                        return (
                            <PageSection
                                key={section.title}
                                section={section}
                                sections={sections}
                            />
                        );
                    }
                })}
            {memberInstitutions !== null && (
                <Members memberInstitutions={memberInstitutions} />
            )}
        </Content>
    );
}

export const Members = ({ memberInstitutions }) => {
    const [hovered, setHovered] = React.useState([]);
    const headingColor = useColorModeValue("gray.900, whiteAlpha.900");
    React.useEffect(() => {
        memberInstitutions.map(({ country, institutes }) => {
            let array = institutes.map((_) => false);
            setHovered((prev) => [...prev, { [`${country}`]: [...array] }]);
        });
    }, [memberInstitutions]);
    return (
        <Box>
            <Heading
                as="h2"
                fontSize={["xl", "2xl", "3xl"]}
                py={"4"}
                mb="4"
                color={headingColor}
            >
                {"Member Institutions"}
            </Heading>

            <Accordion allowToggle>
                {memberInstitutions?.map(({ country, institutes }, id) => {
                    let array = [...hovered];

                    return (
                        <AccordionItem key={id} border="none">
                            <AccordionButton size="md" py="4">
                                <Heading
                                    as="h3"
                                    flex="1"
                                    fontSize={["md", "lg", "xl"]}
                                    fontFamily={"heading"}
                                    textAlign="left"
                                    color={headingColor}
                                >
                                    {country}
                                </Heading>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel px={["5", "10"]}>
                                <List spacing="3">
                                    {institutes.map(
                                        (
                                            {
                                                member_name,
                                                member_website_link,
                                            },
                                            idx
                                        ) => {
                                            return (
                                                <ListItem
                                                    key={member_name}
                                                    style={{ margin: "0" }}
                                                    fontSize={{
                                                        base: "sm",
                                                        md: "md",
                                                        lg: "lg",
                                                    }}
                                                >
                                                    <HStack
                                                        spacing="3"
                                                        align={"center"}
                                                    >
                                                        <Link
                                                            target="_blank"
                                                            title={member_name}
                                                            aria-label={
                                                                member_name
                                                            }
                                                            href={
                                                                member_website_link
                                                            }
                                                            _hover={{
                                                                color: "var(--chakra-colors-linkColor)",
                                                            }}
                                                            onMouseEnter={() => {
                                                                array[id][
                                                                    country
                                                                ][idx] = true;
                                                                setHovered([
                                                                    ...array,
                                                                ]);
                                                            }}
                                                            onMouseLeave={() => {
                                                                array[id][
                                                                    country
                                                                ][idx] = false;
                                                                setHovered([
                                                                    ...array,
                                                                ]);
                                                            }}
                                                        >
                                                            {member_name}
                                                        </Link>
                                                        {hovered.length > 0 &&
                                                            hovered[id][
                                                                country
                                                            ][idx] && (
                                                                <SlideFade
                                                                    direction="bottom"
                                                                    in={
                                                                        hovered[
                                                                            id
                                                                        ][
                                                                            country
                                                                        ][idx]
                                                                    }
                                                                    offsetY="20px"
                                                                >
                                                                    <HiOutlineExternalLink
                                                                        color={useColorModeValue(
                                                                            "blackAlpha.100",
                                                                            "blackAlpha.600"
                                                                        )}
                                                                    />
                                                                </SlideFade>
                                                            )}
                                                    </HStack>
                                                </ListItem>
                                            );
                                        }
                                    )}
                                </List>
                            </AccordionPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </Box>
    );
};

export const PageSection = ({ section, sections }) => {
    const { title, slug, description } = section;

    const isTabs = section.type === "tabs";
    const isAccordian = section.type === "accordian";
    const isDefault = section.type === "default";
    const headingColor = useColorModeValue("gray.900, whiteAlpha.900");
    const contentColor = useColorModeValue("gray.800", "whiteAlpha.800");
    const tabColor = useColorModeValue("blackAlpha", "whiteAlpha");
    const accordianExpandedBackground = useColorModeValue(
        "blackAlpha.200",
        "blackAlpha.400"
    );
    const sectionID = convertToSlug(title);

    const childSections = sections.filter(
        (sec) => sec.parent_id === section.id
    );
    // Get the html2react component.
    return (
        <Box id={"#" + sectionID}>
            <Heading
                as="h2"
                fontSize={["lg", "xl", "2xl", "4xl"]}
                py={"4"}
                mb="4"
                fontFamily="heading"
                color={headingColor}
            >
                {title}
            </Heading>

            {isTabs && childSections.length > 0 && (
                <Box px="6" py="4">
                    <Tabs variant="enclosed" isFitted>
                        <TabList>
                            {childSections.map(({ title }) => (
                                <Tab
                                    as="h3"
                                    key={title}
                                    fontSize={"lg"}
                                    fontWeight={"semibold"}
                                    fontFamily={"heading"}
                                    _selected={{
                                        borderColor: useColorModeValue(
                                            "gray.700",
                                            "gray.300"
                                        ),
                                        borderBottomColor: "transparent",
                                    }}
                                >
                                    {title}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels
                            border="1px solid"
                            borderColor={useColorModeValue(
                                "gray.700",
                                "gray.300"
                            )}
                        >
                            {childSections.map(({ description, title }) => (
                                <TabPanel
                                    key={title}
                                    bg={tabColor}
                                    p={6}
                                    transition="all 0.4s ease-in"
                                    color={contentColor}
                                >
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </Tabs>
                </Box>
            )}

            {isAccordian && (
                <Accordion allowToggle>
                    {childSections.map(({ title, description }) => {
                        return (
                            <AccordionItem key={title} border="none">
                                <AccordionButton
                                    size="md"
                                    py="4"
                                    _expanded={{
                                        bg: accordianExpandedBackground,
                                    }}
                                >
                                    <Heading
                                        as="h3"
                                        flex="1"
                                        fontSize={{ base: "md", lg: "lg" }}
                                        fontFamily={"heading"}
                                        textAlign="left"
                                        color={headingColor}
                                    >
                                        {title}
                                    </Heading>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel
                                    px={["5", "10"]}
                                    color={contentColor}
                                >
                                    <Box
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                </AccordionPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            )}

            {isDefault && (
                <Box color={contentColor}>
                    <Box
                        fontSize={{ base: "md", lg: "lg" }}
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    />
                </Box>
            )}
            <Divider my="60px" />
        </Box>
    );
};
