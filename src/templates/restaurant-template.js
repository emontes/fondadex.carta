import React from "react"
import Categories from "../components/Category"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout"

const RestaurantTemplate = ({ data, pageContext }) => {
  const {
    allStrapiCartaCategorias: { nodes: categos },
  } = data
  console.log(" ---- Desde Restaurant-template: ", data)
  return (
    <Layout >
    <Wrapper style={{ backgroundColor: data.restaurant.bgcolor }}>
      {data.restaurant.header_carta ? (
        <Image
          fluid={data.restaurant.header_carta.childImageSharp.fluid}
          className="header"
          alt={data.restaurant.title}
        />
      ) : (
        <h1>{data.restaurant.title}</h1>
      )}

      <Categories restaurant={pageContext.slug} categos={categos} />

      {data.restaurant.logo &&
        <Image
          fluid={data.restaurant.logo.childImageSharp.fluid}
          className="logo"
          alt={data.restaurant.title}
        />
      }
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`

  .header {
    width: 90%;
    margin: auto;
  }
  .logo {
    width: 25%;
    margin: auto;
    border-radius: var(--radius);
    margin-bottom: .5rem;
  }
`

export const query = graphql`
  query($slug: String) {
    allStrapiCartaCategorias(
      sort: { fields: id }
      filter: {
        strapiParent: { slug: { eq: null } }
        restaurant: { slug: { eq: $slug } }
      }
    ) {
      nodes {
        slug
        title
        bgcolor
        title_image {
          childImageSharp {
            fluid {
              #src
              ...GatsbyImageSharpFluid
            }
          }
        }
        restaurant {
          slug
        }
      }
    }

    restaurant: strapiRestaurants(slug: { eq: $slug }) {
      id
      title
      bgcolor
      logo {
        childImageSharp {
          fluid {
            #src
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      header_carta {
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
