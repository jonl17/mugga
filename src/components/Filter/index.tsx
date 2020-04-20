import React, { useState } from 'react'
import { CheckBox, Nav } from "grommet"
import styled from "styled-components"

interface TagProps {
  label: string
}

const ModifiedNav = styled(Nav)`
  align-items: center;
`

const Tag: React.FC<TagProps> = ({ label }) => {
  const [checked, setChecked] = useState(false)
  return <CheckBox checked={checked} onChange={(e) => setChecked(e.target.checked)} label={label}></CheckBox>
}

const Filter = () => {
  const tags = ["Veitingar", "Söfn", "Upplifun"]
  return (
    <ModifiedNav direction="column">
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </ModifiedNav>
  )
}

export default Filter
