import React, { useState } from 'react'
import { ExcerptProps } from '../../types'
import { tagsVerbose } from "~/shared/methods"

import { Wrap, Title, Tags, HoverDetect } from "./styled"
import Subtitle from "./Subtitle"

const Excerpt: React.FC<ExcerptProps> = ({ excerpt }) => {
  const [collapsed, setCollapsed] = useState(true)
  const { title, subtitle, tag: tags } = excerpt
  return (
    <>
      <Wrap >
        <Tags>
          {tags.map((tag, index) => (
            <p key={index}>{tagsVerbose(tag)}</p>
          ))}
        </Tags>
        <Title marginBottom={collapsed ? "1rem" : "-2.5rem"}>{title}</Title>
        <Subtitle collapsed={collapsed} subtitle={subtitle}></Subtitle>
      </Wrap>
      <HoverDetect onMouseLeave={() => setCollapsed(true)} onMouseEnter={() => setCollapsed(false)}></HoverDetect>
    </>
  )
}

export default Excerpt
