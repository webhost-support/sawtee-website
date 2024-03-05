import React from "react";
import {
    Box,
    Heading,
    Text,
    Flex,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import InertiaChakraLink from "./styles/inertia-chakra-link";
import { ExploreButton } from ".";
import { Link } from "@inertiajs/react";

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
export const Newsletter = (props) => (
    <PatternBox {...props}>
        <Box
            py="80px"
            position="relative"
            zIndex="1"
            overflow="hidden"
            textAlign="center"
            maxW="640px"
            mx="auto"
            px={6}
        >
            <Heading color="var(--color-text)" textTransform="uppercase">
                Never miss an update!
            </Heading>
            <Text mt={4} fontSize="xl" color="accent.400">
                Receive the latest publication releases, events, blog posts.
            </Text>
            <SubscribeForm />
        </Box>
    </PatternBox>
);

const SubscribeInput = (props) => (
    <Box
        as="input"
        width="100%"
        display="block"
        bg="white"
        height="60px"
        border="none"
        px="15px"
        fontSize="1.125rem"
        placeholder="Subscribe to our newsletter"
        _placeholder={{ color: "gray.500" }}
        {...props}
    />
);

const SubscribeButton = (props) => (
    <Button
        transition="background-color ease .25s"
        fontSize={{ base: "1.625rem" }}
        cursor="pointer"
        textAlign="center"
        colorScheme="accent"
        flexShrink="0"
        height="60px"
        minWidth="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...props}
    >
        <Box
            focusable="false"
            width="40px"
            height="auto"
            as={IoIosArrowRoundForward}
        />
    </Button>
);

const SubscribeForm = (props) => (
    <Box>
        <Flex as="form" mt="40px" {...props}>
            <SubscribeInput />
            <SubscribeButton />
        </Flex>
        <InertiaChakraLink as={Link} href={"/category/newsletters"}>
            <ExploreButton
                size="lg"
                text="Explore before deciding"
                mt={10}
                variant="solid"
            />
        </InertiaChakraLink>
    </Box>
);
