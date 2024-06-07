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
    Grid,
    GridItem,
    ListItem,
    InputGroup,
    InputRightElement,
    InputRightAddon,
    IconButton,
} from "@chakra-ui/react";
import InertiaChakraLink from "./styles/inertia-chakra-link";
import { ExploreButton } from ".";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import SimpleList from "./SimpleList";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const PatternBox = ({ showPattern = false, ...props }) => (
    <Box
        as="section"
        bg={useColorModeValue("primary.50", "primary.700")}
        backdropFilter={"blur(5px)"}
        borderTop="10px solid"
        borderColor={"primary.500"}
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
        maxW="3xl"
        mx="auto"
        px={6}
        {...props}
    />
);

// TODO: Add the logic to show this component based on if newsletter package exists
export const Newsletter = ({ data, props }) => {
    return (
        <PatternBox {...props}>
            <Grid
                gridTemplateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
                placeItems="center"
                p="40px"
                gap={10}
                maxW="6xl"
                mx="auto"
            >
                <GridItem colSpan={{ base: 1, md: 3 }}>
                    <Box
                        position="relative"
                        zIndex="1"
                        overflow="hidden"
                        textAlign="center"
                        mx="auto"
                        px={6}
                    >
                        <Heading
                            as="h4"
                            fontSize={"2xl"}
                            color="var(--color-text)"
                            textTransform="uppercase"
                        >
                            Never miss an update!
                        </Heading>
                        <Text mt={2} fontSize="sm" color="primary.500">
                            Receive the latest publication releases, update and
                            monthly newsletter.
                        </Text>
                        <SubscribeForm />
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2 }}>
                    <SimpleList heading={"e-newsletters"} my="10">
                        {data.slice(0, 5).map((item) => {
                            return (
                                <ListItem key={item.id} mb="1rem">
                                    <InertiaChakraLink
                                        textDecor="underline"
                                        textUnderlineOffset="3px"
                                        href={`/category/in-focus/${item.slug}`}
                                    >
                                        <Text
                                            fontSize={"0.875rem"}
                                            lineHeight={"short"}
                                        >
                                            {item.title}
                                        </Text>
                                    </InertiaChakraLink>
                                </ListItem>
                            );
                        })}
                    </SimpleList>
                    <InertiaChakraLink
                        as={Link}
                        href={"/category/newsletters"}
                        ml="6"
                    >
                        <ExploreButton
                            size="sm"
                            text="More newsletters"
                            variant="link"
                        />
                    </InertiaChakraLink>
                </GridItem>
            </Grid>
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
            <Flex as="form" onSubmit={submit} mt="20px" {...rest}>
                <FormControl isInvalid={errors.email} isRequired>
                    <InputGroup>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            bg="white"
                            height="40px"
                            value={data.email}
                            px="15px"
                            fontSize="sm"
                            placeholder="Subscribe to our newsletter"
                            _placeholder={{ color: "gray.500" }}
                            onChange={(e) => {
                                setData("email", e.target.value);
                            }}
                        />
                        <InputRightElement>
                            <IconButton
                                transition="background-color ease .25s"
                                cursor="pointer"
                                textAlign="center"
                                colorScheme={"primary"}
                                h="30px"
                                type="submit"
                                mr="3"
                                isLoading={processing}
                                icon={<ArrowForwardIcon />}
                            />
                        </InputRightElement>
                    </InputGroup>

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
            </Flex>
        </Box>
    );
};
