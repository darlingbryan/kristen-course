import React, { useState, useContext } from "react"
// MUI Stuff
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { CourseContext } from "../context/CourseState"
import { makeStyles } from "@material-ui/core/styles"
import axios from "axios"
import { validateAuth } from "../utils/validate"

const useStyles = makeStyles((theme) => ({
  passcodeSubmit: {
    marginTop: "30px",
    background: "#f38b06",
    padding: "20px",
    "&:hover": {
      background: "#f7941d",
    },
  },
  authSection: {
    height: "80vh",
    alignItems: "center",
  },
}))

const Auth = ({ history }) => {
  const classes = useStyles()
  const { authenticateUser, errors, setErrors } = useContext(CourseContext)
  console.log(errors)

  const [passcode, setPasscode] = useState("")
  const [email, setEmail] = useState("")
  const [user, setUser] = useState("")
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      passcode,
      email,
      user,
    }

    //Validate data
    const { errors, valid } = validateAuth(email, user)

    if (valid) {
      //Notify Kristen
      const form = e.target
      setServerState({ submitting: true })
      await axios({
        method: "post",
        url: "https://formspree.io/mjvavppg",
        data: new FormData(form),
      })
        .then((r) => {
          handleServerResponse(true, "Thanks!", form)
        })
        .catch((r) => {
          handleServerResponse(false, "failed", form)
        })

      authenticateUser(userData, history)
    } else {
      setErrors(errors)
    }

    //set errors
  }

  return (
    <Grid container className={classes.authSection}>
      <Grid item sm />
      <Grid item sm>
        <Typography variant="h3" align="center">
          Enter Your Passcode
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="user"
            name="user"
            type="text"
            label="User"
            helperText={errors.user}
            error={errors.user ? true : false}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            fullWidth
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            helperText={errors.email}
            error={errors.email ? true : false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />

          <TextField
            id="passcode"
            name="passcode"
            type="test"
            label="Passcode"
            helperText={errors.passcode}
            error={errors.passcode ? true : false}
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.passcodeSubmit}
            fullWidth
            disabled={serverState.submitting}
          >
            Enter Course
          </Button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  )
}

export default Auth
