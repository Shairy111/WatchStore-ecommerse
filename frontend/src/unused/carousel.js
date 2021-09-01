import React from "react"

import styles from "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  // root: {

  CarouselBox: {
    height: "500px",
    width: "500px",
  },

})



function CarouselBox({imageUrl}) {
  const classes = useStyles()
  return (
    <div className={classes.CarouselBox}>
      <Carousel>
        <div>
          <img src={imageUrl} />
          <p className="legend">Legend 1</p>
        </div>
    
      </Carousel>
    </div>
  )
}

export default CarouselBox
