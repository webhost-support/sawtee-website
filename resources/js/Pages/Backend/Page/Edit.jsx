import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import EditPageForm from "./Partials/EditPageForm";

export default function Create({ auth, page }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Page" />

            <EditPageForm page={page} />
        </AuthenticatedLayout>
    );
}
