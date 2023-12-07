import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import "../src/styles/globals.css";
import {ThemeProvider} from "../src/components/theme/theme-provider"
import * as React from "react"
import {darkUIStorybook, lightUIStorybook, commonTheme} from "./themes-storybook-ui"
import {Toaster} from "../src/components/ui/toaster"

const preview: Preview = {
  parameters: {
    // https://storybook.js.org/addons/storybook-dark-mode
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      // Override the default dark theme
      dark: { ...themes.dark, ...darkUIStorybook, ...commonTheme},
      // Override the default light theme
      light: { ...themes.normal, ...lightUIStorybook, ...commonTheme},
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
    options: {
      storySort: {
        method: 'alphabetical',
        order: ["Introduction","Examples","Shadcn","Colors","Typography"],
      },
    }
  },
}
// Decoradores: https://storybook.js.org/docs/react/writing-stories/decorators#page-top
export const decorators = [
 (Story) => {
  return <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
          <div>
              <Story />    
              <Toaster />
          </div>
    </ThemeProvider>
 }
 ,
  withThemeByClassName({
   themes: {
     light: 'light',
     dark: 'dark',
   },
   defaultTheme: 'dark',
 }),
]

export default preview;
