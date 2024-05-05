import React from "react";
import {
    Box,
    Heading,
    Text,
    Input,
    Flex,
    Button,
    useColorModeValue,
    FormControl,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import InertiaChakraLink from "./styles/inertia-chakra-link";
import { ExploreButton } from ".";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export const PatternBox = ({ showPattern = false, ...props }) => (
    <Box
        as="section"
        bg={useColorModeValue("primary.50", "primary.700")}
        borderTop="10px solid"
        borderColor={useColorModeValue("accent.400", "accent.100")}
        {...(showPattern && {
            bgImage: `url(/assets/pattern-tile-green.svg)`,
            bgSize: "1018px",
            bgPos: "top center",
        })}
        {...props}
    />
);

export const PatternBoxInner = (props) => (
    <Box
        py="80px"
        position="relative"
        zIndex="1"
        overflow="hidden"
        textAlign="center"
        maxW="640px"
        mx="auto"
        px={6}
        {...props}
    />
);

// TODO: Add the logic to show this component based on if newsletter package exists
export const Newsletter = (props) => {
    return (
        <PatternBox {...props}>
            <Box
                py="80px"
                position="relative"
                zIndex="1"
                overflow="hidden"
                textAlign="center"
                mx="auto"
                px={6}
            >
                <Heading color="var(--color-text)" textTransform="uppercase">
                    Never miss an update!
                </Heading>
                <Text mt={4} fontSize="xl" color="primary.500">
                    Receive the latest publication releases, update and monthly
                    newsletter.
                </Text>
                <SubscribeForm />
            </Box>
        </PatternBox>
    );
};

const SubscribeForm = ({ ...rest }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
    });

    const [message, setMessage] = React.useState(null);

    const submit = (e) => {
        e.preventDefault();
        post(route("subscribe"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setMessage(`${data.email} has subscribed successfully.`);
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
                reset("email");
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <Box maxW="640px" mx="auto">
            <Flex as="form" onSubmit={submit} mt="40px" {...rest}>
                <FormControl isInvalid={errors.email} isRequired>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        bg="white"
                        height="60px"
                        value={data.email}
                        px="15px"
                        fontSize="md"
                        placeholder="Subscribe to our newsletter"
                        _placeholder={{ color: "gray.500" }}
                        onChange={(e) => {
                            setData("email", e.target.value);
                        }}
                    />
                    {errors.email && (
                        <FormErrorMessage mt={2}>
                            {errors.email}
                        </FormErrorMessage>
                    )}

                    {message && (
                        <FormHelperText color={"green.500"}>
                            {message}
                        </FormHelperText>
                    )}
                </FormControl>

                <Button
                    transition="background-color ease .25s"
                    fontSize={"md"}
                    cursor="pointer"
                    textAlign="center"
                    colorScheme={"primary"}
                    flexShrink="0"
                    height="60px"
                    minWidth="60px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    type="submit"
                    isLoading={processing}
                >
                    <Box
                        focusable="false"
                        width="40px"
                        height="auto"
                        as={IoIosArrowRoundForward}
                    />
                </Button>
            </Flex>
            <InertiaChakraLink as={Link} href={"/category/newsletters"}>
                <ExploreButton
                    size="md"
                    text="Explore newsletters"
                    mt={10}
                    variant="solid"
                />
            </InertiaChakraLink>
        </Box>
    );
};
