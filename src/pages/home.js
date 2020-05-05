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
    background: "orange",
    "&:hover": {
      background: "peru",
    },
  },
  headTextContainer: {
    padding: 0,
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
          <Typography variant="h3" align="center" display="block">
            Parenting Video Series
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Paper>
            <img
              src={ParentImage}
              className={classes.homeImage}
              alt="parenting"
            />
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h5">The Kids are Home Now What?</Typography>
          <Typography variant="p" className={classes.text}>
            Let’s face it; parenting is challenging, and we don’t always have
            the tools that work, I needed more tools. What I found is, you never
            will have all the answers, you will never feel “all good” all the
            time, all we can do is try our best and be kind to ourselves through
            this messy process of parenting.
          </Typography>

          <Button className={classes.purchaseButton} fullWidth size="large">
            Buy Now $27 Video Series
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
