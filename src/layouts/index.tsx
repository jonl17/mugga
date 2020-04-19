import React from 'react'
import { Grommet } from "grommet"
import { myTheme } from "./theme"
import "./global.css"

// components
import Header from "../components/Header"

type LayoutProps = {
  children: React.ReactChildren
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <Grommet style={{ height: "100%", width: "100%" }} theme={myTheme}>
      <Header form="fat"></Header>
      {children}
    </Grommet>
  )
}

export default Layout
