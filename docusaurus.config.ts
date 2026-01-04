import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ValenVRC Docs',
  tagline: 'Foxes are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.valenvrc.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ElMoha943', // Usually your GitHub org/user name.
  projectName: 'valenvrc-docs', // Usually your repo name.
  deploymentBranch: 'deploy',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','es', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ElMoha943/valenvrc-docs/tree/main/',
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
            'https://github.com/ElMoha943/valenvrc-docs/tree/main/',
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
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ValenVRC Docs',
      logo: {
        alt: 'ValenVRC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/tos',
          label: 'Terms of Service',
          position: 'left',
        },
        {
          to: '/privacy_policy',
          label: 'Privacy Policy',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        /* {to: '/blog', label: '', position: 'left'}, */
        {
          href: 'https://github.com/ElMoha943/valenvrc-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Stores',
          items: [
            {
              label: 'Gumroad',
              href: 'https://store.valenvrc.com',
            },
            {
              label: 'Jinxxy',
              href: 'https://jinxxy.com/valenvrc',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/MyVeCdx6QE',
            },
            {
              label: 'X',
              href: 'https://x.com/ValenVRC943',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/valenn.vrc/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@valenvrc',
            }
          ],
        },
        {
          title: 'More',
          items: [
            /* {
              label: 'Blog',
              to: '/blog',
            }, */
            {
              label: 'Portfolio',
              href: 'https://valenvrc.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ElMoha943/valenvrc-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ValenVRC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
