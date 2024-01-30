import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { DataTable } from "@/Components/Backend/DataTable";
import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";
import { Box, HStack, useToast, useDisclosure } from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";
import React from "react";
import DeleteResearchModal from "./Partials/DeleteResearchModal";

export default function Index({ auth, researchs: data }) {
    const toast = useToast();
    const columnHelper = createColumnHelper();
    const { processing, delete: destroy, get } = useForm();
    const [researchId, setResearchId] = React.useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleEdit = (e, id) => {
        e.preventDefault();
        get(route("admin.research.edit", id));
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        setResearchId(id);
        onOpen();
    };

    const defaultColumns = React.useMemo(
        () => [
            columnHelper.accessor("title", {
                cell: (info) => info.getValue(),
                header: "Title",
            }),
            columnHelper.accessor("subtitle", {
                cell: (info) => info.getValue(),
                header: "Subtitle",
            }),
            columnHelper.accessor("description", {
                cell: (info) => info.getValue(),
                header: "Description",
            }),
            columnHelper.accessor("year", {
                cell: (info) => info.getValue(),
                header: "year",
            }),
            columnHelper.accessor("id", {
                cell: (info) => {
                    return (
                        <HStack spacing={4}>
                            <TableEditAction
                                onClick={(e) => handleEdit(e, info.getValue())}
                                isDisabled={processing}
                            />
                            <TableDeleteAction
                                onClick={(e) =>
                                    handleDelete(e, info.getValue())
                                }
                                isDisabled={processing}
                            />
                        </HStack>
                    );
                },
                header: "Actions",
            }),
        ],
        []
    );

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Research" />
            <DeleteResearchModal
                isOpen={isOpen}
                onClose={onClose}
                id={researchId}
            />
            <Box mb={4}>
                <Link href={route("admin.research.create")}>
                    <PrimaryButton>Add New Research</PrimaryButton>
                </Link>
            </Box>
            {data.data && (
                <DataTable defaultColumns={defaultColumns} data={data.data} />
            )}
        </AuthenticatedLayout>
    );
}
