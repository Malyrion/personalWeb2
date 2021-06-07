import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import "../css/WorkExp.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 800,
  },
  section: {
    paddingLeft: "16px",
    paddingRight: "16px",
    backgroundColor: "white",
    margin: "20px",
    borderRadius: "10px",
  },
  heading: {
    width: "100%",
  },
  image: {
    width: "50px",
    borderRadius: "50px",
  },
}));

function WorkExp({ headding, description, date, icon }) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem className={classes.section}>
        <ListItemAvatar>
          <Avatar className={classes.image} src={icon} />
        </ListItemAvatar>
        <h4 className={classes.heading}>{headding}</h4>

        <ListItemText primary={description} secondary={date} />
      </ListItem>
    </List>
  );
}

export default WorkExp;

{
  /*     <List className={classes.root}>
<img className={classes.image} src={arrowDown}/>
          <ListItem className={classes.section}>

          <ListItemAvatar>
          <Avatar  src={programAvatar} />

          </ListItemAvatar>
            <h4 className={classes.heading}>SIMENS STEM Project</h4>

            <ListItemText primary="Completed a STEM project to develop an AI-based solution to help Siemens identify broken signals, replacing the need of dangerous manual checks. Involving independent and team work, time commitment for the research in AI, group meetings and discussions Conducted AI learning research and presented learned concepts to the team members. Practiced using OpenCV and Matplotlib libraries in Python, enhancing awareness of the technologies and data visualisation Worked as part of a team of 6 to produce a business report and Powerpoint presentation Delivered a group presentation on the proposed solution, including a Q&A session." secondary="Jan 9, 2014 - Jan 10, 2020" />
          </ListItem >
          <img className={classes.image} src={arrowDown}/>
          <ListItem className={classes.section}>
          <ListItemAvatar>
          <Avatar  src={teamWorkAvatar} />
          </ListItemAvatar>
            <h4 className={classes.heading}>Royall Russel MUN</h4>

            <ListItemText primary="Held the responsibility for planning and insuring a smooth running of an event involving more than 200 people Worked in a team with other Heads of Departments to create a schedule for the event and plan time tables for the secretariat groups splitting responsibilities and making groups Supervised and managed a team of 20 Secretariats by delegating tasks, checking the progress, preventing possible problems and resolving them if they occurred Provided information to the event attendees and assisted with preparing and setting up the main hall and debate rooms, preparing the props and microphones for the sessions" secondary="Jan 7, 2014" />
          </ListItem>
            <img className={classes.image} src={arrowDown}/>
          <ListItem className={classes.section}>
          <ListItemAvatar>
          <Avatar  src={webDevAvatar} />
          </ListItemAvatar>

          <h4 className={classes.heading}>Culture-Hint</h4>

            <ListItemText primary="Worked on database migration with the use of Python scripts and mySQL queries for organizing and retrieving data. Focused on updating KPI pages with a use of sumantic-ui running on react front end and node js with express. Created a page with functionality to display changed in real time based on the values form database, involving use of JavaScript, CSS, React, Node, Express	Worked on webapp deployment to the platforms like Heroku, AWS Amplify, AWS EC2 with the creation of Lambda functions and API’s.
" secondary="July 20, 2014" />
          </ListItem>
        </List>
  )
}*/
}
