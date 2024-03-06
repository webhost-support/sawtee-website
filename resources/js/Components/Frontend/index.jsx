import { useState } from "react";
import {
    Box,
    Text,
    useColorModeValue,
    Heading,
    HStack,
    Divider,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Image,
    Input,
} from "@chakra-ui/react";
import { HiChevronRight, HiChevronDown, HiArrowRight } from "react-icons/hi";
import styled from "@emotion/styled";
import { Link } from "@inertiajs/react";
import ChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";

// A debounced input react component
export function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <Input
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export const Content = styled(Box)`
    word-break: break-word;

    line-height: var(--chakra-lineHeights-tall);

    * {
        max-width: 100%;
    }

    & ul,
    ol {
        padding: 0;
        margin: 0;
        margin-left: 1rem;

        & p,
        li {
            margin-top: 1rem;
            font-size: inherit;
        }
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    & figure {
        margin: 24px auto;
        /* next line overrides an inline style of the figure element. */
        width: 100% !important;
    }

    & iframe {
        display: block;
        margin: auto;
    }

    & a {
        text-decoration-thickness: 2px;
        text-underline-offset: 3px;
    }
`;

export const GlassBox = ({ children, ...rest }) => {
    return (
        <Box
            border="1px solid"
            borderColor={useColorModeValue("#ebebeb", "#333")}
            rounded="xl"
            shadow="lg"
            w="full"
            bg="var(--color-bg)"
            {...rest}
        >
            {children}
        </Box>
    );
};

export const Accordian = ({ data }) => {
    const [accordianData, setAccordianData] = useState([...data]);

    const ChangeAccordianOpenState = (id, open) => {
        const newState = accordianData.map((obj) => {
            // 👇️ if id equals 2d, update open property
            if (obj.open === true) {
                return { ...obj, open: false };
            }
            if (obj.id === id) {
                return { ...obj, open: !open };
            }

            // 👇️ otherwise return object as is
            return obj;
        });

        setAccordianData(newState);
    };

    function createMarkup(content) {
        return { __html: `${content}` };
    }

    return (
        <Wrapper>
            {accordianData.map(({ name, content, id, open }) => {
                return (
                    <li
                        key={id}
                        onClick={() => ChangeAccordianOpenState(id, open)}
                    >
                        <div className="accordian-item">
                            <p>{name}</p>
                            {open ? (
                                <HiChevronDown size={"3rem"} />
                            ) : (
                                <HiChevronRight size={"3rem"} />
                            )}
                        </div>
                        {open ? (
                            <div className="accordian-content">
                                <p
                                    dangerouslySetInnerHTML={createMarkup(
                                        content
                                    )}
                                />
                            </div>
                        ) : null}
                    </li>
                );
            })}
        </Wrapper>
    );
};

export const FancyTitle = ({ title, ...rest }) => {
    return (
        <HStack
            position="relative"
            justify={"space-evenly"}
            padding="10"
            mb="6"
            gap="4"
            {...rest}
        >
            <Divider h="2px" bg="gray.800" _dark={{ bg: "whiteAlpha.800" }} />
            <Box
                bg="blackAlpha.800"
                color="whiteAlpha.900"
                _dark={{ bg: "whiteAlpha.800", color: "gray.800" }}
                px="4"
                py="2"
                shadow="xl"
            >
                <Heading
                    as="h3"
                    fontSize={{ base: "md", md: "lg", lg: "2xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    w="max-content"
                >
                    {title}
                </Heading>
            </Box>

            <Divider h="2px" bg="gray.800" _dark={{ bg: "whiteAlpha.800" }} />
        </HStack>
    );
};

export const MapModel = ({ isOpen, onClose, mapLink }) => {
    const modalContentColor = useColorModeValue(
        "rgba(255, 255, 255, 0.7)",
        "rgba(0, 0, 0, 0.7)"
    );
    const modelHeaderColor = useColorModeValue("gray.700", "whiteAlpha.900");
    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
            closeOnOverlayClick={true}
            blockScrollOnMount={true}
        >
            <ModalOverlay />
            <ModalContent bg={modalContentColor} maxW={"3xl"}>
                <ModalHeader color={modelHeaderColor}>Our Location</ModalHeader>
                <ModalCloseButton />
                <ModalBody margin={"0 auto"}>
                    <Image
                        w="100%"
                        height={"500px"}
                        objectFit={"cover"}
                        src={"/assets/location-map-resized.webp"}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button variant="solid" colorScheme={"primary"}>
                        <ChakraLink
                            href="https://goo.gl/maps/fwZuwNSbjN5jwZia7"
                            target="_blank"
                            onClick={onClose}
                        >
                            View in Google Map
                        </ChakraLink>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export const Title = ({ text, color, ...rest }) => {
    return (
        <Text
            as="h3"
            m="0"
            fontSize={{ base: "xl", md: "2xl" }}
            fontFamily="heading"
            color={
                color ? color : useColorModeValue("gray.800", "whiteAlpha.800")
            }
            {...rest}
        >
            {text}
        </Text>
    );
};

export const ExploreButton = ({ text = "Explore All", ...rest }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Button
            variant="solid"
            colorScheme={"primary"}
            aria-label="view all"
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(!hovered)}
            rightIcon={hovered ? <HiArrowRight /> : <HiChevronRight />}
            maxW="md"
            fontFamily={"mono"}
            fontWeight={"normal"}
            {...rest}
        >
            {text}
        </Button>
    );
};

export const StyledLink = styled(Link)`
    position: relative;
    text-decoration: none;
    font-size: ${(props) =>
        props.fontSize ? props.fontSize : "var(--chakra-fontSizes-sm)"};
    color: ${(props) => (props.color ? props.color : "inherit")};

    &::after {
        content: "";
        width: 0%;
        height: 2px;
        position: absolute;
        bottom: 1;
        left: 0;
        margin: 0;

        background: ${(props) => (props.color ? props.color : "#fff")};
        opacity: 0;
        transition: all 0.5s ease;
    }

    &:hover {
        text-decoration: none;
        &::after {
            width: 100%;
            opacity: 1;
        }
    }
`;

export const StyledChakraLink = styled(InertiaChakraLink)`
    position: relative;
    text-decoration: none;
    font-family: ${(props) =>
        props.fontFamily
            ? `var(--chakra-fonts-${props.fontFamily})`
            : "var(--chakra-fonts-body)"};
    font-size: ${(props) =>
        props.fontSize
            ? `var(--chakra-fontSizes-${props.fontSize})`
            : "var(--chakra-fontSizes-md)"};
    color: ${(props) => (props.color ? props.color : "inherit")};

    &::after {
        content: "";
        width: 0%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;

        background: ${(props) => (props.color ? props.color : "#fff")};
        opacity: 0;
        transition: all 0.5s ease;
    }

    &:hover {
        text-decoration: none;
        &::after {
            width: 100%;
            opacity: 1;
        }
    }
`;
