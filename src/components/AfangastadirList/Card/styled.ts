import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import colors from "~/layouts/colors"

export const CardBox = styled(Link)`
  display: grid;
  grid-template-rows: 3fr 1fr;
  position: relative;
  border: 1px solid ${colors.black};
  &&:hover {
    cursor: pointer;
  }
`
export const Image = styled(Img)`
  position: absolute !important;
  height: 100%;
  width: 100%;
`