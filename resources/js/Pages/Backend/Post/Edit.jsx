import React from "react";
import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import EditPostForm from "./Partials/EditPostForm";
import { Box } from "@chakra-ui/react";

export default function Edit({ post, auth, categories, tags, themes }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Post" />

            <Box py={6}>
                <EditPostForm
                    post={post}
                    categories={categories}
                    tags={tags}
                    themes={themes}
                />
            </Box>
        </AuthenticatedLayout>
    );
}
