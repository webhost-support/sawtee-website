import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import CreateTagForm from "./Partials/CreateTagForm";

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add New Tag" />

            <CreateTagForm className="max-w-xl" />
        </AuthenticatedLayout>
    );
}
