import React from "react"
import { graphql, StaticQuery } from "gatsby"

/** components */
import { Container } from "./Styled"
import Verk from "./components/Verk"
import Exit from "./components/Exit"
import { useSelector } from "react-redux"

const Verkefni = ({
  data: {
    allMarkdownRemark: { nodes: verkefni },
  },
}) => {
  const videosLoaded = useSelector(state => state.reducer.videosLoaded)
  console.log(videosLoaded)
  return (
    <>
      <Exit></Exit>
      <Container>
        {verkefni.map((item, index) => (
          <Verk
            animationdelay={index}
            max={verkefni.length - 1}
            index={index}
            key={index}
            verk={item}
          ></Verk>
        ))}
      </Container>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              lysing
              forsidu_video {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data => <Verkefni data={data} {...props}></Verkefni>}
  ></StaticQuery>
)
