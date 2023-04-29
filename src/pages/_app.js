import "@/styles/globals.css";
import Header from "@/components/Header";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></Script>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
