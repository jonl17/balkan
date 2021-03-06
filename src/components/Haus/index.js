import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import { selectVerkefni, resizeHeader } from "../../state/action"
/** components */
import {
  Container,
  Word,
  Letter,
  ImageContainer,
  Image,
  Anchor,
} from "./Styled"

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
  const verkefniTitle = [verkefni]
  const dispatch = useDispatch()
  const selectedVerkefni = useSelector(state => state.reducer.selectedVerkefni)
  var displayTitle = title
  if (headerFullSize === "Wide") {
    displayTitle = verkefniTitle
  }

  return (
    <>
      <Container>
        {displayTitle.map((item, index) => (
          <Word spacing={headerFullSize === "Wide" ? "3em" : "0"} key={index}>
            {item.split("").map((letter, index /** Balkan */) => (
              <Letter key={index}>{letter}</Letter>
            ))}
          </Word>
        ))}
      </Container>
      {/* klikk á lógóið af-velur eitthvað sérstakt verkefni  */}
      <Anchor to="/">
        <ImageContainer
          onClick={() => {
            dispatch(selectVerkefni(undefined, undefined))
            dispatch(resizeHeader("Narrow"))
          }}
        >
          <Image fluid={fluid}></Image>
        </ImageContainer>
      </Anchor>
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
