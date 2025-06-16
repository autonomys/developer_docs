import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

export default withNextra({
  async redirects() {
    return [
      {
        source: '/sdk/auto-drive',
        destination: '/sdk/auto-drive/overview_setup',
        permanent: true,
      }
    ]
  }
})