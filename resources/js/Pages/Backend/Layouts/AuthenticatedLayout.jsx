import {
    Box,
    Drawer,
    DrawerContent,
    useDisclosure,
    Show,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiLayout,
    FiBook,
    FiFileText,
    FiGlobe,
    FiGrid,
    FiUsers,
    FiMail,
} from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import { TbSlideshow } from "react-icons/tb";
import Header from "./Partials/Header";
import Sidebar from "./Partials/Sidebar";
import DrawerMenu from "./DrawerMenu";

const MenuItems = [
    {
        name: "Dashboard",
        icon: FiHome,
        route: "admin.dashboard",
    },
    {
        name: "Website",
        icon: FiGlobe,
        route: "home",
    },
    // {
    //     name: "Menu",
    //     icon: FiGrid,
    //     route: "admin.manage.menus",
    // },
    // {
    //     name: "Menu Items",
    //     icon: FiFeather,
    //     route: "admin.menu-items.index",
    // },
    {
        name: "Pages",
        icon: RiPagesLine,
        route: "admin.pages.index",
    },
    {
        name: "Sections",
        icon: FiLayout,
        route: "admin.sections.index",
    },
    {
        name: "Posts",
        icon: FiTrendingUp,
        route: "admin.posts.index",
    },
    {
        name: "Themes",
        icon: FiCompass,
        route: "admin.themes.index",
    },
    {
        name: "Tags",
        icon: FiCompass,
        route: "admin.tags.index",
    },
    {
        name: "Categories",
        icon: FiStar,
        route: "admin.categories.index",
    },
    {
        name: "Publications",
        icon: FiBook,
        route: "admin.publications.index",
    },
    {
        name: "Research",
        icon: FiFileText,
        route: "admin.research.index",
    },
    {
        name: "Team Members",
        icon: FiUsers,
        route: "admin.teams.index",
    },
    ,
    {
        name: "Slider",
        icon: TbSlideshow,
        route: "admin.sliders.index",
    },

    {
        name: "Subscribers",
        icon: FiMail,
        route: "admin.subscribers.list",
    },
];

export default function Authenticated({ user, children }) {
    const sidebar = useDisclosure();
    return (
        <Box as="section" bg="var(--color-body-bg)" minH="100dvh">
            <Show above="md">
                <Sidebar menu={MenuItems} />
            </Show>
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
                size="xs"
            >
                {/* <DrawerOverlay /> */}
                <DrawerContent w="60">
                    <DrawerMenu menu={MenuItems} borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box
                as="main"
                ml={{
                    base: 0,
                    md: 20,
                    lg: 48,
                }}
                transition=".3s ease"
                position={"relative"}
            >
                <Header
                    sidebar={sidebar}
                    name={user.name}
                    image={user?.image}
                    position="sticky"
                    top="0"
                    zIndex="100"
                />

                <Box as="section" p="4">
                    <Box
                        borderWidth="4px"
                        p={{ base: 4, md: 8 }}
                        borderStyle="dashed"
                        rounded="md"
                        minH={"calc(100vh - 6rem)"}
                    >
                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
