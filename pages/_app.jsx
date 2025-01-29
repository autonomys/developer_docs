import 'nextra-theme-docs/style.css';  // Move Nextra theme first
import '../styles/globals.css';        // Then your global styles to allow overrides

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}