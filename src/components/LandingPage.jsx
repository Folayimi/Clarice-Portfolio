import { useRef, useEffect } from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Mission from "./Mission";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const LandingPage = ({ page }) => {  
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    if (page === "") {
      scrollToRef(homeRef);
    } else if (page === "about") {
      scrollToRef(aboutRef);
    } else if (page === "mission") {
      scrollToRef(missionRef);
    }
  },[page]);

  return (
    <>
      <div className="absolute top-0 w-full left-0 font-sans">
        <HeroSection position={homeRef}/>
        <About position={aboutRef}/>
        <Mission position={missionRef}/>
      </div>
    </>
  );
};
export default LandingPage;
