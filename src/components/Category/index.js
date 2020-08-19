import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const Categories = ({ restaurant, categos }) => {
  console.log("---- Desde Categories: ", categos)
  return (
    <Wrapper>
      {categos.map((item, index) => {
        return (
          <ul>
            <li key={index}>
              <Link to={`/${restaurant}/${item.slug}`} className="category">
                {item.title_image ? (
                  <Image
                    fluid={item.title_image.childImageSharp.fluid}
                    alt={item.title}
                    className="catego-image"
                    
                  />
                ) : (
                  <>item.title
                  <div className="line"></div>
                  </>
                  
                )}
              </Link>
              
            </li>
          </ul>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  .category {
    

    color: var(--clr-grey-3);
    font-size: 1.7rem;
    font-weight: 700;

    padding-left: 1rem;
    display: block;
    cursor: pointer;
    text-align: center;

    width: 80%;
    margin: 1rem auto 0.3rem;

    
    transition: var(--transition);
    transform: scale(0.9);
    :hover {
      transform: scale(1);
    }    
  }

  .catego-image {
    position: relative;
    
    transition: var(--transition);
    opacity: 0.9;
    :hover {
      opacity: 1;
      
    }
  }
  .line {
    margin: auto;
    width: 35%;
    height: 1px;
    background: var(--clr-grey-1);
  }
`

export default Categories
