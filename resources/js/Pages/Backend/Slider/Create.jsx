import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import CreateSliderForm from "./Partials/CreateSliderForm";

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add New Slider" />

            <CreateSliderForm />
        </AuthenticatedLayout>
    );
}
