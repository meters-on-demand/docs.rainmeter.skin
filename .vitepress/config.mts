import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Meters on Demand",
  description: "Meters on Demand, the Rainmeter package manager",
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: "local",
    },

    externalLinkIcon: true,

    logo: {
      light: "/box.svg",
      dark: "/package.svg",
      alt: "Meters on Demand package logo",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/cli" },
      { text: "API", link: "/api" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/meters-on-demand" },
    ],
  },
});
