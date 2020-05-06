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
  navButton: {
    color: "black",
    backgroundColor: "white",
  },
  ext: {
    fontSize: "16px",
    fontFamily: "'Halant', serif",
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
            <Grid item className="logoContainer" sm={8} xs={12}>
              <Link to="/">
                <Typography variant="h4" className="logoText">
                  Kristen Ancker <span className={classes.ext}>MS Ed.</span>
                </Typography>
              </Link>
            </Grid>

            {authenticated ? (
              <Grid item sm={4} xs={12} className="buttonContainer">
                <Button
                  component={Link}
                  className={classes.navButton}
                  id="navButtonId"
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
              <Grid item sm={4} className="buttonContainer">
                <Button
                  component={Link}
                  className="navButton"
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
