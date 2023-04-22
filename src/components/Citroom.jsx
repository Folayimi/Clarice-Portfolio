import Image from "next/image";
import citron from "../Assets/citron.png";
import giftbox from "../Assets/giftbox.jpg";

const Citroom = () => {
  return (
    <>
      <div className="cflexms pt-32 md:pt-24">
        <div className="cflexss pl-20 pr-10 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
            <div className="cflexsm gap-2 w-1/3 md:w-full">
              <Image src={citron} alt="citron" />
              <div className="bg-black rounded-3xl py-2 px-5 text-primary1 font-semibold cursor-pointer hover:text-black hover:bg-primary1 border-2 hover:font-extrabold hover:border-black transition-colors duration-300">
                Visit
              </div>
            </div>
            <div className="cflexss gap-4 w-2/3 md:w-full">
              <p className="font-bold text-6xl capitalize md:text-5xl">
                Giftroom
              </p>
              <p className="font-bold text-2xl capitalize">
                A place to gift and collect digital assets
              </p>
              <p className="text-1xl">
                Giftroom provides a social and engaging platform for collecting
                and gifting digital assets. Our marketplace offers guaranteed
                liquidity on gift items, so users can ensure that their digital
                gift retain value. With a focus on gifting, community and
                collaboration, Giftroom is the perfect place for collectors,
                creators, and enthusiasts to connect and share the join of
                passion. We want to revolutionize the world of digital assets by
                becoming the most popular online platform through a gifting
                social media concept.
              </p>
            </div>
          </div>
          <div className="cflexms gap-3 py-28 md:py-20 w-2/3 md:w-full">
            <p className="font-bold text-5xl">$giftroom token</p>
            <p className="font-bold text-2xl">
              The reward token representing giftroom{" "}
            </p>
            <p>
              As a part of the platform, $gifttoken is a form of currency for
              gifting. As a stimulant for gifting, users receive rewards based
              on their generosity. Use $giftroom tokens for exceptional
              discounts when purchasing giftroom gifts and gain rewards by
              gifting and referring others to to give even more.
            </p>
          </div>
        </div>
        <Image src={giftbox} alt="giftbox" width="100vw" />
      </div>
    </>
  );
};
export default Citroom;
