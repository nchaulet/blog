module.exports = {
  siteMetadata: {
    title: 'Blog Nicolas Chaulet',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/posts`,
        name: "markdown-pages",
      },
    },
    'gatsby-transformer-remark'
  ],
}