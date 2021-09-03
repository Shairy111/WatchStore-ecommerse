import React , {useState} from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import InputAdornment from "@material-ui/core/InputAdornment"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
  textfeild: {
    marginTop: "1.5rem",
  },
}))

function Address({ move }) {
  const classes = useStyles()


  let savedValues
  if (typeof window !== 'undefined') {
    savedValues = JSON.parse(localStorage.getItem("AddressValues"))
}
  
  
  
  const [address , setAddress] = useState(savedValues === null ? "" : JSON.parse(localStorage.getItem("AddressValues")).address)
  const [zip , setZip] = useState(savedValues === null ? "" : JSON.parse(localStorage.getItem("AddressValues")).zip)
  


  const saveValues = () => {
     const values = {
        address,
        zip
      }
      localStorage.setItem("AddressValues" , JSON.stringify(values) )
      return
  }
  const nextHandler = () => {
    saveValues()
    move()
  }
  return (
    <>
    
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography>Address Info</Typography>
        </Grid>

        <Grid item>
          <TextField
            className={classes.textfeild}
            value = {address}
            label="Address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                    <LocationOnIcon/>
                </InputAdornment>
              ),
            }}

            onChange = {(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfeild}
            value = {zip}
            label="Zip code"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <MyLocationIcon/>
                </InputAdornment>
              ),
            }}
            onChange = {(e) => setZip(e.target.value)}
          />
        </Grid>
   
        <Grid item>
          <Button onClick={nextHandler}>NEXT</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Address

