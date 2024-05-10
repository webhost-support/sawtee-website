import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { formatDate } from "@/Utils/helpers";

const PostMeta = ({ author, date, readingTime, ...props }) => (
    <Box ml={{ base: "1.5rem", md: "3rem" }} className="post-meta" {...props}>
        <HStack
            rowGap="2"
            columnGap="8"
            mt={4}
            justify={"center"}
            align={"center"}
            flexWrap={"wrap"}
        >
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
