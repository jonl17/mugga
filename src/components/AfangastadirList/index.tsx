import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from "~/context/Filter"
import { AfangastadirListProps, Afangastadur } from "./types"
import { filterStadirByTags } from "~/shared/methods"

import Card from "./Card"
import { Grid } from "./styled"


const AfangastadirList: React.FC<AfangastadirListProps> = ({ afangastadir: allAfangastadir }) => {

  const { tags: contextTags } = useContext(FilterContext)
  const [stadir, setStadir] = useState<Afangastadur[]>([])

  useEffect(() => {
    const filtered = filterStadirByTags(contextTags, allAfangastadir)
    setStadir(filtered)
  }, [contextTags])


  return (

    <Grid>

      {stadir.map((stadur, index) => (
        <Card key={index} afangastadur={stadur}></Card>
      ))}

    </Grid>
  )
}

export default AfangastadirList