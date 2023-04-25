import {
  ChevronDown,
  X,
  HomeOutline,
  UserCircleOutline,
  PencilOutline,
  PhoneOutline,
  MenuOutline,
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
      <div className="fixed top-0 left-0 text-primary1 flexbs z-50 w-full py-4 pr-20 sm1:pr-4 pl-4 bg-black font-sans">
        <div
          style={{ right: `${margin}%` }}
          className="sm1:block fixed top-0 w-[65vw] pb-10 bg-white z-100 text-black border-2 border-black transition-all duration-1000 ease-in-out hidden"
        >
          <div className="w-full flexem p-5">
            <X
              size="30px"
              onClick={() => {
                setMargin(-100);
              }}
            />
          </div>
          <ul className="cflexss px-5 gap-7 list-none text-primary2 text-xl">
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
              <PencilOutline size="30px" color="black" />
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
                <HomeOutline size="30px" color="black" /> Companies{" "}
                <ChevronDown />
              </div>
              <ul
                className={
                  show === "hidden"
                    ? "hidden"
                    : "block rounded-sm cflexss gap-[1em] bg-white pt-5 px-2"
                }
              >
                <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/giftroom");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  GiftRoom
                </li>
                <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/big");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  Big
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
                <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/gogi");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  Gogi
                </li>
                <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/riskgames");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  RiskGames
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
        <div className="flexsm gap-5">
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
                    : "block absolute top-[3em] w-[10em] h-[18em] rounded-sm cflexss gap-[1em] bg-white p-2"
                }
              >
                <li
                  className="menu"
                  onClick={() => {
                    router.push("/giftroom");
                    setShow("hidden");
                  }}
                >
                  GiftRoom
                </li>
                <li
                  className="menu"
                  onClick={() => {
                    router.push("/big");
                    setShow("hidden");
                  }}
                >
                  Big
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
                <li
                  className="menu"
                  onClick={() => {
                    router.push("/gogi");
                    setShow("hidden");
                  }}
                >
                  Gogi
                </li>
                <li
                  className="menu"
                  onClick={() => {
                    router.push("/riskgames");
                    setShow("hidden");
                  }}
                >
                  RiskGames
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
