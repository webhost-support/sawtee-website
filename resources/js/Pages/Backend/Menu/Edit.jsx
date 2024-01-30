import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import EditMenuForm from "./Partials/EditMenuForm";

export default function Edit({ auth, menu }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit menu" />
            <EditMenuForm menu={menu} />
        </AuthenticatedLayout>
    );
}
