import React from "react"
import Provider from "./src/context/Filter"

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}