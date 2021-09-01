import Grid  from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import React from 'react'

import Navigation from './navigation'

function Checkout() {

  
    return (
        <Grid container direction="column" alignItems="center"> 
            <Grid item><Navigation/></Grid>
            
        </Grid>
    )
}

export default Checkout
