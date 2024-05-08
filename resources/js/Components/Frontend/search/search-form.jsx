import { Flex, Icon, Input } from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";
import React from "react";

// A11y: Add a hidden search button
const SearchForm = (props) => {
    const { data, get, setData, errors } = useForm({
        query: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        get(route("search"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => console.log(data.query),
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
                onChange={(e) => setData("query", e.target.value)}
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
