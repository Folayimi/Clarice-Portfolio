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
            <div className="cflexsm gap-2 w-1/3 md:w-full">
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
          <div className="cflexmm pt-28 md:pt-20 pb-32 w-full gap-5">
            <p className="font-semibold text-4xl md:text-3xl">Games</p>
            <div className="flexmm w-3/4 md:w-full  ">
              <div className="flexmm relative block sm:hidden w-[100%]">
                <Image
                  src={"/desktopBg.svg"}
                  alt="smt"
                  width={100}
                  height={50}
                />
                <div className="absolute top-0 left-0 w-full h-full flexsm">
                  <div className="cflexsm ml-[-10%] mt-[-2%] h-full">
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
                  <div className="absolute top-0 right-0 cflexms py-5 px-7 w-3/5 gap-3 h-full">
                    <div className="w-1/3 flexsm">
                      <Image
                        src={"/psf.svg"}
                        alt="smt"
                        width={50}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start text-black h-full w-full">
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

              <div className="hidden flexmm relative sm:block w-[100%] px-5">
                <Image
                  src={"/mobileBg.svg"}
                  alt="smt"
                  width={100}
                  height={50}
                />
                <div className="absolute top-0 left-0 w-full h-full cflexsm text-black">
                  <div className="mt-[-8%] w-[100%] cflexsm">
                    <Image
                      src={"/deskbubble.svg"}
                      alt="smt"
                      width={100}
                      height={100}
                    />
                    <Link href="" className="mt-[-2em] underline italic text-xl">
                      fidgetbubbles.com
                    </Link>
                  </div>
                  <div className="cflexss py-5 px-12 w-full gap-5 h-full">
                    <div className="w-2/3 flexsm">
                      <Image
                        src={"/psf.svg"}
                        alt="smt"
                        width={50}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3 text-black w-full text-justify">
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
                    </div>
                    <div className="cflexmm w-full gap-3">
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
              {/* <Image
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
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RiskGames;
