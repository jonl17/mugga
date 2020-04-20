import React from 'react'
import { Header, Heading, Box, Text } from "grommet"
import styled from "styled-components"
import { Link } from "gatsby"

interface TemplateProps {
  pageContext: {
    title: "reykjanes" | "hofudborgarsvaedid" |
    "sudurland" | "vesturland" | "vestfirdir" |
    "nordurland" | "austurland";
    id: string;
  }
}

const ModifiedBox = styled(Box)`
  padding-left: 5rem;
  padding-right: 5rem;
`
const TitleBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  .back-btn-wrap {
    display: flex;
  }
  .back-btn-wrap:hover {
    cursor: pointer;
  }
`
const ModifiedHeading = styled(Heading)`
  margin-bottom: 0;
`

const LandshlutiTemplate: React.FC<TemplateProps> = ({ pageContext: { title, id } }) => {
  return (
    <>
      <ModifiedBox background="white" fill pad="small">
        <Header>
          <TitleBtnWrap>
            <ModifiedHeading size="small">{title}</ModifiedHeading>
            <Link to="/" className="back-btn-wrap">
              <i className="gg-arrow-left"></i>
              <Text margin="0">
                Tilbaka
              </Text>
            </Link>
          </TitleBtnWrap>
        </Header>
      </ModifiedBox>
      <link href='https://css.gg/arrow-left.css' rel='stylesheet'></link>
    </>
  )
}

export default LandshlutiTemplate
