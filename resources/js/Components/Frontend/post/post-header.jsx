import { Box, Heading, Text, useColorModeValue, Link } from "@chakra-ui/react";
import React from "react";
import PostCategories from "./post-categories";
import { formatDate } from "@/Utils/helpers";

const PostHeader = ({
    heading,
    categories = null,
    description,
    author,
    date,
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
            fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
            mt="30px"
            mb={{ base: "20px", lg: "32px" }}
            textTransform="capitalize"
            dangerouslySetInnerHTML={{ __html: heading }}
        />
        {description && <Text mt={4}>{description}</Text>}
        {/* Don't show the author if we're on a page type */}
        {author && <Text fontSize="lg">by {author}</Text>}
        {/* Don't show the date if we're on a page type */}
        {date && (
            <Text fontSize="md" mt="12px">
                {formatDate(date)}
            </Text>
        )}
    </Box>
);

export default PostHeader;
