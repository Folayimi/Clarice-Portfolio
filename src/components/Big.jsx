import Image from "next/image";
import big from "../Assets/big.png";
import baloons from "../Assets/baloons.png";

const Project2 = ({ position }) => {
  return (
    <>
      <div
        ref={position}
        className="cflexms pt-32 bg-gradient-to-b from-secondary2-100 to-secondary2-200 text-primary1 md:pt-20"
      >
        <div className="cflexss pl-16 pr-10 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
            <div className="cflexsm gap-2 w-1/3 md:w-full">
              <Image src={big} alt="big" width="100%" height="100%" />
              <div className="bg-primary1 rounded-3xl py-2 px-5 text-black font-semibold cursor-pointer">
                Visit
              </div>
            </div>
            <div className="cflexss gap-4 w-2/3 md:w-full">
              <p className="font-bold text-6xl capitalize md:text-5xl">
                Big Music Label
              </p>
              <p className="text-xl font-semibold">
                With over 60 years of combined experience, we professionally
                manage, develop and grow artists careers
              </p>
              <p className="text-sm">
                Big Music Label focuses on developing exceptional talent,
                fostering a love for music, and motivating new artists. We've
                built a record company that offers artists a safe atmosphere
                where they may feel comfortable.
              </p>
              <div className="w-[25em] md:w-[20em]">
                <Image src={baloons} alt="baloons" width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className="cflexms gap-3 pt-28 pb-72 w-3/5 md:w-full">
            <p className="font-bold text-6xl capitalize md:text-5xl">
              Distrubution
            </p>
            <p className="font-bold text-2xl">world-wide coverage</p>
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
