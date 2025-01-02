import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default {
  project: {
    link: 'https://www.autonomys.xyz/',
  },
  docsRepositoryBase: 'https://github.com/autonomys-network/docs/blob/main', // Adjust when pushed
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Autonomys Network Developer Documentation',
      defaultTitle: 'Autonomys Network Developer Documentation'
    };
  },
  logo: (
    <>
      <img
        src="/logo-black.png"
        alt="Autonomys Network Logo"
        style={{
          height: '32px',
          marginRight: '0.5rem',
        }}
      />
      <span>Autonomys Network Developer Documentation</span>
    </>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'theme',
    forcedTheme: undefined,
  },
  primaryHue: {
    light: 220, // Adjust for the hue in light mode if needed
    dark: 220,  // Matches your #163787
  },
  themeSwitch: {
    useToggleTheme: true,
  },
  navbar: {
    items: [
      { title: 'Auto SDK', href: '/auto-sdk' },
      { title: 'Auto EVM', href: '/auto-evm' },
    ],
  },
  footer: {
    text: '© 2025 Autonomys Network. All rights reserved.',
  },
  components: {
    h1: ({ children }) => (
      <h1 style={{ color: '#021955', fontWeight: 'bold' }}>{children}</h1>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        style={{ color: '#021955', textDecoration: 'underline' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  css: {
    ':root': {
      '--primary-color': '#021955',
      '--background-light': '#ffffff',
      '--background-dark': '#121212',
      '--text-color-light': '#000000',
      '--text-color-dark': '#ffffff',
    },
    body: {
      backgroundColor: 'var(--background-dark)',
      color: 'var(--text-color-dark)',
    },
  },
};
