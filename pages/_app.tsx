import "../styles/globals.css";
import "../shared/styles/main.scss";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Navigation/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
