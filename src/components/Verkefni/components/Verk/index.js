import React from "react"
import { useDispatch } from "react-redux"
import { resizeHeader, setVerkefniTitle } from "../../../../state/action"

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
  return (
    <Box
      onMouseOver={() => callBackWide(dispatch, color)}
      onMouseLeave={() => callBackNarrow(dispatch)}
      color={color}
    ></Box>
  )
}

export default Verk
