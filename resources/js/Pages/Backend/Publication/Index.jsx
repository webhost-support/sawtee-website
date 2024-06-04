import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { DataTable } from "@/Components/Backend/DataTable";
import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";
import { Box, HStack, useDisclosure } from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";
import React from "react";
import DeletePublicationModal from "./Partials/DeletePublicationModal";

export default function Index({ auth, publications: data }) {
    const columnHelper = createColumnHelper();
    const { processing, delete: destroy, get } = useForm();
    const [publicationId, setPublicationId] = React.useState();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleEdit = (e, id) => {
        e.preventDefault();
        get(route("admin.publications.edit", id));
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        setPublicationId(id);
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
            columnHelper.accessor("category.name", {
                cell: (info) => info.getValue(),
                header: "Category",
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
            <Head title="Manage Publications" />
            <DeletePublicationModal
                isOpen={isOpen}
                onClose={onClose}
                id={publicationId}
            />
            <Box mb={4}>
                <Link href={route("admin.publications.create")}>
                    <PrimaryButton>Add New Publication</PrimaryButton>
                </Link>
            </Box>
            {data.data && (
                <DataTable defaultColumns={defaultColumns} data={data} />
            )}
        </AuthenticatedLayout>
    );
}
