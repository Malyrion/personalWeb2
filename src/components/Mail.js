import React from 'react'
import {Button, TextField} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex',
  justifyContent: "center",
  textAlign: "left",
  },
  textField: {
    width: '200px',
    justifyContent: "left",
    textAllign: "left",
  },
});

function Mail() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="None"
          id="outlined-margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          label="None"
          id="outlined-margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        </div>
    </div>





  )
}

export default Mail

// <form className={classes.root} noValidate autoComplete="off">
// <div>
//   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
// </div>
// <div className={classes.email}>
//   <TextField  id="outlined-basic" label="Outlined" variant="outlined" />
// </div>
//
// </form>
