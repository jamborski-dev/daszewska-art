module.exports = {
  pathPrefix: "/daszewska-art",
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
        ignore: [`**/\.*`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-fontawesome-css`,
    'gatsby-plugin-react-helmet'
  ],
  siteMetadata: {
    title: 'Zuzanna Daszewska - Art Portfolio',
  },
};
