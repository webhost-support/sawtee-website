import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import EditSlideForm from "./Partials/EditSlideForm";

export default function Edit({ auth, slide, sliders }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Slide" />

            <EditSlideForm
                className="max-w-xl"
                slide={slide}
                sliders={sliders}
            />
        </AuthenticatedLayout>
    );
}
