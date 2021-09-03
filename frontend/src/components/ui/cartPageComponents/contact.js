import React , {useState} from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import AccountCircle from "@material-ui/icons/AccountCircle"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
  textfeild: {
    marginTop: "1.5rem",
  },
}))

function Contact({ move }) {
  const classes = useStyles()


  if (typeof window !== 'undefined') {
    let savedValues = JSON.parse(localStorage.getItem("ContactValues"))
}
  
  //ContactValues save it into variable
  
  const [name , setName] = useState(savedValues === null ? "" : JSON.parse(localStorage.getItem("ContactValues")).name)
  const [email , setEmail] = useState(savedValues === null ? "" : JSON.parse(localStorage.getItem("ContactValues")).email)
  const [phoneNumber , setPhoneNumber] = useState(savedValues === null ? "" : JSON.parse(localStorage.getItem("ContactValues")).phoneNumber)


  const saveValues = () => {
     const values = {
        name,
        email,
        phoneNumber
      }
      localStorage.setItem("ContactValues" , JSON.stringify(values) )
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
          <Typography>Contact page</Typography>
        </Grid>

        <Grid item>
          <TextField
            className={classes.textfeild}
            value = {name}
            label="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}

            onChange = {(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfeild}
            value = {email}
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            onChange = {(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfeild}
            value = {phoneNumber}
            label="Phone Number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
            onChange = {(e) => setPhoneNumber(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button onClick={nextHandler}>NEXT</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
