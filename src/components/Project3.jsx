import Image from "next/image";
import gogi from "../Assets/gogi.png";
import companies from "../Assets/companies.png"

const Project3 = () => {
  return (
    <>
      <div className="cflexms pt-32 bg-gradient-to-b from-secondary3-100 to-secondary3-200 text-primary1">
        <div className="cflexss pl-16 pr-10">
          <div className="flexbm w-full gap-5">
            <div className="cflexsm gap-5 w-1/3">
              <Image src={gogi} alt="gogi" width="100%" height="100%" />
              <div className="bg-primary1 rounded-3xl py-2 px-5 text-black font-semibold cursor-pointer">
                Visit
              </div>
            </div>
            <div className="cflexss gap-4 w-2/3">
              <p className="font-bold text-6xl">Gogi.ai</p>
              <p className="text-xl font-semibold">
                Access exclusive fincincal tips, education and trading algos
                with our members-only financial club
              </p>
              <p className="text-sm">
                Gogi.ai aims to provide exceptional value and accessibility to
                members all across the globe. Our goal is to revolutionize the
                way people invest by providing a user-friendly platform that
                allows members to learn, connect, and link trading algorithms
                that best suit their goals. With our auto-pilot investing
                benefit, members can take their investments to new heights with
                no experience necessary. We provide industry information, tools,
                and resources to enhance members' capacity to make and manage
                impact investments. At Gogi.ai, we aim to help our members
                achieve greatness in their investments.
              </p>
            </div>
          </div>
          <div className="cflexmm gap-3 pt-28 pb-32 ">
            <p className="font-bold text-4xl capitalize">Compatible with these platforms </p>
            <Image src={companies} alt="companies" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Project3;
