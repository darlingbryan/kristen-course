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
    backgroundColor: "#f38b06",
  },
  logoContainer: {
    margin: "auto 0",
  },
  logoText: {
    fontFamily: "'Dancing Script', cursive",
  },
  ext: {
    fontSize: "16px",
    fontFamily: "'Halant', serif",
  },

  links: {},
  login: {
    color: "black",
    backgroundColor: "white",
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
                  Kristen Ancker <span className={classes.ext}>MS Ed.</span>
                </Typography>
              </Link>
            </Grid>

            {authenticated ? (
              <Grid item sm={4}>
                <Button
                  component={Link}
                  className={classes.login}
                  to="/course"
                  align="center"
                  fullWidth
                >
                  <Typography style={{ color: "black", padding: "15px 0" }}>
                    Welcome to the Series!
                  </Typography>
                </Button>
              </Grid>
            ) : (
              <Grid item sm={4}>
                <Button
                  component={Link}
                  className={classes.login}
                  to="/auth"
                  align="center"
                  fullWidth
                >
                  <Typography style={{ color: "black" }}>
                    Already have access code? <br />
                    Click here to watch the series!
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
