import "@/styles/globals.css";
import Footer from "@/components/footer/Footer";
import NavigationBar from "@/components/Navigation";
import { ThemeProvider, createTheme } from "@mui/material";
import { LinkBehaviour } from "@/components/LinkBehavior";

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
  },
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
