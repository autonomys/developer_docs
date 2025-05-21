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
        {/* Kapa AI widget script */}
        <script
          src="https://widget.kapa.ai/kapa-widget.bundle.js"
          data-website-id="125444e5-cd06-4812-b4e2-3cf33cd3f6fa"
          data-project-name="Autonomys Network"
          data-project-color="#f2f2f5"
          data-project-logo="https://i.postimg.cc/BQjSkRPy/Autonomys-small-light.png"
          data-modal-disclaimer="This is a custom LLM for Autonomys Network with access to all documentation, forum and discord threads. Since this is AI technology please use your best judgment."
          async
        />
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
