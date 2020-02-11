import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { useDispatch } from "react-redux"
import { selectVerkefni } from "../../state/action"

/** components */
import { Container, Text, Anchor } from "./Styled"

/**
 *  Left || Right
 *   => flipped 90deg
 *   <= flipped -90deg
 */
const Sidebar = ({
  position,
  data: {
    site: {
      siteMetadata: { navitems },
    },
  },
}) => {
  const dispatch = useDispatch()

  if (position === `left`) {
    return (
      <Container position={position}>
        {/* contact */}
        <Text rotation={`-90deg`}>{navitems[0]}</Text>
        {/* instagram */}
        <Text rotation={`-90deg`}>{navitems[1]}</Text>
      </Container>
    )
  }
  if (position === `right`) {
    return (
      <Container position={position}>
        {/* about */}
        <Text rotation={`90deg`}>
          <Anchor to="/about">{navitems[2]}</Anchor>
        </Text>
        <Text rotation={`90deg`}>{navitems[3]}</Text>
      </Container>
    )
  }
  return null
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            navitems
          }
        }
      }
    `}
    render={data => <Sidebar data={data} {...props}></Sidebar>}
  ></StaticQuery>
)
