/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Edith.",
    hero: {
      title: "The open learning platform",
      description:
        "Edith is a free and open-source learning platform based on Gatsby that helps educators focus on content.",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `sv`],
        defaultLanguage: `sv`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml-full`,
      options: {
        plugins: [`gatsby-yaml-full-markdown`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: "gatsby-remark-code-titles",
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
  ],
  pathPrefix: "/edith",
}
