"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="py-12 grid grid-cols-4 px-12">
        <div className="w-4/5">
          <div>
            <Image
              src="/blue_logo.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <p className="mt-6" style={{ color: "#45536B" }}>
            An All-in-One solution and industry-leading mobile application that
            optimizes route planning, executes end-to-end communication tools,
            and creates exceptional B2B and B2C experiences.
          </p>
        </div>
        <div className="text-start">
          <h2 className="text-md font-bold">Explore</h2>
          <p style={{ color: "#45536B" }} className="text-sm mt-3">
            Home
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            About
          </p>
        </div>
        <div className="text-start">
          <h2 className="text-md font-bold">Explore</h2>
          <p style={{ color: "#45536B" }} className="text-sm mt-3">
            Quick Links
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            Faq
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            Terms & Conditions
          </p>
        </div>
        <div className="text-start">
          <h2 className="text-md font-bold">Get in Touch</h2>
          <p style={{ color: "#45536B" }} className="text-sm mt-3">
            1800 Delmar Dr, Folcroft, PA 19032
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            (610) 345-5400
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            www.enviovista.com
          </p>
          <p className="mt-3" style={{ color: "#45536B" }}>
            Info@enviovista.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
