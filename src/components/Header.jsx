import {
  ChevronDown,
  X,
  HomeOutline,
  UserCircleOutline,
  PhoneOutline,
  MenuOutline,
  GlobeAltOutline,
} from "heroicons-react";
import { useState } from "react";
import Image from "next/image";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import linkedIn from "../Assets/linkedln.png";
import { useRouter } from "next/router";
import Link from "next/link";

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
              Home
            </li>
            <li
              className="cursor-pointer flexmm gap-3"
              onClick={() => {
                router.push("/?page=about");
                setMargin(-100);
              }}
            >
              About me
            </li>
            <li
              className="cursor-pointer flexmm gap-3"
              onClick={() => {
                router.push("/?page=mission");
                setMargin(-100);
              }}
            >              
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
                Companies <ChevronDown />
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
                <li
                  className="w-full pl-2"
                  onClick={() => {
                    router.push("/coolproductionclub");
                    setShow("hidden");
                    setMargin(-100);
                  }}
                >
                  CoolProductionClub
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
            <Link
              href={`https://www.facebook.com/profile.php?id=100087506825565`}
              className="flexmm w-[1.5em] h-[1.5em] rounded-[0.75em] bg-black cursor-pointer"
            >
              <Image src={facebook} alt="facebook" />
            </Link>
            <Link
              href={`https://twitter.com/claricebona`}
              className="flexmm w-[1.5em] h-[1.5em] rounded-[0.75em] bg-black cursor-pointer"
            >
              <Image src={twitter} alt="twitter" />
            </Link>
            <Link
              href={`https://www.instagram.com/clariceistheone/`}
              className="flexmm w-[1.5em] h-[1.5em] rounded-[0.75em] bg-black cursor-pointer"
            >
              <Image src={instagram} alt="instagram" />
            </Link>
            <Link
              href={`https://www.linkedin.com/in/clarice-bona-994163270/`}
              className="flexmm w-[1.5em] h-[1.5em] rounded-[0.75em] bg-black cursor-pointer"
            >
              <Image src={linkedIn} alt="linkedln" />
            </Link>
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
                <li
                  className="menu"
                  onClick={() => {
                    router.push("/coolproductionclub");
                    setShow("hidden");
                  }}
                >
                  CoolProductionClub
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
