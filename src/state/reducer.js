import {
  SET_DEVICE,
  RESIZE_HEADER,
  SET_VERKEFNI_TITLE,
  SELECT_VERKEFNI,
} from "./action"

const initialState = {
  device: undefined,
  headerFullSize: false,
  verkefniTitle: undefined,
  selectedVerkefni: undefined,
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
      return { ...state, headerFullSize: action.size }
    case SET_VERKEFNI_TITLE:
      return { ...state, verkefniTitle: action.title }
    case SELECT_VERKEFNI:
      return { ...state, selectedVerkefni: action.title }
    default:
      return state
  }
}
