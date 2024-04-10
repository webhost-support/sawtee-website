import AirBnbCard from "@/Components/Frontend/AirBnbCard";
import { Content, GlassBox } from "@/Components/Frontend/index";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import {
    Box,
    Heading,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    ListItem,
    Text,
    UnorderedList,
    SimpleGrid,
    HStack,
    Image,
    Avatar,
} from "@chakra-ui/react";
import React from "react";

export default function MediaFellows({ content }) {
    const mediaFellows = [
        {
            id: 1,
            name: "Himal Lamsal",
            designation: "Correspondent, Nagarik",
            bio: "Himal Lamsal, a correspondent for the national daily newspaper Nagarik, has 12 years of experience in news reporting. His reporting focuses on issues related to infrastructure development, including energy, hydropower, climate change, and public procurement. Additionally, Mr. Lamsal has contributed investigative stories to the Centre for Investigative Journalism, Nepal, addressing issues like urban development and public property misuse. Mr. Lamsal holds an MA in Journalism and Mass Communication from Tribhuvan University. He has received numerous awards, including recognition of his contributions in metropolitan governance journalism and tourism journalism. He also serves as the secretary of the Society of Nepal Infrastructure Journalists.",
            avatar: "/assets/Himal Lamsal.jpg",
            published_stories: [
                {
                    title: "विकासशील मुलुकमा स्तरोन्नतिसँगै तयारी पोशाकको निर्यात घट्न सक्ने ",
                    link: "https://nagariknews.nagariknetwork.com/economy/1363451-1701392388.html",
                    image_src: ["/assets/himal-news-1.jpg"],
                    media_src: null,
                },
                {
                    title: "युरोपको बजार जोगाउन छैन तयारी ",
                    link: "https://nagariknews.nagariknetwork.com/economy/1332491-1698452894.html",
                    image_src: [
                        "/assets/himal-news-2-page-1.jpg",
                        "/assets/himal-news-2-page-2.jpg",
                    ],
                    media_src: null,
                },
            ],
            experience: [
                "Before being awarded this fellowship, my reporting on international trade was limited to basic issues. Although I was aware of Nepal graduating from the least developed country (LDC) category to a developing country, I had limited idea about its implications for Nepal’s trade, especially with regard to exports to the European Union (EU) and the United Kingdom (UK). This fellowship provided me with an opportunity to understand various aspects of Nepal’s LDC graduation. I believe that this experience will help me in enhancing my understanding of similar trade-related issues in the future. This experience also allowed me to understand and analyze different technical aspects of the effects of Nepal’s graduation from LDC status. It has not only changed my perspective on the subject matter but I have gained insights into the ways to examine this issue.",
                "Consultations with Dr. Paras Kharel, Executive Director, SAWTEE, helped me understand the technical and practical aspects of LDC graduation and its implications. Our interactions have made me realize that there is ample room for me to nurture my interest in, and improve my understanding of, this topic. I had an opportunity to learn about “rules of origin” which will have a long-term impact on the export sector of Nepal after it graduates from the LDC category but is missing in the discourse in the media. Finally, I would like to thank SAWTEE for granting me this fellowship and providing me with the opportunity to learn. May we continue to cooperate in the future as well. ",
            ],
        },
    ];

    return (
        <Content
            className="page_content"
            px={{ base: "32px", md: "0" }}
            mx="auto"
            py={"80px"}
            maxW={"3xl"}
            fontSize={{ base: "md", lg: "lg" }}
        >
            <Box dangerouslySetInnerHTML={{ __html: content }} />
            <GlassBox mt={8} px={6}>
                {mediaFellows &&
                    mediaFellows.length > 0 &&
                    mediaFellows.map((mediaFellow, i) => {
                        return <Fellows mediaFellow={mediaFellow} />;
                    })}
            </GlassBox>
        </Content>
    );
}

export const Fellows = ({ mediaFellow, i }) => {
    // Get the html2react component.

    const {
        id,
        name,
        avatar,
        designation,
        bio,
        published_stories,
        experience,
    } = mediaFellow;
    return (
        <>
            <Box id={id} my={10}>
                <HStack alignItems="center">
                    <Avatar
                        name={name}
                        src={avatar}
                        height={"80px"}
                        width={"80px"}
                    />
                    <Box ml={6}>
                        <Heading
                            as="h2"
                            m="0"
                            p="0"
                            fontSize={["lg", "xl", "2xl", "4xl"]}
                            fontFamily="heading"
                        >
                            {name}
                        </Heading>
                        <Text fontSize="sm" fontWeight="semibold">
                            {designation}
                        </Text>
                    </Box>
                </HStack>

                <Text my={8}>{bio}</Text>

                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton py="4">
                            <Heading
                                as="h3"
                                flex="1"
                                fontSize={{ base: "md", lg: "lg" }}
                                fontFamily={"heading"}
                                textAlign="left"
                            >
                                {"Published Stories"}
                            </Heading>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel px={["5", "10"]}>
                            <UnorderedList>
                                {published_stories &&
                                    published_stories.length > 0 &&
                                    published_stories.map(({ title, link }) => {
                                        return (
                                            <ListItem key={title}>
                                                <InertiaChakraLink href={link}>
                                                    {title}
                                                </InertiaChakraLink>
                                            </ListItem>
                                        );
                                    })}
                            </UnorderedList>

                            <SimpleGrid
                                minChildWidth="300px"
                                spacing="10"
                                mt={10}
                            >
                                {published_stories &&
                                    published_stories.length > 0 &&
                                    published_stories.map(
                                        ({ image_src, title }, i) => {
                                            return (
                                                <AirBnbCard
                                                    key={i}
                                                    img={image_src}
                                                    title={title}
                                                />
                                            );
                                        }
                                    )}
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton py="4">
                            <Heading
                                as="h3"
                                flex="1"
                                fontSize={{ base: "md", lg: "lg" }}
                                fontFamily={"heading"}
                                textAlign="left"
                            >
                                {"Experience with the Fellowship"}
                            </Heading>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel px={["5", "10"]}>
                            {experience.length > 0 &&
                                experience.map((exp) => {
                                    return <Text my={2}>{exp}</Text>;
                                })}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            {i !== 0 && <Divider my={16} />}
        </>
    );
};
