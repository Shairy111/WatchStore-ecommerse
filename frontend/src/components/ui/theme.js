import { createTheme} from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#1e272e",
    },
    common: {
     
    },
  },
  typography: {
    h1: {
      fontSize: "1.5rem",
      fontFamily: "Playfair Display",
      fontWeight:700,
      
    },
    h2: {
      fontSize: "1.5rem",
      fontFamily: "Playfair Display",
      fontWeight:400
    },
    h3: {
      fontSize: "1rem",
      fontFamily: "Playfair Display",
      fontWeight:400
    },
    body1: {
      fontSize: "0.9rem",
      fontFamily: "Playfair Display",
      fontWeight:400
    },
    body2: {
      fontSize: "0.8rem",
      fontFamily: "Playfair Display",
      fontWeight:400
    },
  },
  overrides: {},
})

export default theme
