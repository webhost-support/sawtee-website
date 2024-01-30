import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    useToast,
    Input,
    Textarea,
} from "@chakra-ui/react";

export default function CreateThemeForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
    });
    const toast = useToast();

    const submit = (e) => {
        e.preventDefault();
        console.log(data);

        post(route("admin.themes.store"), {
            preserveScroll: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Theme Created.",
                    description: "Theme Created Successfully",
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                }),
            onError: (errors) => {
                if (errors.name) {
                    reset("name");
                }
            },
        });
    };

    return (
        <form onSubmit={submit}>
            <FormControl mt="4" isInvalid={errors.title}>
                <FormLabel htmlFor="title">Title</FormLabel>

                <Input
                    id="title"
                    name="title"
                    placeholder="enter theme name"
                    onChange={(e) => setData("title", e.target.value)}
                    required
                />

                <FormErrorMessage message={errors.title} className="mt-2" />
            </FormControl>

            <FormControl mt="4" isInvalid={errors.description}>
                <FormLabel htmlFor="title">Description</FormLabel>

                <Textarea
                    id="description"
                    name="description"
                    rows={10}
                    placeholder="enter theme description"
                    onChange={(e) => setData("description", e.target.value)}
                />

                <FormErrorMessage
                    message={errors.description}
                    className="mt-2"
                />
            </FormControl>

            <Box display="flex" gap="4" mt="4">
                <PrimaryButton type="submit" disabled={processing}>
                    Save
                </PrimaryButton>
            </Box>
        </form>
    );
}
