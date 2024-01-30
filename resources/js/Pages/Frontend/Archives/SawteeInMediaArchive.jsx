import { VStack, Text, Heading, HStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { formatDate } from "@/Utils/helpers";
import { ExploreButton, GlassBox } from "@/Components/Frontend/index";
import { Link } from "@inertiajs/react";

const SawteeInMediaArchive = ({ posts, headingColor, textColor }) => {
    return posts.map(({ title, slug, excerpt, published_at }) => {
        return (
            <GlassBox
                as={motion.div}
                p="40px"
                whileHover={{ y: "-10px" }}
                boxShadow="none"
                _hover={{ boxShadow: "xl" }}
                role="group"
                maxW="xl"
            >
                <VStack spacing={2} mb={5} alignItems={"start"}>
                    <Link href={`/category/sawtee-in-media/${slug}`}>
                        <Heading
                            color={headingColor}
                            fontSize={"md"}
                            lineHeight={1.2}
                            fontWeight="semibold"
                            textAlign="left"
                            mb={4}
                        >
                            {title}
                        </Heading>
                    </Link>

                    <Text
                        fontSize="sm"
                        noOfLines={3}
                        color={textColor}
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                    />
                </VStack>
                <HStack
                    fontSize="sm"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {/* {acf.publishers.length > 0 &&
                    acf.publishers.map(({ publisher, publisher_website }) => {
                        return (
                            <Tag
                                key={publisher}
                                px="4"
                                py={2}
                                as="a"
                                color={textColor}
                                href={publisher_website}
                                _hover={{ textDecor: "underline" }}
                            >
                                {publisher}
                            </Tag>
                        );
                    })} */}

                    <Text
                        fontSize={"xs"}
                        color={headingColor}
                        dangerouslySetInnerHTML={{
                            __html: formatDate(published_at),
                        }}
                    />
                    <Link href={`/category/sawtee-in-media/${slug}`}>
                        <ExploreButton
                            size="xs"
                            text="Read more"
                            colorScheme={"gray"}
                            w="full"
                        />
                    </Link>
                </HStack>
            </GlassBox>
        );
    });
};

export default SawteeInMediaArchive;
