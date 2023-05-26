import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
