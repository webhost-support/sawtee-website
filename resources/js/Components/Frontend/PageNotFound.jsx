import { Box, Text, Heading, Link, Flex } from "@chakra-ui/react";
import InertiaChakraLink from "./styles/inertia-chakra-link";

const PageNotFound = () => {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <Container centerContent my="8" mx="auto" px="5">
                <Box maxW={"md"} textAlign={"center"}>
                    <Heading
                        as="h2"
                        mb="8"
                        fontWeight={"extrabold"}
                        fontSize={"9xl"}
                    >
                        <span className="sr-only">Error</span>404
                    </Heading>
                    <Text className="text-2xl font-semibold md:text-3xl">
                        Sorry, we couldn't find this page.
                    </Text>
                    <Text className="mt-4 mb-8 dark:text-gray-400">
                        But dont worry, you can find plenty of other things on
                        our homepage.
                    </Text>
                    <InertiaChakraLink
                        as={Link}
                        rel="noopener noreferrer"
                        href="/"
                        px="8"
                        py="3"
                        fontWeight={"semibold"}
                        rounded={"md"}
                    >
                        Back to homepage
                    </InertiaChakraLink>
                </Box>
            </Container>
        </section>
    );
};

export default PageNotFound;
