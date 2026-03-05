import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Playgrounds.dev',
  tagline: 'Launch full-stack environments in seconds',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://playgrounds.dev',
  baseUrl: '/',

  organizationName: 'phoenix-playgrounds',
  projectName: 'marketing',
  trailingSlash: false,

  onBrokenLinks: 'throw',

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
      metadata: [
        { name: 'description', content: 'Launch full-stack cloud environments in seconds. Playgrounds.dev gives your team instant, isolated development environments powered by Docker.' },
        { name: 'keywords', content: 'cloud development environments, docker, devops, playgrounds, development, staging' },
        { property: 'og:title', content: 'Playgrounds.dev — Launch full-stack environments in seconds' },
        { property: 'og:description', content: 'Instant, isolated cloud environments for development and staging. Powered by Docker.' },
        { property: 'og:type', content: 'website' },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Playgrounds.dev',
        logo: {
          alt: 'Playgrounds.dev',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://docs.playgrounds.dev',
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://blog.playgrounds.dev',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/phoenix-playgrounds',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Playgrounds.dev — All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
