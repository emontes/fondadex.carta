import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Categoria from "./Categoria"
import Platillo from "./Platillo"
import { FaAngleLeft } from "react-icons/fa"
import Image from "gatsby-image"

const Platillos = ({ catego }) => {
  const platillos = catego.platillos
  const restaurant = catego.restaurant.slug
  console.log("--- Desde index Platillos", catego)
  return (
    <Wrapper>
      {catego.strapiChildren.map((item, index) => {
        return <Categoria key={item.id} item={item} restaurant={restaurant} />
      })}
      {platillos.map(item => {
        return <Platillo key={item.id} {...item} />
      })}
      {catego.strapiParent && (

        <Categoria
          key={catego.strapiParent.slug}
          item={catego.strapiParent}
          restaurant={restaurant}
        />
      )}
      
      <Link to={`/${restaurant}`} className="category">
        <FaAngleLeft /> Categorías
        {catego.restaurant.logo && (
          <Image
            fluid={catego.restaurant.logo.childImageSharp.fluid}
            className="logo"
            alt={catego.restaurant.title}
          />
        )}
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  .child-categos {
    margin-bottom: 1rem;
  }

  .category {
    color: var(--clr-grey-10);
    font-size: 1.7rem;
    font-weight: 700;

    padding-left: 1rem;
    display: block;
    cursor: pointer;
    text-align: center;

    width: 80%;
    margin: 1rem auto 0.2rem;
  }
  .border {
    border: 1px solid var(--clr-grey-3);
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }
  .line {
    margin: auto;
    width: 35%;
    height: 2px;
    background: var(--clr-grey-3);
  }
  .logo {
    width: 25%;
    margin: auto;
    border-radius: var(--radius);
    margin-bottom: 0.5rem;
  }
`

export default Platillos
