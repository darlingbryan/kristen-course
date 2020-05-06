import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import Divider from "@material-ui/core/Divider"
import { CourseContext } from "../context/CourseState"

const useStyles = makeStyles((theme) => ({
  mainList: {
    padding: 0,
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  current: {
    backgroundColor: "#f38b06",
  },
  completed: {
    backgroundColor: "#f7941d",
  },
}))

const CourseList = ({ courses, currentCourseIndex }) => {
  const { setCourse } = useContext(CourseContext)
  const classes = useStyles()
  return (
    <div classesName={classes.root}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className={classes.mainList}
      >
        {courses.map((course, i) => {
          const listItemClass =
            currentCourseIndex === i
              ? classes.current
              : currentCourseIndex > i
              ? classes.completed
              : classes.incoming
          return (
            <>
              <ListItem
                button
                key={course.level}
                className={listItemClass}
                onClick={() => setCourse(i)}
              >
                <ListItemIcon>
                  <PlayCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={course.step + ". " + course.title} />
              </ListItem>
              <Divider light />
            </>
          )
        })}
      </List>
    </div>
  )
}

export default CourseList
