import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dan Haggerty - Software Engineer`,
    siteUrl: `https://www.dhaggerty.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jobs',
        path: `${__dirname}/jobs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'personal-life',
        path: `${__dirname}/personal-life`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 500,
      },
    },
    {
      resolve: 'gatsby-plugin-exclude',
      // This fixes an issue where gatsby-plugin-mdx causes .mdx files
      // from /jobs to be created as a page like /personal-life/null
      options: { paths: ['/personal-life/null'] },
    },
    'gatsby-plugin-netflify',
  ],
};

export default config;
