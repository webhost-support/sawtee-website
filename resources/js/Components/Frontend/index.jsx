import { default as ChakraLink, default as InertiaChakraLink } from "@/Components/Frontend/styles/inertia-chakra-link";
import {
    Box,
    Button,
    Divider,
    HStack,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { HiArrowRight, HiChevronDown, HiChevronRight } from "react-icons/hi";

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
    font-size: var(--chakra-fontSizes-md);
    white-space: collapse balance;

    line-height: var(--chakra-lineHeights-taller);

    p {
        margin-top: 1.5rem;
        padding-bottom: 10px;
        font-size: var(--chakra-fontSizes-md);
        line-height: var(--chakra-lineHeights-taller);
    }

    * {
        max-width: 100%;
    }

    ul,
    ol {
        padding: 0;
        margin: 0;
        margin-left: 1rem;
        & p,
        li {
            margin-top: 1rem;
            font-size: var(--chakra-fontSizes-md);
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        word-break: break-word;
    }

    h1,
    h2,
    h3 {
        color: #204754;
    }

    h1 {
        font-size: var(--chakra-fontSizes-4xl);
    }

    h2 {
        font-size: var(--chakra-fontSizes-3xl);
    }

    h3 {
        font-size: var(--chakra-fontSizes-2xl);
    }

    h4 {
        font-size: var(--chakra-fontSizes-xl);
    }

    h5 {
        font-size: var(--chakra-fontSizes-lg);
    }

    h6 {
        font-size: var(--chakra-fontSizes-md);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    figure {
        margin: 24px auto;
        /* next line overrides an inline style of the figure element. */
        width: 100% !important;
    }

    iframe {
        display: block;
        margin: auto;
    }

    a {
        background-image: linear-gradient(
            white 50%,
            var(--chakra-colors-primary-300) 50%
        );
        transition: background 0.5s;
        background-size: auto 175%;

        &:hover {
            background-position-y: 100%;
            text-decoration: none;
            // color: #f1f1f1;
        }
    }
`;

export const GlassBox = ({ children, ...rest }) => {
    return (
        <Box
            border="1px solid"
            borderColor={useColorModeValue("#ebebeb", "#333")}
            rounded="md"
            shadow="md"
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
            scrollBehavior="inside"
            size={"xl"}
        >
            <ModalOverlay />
            <ModalContent bg={modalContentColor}>
                <ModalHeader color={modelHeaderColor}>Our Location</ModalHeader>
                <ModalCloseButton />
                <ModalBody margin={"0 auto"}>
                    <Image
                        objectFit={"cover"}
                        src={"/assets/location-map-resized.webp"}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button
                        as={ChakraLink}
                        size="sm"
                        variant="solid"
                        colorScheme={"primary"}
                        href="https://goo.gl/maps/fwZuwNSbjN5jwZia7"
                        target="_blank"
                        onClick={onClose}
                    >
                        Open in Google Map
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
    color: ${(props) =>
        props.color ? props.color : "var(--chakra-colors-gray-700)"};

    &::after {
        content: "";
        width: 0%;
        height: 2px;
        position: absolute;
        bottom: -2px;
        left: 0;
        margin: 0;

        background: ${(props) => (props.color ? props.color : "#fff")};
        opacity: 0;
        transition: all 0.5s ease;
    }

    &:hover {
        text-decoration: none;
        color: ${(props) =>
            props.hoverColor
                ? props.hoverColor
                : "var(--chakra-colors-whiteAlpha-700)"};
        &::after {
            width: 100%;
            opacity: 1;
        }
    }
`;
