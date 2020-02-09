import React from "react"
import { useSelector } from "react-redux"

/* components */
import { Container, Logo } from "./Styled"

const Loadscreen = () => {
  const videosLoaded = useSelector(state => state.reducer.videosLoaded)
  return (
    <Container display={videosLoaded < 5}>
      <Logo></Logo>
    </Container>
  )
}
export default Loadscreen
