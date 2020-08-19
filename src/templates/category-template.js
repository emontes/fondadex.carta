import React from "react"
import Platillos from "../components/Platillos"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Layout from "../components/Layout"

const CategoryTemplate = ({ data }) => {
  
  return (
    <Layout>
    <Wrapper style={{backgroundColor: data.catego.bgcolor}}>
      {
        data.catego.title_image
        ?
        <Image 
          fluid={data.catego.title_image.childImageSharp.fluid}
          alt={data.catego.title}
        />
        :
        <h2>{data.catego.title}</h2>
      }
      
      <Platillos catego={data.catego} />
    </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`

  h2 {
    text-align: center;
  }
`

export const query = graphql`
  query($strapiId: Int) {
    catego: strapiCartaCategorias(id: {}, strapiId: { eq: $strapiId }) {
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
        logo {
          childImageSharp {
            fluid {
              #src
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      strapiParent {
        slug
        title
        title_image {
          childImageSharp {
            fluid {
              #src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      strapiChildren {
        slug
        title
        title_image {
          childImageSharp {
            fluid {
              #src
              ...GatsbyImageSharpFluid
            }
          }
        }
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
