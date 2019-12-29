import { SET_DEVICE, RESIZE_HEADER } from "./action"

const initialState = {
  device: undefined,
  headerFullSize: true,
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
      return { ...state, headerFullSize: !state.headerFullSize }
    default:
      return state
  }
}
