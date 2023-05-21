import Image from "next/image";
import bubble from "../Assets/bubble.svg";
import bubble2 from "../Assets/bubble2.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const RiskGames = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen overflow-auto cflexms pt-32 bg-gradient-to-b w-full from-[#5E00D6] to-[#290052] text-primary1 md:pt-20">
        <div className="h-full max-w-[1600px] mx-auto cflexss md:p-0">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10 md:p-5">
            <div className="cflexsm gap-2 w-1/3 md:w-full">
              <div className="flexmm w-[20em] md:w-[15em] sm:w-[70%]">
                <Image
                  src={"/step3.svg"}
                  alt="riskgames"
                  width={100}
                  height={300}
                  className="w-[260px] h-fit mb-5"
                />
              </div>
              <Link
                href="https://riskgames.vercel.app"
                className="bg-primary1 rounded-3xl py-2 px-5 text-black cursor-pointer hover:text-primary1 hover:bg-black transition-colors duration-500"
              >
                Visit
              </Link>
            </div>

            <div className="cflexss gap-4 w-[67%] md:w-full px-24 md:px-0">
              <p
                className="header"
                style={{ textTransform: "initial" }}
              >
                Riskgames.io
              </p>
              <p className="text-xl font-semibold">
                Escape into the world of risk games
              </p>
              <p className="sm:text-sm text-justify w-full">
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

          <div className="cflexmm pt-10 md:pt-20 pb-32 w-full gap-10">
            <p className="font-semibold text-4xl md:text-3xl">Games</p>
            <div className=" max-w-[1600px] w-full">
              <div className="flexmm block sm1:hidden w-full">
                <div className="w-[80%] h-full flex justify-between items-center dsk-svg rounded-3xl">
                  <div className="relative w-[25%] cflexsm text-black">
                    <div className="absolute -z-0 top-0 left-0 mt-[-14%] ml-[-41%] w-[190%] pointer-events-none">
                      <Image
                        src={"/deskbubble.svg"}
                        alt="smt"
                        width={100}
                        height={100}
                      />
                    </div>
                    <Link
                      href="https://fidgetbubbles.com"
                      className="z-50 mt-[8em] underline italic -mr-5 relative"
                    >
                      fidgetbubbles.com
                    </Link>
                  </div>
                  <div className="w-[55%] cflexms py-5 px-7 gap-3 h-full relative z-10">
                    <div className="w-1/3 flexsm">
                      <Image
                        src={"/psf.svg"}
                        alt="smt"
                        width={50}
                        height={100}
                      />
                    </div>
                    <div className="z-50 flex flex-col justify-center gap-3 items-start text-black h-full w-full text-justify">
                      <p>
                        Bubble popping has never been this satisfying. Fidget
                        Bubbles is designed to help relieve stress and anxiety.
                        Each bubble you pop releases a satisfying fidget effect
                        that's both calming and therapeutic. Your goal is to pop
                        as many bubbles as possible to earn points. Some bubbles
                        contain special items that give you bonuses, adding
                        excitement and increasing your chances of a higher
                        score.
                      </p>
                    </div>
                  </div>
                  <div className="w-[18%] cflexmm gap-3 h-full mr-7 py-5">
                    <Link
                      href="https://play.google.com/store/apps?utm_source=na_Med&utm_medium=hasem&utm_content=Nov0520&utm_campaign=Evergreen&pcampaignid=MKT-EDR-na-us-1000189-Med-hasem-ap-Evergreen-Nov0520-Text_Search_BKWS-id_100470_%7CEXA%7CONSEM_kwid_43700023139835691&gclid=CjwKCAjwvJyjBhApEiwAWz2nLbbI9X51JW9c1bLkuMUNMhawWlZOHcSLFCAIuaQ5S_krl37Be4k75xoCaM0QAvD_BwE&gclsrc=aw.ds&pli=1"
                      className="w-full bg-black p-3 rounded-xl cursor-pointer"
                    >
                      <Image
                        src={"/playSt.svg"}
                        alt="smt"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link
                      href="https://www.apple.com/app-store/"
                      className="bg-black p-3 rounded-xl w-full cursor-pointer"
                    >
                      <Image
                        src={"/apple.svg"}
                        alt="smt"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hidden sm1:block p-5">
                <div className="-z-0 flexmm w-full bg-svg rounded-3xl">
                  <div className="w-full h-full cflexsm text-black">
                    <div className="relative w-full cflexsm">
                      <div className="absolute -z-0 top-0 left-0 mt-[-15%] w-full">
                        <Image
                          src={"/mbubble.svg"}
                          alt="smt"
                          width={100}
                          height={100}
                        />
                      </div>
                      <Link
                        href="https://fidgetbubbles.com"
                        className="mt-[50%] underline italic text-xl"
                      >
                        fidgetbubbles.com
                      </Link>
                    </div>
                    <div className="cflexss py-5 px-5 w-full gap-5">
                      <div className="sm:w-2/3 flexsm">
                        <Image
                          src={"/psf.svg"}
                          alt="smt"
                          width={50}
                          height={100}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start gap-3 text-black text-xl w-full text-justify">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RiskGames;
