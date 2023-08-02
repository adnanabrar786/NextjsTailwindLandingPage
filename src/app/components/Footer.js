"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div
        className="
       xl:py-12 lg:py-12 md:py-12 sm:py-6 py-6 
       xl:px-12 lg:px-12 md:px-12 sm:px-6 px-4
       grid 
       xl:grid-cols-4 
       lg:grid-cols-4 
       md:grid-cols-1
       sm:grid-cols-1 
       grid-cols-1
      "
      >
        <div>
          <div>
            <Image
              src="/blue_logo.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <p className="mt-6 pr-4" style={{ color: "#45536B" }}>
            An All-in-One solution and industry-leading mobile application that
            optimizes route planning, executes end-to-end communication tools,
            and creates exceptional B2B and B2C experiences.
          </p>
        </div>
        <div
          className="
        xl:ml-12   lg:ml-12  md:ml-0  sm:ml-0  ml-0 
        text-start
        xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 mt-6
        "
        >
          <h2 className="text-md font-bold">Explore</h2>
          <p style={{ color: "#45536B" }} className="text-sm mt-3">
            <Link href="/">Home</Link>
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            <Link href="/">About</Link>
          </p>
        </div>
        <div
          className="
          xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 mt-6
        text-start
        "
        >
          <h2 className="text-md font-bold"> Quick Links</h2>
          <p style={{ color: "#45536B" }} className="text-sm mt-3">
            <Link href="/">Faqs</Link>
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            <Link href="/">Privacy</Link>
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            <Link href="/"> Terms & Conditions</Link>
          </p>
        </div>
        <div
          className="
          xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 mt-6
        text-start
        "
        >
          <h2 className="text-md font-bold">Get in Touch</h2>
          <div style={{ color: "#45536B" }}>
            <Link href="/" className="flex text-sm mt-3">
              <Image
                src="/loc.png"
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <span className="ml-2"> 1800 Delmar Dr, Folcroft, PA 19032</span>
            </Link>
          </div>
          <div className="flex text-sm mt-3" style={{ color: "#45536B" }}>
            <Link href="/" className="flex text-sm mt-3">
              <Image
                src="/phone.png"
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <span className="ml-2">(610) 345-5400</span>
            </Link>
          </div>
          <div className="flex text-sm mt-3" style={{ color: "#45536B" }}>
            <Link href="/" className="flex text-sm mt-3">
              <Image
                src="/social.png"
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <span className="ml-2">www.enviovista.com</span>
            </Link>
          </div>
          <div className="flex text-sm mt-3" style={{ color: "#45536B" }}>
            <Link href="/" className="flex text-sm mt-3">
              <Image
                src="/email.png"
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <span className="ml-2">Info@enviovista.com</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
