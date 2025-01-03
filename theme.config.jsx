import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default {
  project: {
    link: 'https://autonomys.xyz',
    icon: (
      <img
        src="/logo-black.png"
        alt="Autonomys Network Logo"
        style={{
          height: '32px',
          marginRight: '0.5rem',
        }}
      />
    )
  },
  docsRepositoryBase: 'https://github.com/autonomys/developer_docs',
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
      <span>Developer Documentation</span>
    </>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'theme',
    forcedTheme: undefined,
  },
  primaryHue: {
    light: 220,
    dark: 220,  
  },
  themeSwitch: {
    useToggleTheme: true,
  },
  navbar: {
    extraContent: (
      <>
        <a 
          href="https://github.com/autonomys/developer_docs" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nx-mr-4 nx-flex nx-items-center"
        >
          <img 
            src="/github-logo.png" 
            alt="GitHub" 
            className="nx-h-5 nx-w-5"
            style={{
              height: '32px',
              marginRight: '0.5rem',
            }}
          />
        </a>
        <a 
          href="https://discord.com/invite/subspace-network" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nx-flex nx-items-center"
        >
          <img 
            src="/discord-logo.png" 
            alt="Discord" 
            className="nx-h-5 nx-w-5"
            style={{
              height: '32px',
              marginRight: '0.5rem',
            }}
          />
        </a>
        <a 
          href="https://x.com/AutonomysNet" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nx-flex nx-items-center"
        >
          <img 
            src="/twitter-logo.png" 
            alt="Discord" 
            className="nx-h-5 nx-w-5"
            style={{
              height: '32px',
              marginRight: '0.5rem',
            }}
          />
        </a>
      </>
    )
  },
  footer: {
    text: '© 2025 Autonomys Network. All rights reserved.',
  },
  components: {
    h1: ({ children }) => (
      <h1 style={{ color: '#5f77b7', fontWeight: 'bold' }}>{children}</h1>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        style={{ color: '#5f77b7', textDecoration: 'underline' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  css: {
    ':root': {
      '--primary-color': '#5f77b7',
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
