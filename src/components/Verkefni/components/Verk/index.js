import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  resizeHeader,
  setVerkefniTitle,
  selectVerkefni,
  changeVerkefniDirection,
} from "../../../../state/action"

/** components */
import { Box, Text } from "./Styled"
import Video from "./components/Video"

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

const Verk = ({
  verk: {
    frontmatter: { title, forsidu_video, lysing },
  },
  index,
  max,
}) => {
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
    <>
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
      >
        <Video selected={selectedVerkefni === title ? true : false}>
          <source src={forsidu_video.publicURL} type="video/webm"></source>
          <source src={forsidu_video.publicURL} type="video/mp4"></source>
        </Video>
        <Text selected={selectedVerkefni === title ? true : false}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt.
        </Text>
      </Box>
    </>
  )
}

export default Verk
