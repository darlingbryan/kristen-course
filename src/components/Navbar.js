import React, { useContext } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { CourseContext } from "../context/CourseState"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "orange",
  },
  logoContainer: {
    flex: "1 1 40rem",
  },

  links: {
    flex: "1 1 40rem",
  },
}))

const Navbar = () => {
  const { authenticated } = useContext(CourseContext)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className="nav-container">
          <div className={classes.logoContainer}>
            <Typography variant="h6">Kristen Anckers</Typography>
          </div>

          {authenticated ? (
            <Button
              color="inherit"
              component={Link}
              className={classes.links}
              to="/course"
            >
              Course
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
                className={classes.links}
                to="/"
              >
                Home
              </Button>

              <Button
                color="inherit"
                component={Link}
                className={classes.links}
                to="/auth"
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
