import React from "react"
import { graphql } from "gatsby"
import Restaurants from "../components/Restaurants"



const IndexPage = ({ data }) => {
  
  const {
    allStrapiRestaurants: { nodes: restaurants },
  } = data
  return (
    <div>
      
      <Restaurants restaurants={restaurants} />
    </div>
  )
}

export const query = graphql`
  {
    allStrapiRestaurants(sort: { fields: id, order: ASC }) {
      nodes {
        title
        slug
        logo {
          childImageSharp {
            fluid {
              #src
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
      
  }
`
export default IndexPage
