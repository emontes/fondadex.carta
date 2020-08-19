import React from 'react'
import { Link } from "gatsby"
import Image from "gatsby-image"

const Categoria = ({index, item, restaurant}) => {
    return (
        <ul className="child-categos">
            <li key={index}>
              <Link to={`/${restaurant}/${item.slug}`} className="category border">
                {item.title_image ? (
                  <Image
                    fluid={item.title_image.childImageSharp.fluid}
                    alt={item.title}
                  />
                ) : (
                  <>
                    {item.title}
                    <div className="line"></div>
                  </>
                )}
              </Link>
            </li>
          </ul>
    )
}

export default Categoria
