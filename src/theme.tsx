import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "::selection": {
      background: "#004AAD",
      color: "white",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
