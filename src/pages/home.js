import React from "react"
import { Grid, Typography } from "@material-ui/core"

const Home = () => {
  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography>
          Landing page is under contruction. Login to view the video series.
        </Typography>
        <Typography>To add in this in landingpage</Typography>
        <ul>
          <li>details on the video series</li>
          <li>paypal link</li>
          <li>passcode instruction</li>
          <li>social media links</li>
        </ul>
        <Typography>More todos</Typography>
        <ul>
          <li>improve design</li>
          <li>a feature to notify Kristen when someone access the course.</li>
          <li>add a facebook chat?</li>
        </ul>
      </Grid>
    </Grid>
  )
}

export default Home
