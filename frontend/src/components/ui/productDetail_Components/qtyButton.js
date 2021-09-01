import React, { useState , useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import IconButton from "@material-ui/core/IconButton"
import Grid from "@material-ui/core/Grid"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import Typography from "@material-ui/core/Typography"


import { CartContext } from "../../../contexts"
import { addToCart , clearCart } from "../../../contexts/actions"


const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "3.5rem",
    marginBottom: "0.76rem",
  },
}))

function QtyButton({finalPrice , quantity , name}) {
  const classes = useStyles()

  

  const  {cart , dispatchCart} = useContext(CartContext)
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(finalPrice)

  const upCount = () => {
    if (count < 5) {
      setCount(count + 1)
    }
  }

  const downCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const newPrice = () => {
    return price * count
  }


  const handleCart = () => {
    dispatchCart(addToCart(count,name,finalPrice))
  }

  const clearall = () => {

    dispatchCart(clearCart())
  }
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography>Rs {newPrice()}</Typography>
        </Grid>
        <Grid item className={classes.root}>
          <Typography variant="h2">{count}</Typography>
        </Grid>

        <Grid item>
          <ButtonGroup>
            <Button onClick={upCount}>+</Button>
            <Button onClick={handleCart}>
              <AddShoppingCartIcon />
            </Button>
            <Button onClick={downCount}>-</Button>
          </ButtonGroup>
          <Button onClick={clearall}>x</Button>
          {console.log(cart)}
        </Grid>
      </Grid>
      
    </>
  )
}

export default QtyButton
