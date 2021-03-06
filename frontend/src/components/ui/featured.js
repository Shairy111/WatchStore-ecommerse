//ratings to be extracted from query
import React from "react";
import WatchCard from "./WatchCard";
import Grid from "@material-ui/core/Grid";
import { useStaticQuery, graphql } from "gatsby";

function Featured() {
  const featuredProducts = useStaticQuery(graphql`
    query MyQuery {
      allStrapiWatch {
        nodes {
          name
          price
          on_sale
          salePercent
          strapiId
          images {
            url
          }
        }
      }
    }
  `);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-start">
            {featuredProducts.allStrapiWatch.nodes.map((node, idx) => {
              const fullUrl = node.images[0].url;
              return (
                <>
                  <Grid key={idx} item>
                    <WatchCard
                      watchName={node.name}
                      ImageUrl={fullUrl}
                      oldPrice={node.price}
                      salePercent={node.salePercent}
                      path={`/${node.name}/details`}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Featured;
