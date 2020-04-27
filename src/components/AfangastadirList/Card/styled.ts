import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import colors from "~/layouts/colors"
import { fadeIn } from "~/shared/animations"

export const CardBox = styled(Link)`
  ${fadeIn};
  height: 100%;
  width: 100%;
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
  height: 85%;
  width: 100%;
`

export const BgWrap = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
  height: 100%;
  width: 120%;
  svg {
    height: 100%;
    width: 100%;
  }
`