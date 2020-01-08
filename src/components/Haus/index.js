import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import { selectVerkefni } from "../../state/action"
/** components */
import { Container, Word, Letter, ImageContainer, Image } from "./Styled"

const Haus = ({
  data: {
    site: {
      siteMetadata: { title },
    },
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  const headerFullSize = useSelector(state => state.reducer.headerFullSize)
  const verkefni = useSelector(state => state.reducer.verkefniTitle)
  const verkefniTitle = [verkefni, `2020`]
  const dispatch = useDispatch()
  var displayTitle = title
  if (headerFullSize === "Wide") {
    displayTitle = verkefniTitle
  }
  return (
    <>
      <Container>
        {displayTitle.map((item, index) => (
          <Word size={headerFullSize === "Wide" ? "100%" : "9%"} key={index}>
            {item.split("").map((letter, index /** Balkan */) => (
              <Letter key={index}>{letter}</Letter>
            ))}
          </Word>
        ))}
      </Container>
      {/* klikk á lógóið af-velur eitthvað sérstakt verkefni  */}
      <ImageContainer
        onClick={() => dispatch(selectVerkefni(undefined, undefined))}
      >
        <Image fluid={fluid}></Image>
      </ImageContainer>
    </>
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
        file(childImageSharp: { fluid: { originalName: { eq: "logo.png" } } }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Haus data={data} {...props}></Haus>}
  ></StaticQuery>
)
