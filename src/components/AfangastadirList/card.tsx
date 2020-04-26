import React from 'react'
import { Afangastadur } from "./types"
import Img from "gatsby-image"
import { CardBox } from "./styled"

const Card: React.FC<Afangastadur> = ({ frontmatter: { title, mynd } }) => {
  return (
    <CardBox>
      <Img fluid={mynd.childImageSharp.fluid}></Img>
      <h2>{title}</h2>
    </CardBox>
  )
}

export default Card
