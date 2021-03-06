import "../styles/globals.css";
import "../shared/styles/main.scss";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "./Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="pnet">
      <Navigation />
      <Component {...pageProps} />
      <Footer></Footer>
    </main>
  );
}

export default MyApp;
