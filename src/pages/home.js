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

  text: {
    fontFamily: '"Nunito Sans", sans-serif',
    paddingBottom: "20px",
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
        <Grid item sm={8} className={classes.headTextContainer}>
          <Typography variant="h3" align="center">
            The Kids are Home! Now, What?
          </Typography>
        </Grid>
        <Grid item sm={6} className="home-img home-section">
          <Paper elevation={false}>
            <img
              src={ParentImage}
              className={classes.homeImage}
              alt="parenting"
            />
          </Paper>
        </Grid>
        <Grid item sm={8} className="home-text home-section">
          <div className={classes.textContainer}>
            <Typography variant="body1" className={classes.text}>
              How are you going to help your family to thrive throughout the
              next few months home all together?
            </Typography>
            <Typography variant="body1" className={classes.text}>
              I am Kristen Ancker, your Parent Empowerment Specialist. I help
              overwhelmed moms (and dads too<span>😊</span>) who are challenged
              with power struggles, sibling fighting, defiance and chaos. I
              guide parents to develop peace and understanding, to build healthy
              relationships and gain cooperation and confidence with lots of
              love, plenty of mistakes and grace in their role as mother/parent.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              With the use of positive discipline strategies, empathic
              communication and Montessori home design, parents learn the
              language to use to get their kids to cooperate and gain a positive
              sense of self. These videos will guide families to create routines
              together that work for the entire household. They will help you to
              create a home environment that promotes creativity, fosters
              independence, instills calm and invites JOY!
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
