import { useColorModeValue, Box } from "@chakra-ui/react";
import Section from "@/Components/Frontend/styles/section";
import { Content, GlassBox } from "@/Components/Frontend/index";

const ProgramPost = ({ post }) => {
    const contentColor = useColorModeValue(
        "rgba(12, 17, 43, 0.8)",
        "whiteAlpha.800"
    );
    console.log("You are viewing a programme post!");

    return (
        <Content
            as={Section}
            className="content"
            px={{ base: "20px", md: "0" }}
            size="sm"
            // w="full"
            color={contentColor}
        >
            <Box dangerouslySetInnerHTML={{ __html: post.content }} />
        </Content>
    );
};

export default ProgramPost;
