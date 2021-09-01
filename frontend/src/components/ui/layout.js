/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./header"

const useStyles = makeStyles(theme => ({
  mainMargin: {
    marginTop: "4rem",
  },
}))

function Layout({ children }) {
  const classes = useStyles()
  return (
    <>
      <Header siteTitle="Watch Store" />
      <main className={classes.mainMargin}>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
