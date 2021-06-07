import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../css/Navigation.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    position: "relative",
    paddingTop: "25px",
    marginBottom: "196px",
    color: "white",
    "@media(maxWidth: 1500px)": {
      marginBottom: "96px",
    },
  },
});

function Navigation() {
  const classes = useStyles();
  return (
    <Breadcrumbs className={classes.root} aria-label="breadcrumb">
      <Link color="inherit" href="#app__projectsandskills">
        Home
      </Link>
      <Link color="inherit" href="#app__projectsandskills">
        Projects
      </Link>
      <Link color="inherit" href="#app__workexp">
        Experience
      </Link>
      <Link color="inherit" href="#">
        Contact me
      </Link>
    </Breadcrumbs>
  );
}

export default Navigation;
