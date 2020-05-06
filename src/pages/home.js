import React from "react"
import { Grid, Typography, Paper, Container, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ParentImage from "../assets/parents.jpg"

const useStyles = makeStyles((theme) => ({
  mainSection: {
    margin: "auto",
    paddingTop: "50px",
    height: "90vh",
  },
  homeImage: {
    objectFit: "cover",
    maxWidth: "100%",
  },
  purchaseButton: {
    marginTop: "30px",
    background: "#f38b06",
    padding: "24px 0",
    "&:hover": {
      background: "#f7941d",
    },
  },
  headTextContainer: {
    padding: 0,
  },
  textContainer: {
    paddingLeft: "16px",
  },
  text: {
    fontFamily: '"Nunito Sans", sans-serif',
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="md">
      <Grid
        container
        className={classes.mainSection}
        justify="center"
        spacing={5}
      >
        <Grid item sm={12} className={classes.headTextContainer}>
          <Typography variant="h3" align="center">
            Parenting Video Series
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Paper elevation={false}>
            <img
              src={ParentImage}
              className={classes.homeImage}
              alt="parenting"
            />
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h5">The Kids are Home Now What?</Typography>
          <div className={classes.textContainer}>
            <Typography variant="p" className={classes.text}>
              Let’s face it; parenting is challenging, and we don’t always have
              the tools that work, I needed more tools. What I found is, you
              never will have all the answers, you will never feel “all good”
              all the time, all we can do is try our best and be kind to
              ourselves through this messy process of parenting.
            </Typography>
          </div>

          <Button className={classes.purchaseButton} fullWidth>
            <Typography variant="h5">Buy Now $27 Video Series</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.author}>
        <Grid item></Grid>
      </Grid>
    </Container>
  )
}

export default Home
