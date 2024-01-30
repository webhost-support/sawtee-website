import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import EditThemeForm from "./Partials/EditThemeForm";

export default function Edit({ auth, theme }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={"Edit " + theme.title} />

            <EditThemeForm theme={theme} />
        </AuthenticatedLayout>
    );
}
