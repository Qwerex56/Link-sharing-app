import { setup, type Preview } from "@storybook/vue3";
import type { App } from "vue";
import { createPinia } from "pinia";

import "@/index.css";

const pinia = createPinia();
setup((app: App) => {
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
