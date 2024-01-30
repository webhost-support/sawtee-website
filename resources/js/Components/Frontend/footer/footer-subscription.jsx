import {
    Heading,
    Container,
    Box,
    Checkbox,
    Text,
    FormControl,
    FormLabel,
    Input,
    useToast,
} from "@chakra-ui/react";
import PrimaryButton from "../../Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";

const FooterSubscription = () => {
    const { data, setData, post, processing, errors } = useForm();
    const toast = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();

        toast({
            position: "top-right",
            title: "Subscribed Successfully.",
            description:
                "You are now subscribed  to sawtee's monthly newsletter.",
            status: "success",
            duration: 6000,
            isClosable: true,
        });
    };

    return (
        <Box
            bg={"primary.200"}
            _dark={{ bg: "primary.800" }}
            maxW={"md"}
            shadow={"2xl"}
            rounded={"lg"}
            p={6}
            direction={"column"}
        >
            <Heading
                as={"h6"}
                fontSize={{ base: "sm", sm: "md" }}
                mb={3}
                textAlign={"center"}
            >
                Subscribe to our Newsletter
            </Heading>
            <Box fontSize={["xs"]} textAlign="center" fontStyle="italic" mb={2}>
                <Checkbox
                    defaultChecked
                    colorScheme="blue"
                    size="sm"
                    spacing={4}
                >
                    I agree receiving emails from SAWTEE.
                </Checkbox>
            </Box>
            <Box className="footer-form" margin={"0 auto"}>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <Input
                                id="email"
                                name="email"
                                placeholder="provide your email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </FormLabel>
                    </FormControl>
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </form>
            </Box>
        </Box>
    );
};

export default FooterSubscription;
