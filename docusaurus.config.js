import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'fibe.gg',
  tagline: 'Launch full-stack environments in seconds',
  favicon: 'img/favicon.ico',

  headTags: [
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/icon-192.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: '/site.webmanifest' } },
  ],

  future: {
    v4: true,
  },

  url: 'https://fibe.gg',
  baseUrl: '/',

  organizationName: 'fibegg',
  projectName: 'marketing',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    localeConfigs: {
      en: { label: 'English' },
      uk: { label: 'Українська' },
    },
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
      metadata: [
        { name: 'description', content: 'Launch full-stack cloud environments in seconds. fibe.gg gives your team instant, isolated development environments powered by Docker.' },
        { name: 'keywords', content: 'cloud development environments, docker, devops, playgrounds, development, staging' },
        { property: 'og:title', content: 'fibe.gg — Launch full-stack environments in seconds' },
        { property: 'og:description', content: 'Instant, isolated cloud environments for development and staging. Powered by Docker.' },
        { property: 'og:type', content: 'website' },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'fibe.gg',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'custom-solutions-dropdown',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Plans',
            position: 'left',
            items: [
              { to: '/plans', label: 'All Plans' },
              { to: '/plans/tutorial', label: 'Tutorial' },
              { to: '/plans/single', label: 'Single Player' },
              { to: '/plans/multiplayer', label: 'Multiplayer' },
            ],
          },
          {
            to: '/teams',
            label: 'Teams',
            position: 'left',
          },
          {
            to: '/enterprise',
            label: 'Enterprise',
            position: 'left',
          },
          {
            to: '/affiliate',
            label: 'Affiliate',
            position: 'left',
          },
          {
            to: '/comparison',
            label: 'Compare',
            position: 'left',
          },
          {
            href: 'https://docs.fibe.gg',
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://blog.fibe.gg',
            label: 'Blog',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'Contact',
            position: 'right',
            className: 'navbar__link--contact',
          },
          {
            href: 'https://github.com/fibegg',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} fibe.gg — All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
