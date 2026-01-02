import type { Preview } from '@storybook/nextjs-vite'

// Import global styles - This is what makes your CSS work in Storybook!
import '../common/styles/fonts.css';  // Custom fonts
import '../app/globals.css';          // Tailwind CSS and theme

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;