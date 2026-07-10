import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './style.css';
import { routes } from './router';

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    // register global components, plugins, etc. here
  },
);
