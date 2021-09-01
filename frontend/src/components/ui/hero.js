import React from 'react'


import { makeStyles } from "@material-ui/core/styles"
import  useMediaQuery  from "@material-ui/core/useMediaQuery"

import { Link } from "gatsby"
import theme from "./theme"
import Grid  from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
     
    },
    box:{
        width: "100%",
        height: "10em",
        backgroundColor : "#000000",
        
        
    },
    headingContainer:{
        width: "20em",
        height: "auto",
        paddingLeft: "2rem",
        paddingTop:"2rem"
    }


  }))



function Hero() {

    const classes = useStyles()
    return (

        

            <Grid container className={classes.box} >
                <Grid  xs ={12} item container justifyContent="space-between">
                    <Grid item >
                    <div className={classes.headingContainer}><Typography color="primary" variant="h1">Welcome to our watch store,Premium Brands and Much More</Typography></div>
                    </Grid>
                    <Grid item>
                        <div><Typography color="primary">Helo2</Typography></div>
                    </Grid>
                </Grid>

                
            </Grid>
  
        

    )
}

export default Hero
