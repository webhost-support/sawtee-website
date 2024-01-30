import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile" />

            <Box py={12}>
                <Box maxW="7xl" mx={"auto"} px={{ sm: 6, lg: 8 }} py={6}>
                    <Box
                        p={{ base: 4, sm: 8 }}
                        bg={useColorModeValue("white", "gray.800")}
                        shadow={"md"}
                        rounded={"lg"}
                    >
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </Box>

                    <Box
                        p={{ base: 4, sm: 8 }}
                        bg={useColorModeValue("white", "gray.800")}
                        shadow={"md"}
                        rounded={"lg"}
                    >
                        <UpdatePasswordForm className="max-w-xl" />
                    </Box>

                    <Box
                        p={{ base: 4, sm: 8 }}
                        bg={useColorModeValue("white", "gray.800")}
                        shadow={"md"}
                        rounded={"lg"}
                    >
                        <DeleteUserForm className="max-w-xl" />
                    </Box>
                </Box>
            </Box>
        </AuthenticatedLayout>
    );
}
