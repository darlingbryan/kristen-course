import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/home.js"
import Auth from "./pages/auth.js"
import Course from "./pages/course.js"
import Navbar from "./components/Navbar"
import CourseState from "./context/CourseState"
import PrivateRoute from "./components/PrivateRoute"
import { ThemeProvider } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      // '"Dancing Script", cursive',
      '"Halant", serif',
      '"Nunito Sans", sans-serif',
    ].join(","),
  },
})

function App() {
  return (
    <CourseState>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
              <PrivateRoute exact path="/course" component={Course} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </CourseState>
  )
}

export default App
