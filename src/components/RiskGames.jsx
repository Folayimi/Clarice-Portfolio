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
        <div className="h-full max-w-[1600px] mx-auto cflexss px-24 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
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
                className="bg-primary1 rounded-3xl py-2 px-7 sm:px-10 sm:py-3 text-black font-semibold sm:text-xl cursor-pointer hover:text-primary1 hover:bg-black transition-colors duration-500"
              >
                Visit
              </Link>
            </div>

            <div className="cflexss gap-4 w-[67%] md:w-full">
              <p className="header md:w-full flexmm" style={{ textTransform: "initial" }}>
                Riskgames.io
              </p>
              <p className="text-xl font-semibold md:w-full flexmm">
                Escape into the world of risk games
              </p>
              <p className="sm:text-sm md:text-xl text-justify w-full">
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

            <div
              className="block sm1:hidden relative h-[229px] w-[1110.24px] w-full rounded-[33px] mx-auto"
              style={{
                // backgroundColor: 'white',
                backgroundImage: "url(./images/village_skyline.svg)",
                backgroundSize: "cover",
                margin: "auto",
              }}
            >
              <Image
                src={`/images/fidget_bubble.svg`}
                width={430}
                height={200}
                alt="village skyline"
                className="w-[430px] h-[200px] absolute top-0 -left-32"
              />
              <div className="flex gap-4 px-4 h-full text-black">
                <div className="h-full w-[20%] flex justify-center items-end relative">
                  <Link
                    href={`https://fidgetbubbles.com`}
                    className="underline mb-12"
                  >
                    fidgetbubbles.com
                  </Link>
                </div>
                <div className="h-full w-[60%] flex flex-col justify-center">
                  <h1 className="font-black text-[24px]">Pop, Splash, Fun</h1>
                  <p className="text-[14px] text-justify">
                    Bubble popping has never been this satisfying. Fidget
                    Bubbles is designed to help relieve stress and anxiety. Each
                    bubble you pop releases a satisfying fidget effect that's
                    both calming and therapeutic. Your goal is to pop as many
                    bubbles as possible to earn points. Some bubbles contain
                    special items that give you bonuses, adding excitement and
                    increasing your chances of a higher score.
                  </p>
                </div>
                <div className="h-full w-[20%] flex items-center justify-center flex-col gap-4">
                  <Link href="/#">
                    <Image
                      src={`/images/Play Store badge.svg`}
                      alt=""
                      width={203}
                      height={61}
                    />
                  </Link>
                  <Link href="/#">
                    <Image
                      src={`/images/App Store badge.svg`}
                      alt=""
                      width={203}
                      height={61}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden sm1:block w-full">
              <div className="flexmm w-[100%] bg-svg rounded-[33px]">
                <div className="w-full h-full cflexsm text-black relative">
                  <div className="absolute top-0 left-0 w-full cflexsm">
                    <Image
                      className="mt-[-15%]"
                      src={"/mbubble.svg"}
                      alt="smt"
                      width={100}
                      height={100}
                    />
                    <Link
                      href=""
                      className="mt-[-35%] sm1:text-2xl underline italic text-xl"
                    >
                      fidgetbubbles.com
                    </Link>
                  </div>
                  <div className=" mt-[60%] cflexss py-5 px-5 pb-10 w-full gap-[20px]">
                    <h1 className="font-black text-[40px] sm:text-[24px]">Pop, Splash, Fun</h1>
                    <div className="flex sm1:text-xl sm:text-sm flex-col justify-center items-start gap-3 text-black text-sm w-full text-justify">
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
                    <div className="cflexmm w-full pt-[5px] gap-5">
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
    </>
  );
};
export default RiskGames;
