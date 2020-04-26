import styled, { css } from "styled-components"
import { Box, Heading } from "grommet"
import colors from "~/layouts/colors"

type TitleProps = {
  marginBottom: string;
}

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
export const HoverDetect = styled.div`
  ${WrapDefaults};
  background: transparent;
  left: 0;
  height: 200px;
`
export const Title = styled(Heading)`
  font-size: 1.5rem;
  margin: 0 0 ${(props: TitleProps) => props.marginBottom} 0;
  transition: margin 0.2s;
  z-index: 1;
  pointer-events: none;
`
export const Tags = styled.div`
  display: flex;
  p {
    margin: 0 1rem 0 0;
  }
`