"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BentroGrid = () => {
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
            trigger: gridRef.current,
            start: "top 30%",
            end: "bottom 70%",
            // markers: true,
            toggleActions: "play none none reset",
            // scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen h-auto w-full bg-gray-100 py-10 hidden md:block">
      <div
        ref={gridRef}
        className="grid grid-rows-4 grid-cols-4 gap-2 lg:w-[90%] mx-auto"
      >
        <div className="imgGrid rounded-md row-span-2 bg-blue-300">
          <Image
            src={
              "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww"
            }
            height={400}
            width={300}
            alt="img1"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md bg-blue-500 ">
          <Image
            src={
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            height={400}
            width={300}
            alt="img1"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md  bg-blue-300">
          <Image
            src={
              "https://images.unsplash.com/photo-1452717602770-b78d1b2115e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            height={400}
            width={300}
            alt="img1"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md row-span-2 bg-blue-700">
          <Image
            src={
              "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            height={400}
            width={300}
            alt="img1"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md row-span-2 col-span-2 bg-gold-1 text-black font-bold italic text-5xl px-8 flex justify-center items-center text-center">
          Affordable home for all budget
        </div>
        <div className="imgGrid rounded-md row-span-2 bg-blue-300">
          <Image
            src={
              "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            height={400}
            width={300}
            alt="img1"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md bg-blue-300">
          <Image
            src={
              "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
            }
            height={400}
            width={300}
            alt="img1"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md  bg-blue-300">
          <Image
            src={
              "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
            }
            height={400}
            width={300}
            alt="img1"
            className="w-full h-full"
          />
        </div>
        <div className="imgGrid rounded-md col-span-2 ">
          <div className="flex justify-between items-center bg-gold-1/50 text-6xl font-bold">
            <div className="mx-auto py-5 text-center italic">Hello world</div>
            <Image
              src={
                "https://images.unsplash.com/photo-1489058535093-8f530d789c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              height={400}
              width={300}
              alt="img1"
              className="w-fit h-[220px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentroGrid;
