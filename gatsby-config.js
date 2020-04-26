const aliases = {
  "~": "src"
}

module.exports = {
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
    {
      resolve:
        `gatsby-source-filesystem`,
      options: {
        name: `afangastadir`,
        path: `${__dirname}/static/afangastadir`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: aliases,
        extensions: [`ts`, `tsx`]
      }
    }
  ],
}
