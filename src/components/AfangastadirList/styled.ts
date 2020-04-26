import styled from "styled-components"
import { fadeIn } from "~/shared/animations"
import colors from "~/layouts/colors"

export const Grid = styled.div`
  ${fadeIn};
  display: grid;
  grid-template-columns: repeat( auto-fill, 17.5rem );
  grid-auto-rows: 25rem;
  grid-gap: 1rem;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem 0;
`
export const CardBox = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  background: ${colors.rgbaBlue};
`