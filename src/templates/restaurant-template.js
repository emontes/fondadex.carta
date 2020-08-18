import React from "react"
import Categories from "../components/Category"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const RestaurantTemplate = ({ data, pageContext }) => {
  const {
    allStrapiCartaCategorias: { nodes: categos },
  } = data
  console.log(data);
  return (
    <Wrapper>
      {data.restaurant.logo &&
        <Image 
        fluid={data.restaurant.logo.childImageSharp.fluid} 
        className="logo"
        alt={data.restaurant.title}
      />
      }
      {!data.restaurant.logo && <h1>{data.restaurant.title}</h1>}
      
      <Categories restaurant={pageContext.slug} categos={categos} />
    </Wrapper>
  )
}

const Wrapper = styled.div `
.logo {
  width: 200px;
  margin: auto;
}
`

export const query = graphql`
  query($slug: String) {
    allStrapiCartaCategorias(
      sort: { fields: id },
      filter: {
        strapiParent: { slug: { eq: null } }
        restaurant: { slug: { eq: $slug } }
      }
    ) {
      nodes {
        slug
        title
        restaurant {
            slug
        }
      }
    }

    restaurant:strapiRestaurants(slug: {eq: $slug}) {
      id
      title
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
`

export default RestaurantTemplate
