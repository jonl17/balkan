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
const callBackNarrow = dispatch => {
  dispatch(resizeHeader("Narrow"))
}

const calculateIndexesToShow = (selectedIndex, thisIndex, max, direction) => {
  let offset = 1
  let mutant = 0
  let stopper = max
  if (direction === "backwards") {
    offset = -1
    mutant = max
    stopper = 0
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
    dispatch(changeVerkefniDirection("backwards"))
  }
  if (selectedIndex === 0) {
    dispatch(changeVerkefniDirection("forwards"))
  }
  return (
    <Box
      className={
        calculateIndexesToShow(selectedIndex, index, max, verkefniDirection) ===
          index || selectedIndex === undefined
          ? ""
          : "hiddenProject"
      }
      selected={selectedVerkefni === color ? true : false}
      onClick={() => {
        dispatch(selectVerkefni(color, index))
      }}
      onMouseOver={() => callBackWide(dispatch, color)}
      onMouseLeave={() => callBackNarrow(dispatch)}
      color={color}
    ></Box>
  )
}

export default Verk
