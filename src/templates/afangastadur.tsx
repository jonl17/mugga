import React from 'react'
import { AfangastadurProps } from "./types"

const AfangastadurTemplate: React.FC<AfangastadurProps> = ({ pageContext: { title } }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default AfangastadurTemplate
