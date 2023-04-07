import { useRef, useEffect } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import Mission from "./Mission";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const LandingPage = () => {
  const hm = useRef(null);
  const abt = useRef(null);
  const mis = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const p4 = useRef(null);

  useEffect(() => {
    scrollToRef(hm);
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 font-sans w-[100%]">
        <Header scrollToRef={scrollToRef} hm={hm} abt={abt} mis={mis} />
        <HeroSection position={hm} />
        <About position={abt} />
        <Mission scrollToRef={scrollToRef} position={mis} p1={p1} p2={p2} p3={p3} p4={p4} />
        <Project1 position={p1} />
        <Project2 position={p2} />
        <Project3 position={p3} />
        <Project4 position={p4} />
      </div>
    </>
  );
};
export default LandingPage;
