import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
   theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Playfair Display",  // romantic, slightly fancy serif
    body: "Quicksand",          // soft, round, readable sans-serif
    code: "IBM Plex Mono",      // keep code monospaced
  },
  colors: {
    lightMode: {
      light: "#fff6f8",        // blush paper
      lightgray: "#f2dfe6",    // soft rose gray
      gray: "#d6b6c2",         // muted pink-gray
      darkgray: "#6b4b57",     // warm plum text
      dark: "#2f1f26",         // deep wine
      secondary: "#d16c7d",    // rose accent 💗
      tertiary: "#f2a1b3",     // strawberry milk
      highlight: "rgba(209, 108, 125, 0.15)",
      textHighlight: "#ffd1dc88",
    },
    darkMode: {
      light: "#1a1216",        // dark rosewood
      lightgray: "#3a2a31",    // muted plum
      gray: "#7f5a68",         // dusty rose
      darkgray: "#f0dce2",     // soft pink-white text
      dark: "#fff1f5",         // warm light text
      secondary: "#f2a1b3",    // pink glow
      tertiary: "#d16c7d",     // rose accent
      highlight: "rgba(242, 161, 179, 0.18)",
      textHighlight: "#ffb7c588",
    },
  },
},
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
