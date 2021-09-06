import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  thumbnailImage: {
    backgroundSize: "cover",
  },

  container: {
    height: "20em",
    width: "20em",
    border: "1px solid black",
  },
}))

function Brands() {
  const classes = useStyles()

  const brands = useStaticQuery(graphql`
    query AllBrandsQuery {
      allStrapiBrand {
        nodes {
          brandName
          brandDescription
          strapiId
          thumbnail {
            url
          }
        }
      }
    }
  `)

  
  return (
    <>
      {brands.allStrapiBrand.nodes.map((node, i) => {
        const fullUrl = node.thumbnail.url
        return (
          <>
            <Link to={`/brands/${node.brandName.toLowerCase()}`}>
            <div
                key={i}
                style={{
                  backgroundImage: `url(${fullUrl})`,
                  backgroundSize: "cover",
                }}
                className={classes.container}
              ></div>
            </Link>
           
            

            <Typography variant="body1">{node.brandName}</Typography>
          </>
        )
      })}
    </>
  )
}

export default Brands
