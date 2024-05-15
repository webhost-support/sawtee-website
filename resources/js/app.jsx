import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { customTheme, config } from "@/Utils/data";
import { register } from "swiper/element/bundle";

const appName = import.meta.env.VITE_APP_NAME || "SAWTEE";
const theme = extendTheme(customTheme);
// register Swiper custom elements
register();

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
