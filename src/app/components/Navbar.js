"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className="w-full xl:bg-white lg:bg-white md:bg-white sm:bg-white bg-white
     fixed top-0 left-0 right-0 z-10"
    >
      <div
        className="
      justify-between  
      mx-auto lg:max-w-7xl md:items-center md:flex md:px-1
      "
      >
        <div>
          <div className="
          xl:bg-white lg:bg-white md:bg-white sm:bg-blue-700 bg-blue-700 
          px-4 flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <h2
                className="text-2xl 
              xl:text-black lg:text-black md:text-black sm:text-white text-white
               font-bold"
              >
                Navbar
              </h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <ImCross className="text-lg" />
                ) : (
                  <GiHamburgerMenu className="text-lg" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="xl:w-2/3 lg:w-2/3 md:w-11/12">
          <div
            className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "xl:p-12 lg:p-12 md:p-0 sm:p-12 p-0 block" : "hidden"
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
                <li
                  className="
                text-md
                text-black
                  xl:px-6 lg:px-6 md:px-4 sm:px-6 px-6 
                  py-4
                 text-center 
                   md:hover:bg-transparent
                   "
                >
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li
                  className="
                text-md
                text-black
                  xl:px-6 lg:px-6 md:px-4 sm:px-6 px-6 
                  py-4
                 text-center 
                   md:hover:bg-transparent
                   "
                >
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Features
                  </Link>
                </li>
                <li
                  className="
                text-md
                text-black
                  xl:px-6 lg:px-6 md:px-4 sm:px-6 px-6 
                  py-4
                 text-center 
                   md:hover:bg-transparent
                   "
                >
                  {" "}
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Industries
                  </Link>
                </li>
                <li
                  className="
                text-md
                text-black
                  xl:px-6 lg:px-6 md:px-4 sm:px-6 px-6 
                  py-4
                 text-center 
                   md:hover:bg-transparent
                   "
                >
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li
                  className="
                text-md
                text-black
                  xl:px-6 lg:px-6 md:px-4 sm:px-6 px-6 
                  py-4
                 text-center 
                   md:hover:bg-transparent
                   "
                >
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
              </ul>
              <ul className=" md:h-auto md:flex ">
                <li
                  className="text-xl 
                text-black
                 py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent"
                >
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    <button
                      style={{ backgroundColor: "#008CBA" }}
                      className="text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
