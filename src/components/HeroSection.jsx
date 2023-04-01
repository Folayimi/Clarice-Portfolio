import Image from "next/image";
import person from "../Assets/person.png";
import hex from "../Assets/hex.png"
import { ChevronDown } from "heroicons-react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <>
      <div className="relative bg-black pt-28 pr-10 pl-20 cflexbm h-[100vh] font-sans">
        <div className="text-primary1 text-6xl cflexss w-full gap-10 font-semibold">
          <div className="flexsm w-full">
            <p>Hey There,</p>
          </div>
          <div className="flexem w-full">
            <div className="w-[60%]">
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
                    .typeString("I am an entrepreneur")                                                    
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
          <Image src={hex} width="100%" height="100%" />
        </div>
        <div className="flexmm cursor-pointer">
          <ChevronDown color="white" size="100px" />
        </div>
        <div className="absolute bottom-0 left-16 w-[48%]">
          <Image src={person} width="100%" height="100%" />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
