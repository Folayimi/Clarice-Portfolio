import Image from "next/image";
import citron from "../Assets/citron.png";
import big from "../Assets/big.png";
import enter from "../Assets/enter.png";
import gogi from "../Assets/gogi.png";
import steps from "../Assets/steps.png";
import earth from "../Assets/earth.png";
import man from "../Assets/man.png";
import hexfill from "../Assets/hexfill.png";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Mission = ({ position }) => {
  const router = useRouter();
  const buttonVariants = {
    hover: {
      cursor: "pointer",
      hidden: {
        x: "100vw",
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
        },
      },
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };

  return (
    <>
      <div
        ref={position}
        className="bg-gradient-to-b from-secondary1-100 to-secondary1-200 text-primary1"
      >
        <div className="pt-28 md:pt-24 pl-10 md:p-5 flexbm md:flex-col-reverse gap-10">
          <div className="relative cflexms gap-8 w-1/2 md:w-full">
            <p className="font-bold text-6xl md:text-5xl">Mission</p>
            <p className="font-normal text-2xl md:text-xl">
              At the heart of all my work is a deep desire to make the world a
              better place. I am dedicated to spreading positivity and helping
              charitable organizations through my projects. I strive to create
              projects that not only achieve business success but also make a
              positive difference in people's lives. My mission is to continue
              working on creative projects that demonstrate a genuine change in
              the world and inspire others to do the same.
            </p>
            <div className="absolute top-[-4em] left-[11em] w-[7em] md:w-[5em] md:top-[-2em]">
              <Image src={hexfill} alt="hexfill" />
            </div>
          </div>
          <div className="relative w-1/2 md:w-full md:flex md:justify-center">
            <div className="w-[23em] md:w-[20em]">
              <Image src={earth} alt="earth" />
            </div>
            <div className="md:relative md:top-0 absolute top-[-4em] right-0 w-[23em] md:w-[15em]">
              <Image src={man} alt="man" />
            </div>
          </div>
        </div>
        <div className="px-10 pt-20 md:px-5 cflexmm gap-5">
          <p className="font-bold text-4xl">My Projects</p>
          <div className="flexmm gap-7 flex-wrap pb-5">
            {/* <motion.div
              className="card bg-primary1"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              onClick={() => {
                router.push("/giftroom");
              }}
            >
              <div>
                <Image src={citron} alt="citron" />
              </div>
            </motion.div> */}
            <motion.div
              className="card bg-primary7"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              onClick={() => {
                router.push("/big");
              }}
            >
              <div className="w-[8em]">
                <Image src={big} alt="big" width="100%" height="100%" />
              </div>
            </motion.div>
            <motion.div
              className="card bg-black"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              onClick={() => {
                router.push("/enter");
              }}
            >
              <div className="w-[3em]">
                <Image src={enter} alt="enter" width="100%" height="100%" />
              </div>
              <p className="text-4xl font-bold">ENTR</p>
            </motion.div>
            {/* <motion.div
              className="card bg-primary8"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              onClick={() => {
                router.push("/gogi");
              }}
            >
              <div className="w-[6em]">
                <Image src={gogi} alt="gogi" width="100%" height="100%" />
              </div>
              <p className="text-4xl font-bold">Gogi</p>
            </motion.div> */}
            <motion.div
              className="card bg-primary9 p-2"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              onClick={() => {
                router.push("/riskgames");
              }}
            >
              <p className="text-3xl font-bold text-white">Riskgames</p>
              <div className="w-[12em]">
                <Image src={steps} alt="steps" width="100%" height="100%" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
