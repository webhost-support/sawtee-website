import { Content } from "@/Components/Frontend/index";
import Section from "@/Components/Frontend/styles/section";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const DefaultPage = ({ sections, content, size = "md", rest }) => {
    const headingColor = useColorModeValue("gray.900, whiteAlpha.900");
    const contentColor = useColorModeValue("gray.800", "whiteAlpha.800");
    return (
        <Content
            as={Section}
            px={["4", "8"]}
            py="80px"
            m="0 auto"
            size={size}
            paddingBlock="50px"
            fontSize={["sm", "md"]}
            {...rest}
        >
            {content && (
                <Box>
                    <Box color={contentColor}>
                        <Box
                            as="p"
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                    </Box>
                </Box>
            )}

            {sections &&
                sections.map(({ title, media, description }) => {
                    return (
                        <Box>
                            <Heading
                                as="h3"
                                fontSize={["lg", "xl", "2xl"]}
                                py={"4"}
                                mb="4"
                                fontFamily="heading"
                                color={headingColor}
                            >
                                {title}
                            </Heading>
                            <Box color={contentColor}>
                                <Box
                                    as="p"
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </Box>
                        </Box>
                    );
                })}
        </Content>
    );
};

export default DefaultPage;
