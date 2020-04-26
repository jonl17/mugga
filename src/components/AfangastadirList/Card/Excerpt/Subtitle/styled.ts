import styled from "styled-components"
import colors from "~/layouts/colors"

type WrapProps = {
  height: string;
  paddingTop: string;
}

export const Wrap = styled.div`
  transition: .2s;
  overflow: hidden;
  height: ${(props: WrapProps) => props.height};
  position: relative;
  margin: -1rem;
  padding-top: ${(props: WrapProps) => props.paddingTop};
  background: ${colors.white};
  p {
    margin: 0;
    padding: 0 1rem;
    overflow: hidden;
    height:75px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`