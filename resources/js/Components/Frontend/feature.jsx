import {
    Container,
    Stack,
    Flex,
    Heading,
    Text,
    Image,
    IconButton,
    useColorModeValue,
    LinkBox,
    LinkOverlay,
    Box,
    Icon,
} from "@chakra-ui/react";
import { Blob, PlayIcon } from ".";

export default function Feature({ feature, ...rest }) {
    return (
        <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            px={{ base: 6, md: 10 }}
            direction={{ base: "column", lg: "row" }}
            {...rest}
        >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                    lineHeight={1.2}
                    fontWeight={600}
                    fontSize={{
                        base: "lg",
                        sm: "xl",
                        md: "2xl",
                        xl: "3xl",
                    }}
                >
                    <Text
                        as={"span"}
                        position={"relative"}
                        _after={{
                            content: "''",
                            width: "100%",
                            height: "30%",
                            position: "absolute",
                            bottom: 1,
                            left: 0,
                            bg: "primary.100",
                            zIndex: -1,
                        }}
                    >
                        {feature.name}
                    </Text>
                    <br />
                    {/* <Text as={"span"} color={"red.400"}>
                            use subtitle!
                        </Text> */}
                </Heading>
                <Text
                    color={useColorModeValue("gray.600", "gray.300")}
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                >
                    Some text about reform monitoring platform. Snippy is a rich
                    coding snippets app that lets you create your own code
                    snippets, categorize them, and even sync them in the cloud
                    so you can use them anywhere. All that is free!
                </Text>
            </Stack>
            <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                my="10"
            >
                <Blob
                    w={"100%"}
                    h={"150%"}
                    position={"absolute"}
                    top={"-20%"}
                    left={0}
                    color={useColorModeValue("primary.100", "primary.400")}
                />

                <LinkBox
                    position={"relative"}
                    rounded={"2xl"}
                    boxShadow={"2xl"}
                    width={"full"}
                    overflow={"hidden"}
                    role="group"
                >
                    <IconButton
                        aria-label={"Play Button"}
                        variant={"ghost"}
                        _groupHover={{ color: "white" }}
                        icon={<PlayIcon w={12} h={12} />}
                        size={"lg"}
                        color={"whiteAlpha.700"}
                        position={"absolute"}
                        left={"50%"}
                        top={"50%"}
                        transform={"translateX(-50%) translateY(-50%)"}
                    />

                    <LinkOverlay href={feature.link}>
                        <Image
                            alt={feature.name}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={feature.image}
                        />
                    </LinkOverlay>
                </LinkBox>
            </Flex>
        </Stack>
    );
}


