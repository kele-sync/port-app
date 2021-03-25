import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Controller from './Controller';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: { 
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Port() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}> 
        <Grid item xs={5}>
			  <Controller></Controller>
          {/* <Paper className={classes.paper}>
		  </Paper> */}
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
