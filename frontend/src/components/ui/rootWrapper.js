import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"

import theme from "./theme"
import Apollowrapper from "../../apollo/Apollowrapper"

import { CartWrapper } from "../../contexts"

function RootWrapper({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <Apollowrapper>
        <CartWrapper>{element}</CartWrapper>
      </Apollowrapper>
    </ThemeProvider>
  )
}

export default RootWrapper
