import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import CreateThemeForm from "./Partials/CreateThemeForm";

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add New Theme" />

            <CreateThemeForm className="max-w-xl" />
        </AuthenticatedLayout>
    );
}
