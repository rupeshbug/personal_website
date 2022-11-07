import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
