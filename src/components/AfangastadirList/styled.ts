import styled from "styled-components"
import { fadeIn } from "~/shared/animations"

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

