import "@/styles/globals.css";
import Header from "@/components/Header";
import { useRef } from "react";

export default function App({ Component, pageProps}) {

  return(
    <>
      <Header/>
      <Component {...pageProps} />;    
    </>
  ) 
}
