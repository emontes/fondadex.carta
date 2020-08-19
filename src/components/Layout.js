import React from 'react'
import styled from "styled-components"

const Layout = ({children}) => {
    return (
        <Wrapper>
           {children}
        </Wrapper>
    )
}

const Wrapper = styled.main`
  max-width: 1024px;
  margin: auto;
`
export default Layout
