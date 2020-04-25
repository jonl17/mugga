import React from 'react'
import { AfangastadirListProps } from "./types"
import Spjald from "./spjald"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, 20rem );
  grid-auto-rows: 25rem;
  grid-gap: 1rem;
  justify-content: space-between;
`

const AfangastadirList: React.FC<AfangastadirListProps> = ({ afangastadir }) => {
  return (<Grid>
    {afangastadir.map((stadur, index) => (
      <Spjald key={index} frontmatter={stadur.frontmatter}></Spjald>
    ))}
  </Grid>
  )
}

export default AfangastadirList