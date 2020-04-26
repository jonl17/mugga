import { keyframes, css } from "styled-components"

const fadeInKeyframes = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
export const fadeIn = css`
  opacity: 0;
  animation: ${fadeInKeyframes} .5s ease .1s forwards;
`