import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Radio or Keysmash?`,
    description:
      "Play a fun game where you guess whether you're seeing a real mobile network radio, or a random assortment of letters and numbers.",
    siteUrl: `https://isthisaradio.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-provide-react',
    'gatsby-plugin-emotion',
    'gatsby-plugin-less',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radio or Keysmash?`,
        short_name: `Radio or Keysmash?`,
        start_url: `/`,
        background_color: `#232328`,
        theme_color: `#232328`,
        display: `standalone`,
        icon: 'src/assets/signal_icon.svg',
      },
    },
  ],
}

export default config
