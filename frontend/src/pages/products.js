import React, { useState } from "react"
import Pagination from "@material-ui/lab/Pagination"

import { useStaticQuery, graphql } from "gatsby"

import WatchCard from "../components/ui/WatchCard"
import { Grid } from "@material-ui/core"

function Products() {
  const [page, setPage] = useState(1)

  const allProducts = useStaticQuery(graphql`
    query allProducts {
      allStrapiWatch {
        nodes {
          name
          price
          on_sale
          salePercent
          images {
            url
          }
        }
      }
    }
  `)

  const url = process.env.GATSBY_STRAPI_URL

  const productPerPage = 4
  return (
    <>
      {/* some code for filter and sort  */}
      <Grid container justifyContent="center">
        {allProducts.allStrapiWatch.nodes.slice((page-1)*productPerPage,page*productPerPage).map((node, i) => {
          const fullUrl = url + node.images[0].url
          return (
            <>
              <Grid item>
                <WatchCard
                  key={i}
                  watchName={node.name}
                  ImageUrl={fullUrl}
                  oldPrice={node.price}
                  salePercent={node.salePercent}
                  path={`/${node.name}/details`}
                />
              </Grid>
            </>
          )
        })}
      </Grid>

<Grid container justifyContent="center">
  <Grid item>
  <Pagination
        count={productPerPage}
        page={page}
        onChange={(e, newPage) => setPage(newPage)}
      />
  </Grid>

</Grid>
  
    </>
  )
}

export default Products
