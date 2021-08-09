import type { AppProps } from "next/app"
import { MuiThemeProvider, CssBaseline, Container, Box } from "@material-ui/core";
import theme from "../theme";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <Container>
        <Box marginTop={1}>
          <Component {...pageProps} />
        </Box>        
      </Container>      
    </MuiThemeProvider>
  );
}
export default MyApp
