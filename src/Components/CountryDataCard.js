import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalBarChart from './GlobalBarChart'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:'80%',
    margin:'0 auto',
    marginTop:'50px',
    marginBottom:'40px',
   
  },
  rootChild :{
    marginBottom:'40px',
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary, 
    
  // },
  h3: {
    textTransform:'uppercase',
    textDecoration:'underline',
  },
  Confirmed:{
    borderBottom: '10px solid #FFFF33',
    // backgroundColor : '#CCFF33',
    color:'black',
    padding: '15px ',
    textAlign:'center',
  },
  recovered:{
    borderBottom: '10px solid #00CC66',
    // backgroundColor : 'green',
    color:'black',
    padding: '15px ',
    textAlign:'center',
  },
  deaths:{
    borderBottom: '10px solid red',
    // backgroundColor : 'red  ',
    color:'black',
    padding: '15px ',
    textAlign:'center',
  },
  h1:{
    textAlign:'center',
    marginBottom:'40px',
    textTransform:'uppercase',
    textDecoration:'underline'
  },
  rate:{
    marginTop:'40px',
    width:'80%',
    margin:'0 auto'
  },
}));

export default function CountrydataCards({Countrydata}) { 


  const classes = useStyles();
  console.log(Countrydata)
  return (
    Countrydata.Confirmed  ?
    <div className={classes.root}>
    <div className={classes.rootChild}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.Confirmed} elevation={5}>
            <h3 className={classes.h3}>Infected</h3>
            <h3>{Countrydata.Confirmed}</h3>
            <hr/>
            <h6>Last Update on {new Date(Countrydata.date).toDateString()} {new Date(Countrydata.date).toTimeString()}</h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.recovered} elevation={5}>
            <h3 className={classes.h3}>Recovered</h3>
            <h3>{Countrydata.recovered}</h3>
            <hr/>
            <h6>Last Update on {new Date(Countrydata.date).toDateString()} {new Date(Countrydata.date).toTimeString()}</h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.deaths} elevation={5}>
            <h3 className={classes.h3}>Deaths</h3>
            <h3>{Countrydata.deaths}</h3>
            <hr/>
            <h6>Last Update on {new Date(Countrydata.date).toDateString()} {new Date(Countrydata.date).toTimeString()}</h6>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.rate}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.recovered} elevation={5}>
                  <h3 className={classes.h3}>Recovery Rate</h3>
                  <h3>{(((Countrydata.recovered/(Countrydata.Confirmed))*100).toFixed(1))}%</h3>
                  <hr />
                  <h6>Last Update on {new Date(Countrydata.date).toDateString()} {new Date(Countrydata.date).toTimeString()}</h6>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.deaths} elevation={5}>
                  <h3 className={classes.h3}>Deaths Rate</h3>
                  <h3>{(((Countrydata.deaths/(Countrydata.Confirmed))*100).toFixed(1))}%</h3>
                  <hr />
                  <h6>Last Update on {new Date(Countrydata.date).toDateString()} {new Date(Countrydata.date).toTimeString()}</h6>
                </Paper>
              </Grid>
            </Grid>
          </div>
      </div>
      <GlobalBarChart data={Countrydata}/>
    </div> : <h3>.</h3>
  );
}
