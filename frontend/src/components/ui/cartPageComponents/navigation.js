import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import Address from './address'
import Billing from './billing'
import Contact from './contact'


import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: "2px solid black",
    borderLeft: "2px solid black",
    borderRight: "2px solid black",
    width: "25rem",
  },

  body: {
    border: "2px solid black",
    width: "25rem",
    height: "25rem",
  },
}))

function Navigation() {
  const classes = useStyles()


  const [selectedStep, setSelectedStep] = useState(0)
 
  

  const handleStep = () => {
    if (selectedStep < steps.length - 1) {
      setSelectedStep(selectedStep + 1)
    } else {
      setSelectedStep(0)
    }
  }



  const steps = [{stepNo : 1 , stepName : "Address" , component:<Address move={handleStep}/>} ,  {stepNo : 2 , stepName : "contact" , component:<Contact move={handleStep}/>} , {stepNo : 3 , stepName : "billing" , component:<Billing move={handleStep}/>}]

  return (
    <>
      <div className={classes.root}>
        <Grid container justifyContent="center" alignItems="baseline">
          <Grid item>
            {" "}
            <Typography>Step {steps[selectedStep].stepNo} </Typography>
          </Grid>
          <Grid item>
            {" "}
            <Typography>---{steps[selectedStep].stepName} </Typography>
          </Grid>
          <Grid item>
            {" "}
            <Button onClick={handleStep}> &#x27A1; </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.body}>
        <Grid container direction="column" alignItems="center">
          <Grid item>{steps[selectedStep].component}</Grid>
        </Grid>
      </div>
    </>
  )
}

export default Navigation
