import "../src/styles/globals.css"; // replace with the name of your tailwind css file
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
