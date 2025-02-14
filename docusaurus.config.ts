import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SkyUOI',
  tagline: 'Build free software',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.skyuoi.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SkyUOI', // Usually your GitHub org/user name.
  projectName: 'official-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SkyUOI',
      logo: {
        alt: 'SkyUOI Logo',
        src: 'img/logo.svg',
      },
      items: [
      {
          type: 'dropdown',
          position: 'left',
          label: 'Products',
          items: [
            {label: "OurChat", href: "/docs/products/ourchat/intro"},
            {label: "Zenith", href: "/docs/products/zenith/intro"},
          ],
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'developersSidebar',
        //   position: 'left',
        //   label: 'Developers',
        // },
        {
          type: 'doc',
          docId: 'developers/intro',
          position: 'left',
          label: 'Developers',
        },
        {
          type: 'doc',
          docId: 'join_us',
          position: 'left',
          label: 'Join Us',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/SkyUOI",
          label: "Github",
          position: "right"
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Products',
              to: '/docs/developers/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SkyUOI/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SkyUOI, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
