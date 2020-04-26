import React, { useState } from 'react'
import { ExcerptProps } from '../../types'

import { Wrap, Title, Tags } from "./styled"
import Subtitle from "./Subtitle"

const Excerpt: React.FC<ExcerptProps> = ({ excerpt }) => {
  const [collapsed, setCollapsed] = useState(true)
  const { title, subtitle, tag: tags } = excerpt
  return (
    <>
      <Wrap onMouseLeave={() => setCollapsed(true)} onMouseOver={() => setCollapsed(false)}>
        <Tags>
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </Tags>
        <Title>{title}</Title>
        <Subtitle collapsed={collapsed} subtitle={subtitle}></Subtitle>
      </Wrap>
    </>
  )
}

export default Excerpt
