import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import Mission from "./Mission";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

const LandingPage = () => {
  return (
    <>
      <div className="font-sans w-[100vw]">
        <Header />
        <HeroSection />
        <About />
        <Mission />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </div>
    </>
  );
};
export default LandingPage;
