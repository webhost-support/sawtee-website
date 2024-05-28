import { Image, HStack, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState, useMemo } from "react";
import { DataTable } from "@/Components/Backend/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";
import { useForm } from "react-hook-form";
import EditSliderForm from "../Slider/Partials/EditSliderForm";

const Slides = ({ slides, slider }) => {
    const toast = useToast();
    const columnHelper = createColumnHelper();
    const { processing, delete: destroy } = useForm();
    const [editSlide, setEditSlide] = useState(null);
    const editSlideModal = useDisclosure();
    const handleEdit = (e, id) => {
        e.preventDefault();
        setEditSlide(slides.filter((slide) => slide.id === id)[0]);
        editSlideModal.onOpen();
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        destroy(route("admin.slides.destroy", id, slider.id), {
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

    const defaultColumns = useMemo(
        () => [
            columnHelper.accessor("title", {
                cell: (info) => info.getValue(),
                header: "Title",
            }),
            columnHelper.accessor("subtitle", {
                cell: (info) => info.getValue(),
                header: "Subtitle",
            }),
            columnHelper.accessor("media", {
                cell: (info) =>
                    info.getValue() && (
                        <Image
                            border={"1px solid var(--color-text)"}
                            width={"150px"}
                            height="75px"
                            objectFit="cover"
                            alt="preview_image"
                            rounded="md"
                            src={info.getValue()[0].preview_url}
                        />
                    ),
                header: "Image",
            }),

            columnHelper.accessor("id", {
                cell: (info) => {
                    return (
                        <HStack spacing={4}>
                            <TableEditAction
                                onClick={(e) => {
                                    handleEdit(e, info.getValue());
                                }}
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
        <>
            {editSlide && (
                <EditSliderForm
                    isOpen={editSlideModal.isOpen}
                    onClose={editSlideModal.onClose}
                    slider={slider}
                    slide={editSlide}
                    setEditSlide={setEditSlide}
                />
            )}
            <DataTable
                defaultColumns={defaultColumns}
                data={slides}
                pagination={false}
                showColumnFilters={false}
            />
        </>
    );
};

export default Slides;
