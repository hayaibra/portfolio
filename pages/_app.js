import Layout from "../components/Layout";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const outertheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    othercolor: {
      main: "#0a2241",
      contrastText: "#fff",
    },
    pinkcolor: {
      main: "#f05684",
    },
    bluecolor: {
      main: "#074070",
    },
  },
  // spacing: {
  //   marginLeft: 0,
  // },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={outertheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
