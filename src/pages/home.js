import React from "react"
import { Grid, Typography, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ParentImage from "../assets/parents.jpg"
import AskKristen from "../components/AskKristen"

const useStyles = makeStyles((theme) => ({
  mainSection: {
    margin: "auto",
    paddingTop: "50px",
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
    paddingBottom: "20px",
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
    <>
      <Grid
        container
        className={classes.mainSection}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={12} className={classes.headTextContainer}>
          <Typography variant="h3" align="center">
            Parenting Video Series
          </Typography>
        </Grid>
        <Grid item sm={6} className="padMeLeft">
          <Paper elevation={false}>
            <img
              src={ParentImage}
              className={classes.homeImage}
              alt="parenting"
            />
          </Paper>
        </Grid>
        <Grid item sm={6} className="padMeRight">
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
          <div className="paypal-button">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              style={{ display: "inline-block" }}
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="KPCN82VW5SRD2"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </Grid>
      </Grid>

      <AskKristen />
    </>
  )
}

export default Home
