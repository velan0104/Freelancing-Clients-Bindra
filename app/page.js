"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import Marquee from "./components/Marquee";
import Domain from "./components/Domain/Domain";
import Carousel from "./components/Carousel/Carousel";
import CountUp from "./components/CountUp";
import { useRouter } from "next/navigation";

// #dbc33b
// Gold - #ecd27d

const page = () => {
  gsap.registerPlugin(ScrollTrigger);

  const loaderRef = useRef(null);
  const heroRef = useRef(null);
  const router = useRouter();

  const marqueeImages = [
    "/images/Marquee_1.jpg",
    "/images/Hotels/Bindra_Supremacy.jpg",
    "/images/Marquee_2.jpg",
    "/images/Marquee_5.avif",
    "/images/Marquee_3.jpg",
  ];

  useEffect(() => {
    const h3 = loaderRef.current.querySelectorAll("div > h3");

    gsap.set("h3", { opacity: 0 });
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
        <div className="flex gap-1 flex-wrap justify-center w-[90%]">
          <h3 className="z-10"> Building </h3>
          <h3 className="z-10"> Tommorow's </h3>
          <h3 className="z-10"> Landmarks </h3>
          <h3 className="z-10"> Today </h3>
        </div>
      </div>
      <section
        ref={heroRef}
        className="h-[100vh] w-[100vw] bg-white overflow-x-hidden relative flex justify-center items-end"
      >
        <video
          className="w-[100%] h-[100%] object-cover"
          src="./videos/Landing.mp4"
          autoPlay
          loop
          muted
        />
        <div className="h-full w-full bg-black/30 absolute top-0 left-0">
          <div className="title overflow-hidden absolute top-1/2 left-10 px-2 ">
            <h1 className="hero text-[15vw] text-gold-1 font-bold ">
              LIFESTYLE
            </h1>
          </div>
        </div>
      </section>
      <section className="w-[100vw] min-h-[100vh] mx-auto bg-white overflow-hidden pb-10">
        <Marquee />
        <div className="h-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] content-center  items-center pt-12">
          <div className="mx-auto w-[80%] flex flex-col gap-3 text-center lg:text-left order-2 lg:order-1 h-auto items-center md:items-start">
            <h1 className="text-[6vw] md:text-[4vw] font-bold"> Bindra One </h1>
            <p className="text-lg md:text-xl font-semibold">
              We redefine modern living with a perfect blen of elegance,
              convenience, and world-class amenitites. Located in the heart of
              Mumbai, coupled with the vibrancy of urban life. Bindra One is
              designed to exceed your expectations.
            </p>
            <a
              href="/brochure/BINDRA_ONE.pdf"
              className="py-3 px-5 w-fit h-fit bg-gold-1 rounded-lg text-white"
              download
              target="_blank"
            >
              {" "}
              Brochure{" "}
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <Carousel />
          </div>
        </div>
      </section>
      <Domain />
      <section className=" w-[100vw] h-auto bg-white space-y-5 py-10">
        <div>
          <h1 className="text-4xl md:text-5xl text-gold-1 font-bold text-left p-5 border-b-2 italic border-b-gold-1 mx-3 md:mx-10">
            {" "}
            Reknown Projects{" "}
          </h1>
        </div>
        <div className="w-full lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center items-center gap-x-10 page3-content gap-5">
          <div className=" box w-[350px] relative mx-auto">
            <video src="/videos/project2.mp4" autoPlay loop muted />
            <Image
              src="/images/Bindra_One/bindra_one.jpg"
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
            <video src="/videos/Lotus.mp4" autoPlay loop muted />
            <Image
              src="/images/Lotus.jpg"
              alt=""
              width={400}
              height={500}
              className="img"
            />
            <span className="absolute top-2/3 z-[999] text-white text-5xl font-bold left-5 md:left-10 h-fit overflow-hidden text-center md:text-left">
              {" "}
              Lotus.{" "}
            </span>
          </div>
          <div className=" w-[350px] relative box mx-auto cols-span-1 md:col-span-2 lg:col-span-1">
            <video src="/videos/Daffodil.mp4" autoPlay muted />
            <Image
              src="/images/Daffodil.jpg"
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
          <button
            className="py-3 px-5 bg-gold-1 text-white rounded-md"
            onClick={() => router.push(`/Projects/Residential?section=present`)}
          >
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
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col items-center md:items-end md:border-r-4 border-gold-1 px-20 md:py-10">
            <div className="flex justify-center items-center font-bold">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-5xl py-2 p-1 font-bold"
              />
              <span className="text-5xl font-bold py-2"> + </span>
            </div>
            <p className="text-3xl p-2 font-semibold"> Projects </p>
          </div>
          <div className=" w-[50%] h-1 bg-gold-1 mx-auto md:hidden" />
          <div className="p-5 flex flex-col justify-center items-center">
            <div className="flex text-center font-bold">
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl md:text-5xl py-2 p-1 font-bold"
              />
              <span className="text-3xl md:text-5xl font-bold py-2">
                + Million Sq.Ft.
              </span>
            </div>
            <p className="text-2xl md:text-3xl text-center md:text-left p-2 font-semibold max-w-[500px]">
              {" "}
              of ONGOING, COMPLETED & UPCOMING PROJECTS{" "}
            </p>
          </div>
        </div>
      </div>
      <section className="py-10 space-y-10">
        <h1 className="text-center text-5xl text-gold-1 font-bold p-5">
          Our Brands
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-7 lg:gap-10">
          <Image
            src="/images/bindra_logo.jpg"
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
