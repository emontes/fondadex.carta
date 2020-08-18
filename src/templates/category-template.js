import React from "react"
import Platillos from "../components/Platillos"
import { graphql } from "gatsby"
import styled from "styled-components"

const CategoryTemplate = ({ data }) => {
  return (
    <Wrapper>
      <h2>{data.catego.title}</h2>
      <Platillos catego={data.catego} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  maxwidth: 1024px;
  h2 {
    text-align: center;
  }
`

export const query = graphql`
  query($strapiId: Int) {
    catego: strapiCartaCategorias(id: {}, strapiId: { eq: $strapiId }) {
      slug
      title
      restaurant {
        slug
      }
      strapiParent {
        slug
        title
      }
      strapiChildren {
        slug
        title
      }
      platillos {
        slug
        title
        suffix
        description
        price
        imagen {
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

export default CategoryTemplate
