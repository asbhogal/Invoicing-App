import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  async webpackFinal(config, { configType }) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/lib": path.resolve(__dirname, "../lib"),
        "@/components": path.resolve(__dirname, "../components"),
        "@/stories": path.resolve(__dirname, "../stories"),
        "@/types": path.resolve(__dirname, "../types"),
      };
    }
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
