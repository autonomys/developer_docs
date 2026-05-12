import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { CustomFooter } from './components/customFooter';
import { CustomNavbar } from './components/customNavbar';
import { useConfig } from 'nextra-theme-docs';

export default {
  head: () => {
    const { frontMatter } = useConfig();
    return (
      <>
        {/* Dynamic page title based on frontMatter.title */}
        <title>
          {frontMatter.title
            ? `${frontMatter.title}`
            : 'Autonomys Developer Hub'}
        </title>
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N417BD8BLW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N417BD8BLW');
            `
          }}
        />
        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.png"
        />
      </>
    );
  },
  project: {
    link: 'https://autonomys.xyz',
    icon: (
      <img
        src="/logo-black.png"
        alt="Autonomys Network Logo"
        style={{
          height: '24px',
          marginRight: '0.5rem',
          '@media (min-width: 768px)': {
            height: '32px',
          }
        }}
      />
    )
  },
  sidebar: {
    defaultMenuCollapsed: false,
    hiddenPages: ['/'], // Hide the sidebar only on the landing page
  },
  docsRepositoryBase: 'https://github.com/autonomys/developer_docs/blob/main',
  logo: (
    <>
      <img
        src="/logo-black.png"
        alt="Autonomys Network Logo"
        style={{
          height: '24px',
          marginRight: '0.5rem',
          '@media (min-width: 768px)': {
            height: '32px',
          }
        }}
      />
      <span
        className="hidden md:inline-block"
        style={{
          fontSize: '1.25rem',
          fontWeight: '600',   
          color: '#374151',   
          cursor: 'pointer',  
          transition: 'color 0.3s ease', 
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#6366F1')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
      >
        Developer Documentation
      </span>
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
    extraContent: <CustomNavbar />,
  },
  footer: {
    component: CustomFooter
  },
};
