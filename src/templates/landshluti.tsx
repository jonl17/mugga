import React from 'react'
import { Header, Heading, Box, Text } from "grommet"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { LandshlutiProps } from "./types"
import AfangastadirList from "../components/AfangastadirList"

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

const LandshlutiTemplate: React.FC<LandshlutiProps> = ({ pageContext: { title, id, landshluti },
  data: { afangastadir: { nodes } } }) => {
  console.log(landshluti)
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
        {/* list of áfangastaðir... */}
        <AfangastadirList afangastadir={nodes}></AfangastadirList>
      </ModifiedBox>
      <link href='https://css.gg/arrow-left.css' rel='stylesheet'></link>
    </>
  )
}

export const query = graphql`
  query ($landshluti: String!) {
    afangastadir: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/afangastadir/"}, frontmatter: {landshluti: {eq: $landshluti}}}) {
      nodes {
        frontmatter {
          title
          mynd {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default LandshlutiTemplate
