"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import Marquee from "./components/Marquee";
import Domain from "./components/Domain/Domain";
import Carousel from "./components/Carousel/Carousel";
import Button from "./components/Button";

// #dbc33b
// Gold - #ecd27d

const page = () => {
  gsap.registerPlugin(ScrollTrigger);

  const loaderRef = useRef(null);
  const heroRef = useRef(null);
  const galleryRef = useRef(null);

  const marqueeImages = [
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1713365860516-256d20dbb7e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1535581652167-3a26c90bbf86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1623784929309-703b81d39eec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1708931418721-ebbeb1f69f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  ];

  useEffect(() => {
    const h3 = loaderRef.current.querySelectorAll("h3");

    gsap.set(".title > h1", { yPercent: 100 });

    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.fromTo(
        h3,
        { x: 40, opacity: 0 }, // Start hidden and offset
        { x: 0, opacity: 1, duration: 1, stagger: 0.3 } // Animate to visible position
      );
      tl.to(h3, {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.1,
      });
      tl.to(loaderRef.current, {
        x: "-100%",
        transition: "power2.inOut",
        duration: 0.5,
      });
      tl.to(".title > h1", { yPercent: 0, stagger: 0.2, duration: 2 });
      tl.to(loaderRef.current, {
        display: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="font-[nb] overflow-hidden">
      <div
        ref={loaderRef}
        className="fixed bg-white h-[100vh] w-full flex justify-center items-center flex-wrap text-gold-1 font-semibold text-xl md:text-3xl gap-2 z-[999] overflow-y-hidden "
        style={{ WebkitScrollSnapType: "none" }}
      >
        <h3 className="z-10"> Building </h3>
        <h3 className="z-10"> Tommorow's </h3>
        <h3 className="z-10"> Landmarks </h3>
        <h3 className="z-10"> Today </h3>
      </div>
      <section
        ref={heroRef}
        className="h-[100vh] w-[100vw] bg-white overflow-x-hidden relative flex justify-center items-end"
      >
        <video
          className="w-[100%] h-[100%] object-cover"
          src="https://videos.pexels.com/video-files/4770380/4770380-sd_640_360_30fps.mp4"
          autoPlay
          loop
          muted
        />
        <div className="title overflow-hidden absolute top-1/2 left-10 px-2">
          <h1 className="hero text-[15vw] text-gold-1 font-bold ">
            {/* {["L", "I", "F", "E", "S", "T", "Y", "L", "E"].map((item, index) => (
            <span key={index} className="span translate-y-[115px] duration-500">
              {item}
            </span>
          ))} */}
            LIFESTYLE
          </h1>
        </div>
      </section>
      <section className="w-[100vw] min-h-[100vh] mx-auto bg-white overflow-hidden pb-10">
        <Marquee />
        <div className="h-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] content-center  items-center ">
          <div className="mx-auto w-[80%] space-y-5 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-[6vw] md:text-[4vw] font-bold"> Bindra One </h1>
            <p className="text-lg md:text-xl font-semibold">
              We redefine modern living with a perfect blen of elegance,
              convenience, and world-class amenitites. Located in the heart of
              Mumbai, coupled with the vibrancy of urban life. Bindra One is
              designed to exceed your expectations.
            </p>
            <button className="py-3 px-5 bg-gold-1 rounded-lg text-white">
              {" "}
              Brochure{" "}
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <Carousel />
          </div>
        </div>
      </section>
      <Domain />
      <section className=" w-[100vw] h-auto bg-white space-y-5 py-10">
        <div>
          <h1 className="text-4xl md:text-5xl text-gold-1 font-bold text-left p-5 border-b-4 border-b-gold-1 mx-5 md:mx-10">
            {" "}
            Current Projects{" "}
          </h1>
        </div>
        <div className="w-full lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center items-center gap-x-10 page3-content gap-5">
          <div className=" box w-[350px] relative mx-auto">
            <video src="./videos/project1.mp4" autoPlay loop muted />
            <Image
              src="https://images.unsplash.com/photo-1565953522043-baea26b83b7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
              alt=""
              width={400}
              height={500}
              className="img "
            />
            <span className="absolute top-2/3 z-[999] text-white text-5xl font-bold left-5 md:left-10 h-fit overflow-hidden text-center md:text-left">
              {" "}
              Bindra One{" "}
            </span>
          </div>
          <div className="w-[350px] relative box mx-auto">
            <video src="./videos/project2.mp4" autoPlay loop muted />
            <Image
              src="https://images.unsplash.com/photo-1560185127-59e4420e2c93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
              alt=""
              width={400}
              height={500}
              className="img"
            />
            <span className="absolute top-2/3 z-[999] text-white text-5xl font-bold left-5 md:left-10 h-fit overflow-hidden text-center md:text-left">
              {" "}
              Navratan Apts.{" "}
            </span>
          </div>
          <div className=" w-[350px] relative box mx-auto cols-span-1 md:col-span-2 lg:col-span-1">
            <video src="./videos/project3.mp4" autoPlay muted />
            <Image
              src="https://images.unsplash.com/photo-1695222322544-8d389d2dc43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww"
              alt=""
              width={400}
              height={500}
              className="img"
            />
            <span className="absolute top-2/3 z-[999] text-white text-5xl font-bold left-5 md:left-10 h-fit overflow-hidden text-center md:text-left">
              {" "}
              Daffodil Apts.{" "}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="py-3 px-5 bg-gold-1 text-white rounded-md">
            {" "}
            Know More{" "}
          </button>
        </div>
      </section>
      {/* Marquee Section */}
      <section className="w-[100vw] h-auto">
        <div className="border-b-2 border-gold-1 w-[90%] mx-auto ">
          <h1 className="text-4xl md:text-7xl text-gold-1 font-semibold italic overflow-y-hidden">
            {" "}
            Our Works{" "}
          </h1>
        </div>
        <div className="slider">
          <div className="slide-track">
            {marqueeImages.map((img, index) => (
              <div key={index} className="slide">
                <Image
                  src={img}
                  alt=""
                  width={400}
                  height={400}
                  className="img"
                />
              </div>
            ))}
            {marqueeImages.map((img, index) => (
              <div key={index} className="slide">
                <Image
                  src={img}
                  alt={`img${index + 1}`}
                  width={400}
                  height={400}
                  className="img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 space-y-10">
        <h1 className="text-center text-5xl text-gold-1 font-bold p-5">
          {" "}
          Our Brands{" "}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-7 lg:gap-10">
          <Image
            src="/images/bindra_logo.avif"
            className="h-[200px] w-[250px]"
            width={300}
            height={200}
            alt="hero8"
          />
          <div className="text-3xl font-bold text-gold-1 text-center">
            <h1> Dream </h1>
            <h1> Developers </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
