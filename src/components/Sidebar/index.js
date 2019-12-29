import React from "react"
import { graphql, StaticQuery } from "gatsby"

/** components */
import { Container, Text } from "./Styled"

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
  if (position === `left`) {
    return (
      <Container position={position}>
        <Text rotation={`-90deg`}>{navitems[0]}</Text>
        <Text rotation={`-90deg`}>{navitems[1]}</Text>
      </Container>
    )
  }
  if (position === `right`) {
    return (
      <Container position={position}>
        <Text rotation={`90deg`}>{navitems[2]}</Text>
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
