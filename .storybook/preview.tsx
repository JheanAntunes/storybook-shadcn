import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import "../src/styles/globals.css";
const preview: Preview = {
  parameters: {
    // https://storybook.js.org/addons/storybook-dark-mode
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      // Override the default dark theme
      dark: { ...themes.dark,
      },
      // Override the default light theme
      light: { ...themes.normal, 
      },
       // Set the initial theme
      current: 'dark'
    },
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
