import React, { useContext } from 'react'
import { FilterContext } from "~/context/Filter"
import { Nav } from "grommet"
import styled from "styled-components"
import Tag from "./tag"

const ModifiedNav = styled(Nav)`
  align-items: center;
  height: 50%;
  justify-content: space-evenly;
`

const Filter = () => {
  const { tags, check } = useContext(FilterContext)
  return (
    <ModifiedNav pad="large" direction="column">
      {tags.map((tag, index) => (
        <React.Fragment key={index}>
          <Tag onClick={check} tag={tag} key={index} />
        </React.Fragment>
      ))}
    </ModifiedNav>
  )
}

export default Filter
