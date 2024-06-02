import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";
import {
    Grid,
    GridItem,
    HStack,
    VStack,
    Text,
    Box,
    List,
    ListItem,
    Select,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    useToast,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { GlassBox } from "@/Components/Frontend";
import PrimaryButton from "@/Components/Backend/PrimaryButton";
import MultiSelect from "@/Components/Backend/MultiSelect";
import CreateMenuForm from "./Partials/CreateMenuForm";
import DeleteMenuForm from "./Partials/DeleteMenuForm";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";
import EditMenuItem from "./Partials/EditMenuItem";

export default function ManageMenu({
    auth,
    categories,
    menus,
    pages,
    desiredMenu,
    menuItems,
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const deleteMenu = useDisclosure();
    const [categoriesOptions, setCategoriesOptions] = useState([]);
    const [pagesOptions, setPagesOptions] = useState([]);
    const [menuItem, setMenuItem] = useState(null);
    const toast = useToast();
    const { get, delete: destroy, processing, errors } = useForm();

    useEffect(() => {
        categories.map((cat) => {
            setCategoriesOptions((prev) => [
                ...prev,
                { value: cat.id, label: cat.name },
            ]);
        });
    }, []);

    useEffect(() => {
        pages.map((page) => {
            setPagesOptions((prev) => [
                ...prev,
                { value: page.id, label: page.name },
            ]);
        });
    }, []);

    // const handleUpdate = (e, id) => {
    //     e.preventDefault();
    //     get(route("admin.menus.edit", id));
    // };

    const handleMenuSlected = (e, id) => {
        e.preventDefault();
        get(route("admin.manage.menus", id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Manage Menus" />
            <CreateMenuForm onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
            <DeleteMenuForm
                onOpen={deleteMenu.onOpen}
                isOpen={deleteMenu.isOpen}
                onClose={deleteMenu.onClose}
                menu={desiredMenu}
            />

            <GlassBox mb={6} p={6}>
                {menus.length <= 0 && (
                    <HStack spacing={4} variant="left-accent">
                        <Alert status="warning">
                            <AlertIcon />
                            <AlertTitle>No menu!</AlertTitle>
                            <AlertDescription>
                                Create a menu to add menu items.
                            </AlertDescription>
                        </Alert>

                        <Button onClick={onOpen}>Create new menu</Button>
                    </HStack>
                )}
                {menus.length > 0 && (
                    <HStack spacing={6}>
                        <Box w="full" maxW={"xl"}>
                            <Select
                                placeholder="Select menu to edit"
                                value={desiredMenu.id}
                                onChange={(e) =>
                                    handleMenuSlected(e, e.target.value)
                                }
                            >
                                {menus.map((menu) => (
                                    <option key={menu.id} value={menu.id}>
                                        {menu.title}
                                    </option>
                                ))}
                            </Select>
                        </Box>
                        <PrimaryButton variant={"outline"} onClick={onOpen}>
                            Add new menu
                        </PrimaryButton>
                        <Button
                            variant={"outline"}
                            colorScheme="red"
                            onClick={deleteMenu.onOpen}
                        >
                            Delete selected menu
                        </Button>
                    </HStack>
                )}
            </GlassBox>
            <Grid
                gridTemplateColumns={{
                    base: "1fr",
                    md: "1fr auto",
                    xl: "400px auto",
                }}
                gridTemplateRows={"auto"}
                gridGap={10}
            >
                <GridItem colSpan={1}>
                    <Box
                        borderBottom={
                            "5px solid var(--chakra-colors-primary-500)"
                        }
                    >
                        <Button
                            as="h4"
                            p={3}
                            colorScheme="primary"
                            size={"lg"}
                            rounded={"none"}
                        >
                            Add Menu Items
                        </Button>
                    </Box>
                    {desiredMenu && (
                        <Box>
                            <AddToMenu
                                options={categoriesOptions}
                                name="categories"
                                menu={desiredMenu}
                            />

                            <AddToMenu
                                options={pagesOptions}
                                name="pages"
                                menu={desiredMenu}
                            />

                            <AddCustomLink
                                menu={desiredMenu}
                                menuItems={menuItems ? menuItems : null}
                            />
                        </Box>
                    )}
                </GridItem>
                <GridItem colSpan={1}>
                    <Box
                        borderBottom={
                            "5px solid var(--chakra-colors-primary-500)"
                        }
                    >
                        <Button
                            as="h4"
                            p={3}
                            colorScheme="primary"
                            size={"lg"}
                            rounded={"none"}
                        >
                            Menu Structure
                        </Button>
                    </Box>
                    <MenuStructure
                        menuItems={menuItems}
                        menuItem={menuItem}
                        setMenuItem={setMenuItem}
                    />
                </GridItem>
            </Grid>
        </AuthenticatedLayout>
    );
}

const AddToMenu = ({ options, name, menu }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        menu_id: menu.id,
        ids: [],
        type: name,
    });
    const toast = useToast();

    const addToMenu = (e) => {
        e.preventDefault();
        post(route("admin.addMenuItems.menu"), {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    position: "top-right",
                    title: "Menu Created.",
                    description: "Menu Created Successfully",
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                });
                reset();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };
    return (
        <GlassBox mt={6} p={6}>
            <FormControl textAlign="left">
                <FormLabel htmlFor={name}>Select {name}</FormLabel>
                <MultiSelect
                    name={name}
                    id={name}
                    placeholder={"Select " + name}
                    options={options}
                    onChange={(e) => {
                        let array = [];
                        e.forEach((item) => array.push(item.value));
                        setData("ids", array);
                    }}
                />
            </FormControl>

            <Button
                mt={4}
                size={"sm"}
                isLoading={processing}
                onClick={(e) => addToMenu(e)}
            >
                Add to Menu
            </Button>
        </GlassBox>
    );
};

const AddCustomLink = ({ menu, menuItems }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        menu_id: menu.id,
        title: "",
        name: "",
        url: "",
        order: "",
        parent_id: null,
    });
    const toast = useToast();

    const addCustomLinkToMenu = (e) => {
        e.preventDefault();
        post(route("admin.addCustomLink.menu"), {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    position: "top-right",
                    title: "Menu Created.",
                    description: "Menu Created Successfully",
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                });
                reset();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };
    return (
        <GlassBox mt={6} p={6}>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Add Custom Link
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <VStack>
                            <FormControl isRequired isInvalid={!!errors.title}>
                                <FormLabel htmlFor="title">Title</FormLabel>
                                <Input
                                    name="title"
                                    id="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                            </FormControl>
                            <FormControl isRequired isInvalid={!!errors.name}>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                            </FormControl>
                            <FormControl isRequired isInvalid={!!errors.name}>
                                <FormLabel htmlFor="url">URL</FormLabel>
                                <Input
                                    name="url"
                                    id="url"
                                    value={data.url}
                                    onChange={(e) =>
                                        setData("url", e.target.value)
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="order">Order</FormLabel>
                                <Input
                                    type="number"
                                    name="order"
                                    id="order"
                                    value={data.order}
                                    onChange={(e) =>
                                        setData("order", e.target.value)
                                    }
                                />
                            </FormControl>
                            {menuItems && (
                                <FormControl>
                                    <FormLabel htmlFor="parent_id">
                                        Select parent menu item
                                    </FormLabel>
                                    <Select
                                        name="parent_id"
                                        id="parent_id"
                                        placeholder="Select parent"
                                        onChange={(e) =>
                                            setData("parent_id", e.target.value)
                                        }
                                    >
                                        {menuItems.map((menuItem) => (
                                            <option
                                                key={menuItem.id}
                                                value={menuItem.id}
                                            >
                                                {menuItem.title}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Button
                mt={4}
                size={"sm"}
                onClick={(e) => addCustomLinkToMenu(e, e.target.value)}
            >
                Add to Menu
            </Button>
        </GlassBox>
    );
};

const MenuStructure = ({ menuItems, menuItem, setMenuItem }) => {
    const editMenuItem = useDisclosure();
    const toast = useToast();
    const { delete: destroy, processing, errors } = useForm();
    const [MenuItems, setMenuItems] = useState(menuItems);

    useEffect(() => {
        const newMenuItems = [];
        menuItems &&
            menuItems
                .toSorted((a, b) => a.order - b.order)
                .map((menuItem) => {
                    if (!menuItem.parent_id) {
                        newMenuItems.push(menuItem);
                    }
                });
        setMenuItems(newMenuItems);
    }, [menuItems]);

    const handleEditMenuItem = (e, id) => {
        e.preventDefault();
        const newMenuItem = menuItems.filter(
            (MenuItem) => MenuItem.id == id
        )[0];
        setMenuItem(newMenuItem);
        editMenuItem.onOpen();
    };

    const handleDeleteMenuItem = (e, id) => {
        e.preventDefault();
        destroy(route("admin.deleteMenuItem.menu", id), {
            preserveScroll: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Menu Item deleted.",
                    description: "Menu Item deleted Successfully",
                    status: "error",
                    duration: 6000,
                    isClosable: true,
                }),
            onError: () => console.log("Error while deleting"),
        });
    };

    return (
        <>
            {menuItem && (
                <EditMenuItem
                    onOpen={editMenuItem.onOpen}
                    isOpen={editMenuItem.isOpen}
                    onClose={editMenuItem.onClose}
                    item={menuItem}
                    setMenuItem={setMenuItem}
                    menuItems={MenuItems}
                />
            )}

            <GlassBox mt={6} p={6}>
                {MenuItems && MenuItems.length > 0 && (
                    <List>
                        {MenuItems.map((item, idx) => (
                            <ListItem key={item.id} mb={4}>
                                <HStack justify={"space-between"}>
                                    <Text>
                                        {idx + 1}. {item.title}
                                    </Text>
                                    <HStack spacing={4}>
                                        <TableEditAction
                                            onClick={(e) => {
                                                handleEditMenuItem(e, item.id);
                                            }}
                                            isDisabled={processing}
                                        />
                                        <TableDeleteAction
                                            onClick={(e) => {
                                                handleDeleteMenuItem(
                                                    e,
                                                    item.id
                                                );
                                            }}
                                            isDisabled={processing}
                                        />
                                    </HStack>
                                </HStack>

                                {item.children && item.children.length > 0 && (
                                    <List ml={6} mt={4}>
                                        {item.children
                                            .sort((a, b) => a.order - b.order)
                                            .map((child, idx) => (
                                                <ListItem key={child.id} mb={4}>
                                                    <HStack
                                                        justify={
                                                            "space-between"
                                                        }
                                                    >
                                                        <Text>
                                                            {idx + 1}.{" "}
                                                            {child.title}
                                                        </Text>
                                                        <HStack spacing={4}>
                                                            <TableEditAction
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    handleEditMenuItem(
                                                                        e,
                                                                        child.id
                                                                    );
                                                                }}
                                                                isDisabled={
                                                                    processing
                                                                }
                                                            />
                                                            <TableDeleteAction
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    handleDeleteMenuItem(
                                                                        e,
                                                                        child.id
                                                                    );
                                                                }}
                                                                isDisabled={
                                                                    processing
                                                                }
                                                            />
                                                        </HStack>
                                                    </HStack>
                                                </ListItem>
                                            ))}
                                    </List>
                                )}
                            </ListItem>
                        ))}
                    </List>
                )}
            </GlassBox>
        </>
    );
};
