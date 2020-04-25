import React from 'react'
import { AfangastadirListProps } from "./types"

const AfangastadirList: React.FC<AfangastadirListProps> = ({ afangastadir }) => {
  console.log(afangastadir)
  return (<div>
    {afangastadir.map((item, index) => (
      <h3 key={index}>{item.frontmatter.title}</h3>
    ))}
  </div>
  )
}

export default AfangastadirList