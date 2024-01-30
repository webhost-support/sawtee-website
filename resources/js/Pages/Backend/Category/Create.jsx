import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import CreateCategoryForm from "./Partials/CreateCategoryForm";

export default function Create({ auth, categories }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add New Category" />

            <CreateCategoryForm className="max-w-xl" categories={categories} />
        </AuthenticatedLayout>
    );
}
