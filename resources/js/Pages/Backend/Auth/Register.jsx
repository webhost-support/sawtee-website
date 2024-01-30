import { useEffect, useState } from "react";
import GuestLayout from "@/Pages/Backend/Layouts/GuestLayout";
import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    VStack,
    Center,
    InputGroup,
    InputRightElement,
    FormErrorMessage,
    IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handlePasswordClick = () => setShowPassword(!showPassword);
    const handleConfirmPasswordClick = () =>
        setShowConfirmPassword(!showConfirmPassword);

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    const ShowButton = ({ callback }) => {
        return (
            <IconButton
                h="1.75rem"
                size="sm"
                rounded="md"
                bg={useColorModeValue("gray.300", "gray.700")}
                _hover={{
                    bg: useColorModeValue("gray.400", "gray.800"),
                }}
                onClick={callback}
                icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
            />
        );
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Container maxW="7xl" p={{ base: 5, md: 10 }}>
                <Center>
                    <Stack spacing={4}>
                        <Stack align="center">
                            <Heading fontSize="2xl">
                                Sign in to your account
                            </Heading>
                        </Stack>
                        <VStack
                            boxSize={{ base: "md", sm: "lg", md: "xl" }}
                            h="max-content !important"
                            bg={useColorModeValue("white", "gray.700")}
                            rounded="lg"
                            boxShadow="lg"
                            p={{ base: 5, sm: 10 }}
                            spacing={8}
                            as={"form"}
                            onSubmit={submit}
                        >
                            <VStack spacing={4} w="100%">
                                <FormControl
                                    id="name"
                                    isInvalid={errors.name}
                                    isRequired
                                >
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <Input
                                        rounded="md"
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="username"
                                        placeholder="type your username"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <FormErrorMessage mt={2}>
                                            {errors.email}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                                <FormControl
                                    id="email"
                                    isInvalid={errors.email}
                                    isRequired
                                >
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input
                                        rounded="md"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your email.."
                                        autoComplete="email"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <FormErrorMessage mt={2}>
                                            {errors.email}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                                <FormControl
                                    id="password"
                                    isInvalid={errors.password}
                                >
                                    <FormLabel htmlFor="password">
                                        Password
                                    </FormLabel>
                                    <InputGroup size="md">
                                        <Input
                                            rounded="md"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            id="password"
                                            name="password"
                                            placeholder="type your secure password"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputRightElement width="4.5rem">
                                            <ShowButton
                                                callback={handlePasswordClick}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                    {errors.password && (
                                        <FormErrorMessage mt={2}>
                                            {errors.password}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                                <FormControl
                                    id="password_confirmation"
                                    isInvalid={errors.password_confirmation}
                                >
                                    <FormLabel htmlFor="password_confirmation">
                                        Confirm Password
                                    </FormLabel>
                                    <InputGroup size="md">
                                        <Input
                                            rounded="md"
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            placeholder="type your secure password again"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputRightElement width="4.5rem">
                                            <ShowButton
                                                callback={
                                                    handleConfirmPasswordClick
                                                }
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                    {errors.password_confirmation && (
                                        <FormErrorMessage mt={2}>
                                            {errors.password_confirmation}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                            </VStack>
                            <Stack
                                direction="row"
                                justify="space-between"
                                alignItems={"center"}
                                w="100%"
                            >
                                <Link href={route("login")}>
                                    <Button
                                        fontSize={{
                                            base: "md",
                                            sm: "md",
                                        }}
                                        variant={"link"}
                                    >
                                        Already Registered?
                                    </Button>
                                </Link>
                                <PrimaryButton
                                    type="submit"
                                    rounded="md"
                                    isLoading={processing}
                                    minW={"64"}
                                >
                                    Register
                                </PrimaryButton>
                            </Stack>
                        </VStack>
                    </Stack>
                </Center>
            </Container>
        </GuestLayout>
    );
}
