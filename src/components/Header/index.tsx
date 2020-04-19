import React from 'react'
import { Box, Heading } from "grommet"
import styled from "styled-components"

interface HeaderProps {
  form: "fat" | "thin"
}

type BoxProps = {
  width: string
}

const MutatedBox = styled(Box)`
  width: ${(props: BoxProps) => props.width};
  transition: .2s;
`

const Header: React.FC<HeaderProps> = ({ form }) => {
  return (
    <MutatedBox width={form === "fat" ? "100%" : "15%"} background="green" pad="medium" fill>
      <Heading alignSelf="center">Mugga</Heading>
    </MutatedBox>
  )
}

export default Header
