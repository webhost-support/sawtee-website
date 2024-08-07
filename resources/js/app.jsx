import { ThemeProvider } from '@/components/theme-provider';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { register } from 'swiper/element/bundle';
import '../css/app.css';
import '../css/index.css';
import './bootstrap';

const appName = import.meta.env.VITE_APP_NAME ?? 'SAWTEE';
register();

createInertiaApp({
  title: title => `${appName} | ${title}`,
  resolve: name =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx')
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App {...props} />
      </ThemeProvider>
    );
  },
  progress: {
    delay: 250,
    color: '#006181',
    includeCSS: true,

    // Whether the NProgress spinner will be shown...
    showSpinner: true,
  },
});
