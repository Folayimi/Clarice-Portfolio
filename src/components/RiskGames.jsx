import Image from "next/image";
import bubble from "../Assets/bubble.svg";
import bubble2 from "../Assets/bubble2.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const RiskGames = () => {
  const router = useRouter();
  return (
    <>
      <div className="cflexmm pt-32 bg-gradient-to-b w-full h-[100%] lg:h-[100vh] from-secondary5-200 to-secondary5-100 text-primary1 md:pt-20">
        <div className="cflexsm md:px-0">
          <div className="flexmm w-[80%] pt-10 md:w-full gap-5 px-0 md:px-7 md:flex-col pr-7% md:gap-10">
            <div className="cflexss sm:items-center w-1/3 gap-10 md:w-full">
              <div className="flexmm w-[20em] md:w-[15em] sm:w-[70%]">
                <Image
                  src={"/steps2.svg"}
                  alt="riskgames"
                  width={400}
                  height={400}
                />
              </div>            
              <Link
                href="https://riskgames.vercel.app"
                className="bg-primary1 rounded-3xl py-2 px-5 text-black cursor-pointer hover:text-primary1 hover:bg-black transition-colors duration-500"
              >
                Visit
              </Link>
            </div>
            <div className="cflexss gap-4 w-2/3 md:w-full">
              <p className="header">Riskgames.io</p>
              <p className="text-xl font-semibold">
                escape into the World of Risk Games
              </p>
              <p className="text-sm">
                Welcome to Risk Games, a modern gaming company that specializes
                in creating exciting mobile and desktop games that provide users
                with an unparalleled gaming experience. Our mission is to create
                games that are not only fun and engaging but also push the
                boundaries of what is possible in the world of gaming. Whether
                you're a casual gamer or a hardcore enthusiast, our games are
                designed to captivate and entertain, providing endless hours of
                enjoyment. lp you unwind from the stress of everyday life.
              </p>
            </div>
          </div>
          <div className="cflexmm gap-3 pt-28 md:pt-20 pb-32 w-full gap-5">
            <p className="font-semibold text-4xl md:text-3xl">Games</p>
            <div className="flexmm w-3/4 md:w-full  ">
              <Image
                className="block md:hidden"
                src={bubble}
                alt="companies"
                width="100%"
                height="100%"
              />
              <Image
                className="hidden md:block"
                src={bubble2}
                alt="companies"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RiskGames;
