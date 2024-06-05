import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Button,
    useDisclosure,
    Alert,
    AlertIcon,
    useToast,
} from "@chakra-ui/react";
import Slides from "../../Slide/Slides";
import CreateSlideForm from "../../Slide/CreateSlideForm";
import {  SmallAddIcon } from "@chakra-ui/icons";

export default function EditSliderForm({ slider, slides }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: slider.name,
    });
    const toast = useToast();
    const createSlideForm = useDisclosure();

    const submit = (e) => {
        e.preventDefault();
        post(
            route("admin.sliders.update", {
                _method: "patch",
                slider: slider.id,
            }),
            {
                preserveScroll: true,
                onSuccess: () => {
                    toast({
                        position: "top-right",
                        title: "Slider Created.",
                        description: "Slider Created Successfully",
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                    });
                    onClose();
                },
                onError: (errors) => {
                    if (errors.title) {
                        reset("title");
                    }
                },
            }
        );
    };

    return (
        <>
            {slides.data.length < 1 && (
                <Alert
                    mb="4"
                    status="warning"
                    p="4"
                    rounded="md"
                    variant={"left-accent"}
                >
                    <AlertIcon />
                    No slides added yet.
                </Alert>
            )}

            <form onSubmit={submit}>
                <Box display="flex" gap="4" alignItems={"end"}>
                    <FormControl isInvalid={errors.name}>
                        <FormLabel htmlFor="name">Name</FormLabel>

                        <Input
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        <FormErrorMessage
                            message={errors.name}
                        />
                    </FormControl>
                    <Button
                        onClick={createSlideForm.onOpen}
                        leftIcon={<SmallAddIcon />}
                    >
                        Add slide
                    </Button>
                    <PrimaryButton type="submit" disabled={processing}>
                        Save slider
                    </PrimaryButton>
                </Box>
            </form>

            {slides.data.length > 0 && (
                <Box mt={6}>
                    <Slides slides={slides} slider={slider} />
                </Box>
            )}

            {createSlideForm.isOpen && (
                <CreateSlideForm
                    isOpen={createSlideForm.isOpen}
                    onClose={createSlideForm.onClose}
                    slider={slider}
                />
            )}
        </>
    );
}





