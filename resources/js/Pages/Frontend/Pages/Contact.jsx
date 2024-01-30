import { Content } from "@/Components/Frontend/index";
import Section from "@/Components/Frontend/styles/section";
import {
    Box,
    Button,
    HStack,
    Heading,
    IconButton,
    Image,
    Link,
    SimpleGrid,
    Text,
    VStack,
    useColorModeValue,
    AspectRatio,
} from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import {
    FiPhone,
    FiMail,
    FiMap,
    FiFacebook,
    FiTwitter,
    FiLinkedin,
    FiYoutube,
} from "react-icons/fi";
import { MdOutlineFax } from "react-icons/md";

const Contact = () => {
    const headingColor = useColorModeValue("gray.900, whiteAlpha.900");
    const contentColor = useColorModeValue("gray.800", "whiteAlpha.800");
    const data = {
        opening_hours: "Monday-Friday 9:00 AM – 5:30 PM",
        phone_numbers: ["+977 1 4544438"],
        fax: "+977 1 4544570",
        email: "sawtee@sawtee.org",
        address: "Tukucha Marg, Baluwatar, Kathmandu, Nepal",
        social_menus: [
            {
                name: "twitter",
                link: "https://www.twitter.com/SAWTEENP/",
            },
            {
                name: "facebook",
                link: "https://www.facebook.com/sawteenp/",
            },
            {
                name: "linkedin",
                link: "https://www.linkedin.com/sawteenp/",
            },
            {
                name: "youtube",
                link: "https://www.youtube.com/@sawteenp/",
            },
        ],
    };

    return (
        <Content
            as={Section}
            px={["4", "8"]}
            py="80px"
            maxW="5xl"
            size="md"
            paddingBlock="50px"
            fontSize={["sm", "md"]}
        >
            <Box
                p={{ sm: 5, md: 5 }}
                borderRadius="xl"
                color={headingColor}
                boxShadow="lg"
            >
                <Box p={4}>
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
                    >
                        <Box textAlign={{ base: "center", lg: "left" }}>
                            <Heading
                                as="h4"
                                fontSize={{ base: "xl", md: "2xl" }}
                                color={headingColor}
                                textTransform={"uppercase"}
                                pb="0.75rem"
                            >
                                Contact Details
                            </Heading>
                            <Text
                                color={contentColor}
                                fontSize={{ base: "md", md: "lg" }}
                                pb="0.5em"
                            >
                                <b>Opening Hours: </b>
                                <i>{data.opening_hours}</i>
                            </Text>
                            <VStack
                                py={{ base: 3, md: 6, lg: 8 }}
                                spacing={3}
                                alignItems={{
                                    base: "center",
                                    lg: "start",
                                }}
                            >
                                {data.phone_numbers.map((number) => {
                                    return (
                                        <Button
                                            key={number}
                                            variant="ghost"
                                            color={contentColor}
                                            leftIcon={<FiPhone size="20px" />}
                                        >
                                            <Link as="a" href={`tel:${number}`}>
                                                {number}
                                            </Link>
                                        </Button>
                                    );
                                })}
                                <Button
                                    size="md"
                                    height="48px"
                                    variant="ghost"
                                    leftIcon={<MdOutlineFax size="20px" />}
                                >
                                    <Link href={`fax:${data.fax}`}>
                                        {data.fax}
                                    </Link>
                                </Button>
                                <Button
                                    size="md"
                                    height="48px"
                                    variant="ghost"
                                    color={contentColor}
                                    leftIcon={<FiMail size="20px" />}
                                >
                                    <Link href={`mailto:${data.email}`}>
                                        {data.email}
                                    </Link>
                                </Button>
                                <Button
                                    size="md"
                                    height="48px"
                                    variant="ghost"
                                    color={contentColor}
                                    leftIcon={<FiMap size="20px" />}
                                >
                                    {data.address}
                                </Button>
                            </VStack>
                            <HStack
                                mt={4}
                                spacing={5}
                                px={5}
                                justifyContent={{
                                    base: "center",
                                    lg: "flex-start",
                                }}
                            >
                                {data.social_menus.map(({ name, link }) => {
                                    if (name === "facebook") {
                                        return (
                                            <Link
                                                href={link}
                                                key={name}
                                                title={name.toUpperCase()}
                                            >
                                                <IconButton
                                                    aria-label={name}
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{
                                                        bg: `${name}.600`,
                                                    }}
                                                    icon={
                                                        <FiFacebook size="28px" />
                                                    }
                                                />
                                            </Link>
                                        );
                                    } else if (name === "twitter") {
                                        return (
                                            <Link
                                                href={link}
                                                key={name}
                                                title={name.toUpperCase()}
                                            >
                                                <IconButton
                                                    aria-label={name}
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{
                                                        bg: `${name}.600`,
                                                    }}
                                                    icon={
                                                        <FiTwitter size="28px" />
                                                    }
                                                />
                                            </Link>
                                        );
                                    } else if (name === "linkedin") {
                                        return (
                                            <Link
                                                href={link}
                                                key={name}
                                                title={name.toUpperCase()}
                                            >
                                                <IconButton
                                                    aria-label={name}
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{
                                                        bg: `${name}.600`,
                                                    }}
                                                    icon={
                                                        <FiLinkedin size="28px" />
                                                    }
                                                />
                                            </Link>
                                        );
                                    } else {
                                        return (
                                            <Link
                                                href={link}
                                                key={name}
                                                title={name.toUpperCase()}
                                            >
                                                <IconButton
                                                    aria-label={name}
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: `red.600` }}
                                                    icon={
                                                        <FiYoutube size="28px" />
                                                    }
                                                />
                                            </Link>
                                        );
                                    }
                                })}
                            </HStack>
                        </Box>

                        <Box bg="white" borderRadius="lg" m={8}>
                            <Zoom>
                                <Image
                                    width={"100%"}
                                    height="400px"
                                    src={"/assets/location-map-resized.webp"}
                                />
                            </Zoom>
                        </Box>
                    </SimpleGrid>
                    <AspectRatio ration={16 / 9} mt="8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8576852768524!2d85.329329!3d27.72168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1913dfb0b0b3%3A0x4d5d3519d24d3c38!2sSouth%20Asia%20Watch%20on%20Trade%2C%20Economics%20and%20Environment%20(SAWTEE)!5e0!3m2!1sen!2snp!4v1700216228197!5m2!1sen!2snp"
                            width="100%"
                            height="500"
                            allowfullscreen="true"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </AspectRatio>
                </Box>
            </Box>
        </Content>
    );
};

export default Contact;
