import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Meters on Demand",
  description: "Meters on Demand, the Rainmeter package manager",
  srcDir: "docs",
  cleanUrls: true,
  themeConfig: {
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
      { text: "Documentation", link: "/cli/installing" },
      { text: "API", link: "/api/consuming-the-api" },
    ],

    sidebar: generateSidebar({
      documentRootPath: "docs",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: false,
      sortMenusByFrontmatterOrder: true,
    }),

    footer: {
      message: "Thank you to maxtron95, jeff, keifufu and modkavartini",
      // copyright: 'Copyright © 2023 Meters on Demand'
      copyright:
        'Released under the <a href="https://github.com/meters-on-demand/docs.rainmeter.skin/blob/main/LICENSE">MIT License</a>',
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
