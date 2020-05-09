import React, { useContext } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { CourseContext } from "../context/CourseState"
import { Grid } from "@material-ui/core"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import KristenLogo from "../assets/header-white.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#f38b06",
  },
  navButton: {
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      backgroundColor: "#f7941d",
      color: "white",
    },
  },
  iconButton: {
    color: "inherit !important",
    "&:hover": {
      color: "inherit !important",
    },
  },
  navButtonText: {
    color: "inherit !important",
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
                {/* <Typography variant="h3" className="logoText">
                  Kristen Ancker <span className={classes.ext}>MS Ed.</span>
                </Typography> */}
                <img src={KristenLogo} alt="logo" className="logo-img" />
              </Link>
            </Grid>

            {authenticated ? (
              <Grid item sm={4} xs={12} className="buttonContainer">
                <Button
                  variant="contained"
                  component={Link}
                  className={classes.navButton}
                  to="/course"
                  align="center"
                  fullWidth
                  size="large"
                  endIcon={
                    <PlayCircleOutlineIcon className={classes.iconButton} />
                  }
                >
                  <Typography variant="h6" className={classes.navButtonText}>
                    Welcome to the Series!
                  </Typography>
                </Button>
              </Grid>
            ) : (
              <Grid item sm={4} xs={12} className="buttonContainer">
                <Button
                  variant="contained"
                  component={Link}
                  className={classes.navButton}
                  to="/auth"
                  align="center"
                  fullWidth
                  size="large"
                  endIcon={
                    <PlayCircleOutlineIcon className={classes.iconButton} />
                  }
                >
                  <Typography
                    variant="heading"
                    className={classes.navButtonText}
                  >
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
