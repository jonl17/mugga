import styled from "styled-components"

type WrapProps = {
  height: string;
}

export const Wrap = styled.div`
  transition: .2s;
  overflow: hidden;
  height: ${(props: WrapProps) => props.height};
  p {
    margin: 0;
  }
`