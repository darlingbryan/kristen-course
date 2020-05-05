import React, { useState, useContext } from "react"
// MUI Stuff
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { CourseContext } from "../context/CourseState"

const Auth = ({ history }) => {
  const { authenticateUser, errors, loading } = useContext(CourseContext)
  console.log(errors)

  const [passcode, setPasscode] = useState("")
  const [email, setEmail] = useState("")
  const [user, setUser] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      passcode,
      email,
      user,
    }

    console.log("check passcode")
    //set loading
    //validate data
    authenticateUser(userData, history)

    //set errors
    //set loading finish
  }

  return (
    <Grid container>
      <Grid item sm />
      <Grid item sm>
        <Typography variant="h2">Enter Your PassCode</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="user"
            name="user"
            type="text"
            label="User"
            helperText={errors.name}
            error={errors.email ? true : false}
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
            color="primary"
            disabled={loading}
          >
            Enter Course
          </Button>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  )
}

export default Auth
