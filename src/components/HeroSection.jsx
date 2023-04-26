import { useEffect, useRef } from "react";
import Image from "next/image";
import person from "../Assets/person.png";
import hex from "../Assets/hex.png";
import { FaChevronDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";
// import Script from "next/script";

const HeroSection = ({ position }) => {
  const vantaRef = useRef(null);
  let vantaEffect = useRef(null);

  var setVanta = () => {
    if (window.THREE && window.VANTA) {
      vantaEffect.current = window.VANTA.DOTS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        color2: 0x2088ff,
      });
    }
  };
  const loadVanta = async () => {
    const VANTA = await import(
      "../../node_modules/vanta/dist/vanta.dots.min.js"
    );
    setVanta();
  };
  useEffect(() => {
    loadVanta();
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);
  return (
    <>
      <div
        ref={vantaRef}
        className="relative w-full bg-black pt-28 md1:pt-24 pr-10 pl-20 sm:pl-10 cflexbm sm:h-[35em] h-[44em] font-sans"
      >
        <div
          ref={position}
          className="text-primary1 text-6xl md:text-5xl md1:text-3xl cflexss w-full gap-10 md1:gap-4 font-semibold"
        >
          <div className="flexsm w-full md:w-[50%] md1:w-full">
            <p>Hey There,</p>
          </div>
          <div className="md:justify-start flexem w-full md:w-[70%] md1:w-full">
            <div className="w-[60%] md1:w-full">
              <Typewriter
                options={{
                  cursor: "_",
                  delay: 50,
                  autoStart: true,
                  loop: true,
                  repeat: true, // This option makes the typewriter loop indefinitely.
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I am an entrepreneur,")
                    .pauseFor(1000)
                    .typeString(" visionary, innovator")
                    .pauseFor(1000)
                    .typeString(" and music producer")
                    .pauseFor(1000)
                    // .deleteAll()
                    .start();
                }}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[12em] right-16 w-[5em]">
          <Image src={hex} alt="Hex" width="100%" height="100%" />
        </div>
        <div className="flexmm cursor-pointer">
          <FaChevronDown color="white" size="60px" />
        </div>
        <div className="absolute bottom-0 left-16 w-[45em] md:left-auto sm:w-full md:right-0 md:bottom-0 md:w-[60%] md1:w-[80%]">
          <Image src={person} alt="person" width="100%" height="100%" />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
