"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const hotels = [
  {
    name: "Altruist",
    description:
      "Altruist Andheri offers well-appointed rooms and exceptional hospitality in the heart of Andheri, making it a preferred choice for travelers seeking comfort and accessibility.",
    buttonText: "Visit →",
    siteLink: "https://maps.app.goo.gl/B9gRcfefskV71Rrp9",
    img: "/images/Hotels/Altruist.jpg",
  },
  {
    name: "Bindra Supremacy",
    description:
      "Located in Andheri East, Mumbai, Bindra's Supremacy offers cozy rooms ideal for both business and leisure travelers, with close proximity to Chhatrapati Shivaji Maharaj International Airport.",
    buttonText: "Visit →",
    siteLink: "https://hotelbindrasupremacy.com/",
    img: "/images/Hotels/Bindra_Supremacy.jpg",
  },
  {
    name: "Aralia",
    description:
      "Situated in the MIDC area, Aralia provides comfortable accommodations with modern amenities, catering to business travelers seeking convenience and quality service.",
    buttonText: "Visit →",
    siteLink: "https://araliahotels.com/aralia-midc/",
    img: "/images/Hotels/Aralia_MIDC.jpg",
  },
  {
    name: "Bindra Elite",
    description:
      "Bindra Elite is a boutique hotel known for its elegant design and personalized services, providing guests with a luxurious stay experience in a prime location.",
    buttonText: "Visit →",
    siteLink: "https://maps.app.goo.gl/bNCUuP9maCwAeBiV8",
    img: "/images/Hotels/Bindra_Elite.jpg",
  },
];

gsap.registerPlugin(ScrollTrigger);
const HospitalityPage = () => {
  const headingRef = useRef(null);
  const hotelRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".title > h1", { yPercent: 100 });

      gsap.to(".title > h1", { yPercent: 0, stagger: 0.2, duration: 1.5 });

      gsap.set(".content > div", { y: 50, opacity: 0 });

      hotelRef?.current.forEach((hotel) => {
        const mask = hotel.querySelector(".mask");
        const p = hotel.querySelectorAll(".content > div");

        gsap.to(p, {
          y: 0,
          stagger: 0.2,
          duration: 1,
          opacity: 1,
          ease: "power2.in",
          scrollTrigger: {
            trigger: hotel,
            start: "top 50%",
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
      <section className="h-[80vh] md:h-[100vh] w-[100vw] object-scale-down relative">
        <Image
          src={"/images/Hotels/Aralia_Hero.jpg"}
          alt="HospitailyHeader"
          height={800}
          width={800}
          className="h-full w-full"
          priority
        />
        <div
          ref={headingRef}
          className=" text-white py-10 top-0 flex flex-col justify-center absolute overflow-hidden leading-tight h-full w-[100vw] bg-black/30"
        >
          <div className="title px-10 py-3 overflow-hidden">
            <h1 className="text-[12vw] md:text-[9vw] text-center md:text-left p-1">
              {" "}
              WORLD{" "}
            </h1>
          </div>
          <div className="title px-10 py-3 overflow-hidden">
            <h1 className="text-[12vw] md:text-[9vw] text-center md:text-left p-1">
              {" "}
              CLASS{" "}
            </h1>
          </div>
          <div className="title px-10 py-3 overflow-hidden">
            <h1 className="text-[12vw] md:text-[9vw] text-center md:text-left p-1">
              {" "}
              EXPERIENCE{" "}
            </h1>
          </div>
        </div>
      </section>

      <section>
        {hotels.map((hotel, index) => {
          return (
            <div
              key={index}
              ref={(el) => (hotelRef.current[index] = el)}
              className="grid grid-cols-1 md:grid-cols-2 py-10 mx-auto content-center items-center gap-y-5"
            >
              <div
                className={`content w-[70%] mx-auto space-y-5 overflow-hidden text-center md:text-left ${
                  index % 2 == 0 ? "order-2 md:order-1" : "order-2"
                }
                `}
              >
                <div className=" text-gold-1 font-bold text-3xl p-1">
                  {" "}
                  {hotel.name}{" "}
                </div>
                <div>{hotel.description}</div>
                <div>
                  <Link href={hotel.siteLink} target="_blank">
                    <Button text={hotel.buttonText} />
                  </Link>
                </div>
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
                    className="img w-full aspect-auto rounded-md mx-auto overflow-hidden h-[300px] md:h-[350px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default HospitalityPage;
