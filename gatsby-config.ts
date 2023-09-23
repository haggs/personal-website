import type { GatsbyConfig } from 'gatsby';
import netflifyAdapter from 'gatsby-adapter-netlify';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dan Haggerty - Software Engineer`,
    siteUrl: `https://www.dhaggerty.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  adapter: netflifyAdapter(),
  plugins: [
    'gatsby-plugin-netlify',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dan Haggerty',
        short_name: 'Dan Haggerty',
        start_url: '/',
        background_color: '#f8f9f7',
        theme_color: '#cc4250',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
  ],
};

export default config;
