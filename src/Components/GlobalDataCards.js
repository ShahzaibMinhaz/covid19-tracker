import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import GlobalBarChart from './GlobalBarChart.js'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:'80%',
    margin:'0 auto',
    marginTop:'20px',
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

export default function GlobaldataCards() {

const [globaldata,setglobaldata] = useState([{}]);
const [rate,setrate] = useState([{}]);
// const [recoveryRate,setrecoveryRate] = useState[0]
// const [DeathRate,setDeathRate] = useState[0]

  useEffect(()=>{

    async function getglobaldata(){
      const response = await fetch('https://covid19.mathdro.id/api')
      const data = await response.json()

      const getdata={
        Confirmed : data.confirmed.value,
        recovered : data.recovered.value,
        deaths : data.deaths.value,
        date : data.lastUpdate
      }

      const recovery = ((getdata.recovered/(getdata.Confirmed))*100).toFixed(1);;
      // console.log(recovery)
      // setrecoveryRate(recovery)
      const deaths = ((getdata.deaths/(getdata.Confirmed))*100).toFixed(1);;
      // console.log(deaths)
      // setDeathRate(deaths)
      setglobaldata(getdata)

      const rate ={
        recoveryRate : recovery,
        deathRate : deaths
      }

      setrate(rate)
    }
    getglobaldata()
  },[])

  const classes = useStyles();
  console.log(rate.recoveryRate)
  return (
    globaldata.Confirmed ?
    <div className={classes.root}>
      <h1 className={classes.h1}>Global Data</h1>
    <div className={classes.rootChild}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.Confirmed} elevation={5}>
            <h3 className={classes.h3}>Infected</h3>
            <h3  >{globaldata.Confirmed}</h3>
            <hr/>
            <h6>Last Update on {new Date(globaldata.date).toDateString()} {new Date(globaldata.date).toTimeString()}</h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.recovered} elevation={5}>
            <h3 className={classes.h3}>Recovered</h3>
            <h3>{globaldata.recovered}</h3>
            <hr/>
            <h6>Last Update on {new Date(globaldata.date).toDateString()} {new Date(globaldata.date).toTimeString()}</h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.deaths} elevation={5}>
            <h3 className={classes.h3}>Deaths</h3>
            <h3>{globaldata.deaths}</h3>
            <hr/>
            <h6>Last Update on {new Date(globaldata.date).toDateString()} {new Date(globaldata.date).toTimeString()}</h6>
          </Paper>
        </Grid>
      </Grid>

          <div className={classes.rate}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.recovered} elevation={5}>
                  <h3 className={classes.h3}>Recovery Rate</h3>
                  <h3>{rate.recoveryRate}%</h3>
                  <hr />
                  <h6>Last Update on {new Date(globaldata.date).toDateString()} {new Date(globaldata.date).toTimeString()}</h6>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.deaths} elevation={5}>
                  <h3 className={classes.h3}>Deaths Rate</h3>
                  <h3>{rate.deathRate}%</h3>
                  <hr />
                  <h6>Last Update on {new Date(globaldata.date).toDateString()} {new Date(globaldata.date).toTimeString()}</h6>
                </Paper>
              </Grid>
            </Grid>
          </div>
      </div>
      <GlobalBarChart data={globaldata}/>
      
    </div>: <LinearProgress color="secondary" />
  );
}
