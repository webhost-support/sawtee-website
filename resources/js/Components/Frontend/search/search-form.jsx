import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";
import React from "react";

// A11y: Add a hidden search button
const SearchForm = () => {
    const { data, setData, get } = useForm({
        query: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        // const URL = `/search`;
        // const xhr = new XMLHttpRequest();
        // xhr.open("GET", URL);
        // xhr.onload = function () {
        //     if (xhr.status === 200) {
        //         setPosts(JSON.parse(xhr.responseText));
        //     }
        // };
        // xhr.send();

        get(route("search"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => console.log("searching"),
            onError: (errors) => {
                console.log(errors);
            },
        });
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
                placeholder="Type search query and Hit Enter"
                variant="flushed"
                name="search"
                id="search"
                size="lg"
                fontSize={{ base: "16px", md: "24px" }}
                height="auto"
                focusBorderColor="primary.400"
                py={{ base: 1, md: 2 }}
                onChange={(e) => setData("query", e.target.value)}
                // {...input}
            />
            <Icon
                as={SearchIcon}
                size="1.5rem"
                color="gray.400"
                position="absolute"
                right="0"
            />
        </Flex>
    );
};

export default SearchForm;
