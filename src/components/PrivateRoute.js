import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { CourseContext } from "../context/CourseState"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(CourseContext)
  console.log(authenticated)
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          authenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </div>
  )
}
export default PrivateRoute
