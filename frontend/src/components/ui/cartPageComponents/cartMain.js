import React , {useContext} from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { CartContext } from "../../../contexts"



const useStyles = makeStyles(theme => ({
  root: {
   
    marginTop:'2rem'
  },
  box :{
  
  },

  desc:{
    marginLeft:"2rem"
  },
  picture:{
      height:"5rem",
      width:"5rem",
      backgroundSize : "contain",
      backgroundRepeat:"no-repeat",
      backgroundImage : `url(https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UX522_.jpg)`
      
  }


}))

function CartMain({name,qty,price}) {
  const classes = useStyles()

  const  {cart}= useContext(CartContext)

//   console.log("cart items" , cart)
  return (
    // <Grid container justifyContent="space-around" className={classes.root}>
       
    //   <Grid item >
    //     <Grid container justifyContent="space-between" direction="row" className={classes.box} >
    //       <Grid item>
    //         <div className={classes.picture}>

    //         </div>
    //       </Grid>
    //       <Grid item>
    //         <Grid container direction="column" className = {classes.desc}>
    //           <Grid item>
    //             <Typography>{}</Typography>
    //           </Grid>
    //           <Grid item > 
    //             <Typography>{price}</Typography>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item>
    //     <Typography>{qty}</Typography>
    //   </Grid>
    // </Grid>
    <>
     {console.log("cart items" , cart)}
    
    </>
    
  )
}

export default CartMain

{
  /* <Grid container >
<Grid item>
  <Typography>Picture</Typography>
</Grid>
<Grid item>
  <Grid container direction="column">
    <Grid item>
      <Typography>Item NAme</Typography>
    </Grid>
    <Grid item>
      <Typography>price</Typography>
    </Grid>
  </Grid>
</Grid>
</Grid> */
}
