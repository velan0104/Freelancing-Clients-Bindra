"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const BentroGrid = () => {
  gsap.registerPlugin(ScrollTrigger);
  const gridRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".imgGrid",
        {
          scale: 0,
          transformOrigin: "top left",
        },
        {
          scale: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".gridContainer",
            start: "top 70%",
            end: "bottom bottom",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="gridContainer min-h-screen h-auto w-full bg-gray-100 py-10 hidden md:block">
      <div
        ref={gridRef}
        className="grid grid-rows-4 grid-cols-4 gap-2 lg:w-[90%] mx-auto"
      >
        <div className="imgGrid rounded-md row-span-2 bg-blue-300">
          <Image
            src={"/images/Bindra_One/bindra_one_1.jpg"}
            height={400}
            width={300}
            alt="img1"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md bg-blue-500 ">
          <Image
            src={"/images/Marquee_5.avif"}
            height={400}
            width={300}
            alt="img2"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md  bg-blue-300">
          <Image
            src={"/images/Marquee_2.jpg"}
            height={400}
            width={300}
            alt="img3"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md row-span-2 bg-blue-700">
          <Image
            src={"/images/Lotus.jpg"}
            height={400}
            width={300}
            alt="img4"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md row-span-2 col-span-2 bg-gold-1 text-black font-bold italic text-5xl px-8 flex justify-center items-center text-center">
          Your partner in building tomorrow.
        </div>
        <div className="imgGrid rounded-md row-span-2 bg-blue-300">
          <Image
            src={"/images/Pentunia.JPG"}
            height={400}
            width={300}
            alt="img5"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md bg-blue-300">
          <Image
            src={"/images/Clubhouse.jpg"}
            height={400}
            width={300}
            alt="img6"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md  bg-blue-300">
          <Image
            src={"/images/Commercial/Commercial_1.JPG"}
            height={400}
            width={300}
            alt="img7"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md col-span-2 ">
          <div className="flex justify-between items-center bg-gold-1/50 text-6xl font-bold ">
            <Image
              src={"/images/Bindra_One/bindra_one_4.JPG"}
              height={400}
              width={300}
              alt="img8"
              className="h-[260px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentroGrid;
