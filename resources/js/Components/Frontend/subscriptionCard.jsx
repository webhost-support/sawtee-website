import React from "react";
import styled from "@emotion/styled";
import { FiSend } from "react-icons/fi";
import { BsMailbox2 } from "react-icons/bs";
import {
    Box,
    Heading,
    FormControl,
    FormErrorMessage,
    Checkbox,
    Input,
    HStack,
    useColorModeValue,
    FormHelperText,
    InputGroup,
    InputRightElement,
    IconButton,
} from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";

const SubscriptionCard = ({
    children,
    showIcon = true,
    showChildren = false,
    showCheckbox = false,
    fontSize = { base: "md", lg: "lg" },
    headingText = "Subscribe to our Newsletter",
    consentText = "I agree receiving emails from SAWTEE",
    ...rest
}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        consent: null,
    });
    const [message, setMessage] = React.useState(null);

    const handleSubmit = (e) => {
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
        <Box
            as={"form"}
            onSubmit={handleSubmit}
            display="flex"
            flexDir={"column"}
            w="full"
            gap="4"
            pos={"relative"}
            rounded="xl"
            textAlign="center"
            {...rest}
        >
            {showIcon && (
                <Box
                    size={"90px"}
                    mx="auto"
                    as={BsMailbox2}
                    color={useColorModeValue("primary.500", "primary.200")}
                />
            )}
            <Heading
                as="h4"
                fontSize={fontSize}
                textTransform="uppercase"
                color={useColorModeValue("gray.700", "gray.300")}
            >
                {headingText}
            </Heading>
            <FormControl
                fontSize={["xs"]}
                textAlign="center"
                fontStyle="italic"
                mb={2}
                isRequired
            >
                <Checkbox
                    defaultChecked={data.consent}
                    colorScheme="blue"
                    size="sm"
                    spacing={4}
                >
                    {consentText}
                </Checkbox>
            </FormControl>
            {showChildren && <Box>{children}</Box>}

            <HStack
                className="sidebar-form"
                margin={"0 auto"}
                w="full"
                alignItems={"center"}
            >
                <FormControl isInvalid={errors.email} isRequired>
                    <InputGroup>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email address"
                            color={useColorModeValue(
                                "var(--color-grey-darker)",
                                "var(--color-grey-lighter)"
                            )}
                            onChange={(e) => setData("email", e.target.value)}
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
                                icon={<FiSend />}
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
            </HStack>
        </Box>
    );
};

export default SubscriptionCard;


