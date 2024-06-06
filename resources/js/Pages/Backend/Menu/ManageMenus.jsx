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
    useColorModeValue,
    FormErrorMessage,
} from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { GlassBox } from "@/Components/Frontend";
import DeleteMenuItem from "../MenuItem/DeleteMenuItem";
import {
    TableDeleteAction,
    TableEditAction,
} from "@/Components/Backend/TableActions";
import EditMenuItem from "../MenuItem/EditMenuItem";
import EditMenuForm from "./Partials/EditMenu";
import { slugify } from "@/Utils/helpers";

export default function ManageMenu({
    auth,
    categories,
    sections,
    menus,
    pages,
    desiredMenu,
    menuItems,
}) {
    const editMenu = useDisclosure();
    const [menuItem, setMenuItem] = useState(null);
    const [MenuItems, setMenuItems] = useState(menuItems);
    const { get } = useForm();

    // const handleUpdate = (e, id) => {
    //     e.preventDefault();
    //     get(route("admin.menus.edit", id));
    // };

    const handleMenuSlected = (e, id) => {
        e.preventDefault();
        get(route("admin.manage.menus", id));
    };

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

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Manage Menus" />

            {editMenu.isOpen && (
                <EditMenuForm
                    isOpen={editMenu.isOpen}
                    onOpen={editMenu.onOpen}
                    onClose={editMenu.onClose}
                    menu={desiredMenu}
                />
            )}

            <GlassBox mb={6} p={6}>
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
                        <Button
                            variant={"outline"}
                            colorScheme="blue"
                            onClick={editMenu.onOpen}
                        >
                            Edit selected menu
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
                        borderBottom={"5px solid"}
                        borderColor={useColorModeValue(
                            "primary.300",
                            "primary.500"
                        )}
                    >
                        <Box
                            p={2}
                            bg={useColorModeValue("primary.500", "primary.700")}
                            w="max-content"
                            color="white"
                        >
                            Add Menu Items
                        </Box>
                    </Box>
                    {desiredMenu && (
                        <Box>
                            <AddToMenu
                                options={categories}
                                name="categories"
                                menu={desiredMenu}
                                menuItems={menuItems ? menuItems : null}
                            />

                            <AddToMenu
                                options={pages}
                                name="pages"
                                menu={desiredMenu}
                                menuItems={menuItems ? menuItems : null}
                            />

                            <AddToMenu
                                options={sections}
                                name="sections"
                                menu={desiredMenu}
                                pages={pages}
                                menuItems={menuItems ? menuItems : null}
                            />

                            <AddToMenu
                                name="custom link"
                                menu={desiredMenu}
                                menuItems={menuItems ? menuItems : null}
                            />
                        </Box>
                    )}
                </GridItem>
                <GridItem colSpan={1}>
                    <Box
                        borderBottom={"5px solid"}
                        borderColor={useColorModeValue(
                            "primary.300",
                            "primary.500"
                        )}
                    >
                        <Box
                            p={2}
                            bg={useColorModeValue("primary.500", "primary.700")}
                            w="max-content"
                            color="white"
                        >
                            Menu Structure
                        </Box>
                    </Box>
                    <MenuStructure
                        MenuItems={MenuItems}
                        menuItem={menuItem}
                        setMenuItem={setMenuItem}
                    />
                </GridItem>
            </Grid>
        </AuthenticatedLayout>
    );
}

const AddToMenu = ({ options, name, menu, menuItems, pages = null }) => {
    const [selectedData, setSelectedData] = useState(null);
    const [parent, setParent] = useState(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        menu_id: menu.id,
        title: "",
        name: "",
        url: "",
        order: menuItems.filter((menuItem) => !menuItem.parent_id).length + 1,
        parent_id: 0,
    });
    const toast = useToast();

    useEffect(() => {
        if (selectedData) {
            let url = "";
            switch (name) {
                case "pages":
                    url = `/${selectedData.slug}`;
                    break;
                case "sections":
                    const slug = slugify(selectedData.title);
                    url = `/#${slug}`;
                    break;
                case "categories":
                    url = selectedData.parent
                        ? `/category/${selectedData.parent.slug}/${selectedData.slug}`
                        : `/category/${selectedData.slug}`;
                    break;
                default:
                   url = `/${selectedData.slug}`;
            }

            setData({
                menu_id: menu.id,
                title: selectedData.name || selectedData.title,
                order: data.order,
                name: selectedData.name || selectedData.title,
                url: url,
            });
        }
    }, [selectedData]);

    useEffect(() => {
        let slug = "";
        if (parent) {
            slug = pages
                ? slugify(selectedData.title || selectedData.name)
                : "";
            const page = pages?.filter(
                (page) => page.id === selectedData.page_id
            )[0];
            setData({
                ...data,
                order:
                    menuItems.filter((menuItem) => menuItem.id === parent)[0]
                        .children.length + 1,
                url: pages ? `/${page.slug}#${slug}` : data.url,
            });
        }
        if (parent == 0) {
            slug = slugify(selectedData.title || selectedData.name);
            setData({
                ...data,
                order:
                    menuItems.filter((menuItem) => !menuItem.parent_id).length +
                    1,
                url: pages ? `/#${slug}` : data.url,
            });
        }
    }, [parent]);

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

                reset("name", "title", "order", "parent_id", "url");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };
    return (
        <GlassBox mt={6} p={6}>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            textTransform={"capitalize"}
                        >
                            Add {name}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <VStack spacing={4}>
                            {options && (
                                <FormControl textAlign="left">
                                    <FormLabel htmlFor={name}>
                                        Select {name}
                                    </FormLabel>
                                    <Select
                                        name={name}
                                        id={name}
                                        placeholder={"Select " + name}
                                        value={
                                            selectedData ? selectedData.id : ""
                                        }
                                        onChange={(e) => {
                                            const selected = options.filter(
                                                (option) =>
                                                    option.id == e.target.value
                                            )[0];
                                            setSelectedData(selected);
                                        }}
                                    >
                                        {options &&
                                            options.map((option) => {
                                                return (
                                                    <option
                                                        key={option.id}
                                                        value={option.id}
                                                    >
                                                        {option.name ||
                                                            option.title}
                                                    </option>
                                                );
                                            })}
                                    </Select>
                                </FormControl>
                            )}

                            <FormControl isRequired isInvalid={errors.title}>
                                <FormLabel htmlFor="title">Title</FormLabel>
                                <Input
                                    name="title"
                                    id="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                {errors.title && (
                                    <FormErrorMessage mt={2}>
                                        {errors.title}
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl isRequired isInvalid={errors.name}>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <FormErrorMessage mt={2}>
                                        {errors.name}
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl isRequired isInvalid={errors.url}>
                                <FormLabel htmlFor="url">URL</FormLabel>
                                <Input
                                    name="url"
                                    id="url"
                                    value={data.url}
                                    onChange={(e) =>
                                        setData("url", e.target.value)
                                    }
                                />
                                {errors.url && (
                                    <FormErrorMessage mt={2}>
                                        {errors.url}
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl isInvalid={errors.order}>
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
                                {errors.order && (
                                    <FormErrorMessage mt={2}>
                                        {errors.order}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            {menuItems && (
                                <FormControl isInvalid={errors.parent_id}>
                                    <FormLabel htmlFor="parent_id">
                                        Select parent menu item
                                    </FormLabel>
                                    <Select
                                        name="parent_id"
                                        id="parent_id"
                                        placeholder="Select parent"
                                        value={parent ? parent : ""}
                                        onChange={(e) => {
                                            setParent(Number(e.target.value));
                                            setData(
                                                "parent_id",
                                                e.target.value
                                            );
                                        }}
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
                                    {errors.parent_id && (
                                        <FormErrorMessage mt={2}>
                                            {errors.parent_id}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                            )}

                            <Button
                                mt={4}
                                size={"sm"}
                                isLoading={processing}
                                onClick={(e) => {
                                    addToMenu(e);
                                    setSelectedData(null);
                                    setParent(null);
                                }}
                            >
                                Add to Menu
                            </Button>
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </GlassBox>
    );
};

const MenuStructure = ({ MenuItems, menuItem, setMenuItem }) => {
    const editMenuItem = useDisclosure();
    const deleteMenuItem = useDisclosure();
    const handleEditMenuItem = (e, id) => {
        e.preventDefault();
        const newMenuItem = MenuItems.filter(
            (MenuItem) => MenuItem.id == id
        )[0];
        setMenuItem(newMenuItem);
        editMenuItem.onOpen();
    };

    const handleDeleteMenuItem = (e, id) => {
        e.preventDefault();
        const newMenuItem = MenuItems.filter(
            (MenuItem) => MenuItem.id == id
        )[0];
        setMenuItem(newMenuItem);
        deleteMenuItem.onOpen();
    };

    return (
        <>
            {menuItem && editMenuItem.isOpen && (
                <EditMenuItem
                    onOpen={editMenuItem.onOpen}
                    isOpen={editMenuItem.isOpen}
                    onClose={editMenuItem.onClose}
                    item={menuItem}
                    setMenuItem={setMenuItem}
                    menuItems={MenuItems}
                />
            )}
            {menuItem && deleteMenuItem.isOpen && (
                <DeleteMenuItem
                    onOpen={deleteMenuItem.onOpen}
                    isOpen={deleteMenuItem.isOpen}
                    onClose={deleteMenuItem.onClose}
                    item={menuItem}
                    setMenuItem={setMenuItem}
                />
            )}

            <GlassBox mt={6} p={6}>
                {MenuItems && MenuItems.length > 0 && (
                    <MenuItemsList
                        menuItems={MenuItems}
                        handleDeleteMenuItem={handleDeleteMenuItem}
                        handleEditMenuItem={handleEditMenuItem}
                    />
                )}
            </GlassBox>
        </>
    );
};

const MenuItemsList = ({
    menuItems,
    handleDeleteMenuItem,
    handleEditMenuItem,
    ...rest
}) => {
    return (
        <List display="flex" flexDir={"column"} gap="3" {...rest}>
            {menuItems.map((item, idx) => {
                return (
                    <Accordion allowToggle>
                        <AccordionItem p={2}>
                            <ListItem key={item.id}>
                                <HStack justify={"space-between"}>
                                    <Text>
                                        {item.order}. {item.name}
                                    </Text>

                                    <HStack spacing={4}>
                                        {item.children &&
                                            item.children.length > 0 && (
                                                <AccordionButton
                                                    rounded={"md"}
                                                    _hover={{
                                                        bg: useColorModeValue(
                                                            "blue.50",
                                                            "blue.200"
                                                        ),
                                                        color: "gray.700",
                                                    }}
                                                    _expanded={{
                                                        bg: "blue.500",
                                                        color: "white",
                                                    }}
                                                >
                                                    {"Submenu items"}
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            )}
                                        <TableEditAction
                                            onClick={(e) => {
                                                handleEditMenuItem(e, item.id);
                                            }}
                                        />
                                        <TableDeleteAction
                                            onClick={(e) => {
                                                handleDeleteMenuItem(
                                                    e,
                                                    item.id
                                                );
                                            }}
                                        />
                                    </HStack>
                                </HStack>
                            </ListItem>
                            {item.children && item.children.length > 0 && (
                                <>
                                    <AccordionPanel pb={4}>
                                        <MenuItemsList
                                            menuItems={item.children}
                                            handleDeleteMenuItem={
                                                handleDeleteMenuItem
                                            }
                                            handleEditMenuItem={
                                                handleEditMenuItem
                                            }
                                            ml={6}
                                            px={6}
                                            gap="2"
                                            mt={4}
                                            borderLeft={
                                                "1px solid var(--color-text)"
                                            }
                                            borderColor={useColorModeValue(
                                                "gray.400",
                                                "gray.200"
                                            )}
                                        />
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                );
            })}
        </List>
    );
};
