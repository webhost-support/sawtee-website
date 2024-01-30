import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { DataTable } from "@/Components/Backend/DataTable";
import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";
import { Box, HStack, Text, useToast } from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";
import React from "react";

export default function Index({ auth, themes: data }) {
    const toast = useToast();
    const columnHelper = createColumnHelper();
    const { processing, delete: destroy, get } = useForm();

    const handleEdit = (e, id) => {
        e.preventDefault();
        get(route("admin.themes.edit", id));
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        destroy(route("admin.themes.destroy", id), {
            preserveScroll: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Category deleted.",
                    description: "Category deleted Successfully",
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
                cell: (info) => (
                    <Text w="64" noOfLines={1}>
                        {info.getValue()}
                    </Text>
                ),
                header: "Name",
            }),
            columnHelper.accessor("description", {
                cell: (info) => (
                    <Text w="96" noOfLines={1}>
                        {info.getValue()}
                    </Text>
                ),
                header: "Description",
            }),
            columnHelper.accessor("posts_count", {
                cell: (info) => info.getValue(),
                header: "Post Count",
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
            <Head title="Themes" />

            <Box mb={4}>
                <Link href={route("admin.themes.create")}>
                    <PrimaryButton>Create New theme</PrimaryButton>
                </Link>
            </Box>
            {data && (
                <DataTable defaultColumns={defaultColumns} data={data.data} />
            )}
        </AuthenticatedLayout>
    );
}
