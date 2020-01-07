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

const calculateIndexesToShow = (selectedIndex, thisIndex, max) => {
  if (thisIndex === selectedIndex) return thisIndex
  if (thisIndex === selectedIndex + 1) return thisIndex
  if (selectedIndex === max - 1 /** max */) return 0
}

const Verk = ({ color, index, max }) => {
  const dispatch = useDispatch()
  const selectedVerkefni = useSelector(state => state.reducer.selectedVerkefni)
  const selectedIndex = useSelector(state => state.reducer.selectedIndex)
  console.log(calculateIndexesToShow(selectedIndex, index, max))
  return (
    <Box
      className={
        calculateIndexesToShow(selectedIndex, index, max) === index ||
        selectedIndex === undefined
          ? ""
          : "hiddenProject"
      }
      selected={selectedVerkefni === color ? true : false}
      onClick={() => dispatch(selectVerkefni(color, index))}
      onMouseOver={() => callBackWide(dispatch, color)}
      onMouseLeave={() => callBackNarrow(dispatch)}
      color={color}
    ></Box>
  )
}

export default Verk
