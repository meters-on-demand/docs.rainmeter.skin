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
      { text: "Documentation", link: "/cli/usage" },
      { text: "API", link: "/api/" },
    ],

    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "Installing", link: "/cli/" },
          { text: "Usage", link: "/cli/usage" },
        ],
      },
      {
        text: "Skin developers",
        items: [
          { text: "Publishing your skin", link: "/adding-skins" },
          { text: "Package", link: "/cli/package" },
          { text: "Init", link: "/cli/init" },
        ],
      },
      {
        text: "API",
        items: [
          { text: "Consuming the API", link: "/api/" },
          { text: "Skin schema", link: "/api/schema" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/meters-on-demand" },
    ],
  },
});
