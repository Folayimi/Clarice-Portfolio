import { ChevronDown, X, HomeOutline, UserCircleOutline } from "heroicons-react";
import { useState } from "react";
import Image from "next/image";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import linkedIn from "../Assets/linkedln.png";
import { useRouter } from "next/router";

const Header = () => {
  const [margin, setMargin] = useState(-100);
  const router = useRouter();
  return (
    <>
      <div className="fixed top-0 left-0 text-primary1 flexbs z-50 w-full py-4 pr-20 sm1:pr-4 pl-4 bg-black font-sans">
        <div
          style={{ right: `${margin}%` }}
          className="sm1:block fixed top-0 w-[60vw] pb-10 bg-white z-100 text-black border-2 border-black transition-all duration-1000 ease-in-out hidden"
        >
          <div className="w-full flexem p-5">
            <X
              size="30px"
              onClick={() => {
                setMargin(-100);
              }}
            />
          </div>
          <ul className="cflexss px-5 gap-7 list-none text-primary2 font-bold text-xl">
            <li              
              className="cursor-pointer "
              onClick={() => {
                router.push("/");
                setMargin(-100);
              }}
            >
              <HomeOutline size="30px" />
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                router.push("/?page=about");
                setMargin(-100);
              }}
            >
              About me
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                router.push("/?page=mission");
                setMargin(-100);
              }}
            >
              Mission
            </li>
            <li className="cursor-pointer flexmm">
              Companies <ChevronDown />
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                router.push("/contact");
                setMargin(-100);
              }}
            >
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
            <li className="cursor-pointer flexmm">
              Companies <ChevronDown />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
export default Header;
