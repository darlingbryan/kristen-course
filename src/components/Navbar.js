import React, { useContext } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { CourseContext } from "../context/CourseState"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "orange",
  },
  logoContainer: {},
  logoText: {
    fontFamily: "'Dancing Script', cursive",
  },
  ext: {
    fontSize: "16px",
    fontFamily: "'Halant', serif",
  },

  links: {},
  login: {
    color: "#333",
    backgroundColor: "peru",
  },
}))

const Navbar = () => {
  const { authenticated } = useContext(CourseContext)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className="nav-container">
          <Grid container>
            <Grid item className={classes.logoContainer} sm={8}>
              <Link to="/">
                <Typography
                  variant="h4"
                  className={classes.logoText}
                  id="homeLogo"
                >
                  Kristen Anckers <span className={classes.ext}>MS Ed.</span>
                </Typography>
              </Link>
            </Grid>

            {authenticated ? null : (
              <Grid item sm={4}>
                <Button
                  component={Link}
                  className={classes.login}
                  to="/auth"
                  align="center"
                >
                  <Typography>
                    Already have access code? Click here to watch the series!
                  </Typography>
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
