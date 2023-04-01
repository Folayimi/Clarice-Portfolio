import { ChevronDown, bar } from "heroicons-react";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 text-primary1 flexbm z-50 w-full py-4 pr-4 md:pr-20 pl-4 bg-black font-sans">
        <div className="font-bold text-2xl sm:text-3xl">Clarice</div>
        <div className="sm:block hidden">
          <ul className="flexmm gap-7 list-none text-primary2 font-normal text-sm">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About me</li>
            <li className="cursor-pointer">Mission</li>
            <li className="cursor-pointer flexmm">
              Companies <ChevronDown />
            </li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="sm:hidden cursor-pointer block">
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
