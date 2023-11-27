import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators:[
   withThemeByClassName({
     themes: {
       light: 'light',
       dark: 'dark',
     },
     defaultTheme: 'dark',
   }),
  ]
};


export default preview;
