import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const appName = import.meta.env.VITE_APP_NAME || "SAWTEE";
const font_heading =
    "Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif";
const font_body = "system-ui, sans-serif";
const font_mono =
    "i-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono' monospace";
const config = {
    initialColorMode: "system",
    useSystemColorMode: true,
};
const theme = extendTheme({
    colors: {
        darkgray: {
            base: "#6D6D6D",
            light: "#DCD7CA",
            lighter: "#F5EFE0",
        },
        primary: {
            50: "#e1f8ff",
            100: "#bee4f1",
            200: "#9ad1e5",
            300: "#74bed9",
            400: "#50acce",
            500: "#3892b4",
            600: "#29728d",
            700: "#1a5165",
            800: "#09313f",
            900: "#001219",
        },
        accent: {
            50: "#e3f7fb",
            100: "#cbdfe3",
            200: "#afc8ce",
            300: "#92b2ba",
            400: "#759ca5",
            500: "#5b838b",
            600: "#45666d",
            700: "#30494f",
            800: "#192d31",
            900: "#001115",
        },
        light: {
            50: "#f0f4f3",
            100: "#d9dcdb",
            200: "#bec6c3",
            300: "#a3b0ac",
            400: "#879a94",
            500: "#6d807a",
            600: "#55645f",
            700: "#3e4744",
            800: "#252b29",
            900: "#0b0f0d",
        },
        headerBg: "#d9d9d9",
        footerBg: "#262626",
        linkColor: "rgba(8 ,126, 164, 1)",
    },
    fonts: {
        heading: font_heading,
        body: font_body,
        mono: font_mono,
    },
});
createInertiaApp({
    title: (title) => `${appName} | ${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ChakraProvider resetCSS theme={{ config, ...theme }}>
                <App {...props} />
            </ChakraProvider>
        );
    },
    progress: {
        delay: 250,
        color: "primary.700",
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: true,
    },
});
