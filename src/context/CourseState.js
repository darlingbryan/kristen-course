import {} from "react"
import React, { useReducer, createContext } from "react"
import courseReducer from "./CourseReducer"
import { AUTHENTICATE_USER, SET_ERRORS, SET_COURSE } from "./types"

const CourseContext = createContext()

const CourseState = (props) => {
  const initialState = {
    user: null,
    authenticated: true,
    currentCourseIndex: 1,
    errors: [],
  }

  const [state, dispatch] = useReducer(courseReducer, initialState)

  const authenticateUser = (data, history) => {
    const { user, email, passcode } = data
    const code = "kristen"
    if (passcode === code) {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: user,
      })
      history.push("/course")
    } else {
      dispatch({
        type: SET_ERRORS,
        payload: {
          passcode:
            "Passcode incorrect. Please contact Kristen for your passcode.",
        },
      })
    }
  }

  const setCourse = (step) => {
    dispatch({
      type: SET_COURSE,
      payload: step,
    })
  }

  return (
    <CourseContext.Provider
      value={{
        user: state.user,
        currentCourseIndex: state.currentCourseIndex,
        errors: state.errors,
        authenticated: state.authenticated,
        authenticateUser,
        setCourse,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  )
}

export default CourseState

export { CourseContext }
