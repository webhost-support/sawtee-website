import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import EditSliderForm from "./Partials/EditSliderForm";
export default function Edit({ auth, slider, slides }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add New Slider" />

            <EditSliderForm slider={slider} slides={slides} />
        </AuthenticatedLayout>
    );
}
