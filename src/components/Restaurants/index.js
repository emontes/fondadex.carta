import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const Restaurants = ({ restaurants }) => {
  return (
    <Wrapper>
      <ul className="categories">
        {restaurants.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/${item.slug}`} className="restaurant">
                {
                  item.logo &&
                  <Image
                  fluid={item.logo.childImageSharp.fluid}
                  className="logo"
                  alt={`Fonda de Santa Clara ${item.title}`}
                />
                }
                
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .restaurant {
    color: var(--clr-primary-5);
    font-size: 2rem;
    font-weight: 700;
    text-transform: capitalize;
    padding-left: 1rem;
    display: block;
    cursor: pointer;
    text-align: center;
    margin-bottom: 1rem;

    width: 80vw;
    margin: 2rem auto;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--clr-grey-5);
  }
  .logo {
    width: 25vw;
    margin: auto;
  }
`

export default Restaurants
