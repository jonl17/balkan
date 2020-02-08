import {
  SET_DEVICE,
  RESIZE_HEADER,
  SET_VERKEFNI_TITLE,
  SELECT_VERKEFNI,
  CHANGE_VERKEFNI_DIRECTION,
  INCREMENT_VIDEO_LOADED,
} from "./action"

const initialState = {
  device: undefined,
  headerFullSize: false,
  verkefniTitle: undefined,
  selectedVerkefni: undefined,
  selectedIndex: undefined,
  verkefniDirection: "right",
  videosLoaded: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 650) {
        device = `mobile`
      }
      if (action.width > 650 && action.width <= 950) {
        device = `tablet`
      }
      if (action.width > 950) {
        device = `browser`
      }
      return { ...state, device: device }
    case RESIZE_HEADER:
      let size = action.size
      if (state.selectedIndex !== undefined) {
        size = "Wide"
      }
      return { ...state, headerFullSize: size }
    case SET_VERKEFNI_TITLE:
      return { ...state, verkefniTitle: action.title }
    case SELECT_VERKEFNI:
      return {
        ...state,
        selectedVerkefni: action.title,
        selectedIndex: action.index,
      }
    case CHANGE_VERKEFNI_DIRECTION:
      return { ...state, verkefniDirection: action.direction }
    case INCREMENT_VIDEO_LOADED:
      return { ...state, videosLoaded: state.videosLoaded + 1 }
    default:
      return state
  }
}
