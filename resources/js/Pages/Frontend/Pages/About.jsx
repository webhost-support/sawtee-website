import { Content } from "@/Components/Frontend/index";
import {
    Box,
    Heading,
    useColorModeValue,
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
    ListItem,
    OrderedList,
} from "@chakra-ui/react";
import React from "react";
import { convertToSlug } from "@/Utils/helpers";
import { memberInstitutions } from "@/Utils/data";

export default function About({ sections }) {
    return (
        <Content
            className="page-content"
            px={{ base: "32px", md: "0" }}
            mx="auto"
            py={"80px"}
            maxW={"3xl"}
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
    return (
        <Box>
            <Heading as="h3" fontSize={["xl", "2xl", "3xl"]} py={"4"} mb="4">
                {"Member Institutions"}
            </Heading>

            <Accordion allowToggle>
                {memberInstitutions?.map(({ country, institutes }, id) => {
                    return (
                        <AccordionItem key={id} border="none">
                            <AccordionButton size="md" py="3">
                                <Heading
                                    as="h5"
                                    flex="1"
                                    fontFamily={"heading"}
                                    textAlign="left"
                                    style={{ marginBlock: "0" }}
                                >
                                    {country}
                                </Heading>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel px={["5", "10"]}>
                                <OrderedList spacing="3">
                                    {institutes.map(
                                        ({
                                            member_name,
                                            member_website_link,
                                        }) => {
                                            return (
                                                <ListItem
                                                    key={member_name}
                                                    style={{ margin: "0" }}
                                                >
                                                    <Link
                                                        target="_blank"
                                                        title={member_name}
                                                        aria-label={member_name}
                                                        href={
                                                            member_website_link
                                                        }
                                                    >
                                                        {member_name}
                                                    </Link>
                                                </ListItem>
                                            );
                                        }
                                    )}
                                </OrderedList>
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
        <Box id={sectionID}>
            <Heading
                as="h3"
                fontSize={["lg", "xl", "2xl", "4xl"]}
                py={"4"}
                mb="4"
                fontFamily="heading"
            >
                {title}
            </Heading>

            {isTabs && childSections.length > 0 && (
                <Box px="6" py="4">
                    <Tabs variant="enclosed" isFitted>
                        <TabList>
                            {childSections.map(({ title }) => (
                                <Tab
                                    as="h5"
                                    key={title}
                                    fontWeight={"semibold"}
                                    fontFamily={"heading"}
                                    style={{ marginBlock: "0" }}
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
                                    py="3"
                                    _expanded={{
                                        bg: accordianExpandedBackground,
                                    }}
                                >
                                    <Heading
                                        as="h5"
                                        flex="1"
                                        fontFamily={"heading"}
                                        textAlign="left"
                                        style={{ marginBlock: "0" }}
                                    >
                                        {title}
                                    </Heading>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel px={["5", "10"]}>
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
                <Box>
                    <Box
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
