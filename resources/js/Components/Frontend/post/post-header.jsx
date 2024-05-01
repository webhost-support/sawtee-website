import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import PostCategories from "./post-categories";
import { formatDate } from "@/Utils/helpers";

const PostHeader = ({
    heading,
    categories = null,
    description,
    author,
    date,
    readingTime,
    ...props
}) => (
    <Box textAlign="center" {...props}>
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

        {description && <Text>{description}</Text>}
        <HStack gap="4" mt={4} justify={"space-evenly"} align={"center"}>
            {readingTime && <Text>{readingTime}</Text>}
            {author && <Text fontSize="lg">by {author}</Text>}
            {date && <Text fontSize="sm">{formatDate(date)}</Text>}
        </HStack>
    </Box>
);

export default PostHeader;
