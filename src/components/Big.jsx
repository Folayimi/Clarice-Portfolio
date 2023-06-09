import Image from "next/image";
import Link from "next/link";
import baloons from "../Assets/baloons.png";

const Project2 = () => {
  return (
    <>
      <div className="h-screen overflow-auto cflexms pt-32 bg-gradient-to-b from-secondary2-100 to-secondary2-200 text-primary1 md:pt-20">
        <div className="h-full max-w-[1600px] mx-auto cflexss px-24 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
            <div className="cflexsm gap-2 w-1/3 md:w-full">
              <div className="flexmm w-[20em] md:w-[15em] sm:w-[70%]">
                <Image
                  src={"/big-logo.svg"}
                  alt="big music label"
                  width={416}
                  height={428}
                />
              </div>
              <Link
                href="https://bigmusiclabel.io"
                className="bg-primary1 rounded-3xl py-2 px-5 text-black cursor-pointer hover:text-primary1 hover:bg-black transition-colors duration-500"
              >
                Visit
              </Link>
            </div>

            <div className="cflexss pt-2 gap-4 w-2/3 md:w-full">
              <p className="header">Big Music Label</p>
              <p className="text-xl font-semibold">
                With over 60 years of combined experience, we professionally
                manage, develop and grow artists careers
              </p>
              <p className="text-sm text-justify w-full">
                Big Music Label focuses on developing exceptional talent,
                fostering a love for music, and motivating new artists. We've
                built a record company that offers artists a safe atmosphere
                where they may feel comfortable.
              </p>
              <div className="w-[25em] md:w-[20em] md:ml-[-2em] ml-[-2.5em]">
                <Image src={baloons} alt="baloons" width="100%" height="100%" />
              </div>
            </div>
          </div>

          <div className="cflexms gap-3 pt-20 pb-72 w-3/5 md:w-full pl-0 lg:pl-[50px]">
            <p className="font-bold text-6xl capitalize md:text-5xl">
              Distrubution
            </p>
            <p className="font-bold text-2xl">World-wide coverage</p>
            <p>
              Our comprehensive distribution strategy includes partnerships with
              physical and digital distribution companies, as well as utilizing
              popular streaming services. With our focus on making the music of
              our artists available to a broad audience
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project2;
