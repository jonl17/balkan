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

const callBackWide = (dispatch, title) => {
  dispatch(resizeHeader("Wide"))
  dispatch(setVerkefniTitle(title))
}
const callBackNarrow = (dispatch, title) => {
  dispatch(resizeHeader("Narrow"))
  dispatch(setVerkefniTitle(title))
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

const Verk = ({ title, index, max }) => {
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
  return (
    <Box
      className={
        calculateIndexesToShow(selectedIndex, index, verkefniDirection) ===
          index || selectedIndex === undefined
          ? ""
          : "hiddenProject"
      }
      selected={selectedVerkefni === title ? true : false}
      onClick={() => {
        dispatch(selectVerkefni(title, index))
      }}
      onMouseOver={() => callBackWide(dispatch, title)}
      onMouseLeave={() => callBackNarrow(dispatch, selectedVerkefni)}
      title={title}
    ></Box>
  )
}

export default Verk
