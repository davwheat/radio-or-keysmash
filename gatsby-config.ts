import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Radio or Keysmash`,
    siteUrl: `https://isthisaradio.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-provide-react', 'gatsby-plugin-emotion', 'gatsby-plugin-less', '@vtex/gatsby-plugin-nginx'],
}

export default config
