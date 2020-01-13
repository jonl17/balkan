import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectVerkefni, resizeHeader } from "../../../../state/action"

/** components */
import { Container, Line } from "./Styled"

const Exit = () => {
  const dispatch = useDispatch()
  const selectedVerkefni = useSelector(state => state.reducer.selectedVerkefni)
  return (
    <Container
      onClick={() => {
        dispatch(selectVerkefni(undefined, undefined))
        dispatch(resizeHeader("Narrow"))
      }}
      display={selectedVerkefni !== undefined ? "flex" : "none"}
    >
      <Line one ex></Line>
      <Line two ex></Line>
    </Container>
  )
}

export default Exit
