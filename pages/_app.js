import smoothscroll from "smoothscroll-polyfill";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const isBrowser = typeof window !== "undefined";

  if (isBrowser) smoothscroll.polyfill();
  return <Component {...pageProps} />;
}

export default MyApp;
