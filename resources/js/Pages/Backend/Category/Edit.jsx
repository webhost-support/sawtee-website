import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import EditCategoryForm from "./Partials/EditCategoryForm";

export default function Edit({ auth, category, categories }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Category" />
            <EditCategoryForm category={category} categories={categories} />
        </AuthenticatedLayout>
    );
}
