import React from 'react'
import styled from "styled-components"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"

const Platillo = ({
    title,
    suffix,
    price,
    description,
    imagen
}) => {
    console.log("desde Platillo: ", description)
    return (
        <Wrapper>
            <h3>{title}</h3>
            {
                imagen &&
                <Image
                  className="image"
                  fluid={imagen.childImageSharp.fluid}
                  alt=""
                />
                
            }
            <ReactMarkdown source={description} />
            <footer>
                <span className="date">{suffix}</span>
                <span className="price">${price}</span>
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.article`
  position: relative;
  border: 1px solid var(--clr-grey-9);
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: var(--light-shadow);
  background-color: var(--clr-grey-10);
  border-radius: var(--radius);
  transition: var(--transition);
  h3 {
    font-size: 1.3rem;
  }

  :hover {
    background-color: var(--clr-white);
    box-shadow: var(--dark-shadow);
  }

  .image {
    width: 200px;
  height: auto;
    border-radius: var(--radius);
    float: left;
    margin-right: 1rem;
  }

  .price {
    background: var(--clr-grey-9);
    padding: 0.25rem 0.5rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }

  footer {
    margin-top: 1rem;
    padding-top: 0.3rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-primary-5);
        margin-right: 0.5rem;
      }
    }
  }
`

export default Platillo
