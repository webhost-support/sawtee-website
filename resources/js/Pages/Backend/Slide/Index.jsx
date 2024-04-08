import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { DataTable } from "@/Components/Backend/DataTable";
import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";
import {
    HStack,
    Image,
    Box,
    Text,
    useToast,
    useColorModeValue,
} from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";
import React from "react";

export default function Index({ auth, slides, sliders, images }) {
    const toast = useToast();
    const columnHelper = createColumnHelper();
    const { processing, delete: destroy, get } = useForm();

    const handleEdit = (e, id) => {
        e.preventDefault();
        get(route("admin.slides.edit", id));
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        destroy(route("admin.slides.destroy", id), {
            preserveScroll: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Slider deleted.",
                    description: "Slider deleted Successfully",
                    status: "error",
                    duration: 6000,
                    isClosable: true,
                }),
            onError: () => console.log("Error while deleting"),
        });
    };

    const defaultColumns = React.useMemo(
        () => [
            columnHelper.accessor("id", {
                cell: (info) => info.getValue(),
                header: "ID",
            }),
            columnHelper.accessor("title", {
                cell: (info) => info.getValue(),
                header: "Title",
            }),
            columnHelper.accessor("subtitle", {
                cell: (info) => info.getValue(),
                header: "Subtitle",
            }),
            columnHelper.display({
                id: "image",
                cell: (info) => (
                    <Image
                        width={"100px"}
                        aspectRatio={16 / 9}
                        src={images[info.row.original.id]}
                    />
                ),
                header: "Image",
            }),
            columnHelper.display({
                id: "Actions",
                cell: (data) => {
                    return (
                        <HStack spacing={4}>
                            <TableEditAction
                                onClick={(e) =>
                                    handleEdit(e, data.row.original.id)
                                }
                                isDisabled={processing}
                            />
                            <TableDeleteAction
                                onClick={(e) =>
                                    handleDelete(e, data.row.original.id)
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
            <Head title="Slides" />
            {sliders.length <= 0 && (
                <Box
                    mb="4"
                    bg={useColorModeValue("orange.500", "orange.300")}
                    color={useColorModeValue("white", "gray.700")}
                    p="4"
                    rounded="md"
                >
                    <Text fontWeight={"semibold"}>
                        There are no sliders to add slides to, please add
                        sliders first.
                    </Text>
                </Box>
            )}
            <HStack gap="6" mb={4}>
                <PrimaryButton
                    as={Link}
                    href={route("admin.slides.create")}
                    isDisabled={sliders.length <= 0}
                >
                    Add New Slide
                </PrimaryButton>
                {sliders.length <= 0 && (
                    <PrimaryButton
                        as={Link}
                        href={route("admin.sliders.create")}
                    >
                        Add Slider
                    </PrimaryButton>
                )}
            </HStack>

            {slides && (
                <DataTable defaultColumns={defaultColumns} data={slides.data} />
            )}
        </AuthenticatedLayout>
    );
}
