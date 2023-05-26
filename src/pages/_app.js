import "@/styles/globals.css";
import Navigation from "../Components/Navigation";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
