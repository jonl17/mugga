import React from 'react'
import { Afangastadur } from "./types"
import Img from "gatsby-image"

const Spjald: React.FC<Afangastadur> = ({ frontmatter: { title, mynd } }) => {
  return (
    <div>
      <Img fluid={mynd.childImageSharp.fluid}></Img>
      <h2>{title}</h2>
    </div>
  )
}

export default Spjald
