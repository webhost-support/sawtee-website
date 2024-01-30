import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import CreateMenuForm from "./Partials/CreateMenuForm";


export default function Create({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add New Menu" />

            <CreateMenuForm className="max-w-xl" />
        </AuthenticatedLayout>
    );
}
