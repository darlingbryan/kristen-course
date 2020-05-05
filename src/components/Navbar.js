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
  logoText: {
    fontFamily: "'Dancing Script', cursive",
  },
  ext: {
    fontSize: "16px",
    fontFamily: "'Halant', serif",
  },

  links: {
    flex: "1 1 40rem",
  },
  login: {
    flex: "1 1 40rem",
    color: "white",
    backgroundColor: "#444",
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
            <Link to="/">
              <Typography variant="h4" className={classes.logoText}>
                Kristen Anckers <span className={classes.ext}>MS Ed.</span>
              </Typography>
            </Link>
          </div>

          {authenticated ? null : (
            <>
              <Button component={Link} className={classes.login} to="/auth">
                Already have access code? Click here to watch the series!
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
