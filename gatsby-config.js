/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve:
        `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`
      },
    },
    {
      resolve:
        `gatsby-source-filesystem`,
      options: {
        name: `landshlutar`,
        path: `${__dirname}/static/landshlutar`
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`
  ],
}
