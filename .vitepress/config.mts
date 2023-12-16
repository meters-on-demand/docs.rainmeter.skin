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

    footer: {
      message: 'Thank you to creepertron95, jeff, keifufu and modkavartini',
      // copyright: 'Copyright © 2023 Meters on Demand'
      copyright: 'Released under the <a href="https://github.com/meters-on-demand/docs.rainmeter.skin/blob/main/LICENSE">MIT License</a>'
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/meters-on-demand" },
    ],
  },

  // We do a little bit of trolling
  // appearance: false,

  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#00aba9" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
});
