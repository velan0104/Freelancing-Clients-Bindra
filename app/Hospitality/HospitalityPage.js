"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const hotels = [
  {
    name: "Altruist",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum iaculis sapien amet ullamcorper non turpis. At feugiat suspendisse diam sodales feugiat dui enim. Semper tellus leo quam commodo sodales felis quis tortor. Mollis eleifend cubilia suscipit; ornare aenean sapien. Varius penatibus libero hendrerit sociosqu eleifend placerat.",
    buttonText: "Visit →",
    siteLink: "",
    img: "/images/Altruist.jpg",
  },
  {
    name: "Bindra Supremacy",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum iaculis sapien amet ullamcorper non turpis. At feugiat suspendisse diam sodales feugiat dui enim. Semper tellus leo quam commodo sodales felis quis tortor. Mollis eleifend cubilia suscipit; ornare aenean sapien. Varius penatibus libero hendrerit sociosqu eleifend placerat.",
    buttonText: "Visit →",
    siteLink: "",
    img: "/images/Bindra_Supremacy.jpg",
  },
  {
    name: "Aralia",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum iaculis sapien amet ullamcorper non turpis. At feugiat suspendisse diam sodales feugiat dui enim. Semper tellus leo quam commodo sodales felis quis tortor. Mollis eleifend cubilia suscipit; ornare aenean sapien. Varius penatibus libero hendrerit sociosqu eleifend placerat.",
    buttonText: "Visit →",
    siteLink: "",
    img: "/images/Aralia_MIDC.jpg",
  },
  {
    name: "Bindra ELite",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum iaculis sapien amet ullamcorper non turpis. At feugiat suspendisse diam sodales feugiat dui enim. Semper tellus leo quam commodo sodales felis quis tortor. Mollis eleifend cubilia suscipit; ornare aenean sapien. Varius penatibus libero hendrerit sociosqu eleifend placerat.",
    buttonText: "Visit →",
    siteLink: "",
    img: "/images/Bindra_Elite.jpg",
  },
];

const HospitalityPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headingRef = useRef(null);
  const hotelRef = useRef([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".title > h1", { yPercent: 100 });

      gsap.to(".title > h1", { yPercent: 0, stagger: 0.2, duration: 1.5 });

      hotelRef.current.forEach((hotel) => {
        // const img = hotel.querySelector(".img");
        const mask = hotel.querySelector(".mask");
        const content = hotel.querySelector(".content");
        const p = content.querySelectorAll("p");

        gsap.from(p, {
          y: 50,
          stagger: 0.2,
          opacity: 0,
          duration: 1.5,
          ease: "power2.in",
          scrollTrigger: {
            trigger: hotel,
            start: "top 70%",
            end: "bottom bottom",
            toggleActions: "play none none reset",
          },
        });

        gsap.fromTo(
          mask,
          {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            opacity: 0,
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 1,
            duration: 1.5,
            ease: "power1.in",
            scrollTrigger: {
              trigger: hotel,
              start: "top 70%",
              bottom: "bottom bottom",
              scurb: 1,
              // markers: true,
              toggleActions: "play none none reset",
            },
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div>
      <section className="h-[100vh] w-[100vw] object-scale-down relative">
        <Image
          src={"/images/Aralia_Hero.jpg"}
          alt="HospitailyHeader"
          height={800}
          width={800}
          className="h-full w-full"
        />
        <div
          ref={headingRef}
          className=" text-white py-10 top-0 flex flex-col justify-center absolute overflow-hidden leading-tight h-[100vh] w-[100vw] bg-black/30"
        >
          <div className="title px-10 py-3 overflow-hidden">
            <h1 className="text-[12vw] md:text-[9vw] text-center md:text-left">
              {" "}
              WORLD{" "}
            </h1>
          </div>
          <div className="title px-10 py-3 overflow-hidden">
            <h1 className="text-[12vw] md:text-[9vw] text-center md:text-left">
              {" "}
              CLASS{" "}
            </h1>
          </div>
          <div className="title px-10 py-3 overflow-hidden">
            <h1 className="text-[12vw] md:text-[9vw] text-center md:text-left">
              {" "}
              EXPERIENCE{" "}
            </h1>
          </div>
        </div>
      </section>

      <section>
        {hotels.map((hotel, index) => (
          <div
            key={`hotel-${index}`}
            ref={(el) => (hotelRef.current[index] = el)}
            className="grid grid-cols-1 md:grid-cols-2 py-10 mx-auto content-center items-center gap-y-5"
          >
            <div
              className={`content w-[70%] mx-auto space-y-5 overflow-hidden text-center md:text-left ${
                index % 2 == 0 ? "order-2 md:order-1" : "order-2 "
              }`}
            >
              <p className="text-gold-1 font-bold text-3xl"> {hotel.name} </p>
              <p>{hotel.description}</p>
              <p>
                <Button text={hotel.buttonText} />
              </p>
            </div>
            <div
              className={`${
                index % 2 == 0 ? "order-1 md:order-2" : "order-1"
              } overflow-hidden `}
            >
              <div
                className="mask w-[80%] h-[90%] overflow-hidden mx-auto"
                style={{
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                }}
              >
                <Image
                  src={hotel.img}
                  alt={"img" + index + 1}
                  height={400}
                  width={400}
                  className="img w-full aspect-auto rounded-md mx-auto overflow-hidden"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HospitalityPage;
