"use client";
import Image from "next/image";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        height: "21px",
        width: "21px",
        paddingTop:"1px",
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:"50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        height: "21px",
        width: "21px",
        paddingTop:"1px",
        paddingRight:"1px",
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:"50%",
      }}
      onClick={onClick}
    />
  );
}

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // arrows: false
  };

  return (
    <div>
      {/* <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        <div className="pl-20 flex flex-col justify-center p-4">
          <h2 className="font-bold">Envio By Vista</h2>
          <p style={{ color: "#45536B" }} className="text-left mt-2 w-4/5">
            An All-in-One solution and industry-leading mobile application that
            optimizes route planning, executes end-to-end communication tools,
            and creates exceptional B2B and B2C experiences.
          </p>
          <div>
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
              Button
            </button>
          </div>
        </div>
        <div className="p-4 flex items-start justify-start">
          <Image
            src="/h1.png.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div> */}
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
        <div
          className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
        >
          <h1 className="font-bold text-xl">Envio By Vista</h1>
          <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
            An All-in-One solution and industry-leading mobile application that
            optimizes route planning, executes end-to-end communication tools,
            and creates exceptional B2B and B2C experiences.
          </p>
          <div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
              Take a tour
            </button>
          </div>
        </div>
        <div className="py-4 px-4 flex justify-center items-center">
          <Image
            src="/h1.png.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>

      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
          <div className="py-4 px-4 flex justify-center items-center">
            <Image
              src="/S1.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div
            className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
          >
            <h6 style={{ color: "#45536B" }} className="text-sm font-bold">
              Dispatch Solutions
            </h6>
            <h1 className="font-bold text-2xl mt-4">
              Dispatch and Delivery Management
            </h1>
            <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
              View all jobs on a grid platform that seamlessly connects all of
              the moving parts to easily edit delivery times and dates
              accordingly. Efficiently send job information to your drivers in
              real time through call or text notifications, all in the app with
              the dispatch software.
            </p>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Dispatch and Delivery Management ➞
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
          <div
            className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
          >
            <h6 style={{ color: "#45536B" }} className="text-sm font-bold">
              Dispatch Solutions
            </h6>
            <h1 className=" mt-4 font-bold text-2xl">Customer Management</h1>
            <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
              Manage customer profiles easier with Envio’s straightforward
              software. You can create multiple customer contacts and service
              areas, set customer communication preferences, track stats, notes,
              signatures, documents, images, and more.
            </p>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Customer Management ➞
              </button>
            </div>
          </div>
          <div className="py-4 px-4 flex justify-center items-center">
            <Image
              src="/S2.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
          <div className="py-4 px-4 flex justify-center items-center">
            <Image
              src="/S3.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div
            className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
          >
            <h6 style={{ color: "#45536B" }} className="text-sm font-bold">
              Dispatch Solutions
            </h6>
            <h1 className="font-bold text-2xl mt-4">
              Text Message Notifications
            </h1>
            <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
              Envio’s extensive software allows for real-time communication with
              your delivery drivers, customers, and staff through text message
              notification about scheduled ETAs and en-route alerts. Customers
              may track their trucks movement on an online map that is
              constantly updated.
            </p>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Text Message Notifications ➞
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
          <div
            className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
          >
            <h6 style={{ color: "#45536B" }} className="text-sm font-bold">
              Dispatch Solutions
            </h6>
            <h1 className=" mt-4 font-bold text-2xl">Mobile App</h1>
            <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
              The Envio app allows drivers to manage their deliveries on
              smartphones and tablets on the go. At drop-off it collects
              signatures, timestamps, notes, photos, videos, and more.
              Everything is instantly uploaded to the dashboard so you can see
              all the details of what is happening and when it happens.
            </p>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Mobile App ➞
              </button>
            </div>
          </div>
          <div className="py-4 px-4 flex justify-center items-center">
            <Image
              src="/S4.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
          <div className="py-4 px-4 flex justify-center items-center">
            <Image
              src="/S5.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div
            className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
          >
            <h6 style={{ color: "#45536B" }} className="text-sm font-bold">
              Dispatch Solutions
            </h6>
            <h1 className="font-bold text-2xl mt-4">Proof of Delivery</h1>
            <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
              Upload photos and videos right at the time of delivery with your
              mobile device using the Envio application. Save this documentation
              to the corresponding customer profile and refer back to it
              whenever customer support needs it.
            </p>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Proof of Delivery ➞
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
          <div
            className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
          >
            <h6 style={{ color: "#45536B" }} className="text-sm font-bold">
              Dispatch Solutions
            </h6>
            <h1 className=" mt-4 font-bold text-2xl">GPS Fleet Tracking</h1>
            <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
              Envio’s live GPS fleet tracking increases visibility across your
              entire business. Track total number of trips, distance driven,
              idle time, GPS live location, and more. Improve driving behaviors
              and trip history all through our field service management
              application.
            </p>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                GPS Fleet Tracking ➞
              </button>
            </div>
          </div>
          <div className="py-4 px-4 flex justify-center items-center">
            <Image
              src="/S6.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
          <div className="py-4 px-4 flex justify-center items-center">
            <Image
              src="/S7.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div
            className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
          >
            <h6 style={{ color: "#45536B" }} className="text-sm font-bold">
              Dispatch Solutions
            </h6>
            <h1 className="font-bold text-2xl mt-4">
              Contractor Earning Tracker
            </h1>
            <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
              Our software includes a fully integrated Contractor Earnings
              Tracker that allows you and the contractor to track the total paid
              and unpaid deliveries for any given time period at all times.
            </p>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Contractor Earning Tracker ➞
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-4">
          <div
            className="
        xl:pl-16 lg:pl-16 md:pl-12 sm:pl-4 pl-4 pr-4 flex flex-col justify-center
        "
          >
            <h6 style={{ color: "#45536B" }} className="text-sm font-bold">
              Dispatch Solutions
            </h6>
            <h1 className=" mt-4 font-bold text-2xl">Document Drive</h1>
            <p style={{ color: "#45536B" }} className="mt-4 w-3/4">
              Envio allows you to bring your files and delivery content together
              making it easy to upload, share, and organize documents and
              customer profiles directly within the platform.
            </p>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Document Drive ➞
              </button>
            </div>
          </div>
          <div className="py-4 px-4 flex justify-center items-center">
            <Image
              src="/S8.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>

      <section>
        <h2
          style={{ backgroundColor: "#F7FBFF", color: "#273245" }}
          className="py-8 text-center font-bold text-2xl"
        >
          Customer Reviews
        </h2>

        <div className="pt-16 flex items-center justify-center">
          <div style={{ width: "90%" }}>
            <Slider {...settings}>

              <div className="mx-12 pr-20">
                <div className="flex flex-col items-center justify-center text-center mb-14">
                  <Image
                    src="/profile_pic.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                  <p className="mt-4 w-1/2" style={{ color: "#45536B" }}>
                    Basset continues to value our strategic decision to choose
                    Envio. The technology provide b Envio continuously adapts
                    and scales to meet our company needs
                  </p>
                  <h5 className="mt-4 font-bold">John Smith</h5>
                  <h6 style={{ color: "#45536B" }} className="mt-4 font-bold">
                    Ceo & Founder of Envio
                  </h6>
                </div>
              </div>
              <div className="mx-12 pr-20">
                <div className="flex flex-col items-center justify-center text-center mb-14">
                  <Image
                    src="/profile_pic.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                  <p className="mt-4 w-1/2" style={{ color: "#45536B" }}>
                    Basset continues to value our strategic decision to choose
                    Envio. The technology provide b Envio continuously adapts
                    and scales to meet our company needs
                  </p>
                  <h5 className="mt-4 font-bold">John Smith</h5>
                  <h6 style={{ color: "#45536B" }} className="mt-4 font-bold">
                    Ceo & Founder of Envio
                  </h6>
                </div>
              </div>

              <div className="mx-12 pr-20">
                <div className="flex flex-col items-center justify-center text-center mb-14">
                  <Image
                    src="/profile_pic.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                  <p className="mt-4 w-1/2" style={{ color: "#45536B" }}>
                    Basset continues to value our strategic decision to choose
                    Envio. The technology provide b Envio continuously adapts
                    and scales to meet our company needs
                  </p>
                  <h5 className="mt-4 font-bold">John Smith</h5>
                  <h6 style={{ color: "#45536B" }} className="mt-4 font-bold">
                    Ceo & Founder of Envio
                  </h6>
                </div>
              </div>

              <div className="mx-12 pr-20">
                <div className="flex flex-col items-center justify-center text-center mb-14">
                  <Image
                    src="/profile_pic.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                  <p className="mt-4 w-1/2" style={{ color: "#45536B" }}>
                    Basset continues to value our strategic decision to choose
                    Envio. The technology provide b Envio continuously adapts
                    and scales to meet our company needs
                  </p>
                  <h5 className="mt-4 font-bold">John Smith</h5>
                  <h6 style={{ color: "#45536B" }} className="mt-4 font-bold">
                    Ceo & Founder of Envio
                  </h6>
                </div>
              </div>

              <div className="mx-12 pr-20">
                <div className="flex flex-col items-center justify-center text-center mb-14">
                  <Image
                    src="/profile_pic.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                  <p className="mt-4 w-1/2" style={{ color: "#45536B" }}>
                    Basset continues to value our strategic decision to choose
                    Envio. The technology provide b Envio continuously adapts
                    and scales to meet our company needs
                  </p>
                  <h5 className="mt-4 font-bold">John Smith</h5>
                  <h6 style={{ color: "#45536B" }} className="mt-4 font-bold">
                    Ceo & Founder of Envio
                  </h6>
                </div>
              </div>
              <div className="mx-12 pr-20">
                <div className="flex flex-col items-center justify-center text-center mb-14">
                  <Image
                    src="/profile_pic.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                  <p className="mt-4 w-1/2" style={{ color: "#45536B" }}>
                    Basset continues to value our strategic decision to choose
                    Envio. The technology provide b Envio continuously adapts
                    and scales to meet our company needs
                  </p>
                  <h5 className="mt-4 font-bold">John Smith</h5>
                  <h6 style={{ color: "#45536B" }} className="mt-4 font-bold">
                    Ceo & Founder of Envio
                  </h6>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: "linear-gradient(#FFFFFF, #008CBA)" }}
        className="mt-32 py-12 flex flex-col justify-center items-center"
      >
        <h1 className="text-center text-2xl font-bold">
          Are you ready to use <br /> Envio Vista
        </h1>
        <p className="mt-4 text-center" style={{ color: "#45536B" }}>
          Enter Email to Subcribe to Envio Platform
        </p>

        <div className="mt-10 relative w-3/5">
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Enter your Email Here"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           GET STARTED
          </button>
        </div>
      </section>


      
    </div>
  );
}
