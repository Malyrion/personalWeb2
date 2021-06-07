import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link} from "@material-ui/core"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles({
  root: {
   maxWidth: 345,
   background: "linear-gradient(135deg,#E0EAFC,#CFDEF3)"

  },
  media: {
    height: 140,
  },
});

function Projects({p_name, image, p_discription }) {
  const classes = useStyles();
  return (

    <Card  className={classes.root}>
    <CardHeader
        title={p_name}
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {p_discription}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/*<CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>*/}
    </Card>
    
  )
}

export default Projects
