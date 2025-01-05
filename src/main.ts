import { createApp } from 'vue';
import App from './App.vue';

// MITT
import { Emitter } from 'mitt';

// Configurations
import components from './app/components';
import loadAllRoutes from './app/router';
import pinia from './app/store';

// Plugins
import eventBus from './plugins/mitt';

// Primevue
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';

// Stylesheets
import './app/assets/styles/main.css';
import './app/assets/styles/variables.css';

// SVG Icons
import 'virtual:svg-icons-register';

const initialize = async () => {
  const app = createApp(App);
  const router = await loadAllRoutes();

  // Inject Pinia
  app.use(pinia);

  // Inject PrimeVue
  app.use(ConfirmationService);
  app.use(PrimeVue, {
    theme: 'none',
  });

  // Inject Vue Router
  app.use(router);

  // Register global event bus
  app.provide<Emitter<IBusEvent>>('eventBus', eventBus);

  // Register global components
  components(app);

  // Mount app
  app.mount('#main-content');
};

(async () => {
  await initialize();
})();
