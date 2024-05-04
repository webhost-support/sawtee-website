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
        {
            id: 2,
            name: "Lok Bahadur Chapagai",
            designation: "Editor, Capital Business Magazine",
            bio: "Lok Bahadur Chapagai is the editor of Capital Business Magazine. He holds an M.A. in Economics from Tribhuvan University. Mr. Chapagain started his career in journalism with reporting roles at Abhiyan Weekly and Dristi Weekly and worked his way through Karobar National Economic Daily and Capitalnepal.com. Mr. Chapagai's contribution to journalism has been acknowledged through numerous accolades, including the Samana Banking Patrakarita Puraskar in 2012, the ACAN Journalism Honor in 2015, the Rotary Journo Award in 2019, and the Punjibazar Patrakarita Puraskar in 2023, among others. ",
            avatar: "/assets/Lok_Bahadur_Chapagain.jpg",
            published_stories: [
                {
                    title: "आयात अवरोधको परिणाम शिथिल अर्थतन्त्र",
                    link: "https://www.capitalnepal.com/detail/44035",
                    image_src: ["/assets/Lokbahadur-news-1.png"],
                    media_src: null,
                },
            ],
            experience: [
                "For a journalist, journalism is a life-long process of learning—each day we can learn about a new topic. For the first time in my two-decade journey in journalism, through this fellowship, I got an opportunity to learn from experts outside the media circle. Understanding the issues of international trade and economics through this association with South Asia Watch on Trade, Economics and Environment (SAWTEE) has been a positively unique experience. ",
                "Considering the deteriorated balance of payments situation in 2021, the Nepal government imposed a ban on imports of certain items for about six months beginning in April 2022 and Nepal’s central bank introduced a 50-100 percent cash margin requirement on imports of certain items beginning in December 2021 that lasted a year. This fellowship provided me with an opportunity to delve deeper into the implications of the import ban on Nepal’s economy while writing an article in Capital Business magazine.",
                "Despite the limited time, the collaboration with SAWTEE helped me understand how to approach a new subject matter and undertake an in-depth analysis of it. It also gave me insights into how decisions such as the ban and other financial tools used by the government and the central bank impact the economy and common people and what is the role of the authorities in addressing the adverse impact. SAWTEE’s mentors also helped me in various aspects of the content and even language-related accuracy during the reporting. This reporting opportunity has provided me with new perspectives on the issues and opened up ways to examine international trade-related issues that have been ignored.",
                "I am grateful to Executive Director Dr. Paras Kharel and Ms. Neelu Thapa for this opportunity to learn. I am hoping for more cooperation in the future with SAWTEE. ",
            ],
        },
        {
            id: 3,
            name: "Modnath Dhakal",
            designation: "Journalist, The Rising Nepal",
            bio: "Mr. Modnath Dhakal is a journalist at The Rising Nepal daily. He has extensively covered issues related to macro economy, investment and development. He has a deep interest in political economy, investment climate and foreign affairs. Mr. Dhakal holds a MS in Communication Studies from the University of the Punjab, Lahore, as well as an MA in Political Science from Tribhuvan University. His previous roles include visiting faculty at the University of Dhaka in Bangladesh, Purwanchal University and Kathmandu University and weekend editor and chief reporter at Arthik Abhiyan business daily. He is currently serving as the President of the Nepal Association of Financial Journalists (NAFIJ).",
            avatar: "/assets/Modnath_Dhakal.JPG",
            published_stories: [
                {
                    title: "Poor policy backup, cumbersome process disappoint women entrepreneurs",
                    link: "https://risingnepaldaily.com/news/36957",
                    image_src: ["/assets/modnath-news-1.webp"],
                    media_src: null,
                },
                {
                    title: "Women Entrepreneurs Need Support",
                    link: "https://risingnepaldaily.com/news/37526",
                    image_src: ["/assets/modnath-news-2.webp"],
                    media_src: null,
                },
            ],
            experience: [
                "A journalist's identity is shaped not by reporting event-based news stories but by opinion pieces, commentaries and investigative or in-depth reporting. This is because hard news is reported by every media and it is hard to distinguish, most often, among the stories reported in various media since it follows the same writing structure—the celebrated 'inverted pyramid'. This was the reason behind my interest to apply for the fellowship offered by SAWTEE.",
                "Quite contrary to my anticipation, it took almost three weeks to gather basic information and latest data on the mobilization of concessional loans to women. It was a serious task to know about the plight of women in business in Nepal. I talked with more than 10 women in business and three experts who have an understanding of the matter. I went through multiple documents, research reports, books and news articles, on the subject to enhance my understanding.",
            ],
        },
        {
            id: 4,
            name: "Rudra Pangeni",
            designation: "Freelance investigative and multimedia journalist",
            bio: "Rudra Pangeni is a freelance investigative and multimedia journalist based in Kathmandu. He has worked for two major English-language daily newspapers—The Himalayan Times and Republica—as well as at the Centre for Investigative Journalism, Nepal. He was named a 2019 Bertha Fellow for his reporting on Nepal's land and housing sector. Beyond his national contributions, he also collaborated with the UK’s Finance Uncovered and The Bureau of Investigative Journalism to uncover cross-border financial crimes, human trafficking, and corruption. In October 2022, he shared an award 'The Best Investigative Reports 2022 on Modern Slavery' with two British journalists in the UK for a story concerning the exploitation of Nepali seasonal labourers in UK farms.",
            avatar: "/assets/Rudra_pangeni.jpg",
            published_stories: [
                {
                    title: "एक्सप्लेनर : बिलमा हुने गोलमालको कथा ",
                    link: "https://www.himalkhabar.com/news/139387",
                    image_src: [],
                    media_src: "https://youtu.be/tBDXWX00TvA",
                },
            ],
            experience: [
                "In the age of information flood and social media, it's not an easy task to draw and hold the attention of the audience for 20 minutes. But I have been successful to do so of more than 35k viewers minimum and earn thousands of shares, comments and likes (till December 31, 2023) and more importantly compliments from renowned editors in the country (it's not easy to get their compliments as I have got such compliments rarely from them though I have worked with them in the past).",
                `My former editor <a href="https://x.com/kosmosbk/status/1739614608284176690?s=20" target="_blank">Kosmos Biswokarma</a> (who was my editor at Republica daily newspaper) wrote in a tweet: “Excellent explainer this…good job bro! keep it up!” and former Editor of the Kathmandu Post <a href="https://x.com/SanjeevSatgainy/status/1738816805525954957?s=20" target="_blank">Sanjeev Satgainya</a> (who was my copy editor during my stint at the Himalayan Times) commented: “Very Good Explainer”, and <a href="https://x.com/Anurag_Acharya/status/1739472811817844874?s=20" target="_blank">Anurag Acharya</a> (who is a former journalist and I worked with him at the Centre for Investigative Journalism, Nepal where he was program manager) wrote in a tweet “Brilliant investigation into under-invoicing and illicit trade in Nepali market.” There are several comments and feedback in social media posts and youtube posts as well.`,
                "Many of the video audiences, whom I had personal conversations with, told me that they felt like it was just 10 to 12 minutes but they saw the length of the video later and were surprised. In facebook group chats, I have gotten several compliments from my colleagues like ‘you have rocked in a visual medium like the print medium.” (I also note that colleagues hardly give compliments in public forums; that's why I am successful to an extent in this work).",
                "This is not the first time I produced video reports. I have so far reproduced over a dozen investigative reports into short videos but they hadn’t gotten attention of this scale.",
                "I have also got calls from the chairmen of the two parliamentary committees (Public Accounts Committee and State Affairs Committee) showing interest to talk with me on the matter ofunder invoicing. I will definitely share more thoughts with them during upcoming meetings.",
                "Lastly, a team of people has played a great role to bring this out. I appreciate their relentless support and work. They are storytelling designer and video editor Arun Karki, cameraman Gopen Rai and editor of Himal Khabar Santa Gaha Magar.",
                "I extend my thanks to SAWTEE for providing me this opportunity.",
            ],
        },
        {
            id: 5,
            name: "Saraswati Dhakal",
            designation: "Senior Journalist, Karobar National Economic Daily",
            bio: "Saraswati Dhakal is a Senior Journalist at the Karobar National Economic Daily and has 13 years of work experience. Ms. Dhakal specializes in economic matters, including private sector and trade issues. Concurrently, she is pursuing a Master of Philosophy (MPhil) in economics. She has received awards, including the National ICT Media Award, the National Telecommunication Creative Writing Award, the Best Telecommunications Journalism Award, and a Letter of Appreciation from the National Consumer Forum. Her leadership extends to her role as the Former Vice President of the Society of Economic Journalists Nepal and as the Past President of the Tech Journalists' Forum.",
            avatar: "/assets/saru-dhakal-resized.jpg",
            published_stories: [
                {
                    title: "नजिक भएर पनि सदुपयोग छैन ",
                    link: "https://www.karobardaily.com/news/237936",
                    image_src: ["assets/saru-news-1.jpg"],
                    media_src: null,
                },
                {
                    title: "बंगलादेश निर्यातमा उच्च कर मुख्य समस्या",
                    link: "https://www.karobardaily.com/news/239769",
                    image_src: [
                        "/assets/saru-news-2-page-1.jpg",
                        "/assets/saru-news-2-page-2.jpg",
                    ],
                    media_src: null,
                },
            ],
            experience: [
                "I am grateful to the SAWTEE Nepal Team for such a rich learning experience. My fellowship focused on Nepal-Bangladesh trade—the opportunities and challenges.",
                "The fellowship provided by SAWTEE was enlightening and complements my decade-long experience in reporting about various facets of the economy. This experience was also notable as it was the first time I had received a fellowship for reporting about international trade. The mentorship provided by SAWTEE’s senior researcher Kshitiz Dahal was also memorable. He provided many ideas on data collection and assessment of data to cover the topic comprehensively and clearly. Particularly, his knowledge delivery style made the topic easy to understand, and I felt comfortable asking questions and learning about things I was unfamiliar with.",
                "Finally, I would like to request SAWTEE to keep on providing such fellowship programmes in the future as my experience has been that fellowship helps tremendously to reach the crux of the matter. ",
            ],
        },
    ];

    return (
        <Content
            className="page-content"
            px={{ base: "32px", md: "0" }}
            mx="auto"
            py={"80px"}
            maxW={"4xl"}
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
                            fontFamily="heading"
                            style={{ marginBlock: "0" }}
                        >
                            {name}
                        </Heading>
                        <Text
                            fontSize="sm"
                            fontWeight="semibold"
                            style={{ margin: "0" }}
                        >
                            {designation}
                        </Text>
                    </Box>
                </HStack>

                <Text my={8}>{bio}</Text>

                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton py="4">
                            <Heading
                                as="h4"
                                flex="1"
                                fontFamily={"heading"}
                                textAlign="left"
                                style={{ marginBlock: "0" }}
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
                                spacing="6"
                                mt={10}
                            >
                                {published_stories &&
                                    published_stories.length > 0 &&
                                    published_stories.map(
                                        (
                                            { image_src, title, media_src },
                                            i
                                        ) => {
                                            return (
                                                <AirBnbCard
                                                    key={i}
                                                    img={image_src}
                                                    title={title}
                                                    mediaSrc={media_src}
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
                                as="h4"
                                flex="1"
                                fontFamily={"heading"}
                                textAlign="left"
                                style={{ marginBlock: "0" }}
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
        </>
    );
};
