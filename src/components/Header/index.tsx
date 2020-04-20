import React, { useEffect, useState } from 'react'
import { Box, Heading } from "grommet"
import styled from "styled-components"

interface HeaderProps {
  pathname: string
}

type BoxProps = {
  width: string
}

const MutatedBox = styled(Box)`
  width: ${(props: BoxProps) => props.width};
  transition: .2s;
  position: relative;
  top: 0;
  left: 0;
  z-index: 8;
  h1 {
    z-index: 9;
  }
`

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  const [form, setForm] = useState("fat")
  useEffect(() => {
    if (pathname === "/") {
      setForm("fat")
    }
    else {
      setForm("thin")
    }
  }, [pathname])
  return (
    <MutatedBox width={form === "fat" ? "100%" : "12rem"} background="green" pad="small" fill>
      <Heading size="small" color="black" alignSelf="center">
        Mugga
      </Heading>
    </MutatedBox>
  )
}

export default Header
