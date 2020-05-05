import { AUTHENTICATE_USER, SET_ERRORS, SET_COURSE } from "./types"

export default (state, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        errors: {},
      }
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }
    case SET_COURSE:
      return {
        ...state,
        currentCourseIndex: action.payload,
      }
    default:
      return state
  }
}
