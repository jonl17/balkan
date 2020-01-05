import React from "react"
import { graphql, StaticQuery } from "gatsby"

/** components */
import { Container } from "./Styled"
import Verk from "./components/Verk"

const Verkefni = ({
  data: {
    allMarkdownRemark: { nodes: verkefni },
  },
}) => {
  return (
    <Container>
      {verkefni.map((item, index) => (
        <Verk key={index} color={item.frontmatter.color}></Verk>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          nodes {
            frontmatter {
              color
            }
          }
        }
      }
    `}
    render={data => <Verkefni data={data} {...props}></Verkefni>}
  ></StaticQuery>
)
