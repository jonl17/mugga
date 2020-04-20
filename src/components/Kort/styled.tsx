import styled, { keyframes } from "styled-components"
import { Box } from "grommet"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ModifiedBox = styled(Box)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  svg {
    opacity: 0;
    animation: ${fadeIn} .5s ease .1s forwards;
    max-height: 90%;
    width: 100%;
    z-index: 8;
    box-sizing: border-box;
    pointer-events: none;
    transition:.2s;
  }
  path, polygon {
      fill: none;
      stroke: #000;
      stroke-miterlimit: 10;
  }
  .landshluti {
    pointer-events: fill;
    transition: .2s;
  }
  .landshluti:hover {
    fill: white;
    z-index: 8;
    cursor: pointer;
  }
`