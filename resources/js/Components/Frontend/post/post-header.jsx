import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import PostCategories from "./post-categories";

const PostHeader = ({
    heading,
    categories = null,
    description,
    author,
    date,
    readingTime,
    ...props
}) => (
    <Box className="post-header" textAlign="center" {...props}>
        {categories && (
            <PostCategories
                color="black"
                category={categories}
                justifyContent="center"
            />
        )}
        <Heading
            as="h1"
            fontWeight="bold"
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
            mt="10px"
            mb={{ base: "20px", lg: "32px" }}
            textTransform="capitalize"
            dangerouslySetInnerHTML={{ __html: heading }}
        />

        {/* {description && <Text>{description}</Text>} */}
    </Box>
);

export default PostHeader;
