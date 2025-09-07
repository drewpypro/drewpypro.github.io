// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DrewpyPro',
  tagline: 'Cybersecurity Architect | AI Enthusiast | ProGamer(not)',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://drewpypro.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'drewpypro', // Usually your GitHub org/user name.
  projectName: 'drewpypro.github.io', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DrewpyPro',
        logo: {
          alt: 'DrewpyPro Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/drewpypro',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'mailto:github@drewpy.mozmail.com',
            label: 'Contact',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/drewpypro',
              },
              {
                label: 'Email',
                href: 'mailto:github@drewpy.mozmail.com',
              },
            ],
          },
          {
            title: 'Expertise',
            items: [
              {
                label: 'Network Security',
                href: '#expertise',
              },
              {
                label: 'Cloud Architecture',
                href: '#expertise',
              },
              {
                label: 'AI/ML',
                href: '#interests',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Professional Highlights',
                href: '#highlights',
              },
              {
                label: 'Interests',
                href: '#interests',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DrewpyPro. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
