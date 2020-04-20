import React from 'react'
import { navigate } from "gatsby"

interface LandshlutiProps {
  hluti: {
    name: string;
    d: string;
  }
}

const Landshluti: React.FC<LandshlutiProps> = ({ hluti }) => {
  return (
    <path onClick={() => navigate("/" + hluti.name)} className={"landshluti " + hluti.name}
      d={hluti.d} />
  )
}

export default Landshluti
