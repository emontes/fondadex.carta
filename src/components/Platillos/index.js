import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Platillo from "./Platillo"
import {FaAngleLeft} from "react-icons/fa"
const Platillos = ({ catego }) => {
  console.log("--- Desde platillos.index ", catego)
  const platillos = catego.platillos
  const restaurant = catego.restaurant.slug
  console.log(platillos)
  return (
    <Wrapper>
      
      
        {catego.strapiChildren.map((item, index) => {
        return (
          <ul>
            <li key={index}>
              <Link to={`/${restaurant}/${item.slug}`} className="category">
                {item.title}
              </Link>
              <div className="line"></div>
            </li>
          </ul>
        )
        })}
      
      
      

      {platillos.map(item => {
          return <Platillo key={item.id} {...item} />
      })}

      <Link 
        to={`/${restaurant}`}
        className="category"
      ><FaAngleLeft /> Categorías</Link>
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

    width: 80vw;
    margin: 1rem auto 0.2rem;
  }
  .line {
    margin: auto;
    width: 35%;
    height: 2px;
    background: var(--clr-grey-3);
  }
`

export default Platillos
