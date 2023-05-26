import "@/styles/globals.css";
import Footer from "@/components/footer/Footer";
import NavigationBar from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
