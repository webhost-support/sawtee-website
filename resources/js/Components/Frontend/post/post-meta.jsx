import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { formatDate } from "@/Utils/helpers";

const PostMeta = ({ author, date, readingTime, ...props }) => (
    <Box ml={{ base: "1rem", md: "2rem" }} className="post-meta" {...props}>
        <HStack gap="8" mt={4} justify={"start"} align={"center"}>
            {readingTime && <Text>Reading Time: {readingTime}</Text>}
            {author && <Text>Author: {author}</Text>}
            {date && (
                <Text
                    fontSize={"sm"}
                    fontFamily={"mono"}
                    as={"time"}
                    dateTime={date}
                >
                    Published at: {formatDate(date)}
                </Text>
            )}
        </HStack>
    </Box>
);

export default PostMeta;
