import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Categories = ({ restaurant, categos }) => {
  return (
    <Wrapper>
      {categos.map((item, index) => {
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
    margin: 1rem auto 0.3rem;
  }
  .line {
    margin: auto;
    width: 35%;
    height: 2px;
    background: var(--clr-grey-3);
  }
`

export default Categories
