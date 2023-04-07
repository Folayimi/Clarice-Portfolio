import Image from "next/image";
import citron from "../Assets/citron.png";
import giftbox from "../Assets/giftbox.jpg";

const Project1 = () => {
  return (
    <>
      <div className="cflexms pt-32 md:pt-20">
        <div className="cflexss pl-20 pr-10 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
            <div className="cflexsm gap-2 w-1/3 md:w-full">
              <Image src={citron} alt="citron" />
              <div className="bg-black rounded-3xl py-2 px-5 text-primary1 font-semibold cursor-pointer">
                Visit
              </div>
            </div>
            <div className="cflexss gap-4 w-2/3 md:w-full">
              <p className="font-bold text-5xl capitalize md:text-4xl">
                A Place to gift and collect digital assets
              </p>
              <p className="text-1xl">
                Utilizing web 3.0, my team and I created a peer-to-peer
                customized NFT marketplace environment to link people and
                communities. We want to revolutionize the world of digital
                assets by becoming the most popular online nft platform through
                a gifting social media concept.
              </p>
            </div>
          </div>
          <div className="cflexms gap-3 py-28 md:py-20 w-2/3 md:w-full">
            <p className="font-bold text-5xl capitalize">$giftroom token</p>
            <p className="font-bold text-2xl">The reward token representing giftroom </p>
            <p>
              As a part of the platform, we developed a $gifttoken as a form of
              currency for gifting. As a stimulant for gifting, users receive
              rewards based on their generosity. You may be eligible for
              exceptional discounts when purchasing gifts with our developed
              $gifttoken and referring others to the site.
            </p>
          </div>
        </div>
        <Image src={giftbox} alt="giftbox" width="100vw"/>
      </div>
    </>
  );
};
export default Project1;
