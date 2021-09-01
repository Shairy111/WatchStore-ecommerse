import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const useStyles = makeStyles({
  // root: {

  // },
  card: {
    height: "auto",
    width: "10em",
    border: "1px solid black",
    marginLeft: "1rem",
    marginRight: "1rem",
    marginBottom: "2rem",
    marginTop: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },

  cardImage: {
    width: "100%",
    height: "10em",
    verticalAlign: "middle",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  saleCircle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    border: "1px solid #ff8400",
    zIndex: "5",
    position: "absolute",
    backgroundColor: "#ff8400",
    color: "#ffffff"
  },
  description: {},
  watchName: {},
  pricing: {},
  old: {
    color: "gray",
    fontSize: "0.8rem",
    textDecoration: "line-through",
  },
  new: {
    paddingBottom: "3em",
  },
})

const calculateNewPrice = (oldPrice, salePercent) => {
  const newPrice = oldPrice - salePercent
  return newPrice
}

function WatchCard({
  watchName,
  ImageUrl,
  ratings,
  oldPrice,
  salePercent,
  path
}) {
  const classes = useStyles()

  // oldPrice = 100
  // salePercent = 50
  // ImageUrl =
  //   "https://atlas-content-cdn.pixelsquid.com/stock-images/men-s-wrist-watch-3y10XB1-600.jpg"
  // watchName = "Tissot 2jzz"
  // ratings = "5 stars"

  return (
    <>
      <div className={classes.card}>
        {salePercent ? (
          <div className={classes.saleCircle}>
            <Typography variant="h3">{`${salePercent}%`}</Typography>
          </div>
        ) : null}

        <Link to={path}>
        <div className={classes.cardImage}>
          <img className={classes.image} src={ImageUrl} alt="watch Picture" />
        </div>
        </Link>
        
        <div className={classes.description}>
          <div className={classes.watchName}>
            <Typography variant="h3">{watchName}</Typography>
            <Typography variant="h3">{ratings}</Typography>
          </div>

          <div className={classes.pricing}>

            {salePercent ? <Typography variant="body1" className={classes.old}>
              Rs {oldPrice}/-
            </Typography> : null}
            

         
            <Typography variant="body1" className={classes.new}>
              Rs {calculateNewPrice(oldPrice, salePercent)}/-
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchCard
