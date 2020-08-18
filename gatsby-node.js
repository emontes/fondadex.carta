const path = require("path")

//create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  // Create Restarants pages
  const resultRestaurants = await graphql(`
    {
      restaurants: allStrapiRestaurants(sort: { fields: id, order: ASC }) {
        nodes {
          title
          slug
        }
      }
    }
  `)

  resultRestaurants.data.restaurants.nodes.forEach(element => {
    createPage({
      path: `/${element.slug}`,
      component: path.resolve(`src/templates/restaurant-template.js`),
      context: {
        slug: element.slug,
        title: element.title,
      },
    })
  })
  
  
  
  // Create Categories pages
  const resultCategories = await graphql(`
  {
    categories: allStrapiCartaCategorias(sort: {fields: id, order: ASC}) {
      nodes {
        slug
        title
        strapiId
        restaurant {
          slug
        }
      }
    }
  }
  `)

  resultCategories.data.categories.nodes.forEach(element => {
      createPage({
          path: `/${element.restaurant.slug}/${element.slug}`,
          component: path.resolve(`src/templates/category-template.js`),
          context: {
              slug: element.slug,
              
              
              strapiId: element.strapiId,
          }
      })
  })
}
