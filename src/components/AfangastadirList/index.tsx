import React from 'react'
import { AfangastadirListProps } from "./types"

import Card from "./card"
import { Grid } from "./styled"

const AfangastadirList: React.FC<AfangastadirListProps> = ({ afangastadir }) => {
  return (
    <Grid>
      {afangastadir.map((stadur, index) => (
        <Card key={index} frontmatter={stadur.frontmatter}></Card>
      ))}
    </Grid>
  )
}

export default AfangastadirList