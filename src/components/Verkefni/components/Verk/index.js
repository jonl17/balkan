import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  resizeHeader,
  setVerkefniTitle,
  selectVerkefni,
} from "../../../../state/action"

/** components */
import { Box } from "./Styled"

const callBackWide = (dispatch, color) => {
  dispatch(resizeHeader("Wide"))
  dispatch(setVerkefniTitle(color))
}
const callBackNarrow = dispatch => {
  dispatch(resizeHeader("Narrow"))
}

const Verk = ({ color }) => {
  const dispatch = useDispatch()
  const selectedVerkefni = useSelector(state => state.reducer.selectedVerkefni)
  return (
    <Box
      selected={selectedVerkefni === color ? "true" : "false"}
      onClick={() => dispatch(selectVerkefni(color))}
      onMouseOver={() => callBackWide(dispatch, color)}
      onMouseLeave={() => callBackNarrow(dispatch)}
      color={color}
    ></Box>
  )
}

export default Verk
