import React from 'react'
import { CardProps } from "../types"
import slugify from "slugify"

import { CardBox, Image } from "./styled"
import Excerpt from "./Excerpt"

const Card: React.FC<CardProps> = ({ afangastadur }) => {

  const { frontmatter } = afangastadur
  const excerpt = {
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    tag: frontmatter.tag,
  }

  const generatePagePath = (title: string, landshluti: string) => {
    let url = ""
    const slug = slugify(title, { lower: true })
    url = "/" + landshluti + "/" + slug
    return url
  }


  return (
    <CardBox to={generatePagePath(frontmatter.title, frontmatter.landshluti)}>
      <Image fluid={frontmatter.mynd.childImageSharp.fluid}></Image>
      <Excerpt excerpt={excerpt}></Excerpt>
    </CardBox >
  )
}

export default Card
