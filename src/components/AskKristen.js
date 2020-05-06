import React from "react"
import { Grid, Typography, Container } from "@material-ui/core"
import Kristen from "../assets/headshot.png"

const AskKristen = () => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ marginTop: "50px" }}
      >
        <Grid item sm={4} id="contact">
          <Typography
            variant="h6"
            align="center"
            display="block"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ask Kristen
          </Typography>
          <br />
          <Typography variant="heading" align="center" display="block">
            Do you have any questions?
          </Typography>
          <br />
          <Typography variant="body" display="block" align="center">
            You can reach me at kristenancker (at) gmail.com
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <img src={Kristen} alt="kristen" id="kristenImg" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AskKristen
