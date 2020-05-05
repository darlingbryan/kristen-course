import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import { CourseContext } from "../context/CourseState"
import data from "../data"
import CourseList from "../components/CourseList"

const useStyles = makeStyles((theme) => ({
  levels: {
    flexGrow: 1,
  },
  actionButtons: {
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "peru",
    },
  },
  videoContainer: {
    flex: "1 1 40rem",
  },

  links: {
    flex: "1 1 40rem",
  },
  media: {
    height: 140,
  },
  iframeStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  video: {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: 25,
    height: 0,
  },
}))

const Course = () => {
  const classes = useStyles()

  const { currentCourseIndex, setCourse } = useContext(CourseContext)

  const handlePrevious = () => {
    setCourse(currentCourseIndex - 1)
  }

  const handleNext = () => {
    setCourse(currentCourseIndex + 1)
  }

  return (
    <Grid container>
      <Grid item sm={8} className={classes.videoContainer}>
        <Card className={classes.root}>
          <CardActionArea>
            <div className={classes.video}>
              <iframe
                className={classes.iframeStyles}
                src={data[currentCourseIndex].videoUrl}
                frameBorder="0"
                title="course-video"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data[currentCourseIndex].title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Add link to pdf.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonGroup
              disableElevation
              variant="contained"
              color="primary"
              fullWidth
            >
              <Button
                size="small"
                className={classes.actionButtons}
                onClick={handlePrevious}
                disabled={currentCourseIndex === 0}
                fullWidth={true}
              >
                Previous
              </Button>
              <Button
                size="small"
                className={classes.actionButtons}
                onClick={handleNext}
                disabled={currentCourseIndex === 6}
                fullWidth={true}
              >
                Next
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} className={classes.levels}>
        <CourseList courses={data} currentCourseIndex={currentCourseIndex} />
      </Grid>
    </Grid>
  )
}

export default Course
