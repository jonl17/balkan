import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

/* components */
import { Container } from "./Styled"
import { SELECT_VERKEFNI } from "../../state/action"

const Aboutcomponent = () => {
  const dispatch = useDispatch()
  const selectedVerkefni = useSelector(state => state.reducer.selectedVerkefni)
  useEffect(() => {
    dispatch({ type: SELECT_VERKEFNI, title: undefined, index: undefined })
  }, [])
  console.log(selectedVerkefni)

  return <Container>AboutComponent</Container>
}

export default Aboutcomponent
