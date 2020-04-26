import React from 'react'
import { SubtitleProps } from "../../../types"

import { Wrap } from "./styled"

const Subtitle: React.FC<SubtitleProps> = ({ subtitle, collapsed }) => {
  return (
    <Wrap paddingTop={collapsed ? "0" : "3rem"} height={collapsed ? "0px" : "100px"}>
      <p>{subtitle}</p>
    </Wrap>
  )
}

export default Subtitle
