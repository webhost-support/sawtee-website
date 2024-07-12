import '../css/app.css';
import '../css/index.css';
import '../css/theme.css';
import './bootstrap';

import { customTheme } from '@/Utils/data';
import { extendTheme } from '@chakra-ui/react';
import { createInertiaApp } from '@inertiajs/react';
import * as Sentry from '@sentry/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { register } from 'swiper/element/bundle';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN_PUBLIC,
  integrations: [Sentry.replayIntegration()],
  // Session Replay
  // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysSessionSampleRate:
    import.meta.env.VITE_APP_ENV === 'developement' ? 1 : 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const appName = import.meta.env.VITE_APP_NAME || 'SAWTEE';
const theme = extendTheme(customTheme);
// register Swiper custom elements
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
      //   <ChakraProvider resetCSS theme={{ config, ...theme }}>
      <App {...props} />
      //   </ChakraProvider>
    );
  },
  progress: {
    delay: 250,
    color: 'primary.700',
    includeCSS: true,

    // Whether the NProgress spinner will be shown...
    showSpinner: true,
  },
});
