import { Flex, Icon, Input } from "@chakra-ui/react";
import React from "react";

// A11y: Add a hidden search button
const SearchForm = ({ setData }) => {
    function handleSubmit(e) {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/search");
        xhr.onload = function () {
            if (xhr.status === 200) {
                setData(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
    }

    return (
        <Flex
            as="form"
            maxWidth="lg"
            mx="auto"
            pos="relative"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            onSubmit={handleSubmit}
            mb={10}
            // {...form}
        >
            <Input
                placeholder="Type and Hit Enter"
                variant="flushed"
                size="lg"
                fontSize={{ base: "24px", md: "32px" }}
                height="auto"
                focusBorderColor="primary.400"
                py={{ base: 1, md: 3 }}
                // {...input}
            />
            <Icon
                name="search"
                size="1.5rem"
                color="gray.400"
                position="absolute"
                right="0"
            />
        </Flex>
    );
};

export default SearchForm;
