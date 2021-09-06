import React, { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import QtyButton from "../components/ui/productDetail_Components/qtyButton"

import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "2rem",
  },

  // CarouselBox unused at the moment
  CarouselBox: {
    height: "25em",
    width: "25em",
  },

  metaInfoBox: {},
}))

function ProductDetail({ pageContext }) {
  const classes = useStyles()
  const { name, description, featured, images, variants, product,price , qty } = pageContext

  useEffect(() => {
    let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed"))
    if (recentlyViewed) {
      if (recentlyViewed.length === 10) {
        recentlyViewed.shift()
      }
      if (!recentlyViewed.some(product => product.name === name)) {
        recentlyViewed.push(product)
      }
    } else {
      recentlyViewed = [product]
    }

    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed))
  }, [])



  return (
    <>
      <Grid
        container
        direction="column"
        className={classes.root}
        justifyContent="space-between"
      >
        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Carousel autoPlay="true">
                    {images.map(image => {
                      const fullUrl = image.url
                      return (
                        <div>
                          <img src={fullUrl} />
                          <p className="legend">Legend 1</p>
                        </div>
                      )
                    })}
                  </Carousel>
                </Grid>
                <Grid item>
                  <QtyButton finalPrice ={price}  quantity = {qty} name = {name}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h1">
                Hello there shoud be side by side
              </Typography>
            </Grid>
          </Grid>
        </Grid>


        
        <Grid item>
          <Typography variant="h1">Description</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h1">Feature</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1">Delivery</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductDetail
