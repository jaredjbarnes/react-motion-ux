import { configure, addParameters } from "@storybook/react";

configure(require.context("../src/", true, /\.stories\.(js)$/), module);

// Option defaults.
addParameters({
  options: {
    theme: { ...themes.light }
  }
});
