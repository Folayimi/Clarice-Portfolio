import {
  ChevronDown,
  X,
  HomeOutline,
  UserCircleOutline,
  PhoneOutline,
  MenuOutline,
  GlobeAltOutline
} from "heroicons-react";
import { useState } from "react";
import Image from "next/image";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import linkedIn from "../Assets/linkedln.png";
import { useRouter } from "next/router";

const Header = () => {
  const [margin, setMargin] = useState(-100);
  const [show, setShow] = useState("hidden");
  const router = useRouter();
  return (
    <>
      <div className="fixed top-0 left-0 text-primary1 flexbm z-50 w-full py-4 pr-20 sm1:pr-4 pl-4 bg-black font-sans">
        <div
          style={{ right: `${margin}%` }}
          className="sm1:block fixed top-0 pb-5 rounded-xl overflow-y-auto bg-white z-100 text-black border-2 border-black transition-all duration-1000 ease-in-out hidden"
        >
          <div className="w-full flexem px-3 pt-3">
            <X
              size="25px"
              onClick={() => {
                setMargin(-100);
              }}
            />
          </div>
          <ul className="cflexss px-3 gap-7 list-none text-primary2 font-semibold text-sm">
            <li
              className="cursor-pointer flexmm gap-3"
              onClick={() => {
                router.push("/");
                setMargin(-100);
              }}
            >
              <HomeOutline size="30px" color="black" />
              Home
            </li>
            <li
              className="cursor-pointer flexmm gap-3"
              onClick={() => {
                router.push("/?page=about");
                setMargin(-100);
              }}
            >
              <UserCircleOutline size="30px" color="black" />
              About me
            </li>
            <li
              className="cursor-pointer flexmm gap-3"
              onClick={() => {
                router.push("/?page=mission");
                setMargin(-100);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              Mission
            </li>
            <li className="cflexsmd gap-2">
              <div
                className="cursor-pointer flexmm gap-3"
                onClick={() => {
                  if (show === "hidden") {
                    setShow("block");
                  } else {
                    setShow("hidden");
                  }
                }}
              >
                <GlobeAltOutline size="30px" color="black" /> Companies{" "}
                <ChevronDown />
              </div>
              <ul
                className={
                  show === "hidden"
                    ? "hidden"
                    : "block rounded-sm cflexss gap-[1em] bg-white pt-5 px-2"
                }
              >
                {/* <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/giftroom");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  Giftroom
                </li> */}
                <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/big");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  Big Music Label
                </li>
                <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/enter");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  ENTR
                </li>
                {/* <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/gogi");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  Gogi
                </li> */}
                <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/riskgames");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  Riskgames
                </li>
              </ul>
            </li>
            <li
              className="cursor-pointer flexmm gap-3"
              onClick={() => {
                router.push("/contact");
                setMargin(-100);
              }}
            >
              <PhoneOutline size="30px" color="black" />
              Contact
            </li>
          </ul>
        </div>
        <div className="flexsm flex-wrap gap-5">
          <p
            className="font-bold text-3xl sm1:text-2xl cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Clarice
          </p>
          <div className="flexmm gap-3">
            <div className="flexmm w-[1.5em] h-[1.5em] rounded-[0.75em] bg-black cursor-pointer">
              <Image src={facebook} alt="facebook" />
            </div>
            <div className="flexmm w-[1.5em] h-[1.5em] rounded-[0.75em] bg-black cursor-pointer">
              <Image src={twitter} alt="twitter" />
            </div>
            <div className="flexmm w-[1.5em] h-[1.5em] rounded-[0.75em] bg-black cursor-pointer">
              <Image src={instagram} alt="instagram" />
            </div>
            <div className="flexmm w-[1.5em] h-[1.5em] rounded-[0.75em] bg-black cursor-pointer">
              <Image src={linkedIn} alt="linkedln" />
            </div>
          </div>
        </div>
        <div className="sm1:hidden block">
          <ul className="flexmm gap-7 list-none text-primary2 font-normal text-sm">
            <li
              className="cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                router.push("/?page=about");
              }}
            >
              About me
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                router.push("/?page=mission");
              }}
            >
              Mission
            </li>
            <li className="relative cursor-pointer cflexmm">
              <div
                className="flexmm"
                onClick={() => {
                  if (show === "hidden") {
                    setShow("block");
                  } else {
                    setShow("hidden");
                  }
                }}
              >
                Companies <ChevronDown />
              </div>
              <ul
                className={
                  show === "hidden"
                    ? "hidden"
                    : "block absolute top-[3em] w-[12em] rounded-[0.5em] border-2 border-black flex flex-col justify-between items-center gap-[1em] bg-white p-2"
                }
              >
                {/* <li
                  className="menu"
                  onClick={() => {
                    router.push("/giftroom");
                    setShow("hidden");
                  }}
                >
                  Giftroom
                </li> */}
                <li
                  className="menu"
                  onClick={() => {
                    router.push("/big");
                    setShow("hidden");
                  }}
                >
                  Big Music Label
                </li>
                <li
                  className="menu"
                  onClick={() => {
                    router.push("/enter");
                    setShow("hidden");
                  }}
                >
                  ENTR
                </li>
                {/* <li
                  className="menu"
                  onClick={() => {
                    router.push("/gogi");
                    setShow("hidden");
                  }}
                >
                  Gogi
                </li> */}
                <li
                  className="menu"
                  onClick={() => {
                    router.push("/riskgames");
                    setShow("hidden");
                  }}
                >
                  Riskgames
                </li>
              </ul>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact
            </li>
          </ul>
        </div>
        <div
          className="sm1:block cursor-pointer hidden"
          onClick={() => {
            setMargin(0);
          }}
        >
          <MenuOutline color="white" size="35px" />
        </div>
      </div>
    </>
  );
};
export default Header;
