import styled, { css } from "styled-components"
import { Box, Heading } from "grommet"
import colors from "~/layouts/colors"


const WrapDefaults = css`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
`
export const Wrap = styled(Box)`
  ${WrapDefaults};
  transition: background .2s;
  box-sizing: border-box;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: ${colors.rgbaBlue};
`
export const Title = styled(Heading)`
  font-size: 1.5rem;
  margin: 0;
`
export const Tags = styled.div`
  display: flex;
  p {
    margin: 0 1rem 0 0;
  }
`