import React from 'react'
import { Grommet } from "grommet"
import { myTheme } from "./theme"
import "./global.css"
import styled from "styled-components"
// components
import Header from "../components/Header"

type LayoutProps = {
  children: React.ReactChildren,
  location: {
    pathname: string
  }
}

const Grid = styled.div`
  height: 100%;
  display: flex;
`


const Layout: React.FC<LayoutProps> = ({ children, location: { pathname } }) => {
  return (
    <Grommet style={{ height: "100%", width: "100%" }} theme={myTheme}>
      <Grid>
        <Header pathname={pathname}></Header>
        {children}
      </Grid>
    </Grommet>
  )
}

export default Layout
