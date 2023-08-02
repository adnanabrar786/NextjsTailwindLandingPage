"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-10">
      <div className="mx-20 flex justify-between md:items-center md:flex md:px-8">
        <div>
          <div className="px-4 flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/blue_logo.png"
                width={90}
                height={90}
                alt="Picture of the author"
              />
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <ImCross className="text-lg" />
                ) : (
                  // <Image src="/crossWhite.jpg" width={30} height={30} alt="logo" />
                  <GiHamburgerMenu className="text-lg" />
                  // <Image
                  //   src="/hamburger-menu.svg"
                  //   width={30}
                  //   height={30}
                  //   alt="logo"
                  //   className="focus:border-none active:border-none"
                  // />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="xl:w-2/3 lg:w-2/3 md:w-5/6">
          <div
            className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <div
              className="
           flex lg:justify-between md:justify-end
           sm:items-center
            xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col
            xl:h-auto lg:h-auto md:h-auto sm:h-screen h-screen
            "
            >
              <ul className="md:h-auto md:flex ">
                <li className="text-md  py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-md  py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Features
                  </Link>
                </li>
                <li className="text-md  py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Industries
                  </Link>
                </li>
                <li className="text-md   py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li className="text-md  py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Company Profile
                  </Link>
                </li>
              </ul>
              <ul className=" md:h-auto md:flex ">
                <li className="text-md  py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    <button
                      style={{ backgroundColor: "#008CBA" }}
                      className="hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    >
                      GET STARTED
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
