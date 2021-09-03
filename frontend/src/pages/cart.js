import React, { useState, useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartMain from "../components/ui/cartPageComponents/cartMain"
import { makeStyles } from "@material-ui/core/styles"
import { CartContext } from "../contexts"
import Checkout from "../components/ui/cartPageComponents/checkout"

const useStyles = makeStyles(theme => ({
  root: {
    
  },
}))
function Cart() {
  const classes = useStyles()

  const {cart} = useContext(CartContext)

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h1"> Guest Cart</Typography>
        </Grid>

        
  
      {/* <CartMain/> */}
      {/* <Checkout/> */}
      </Grid>

      
    </>
  )
}

export default Cart
