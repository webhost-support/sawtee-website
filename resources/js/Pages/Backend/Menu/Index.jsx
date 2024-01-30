import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { DataTable } from "@/Components/Backend/DataTable";
import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";
import { Box, HStack, Tag, Text, useToast } from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";
import React from "react";

export default function Index({ auth, menus }) {
    const toast = useToast();
    const columnHelper = createColumnHelper();
    const { processing, delete: destroy, get } = useForm();

    const handleEdit = (e, id) => {
        e.preventDefault();
        get(route("admin.menus.edit", id));
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        destroy(route("admin.menus.destroy", id), {
            preserveScroll: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Menu deleted.",
                    description: "Menu deleted Successfully",
                    status: "error",
                    duration: 6000,
                    isClosable: true,
                }),
            onError: () => console.log("Error while deleting"),
        });
    };

    const defaultColumns = React.useMemo(
        () => [
            columnHelper.accessor("title", {
                cell: (info) => info.getValue(),
                header: "Title",
            }),
            columnHelper.accessor("location", {
                cell: (info) => info.getValue(),
                header: "Location",
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
            <Head title="Menus" />

            <Box mb={4}>
                <Link href={route("admin.menus.create")}>
                    <PrimaryButton>Add New Menu</PrimaryButton>
                </Link>
            </Box>
            {menus && (
                <DataTable defaultColumns={defaultColumns} data={menus} />
            )}
        </AuthenticatedLayout>
    );
}
