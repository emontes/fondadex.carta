/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Cartas Fonda de Santa Clara`,
    description: `Restaurant Website build with Gatsby`,
    author: `@el_ade`,
  },
  plugins: [
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carta Fonda de Santa Clara`,
        short_name: `Carta Fonda`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 100, // Default to 100
        contentTypes: [`platillos`,`carta-categorias`, `restaurants`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
