export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const RESIZE_HEADER = "RESIZE_HEADER"
export const resizeHeader = size => ({
  type: RESIZE_HEADER,
  size,
})
export const SET_VERKEFNI_TITLE = "SET_VERKEFNI_TITLE"
export const setVerkefniTitle = title => ({
  type: SET_VERKEFNI_TITLE,
  title,
})
export const SELECT_VERKEFNI = "SELECT_VERKEFNI"
export const selectVerkefni = (title, index) => ({
  type: SELECT_VERKEFNI,
  title,
  index,
})
export const CHANGE_VERKEFNI_DIRECTION = "CHANGE_VERKEFNI_DIRECTION"
export const changeVerkefniDirection = direction => ({
  type: CHANGE_VERKEFNI_DIRECTION,
  direction,
})
export const INCREMENT_VIDEO_LOADED = "INCREMENT_VIDEO_LOADED"
export const videoIncrementVideoLoaded = () => ({
  type: INCREMENT_VIDEO_LOADED,
})
