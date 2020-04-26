import React from 'react'
import { Afangastadur } from "../types"
import slugify from "slugify"

import { CardBox, Image } from "./styled"
import Excerpt from "./Excerpt"

const Card: React.FC<Afangastadur> = ({ frontmatter }) => {

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
