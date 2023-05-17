import Image from "next/image";
import bubble from "../Assets/bubble.svg";
import bubble2 from "../Assets/bubble2.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const RiskGames = () => {
  const router = useRouter();
  return (
    <>
      <div className="cflexmm pt-32 w-full h-[100%] lg:h-[100vh] bg-gradient-to-b from-purple-900 to-blue-900 text-primary1 md:pt-20">
        <div className="cflexsm md:px-0">
          <div className="flexmm w-[80%] pt-10 md:w-full gap-5 px-0 md:px-3 md:flex-col pr-7% md:gap-10">
            <div className="cflexsm gap-5 sm:gap-5 w-1/3 md:w-full">
              <div className="flexmm w-[18em] sm:w-[50%]">
                <Image
                  src={"/step3.svg"}
                  alt="riskgames"
                  width={400}
                  height={400}
                />
              </div>
              <Link
                href="https://riskgames.vercel.app"
                className="bg-primary1 rounded-3xl py-2 px-7 sm:px-10 sm:py-3 text-black font-semibold sm:text-xl cursor-pointer hover:text-primary1 hover:bg-black transition-colors duration-500"
              >
                Visit
              </Link>
            </div>
            <div className="cflexss gap-4 w-3/5 pr-[7%] sm:pr-0 md:w-full">
              <p className="header">Riskgames.io</p>
              <p className="text-xl font-semibold">
                escape into the world of risk games
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
          <div className="cflexmm pt-28 md:pt-20 pb-32 w-full gap-10">
            <p className="font-semibold text-3xl md:text-3xl">Games</p>
            <div className="flexmm w-3/4 md:w-full">
              <div className="flexmm block sm:hidden w-full">               
                <div className="w-full relative h-full flexss dsk-svg rounded-3xl">
                  <div className="w-1/2 cflexsm ml-[-8%] mt-[-2%]">
                    <Image                      
                      src={"/deskbubble.svg"}
                      alt="smt"
                      width={100}
                      height={100}
                    />
                    <div className="flexmm w-full gap-3 mt-[-12%]">
                      <div className="bg-black p-3 rounded-xl w-[20%] cursor-pointer">
                        <Image
                          src={"/playSt.svg"}
                          alt="smt"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="bg-black p-3 rounded-xl w-[20%] cursor-pointer">
                        <Image
                          src={"/apple.svg"}
                          alt="smt"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-4/6 ml-[-10%] cflexms py-5 px-7 gap-3 h-full">
                    <div className="w-1/3 flexsm">
                      <Image
                        src={"/psf.svg"}
                        alt="smt"
                        width={50}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-3 items-start text-black h-full w-full">
                      <p>Bubble popping has never been this satisfying</p>
                      <p>
                        Fidget Bubbles is designed to help relieve stress and
                        anxiety. Each bubble you pop releases a satisfying
                        fidget effect that's both calming and therapeutic.
                      </p>
                      <p>
                        Your goal is to pop as many bubbles as possible to earn
                        points. Some bubbles contain special items that give you
                        bonuses, adding excitement and increasing your chances
                        of a higher score.
                      </p>
                      <p>
                        So what are you waiting for? Download the app and pop
                        your stress away!
                      </p>
                      <Link href="" className="underline italic">
                        fidgetbubbles.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="flexmm w-[100%] bg-svg">                  
                  <div className="w-full h-full cflexsm text-black">
                    <div className="absolute w-full cflexsm">
                      <Image
                        className="mt-[-15%]"
                        src={"/mbubble.svg"}
                        alt="smt"
                        width={100}
                        height={100}
                      />
                      <Link
                        href=""
                        className="mt-[-35%] underline italic text-xl"
                      >
                        fidgetbubbles.com
                      </Link>
                    </div>
                    <div className=" mt-[55%] cflexss py-5 px-12 w-full gap-5">
                      <div className="w-2/3 flexsm">
                        <Image
                          src={"/psf.svg"}
                          alt="smt"
                          width={50}
                          height={100}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start gap-3 text-black text-sm w-full text-justify">
                        <p>Bubble popping has never been this satisfying</p>
                        <p>
                          Fidget Bubbles is designed to help relieve stress and
                          anxiety. Each bubble you pop releases a satisfying
                          fidget effect that's both calming and therapeutic.
                        </p>
                        <p>
                          Your goal is to pop as many bubbles as possible to
                          earn points. Some bubbles contain special items that
                          give you bonuses, adding excitement and increasing
                          your chances of a higher score.
                        </p>
                      </div>
                      <div className="cflexmm mt-[-3%] w-full gap-3">
                        <div className="bg-black p-3 rounded-xl w-[60%] cursor-pointer">
                          <Image
                            src={"/playSt.svg"}
                            alt="smt"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="bg-black p-3 rounded-xl w-[60%] cursor-pointer">
                          <Image
                            src={"/apple.svg"}
                            alt="smt"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RiskGames;
