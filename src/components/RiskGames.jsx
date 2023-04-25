import Image from "next/image";
import steps2 from "../Assets/steps2.png";
import bubble from "../Assets/bubble.png";
import bubble2 from "../Assets/bubble2.png";

const RiskGames = () => {
  return (
    <>
      <div className="cflexms pt-32 bg-gradient-to-b h-full from-secondary5-200 to-secondary5-100 text-primary1 md:pt-20">
        <div className="cflexss px-24 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
            <div className="cflexsm w-1/3 gap-5 md:w-full">
              <div className="flexmm w-[20em] md:w-[15em]">
                <Image src={steps2} alt="gogi" width="100%" height="100%" />
              </div>
              <div className="bg-primary1 rounded-3xl py-2 px-5 text-black cursor-pointer hover:text-primary1 hover:bg-black transition-colors duration-300">
                Visit
              </div>
            </div>
            <div className="cflexss gap-4 w-2/3 md:w-full">
              <p className="font-bold text-5xl">Riskgames.io</p>
              <p className="text-xl font-semibold">
                Escape into the World of Risk Games
              </p>
              <p className="text-sm">
                Welcome to Risk Games, where gaming meets tranquility. We're a
                modern gaming company that specializes in creating mobile and
                desktop games designed to provide a soothing experience for our
                users. Our games are designed to help you unwind from the stress
                of everyday life.
              </p>
            </div>
          </div>
          <div className="flexmm gap-3 pt-28 pb-32 w-full">            
            <div className="flexmm w-3/4 md:w-full">
              <Image className="block md:hidden" src={bubble} alt="companies" width="100%" height="100%" />
              <Image className="hidden md:block" src={bubble2} alt="companies" width="100%" height="100%" />
            </div>
          </div>        
        </div>
      </div>
    </>
  );
};
export default RiskGames;
