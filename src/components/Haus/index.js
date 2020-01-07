import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"
/** components */
import { Container, Word, Letter } from "./Styled"

const Haus = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const headerFullSize = useSelector(state => state.reducer.headerFullSize)
  const verkefni = useSelector(state => state.reducer.verkefniTitle)
  const verkefniTitle = [verkefni, `2020`]
  var displayTitle = title
  if (headerFullSize === "Wide") {
    displayTitle = verkefniTitle
  }
  return (
    <Container>
      {displayTitle.map((item, index) => (
        <Word size={headerFullSize === "Wide" ? "100%" : "9%"} key={index}>
          {item.split("").map((letter, index /** Balkan */) => (
            <Letter key={index}>{letter}</Letter>
          ))}
        </Word>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Haus data={data} {...props}></Haus>}
  ></StaticQuery>
)
