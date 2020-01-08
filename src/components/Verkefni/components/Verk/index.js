import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  resizeHeader,
  setVerkefniTitle,
  selectVerkefni,
  changeVerkefniDirection,
} from "../../../../state/action"

/** components */
import { Box } from "./Styled"

const callBackWide = (dispatch, color) => {
  dispatch(resizeHeader("Wide"))
  dispatch(setVerkefniTitle(color))
}
const callBackNarrow = (dispatch, color) => {
  dispatch(resizeHeader("Narrow"))
  dispatch(setVerkefniTitle(color))
}

/*
   Returns indexes that are valid to display.
*/
const calculateIndexesToShow = (selectedIndex, thisIndex, direction) => {
  let offset = 1
  if (direction === "left") {
    offset = -1
  }
  if (thisIndex === selectedIndex) return thisIndex
  else if (thisIndex === selectedIndex + offset) return thisIndex
}

const Verk = ({ color, index, max }) => {
  const dispatch = useDispatch()
  const selectedVerkefni = useSelector(state => state.reducer.selectedVerkefni)
  const selectedIndex = useSelector(state => state.reducer.selectedIndex)
  const verkefniDirection = useSelector(
    state => state.reducer.verkefniDirection
  )
  if (selectedIndex === max) {
    dispatch(changeVerkefniDirection("left"))
  }
  if (selectedIndex === 0) {
    dispatch(changeVerkefniDirection("right"))
  }
  console.log(selectedIndex)
  return (
    <Box
      className={
        calculateIndexesToShow(selectedIndex, index, verkefniDirection) ===
          index || selectedIndex === undefined
          ? ""
          : "hiddenProject"
      }
      selected={selectedVerkefni === color ? true : false}
      onClick={() => {
        dispatch(selectVerkefni(color, index))
      }}
      onMouseOver={() => callBackWide(dispatch, color)}
      onMouseLeave={() => callBackNarrow(dispatch, selectedVerkefni)}
      color={color}
    ></Box>
  )
}

export default Verk
