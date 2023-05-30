import Image from "next/image";
import Link from "next/link";
import baloons from "../Assets/baloons.png";

const CoolProd = () => {
  return (
    <>
      <div className="h-screen overflow-auto cflexms pt-32 bg-[#EE6C0E] text-primary1 md:pt-20">
        <div className="h-full max-w-[1600px] mx-auto cflexss px-24 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
            <div className="cflexsm gap-2 w-1/3 md:w-full">
              <div className="flexmm w-[25em] md:w-[20em] sm:w-[70%]">
                <Image
                  src={"/Frame.svg"}
                  alt="big music label"
                  width={416}
                  height={428}
                />
              </div>
              <Link
                href=""
                className="bg-primary1 rounded-3xl py-2 px-5 text-black cursor-pointer hover:text-primary1 hover:bg-black transition-colors duration-500"
              >
                Visit
              </Link>
            </div>

            <div className="cflexss pt-2 gap-4 w-2/3 md:w-full">
              <p className="header">Cool Production Club</p>
              <p className="text-xl font-semibold">
                A music production company
              </p>
              <p className="text-sm text-justify w-full">
                We are a dynamic and innovative music production company
                dedicated to creating captivating soundtracks for artists,
                movies, commericials, films, games and TV. With a deep passion
                for music and a keen understanding of the power it holds, we
                bring your creative visions to life through mesmerizing
                melodies, captivating rhythms, and immersive soundscapes.
              </p>            
            </div>
          </div>

          <div className="cflexms gap-3 pt-32 pb-72 w-[70%] md:w-full pl-0 lg:pl-[50px]">             
            <p className="font-bold text-3xl md:text-2xl">Creating soundtracks in these industries </p>
            <div className="w-full flexsm md:justify-center py-5 sm:p-5 gap-3 flex-wrap">
              <div className="tracks">
                    Music
              </div>
              <div className="tracks">
                    Movies
              </div>
              <div className="tracks">
                    Tv
              </div>
              <div className="tracks">
                    Commercials
              </div>
              <div className="tracks">
                    Films
              </div>
              <div className="tracks">
                    Games
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoolProd;
