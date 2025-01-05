import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./Domain.css";
import Button from "../Button";
import { useRouter } from "next/navigation";

const Domain = () => {
  gsap.registerPlugin(ScrollTrigger);
  const domainRef = useRef([]);

  const imagesRef = useRef([]);
  const containerRef = useRef(null);
  const leftContainerRef = useRef([]);
  const [progressIndex, setProgressIndex] = useState(0);

  const domains = [
    {
      title: "Construction",
      description:
        "A Landmark Residential Development Spanning Approximately 6 Lacs Square Feet, Featuring 28 Meticulously Designed Buildings and Currently 90% Completed. A Testament to Modern Urban Living and Architectural Excellence.",
      img: "/images/Construction.png",
      cta: "/Projects/Residential",
    },
    {
      title: "Hospitality",
      description:
        " A Visionary Developer with Over 29 Years of Expertise in Construction, Real Estate, and Hospitality, Crafting Transformative Spaces Across Mumbai's Landscape.",
      img: "/images/Hotels/Hospitality.jpg",
      cta: "/Hospitality",
    },
  ];

  useEffect(() => {
    if (imagesRef.current[0]) {
      imagesRef.current[0].style.opacity = 1;
      leftContainerRef.current[0].style.backgroundColor = "#f3dda8";
    }

    const ctx = gsap.context(() =>
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom 100%",
        pin: true,
        scrub: true,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: (self) => {
          const progress = Math.round(
            self.progress * (imagesRef.current.length - 1)
          );
          setProgressIndex(() => progress);
          imagesRef.current.forEach((img, index) => {
            img.style.opacity = index === progress ? 1 : 0;
          });

          leftContainerRef.current.forEach((div, index) => {
            div.style.backgroundColor =
              index == progress ? "#fcecc2" : "transparent";
          });
        },
      })
    );

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      domainRef.current.forEach((hotel) => {
        const mask = hotel.querySelector(".mask");
        const content = hotel.querySelector(".content");
        const p = content.querySelectorAll("p");

        gsap.from(p, {
          y: 50,
          stagger: 0.2,
          opacity: 0,
          duration: 1,
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
            duration: 2,
            ease: "power1.in",
            scrollTrigger: {
              trigger: hotel,
              start: "top 90%",
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
      <section className="w-[100vw] ">
        <section
          ref={containerRef}
          className="w-[100vw] h-[100vh] text-black bg-gray-100 hidden md:block"
        >
          <h1 className="text-6xl font-bold text-left text-gold-1 mx-10 border-b-2 border-b-gold-1 pt-6 mb-5 p-2 italic">
            {" "}
            What we do{" "}
          </h1>
          <div className="hidden md:grid md:grid-cols-[3fr_2fr] content-center items-center mx-10 ">
            <div>
              <div className="">
                {domains.map((domain, idx) => (
                  <div
                    key={idx}
                    ref={(el) => (leftContainerRef.current[idx] = el)}
                    className="mr-6 py-5 rounded-xl flex flex-col space-y-3 px-10 w-[90%]"
                  >
                    <h1 className="lg:font-bold lg:text-3xl md:font-semibold md:text-xl  p-[2px] ">
                      {domain.title}
                    </h1>
                    <p className="font-medium lg:text-xl md:text-lg">
                      {" "}
                      {domain.description}{" "}
                    </p>
                    <button
                      className={`bg-gold-1 px-2 py-3 rounded-lg text-md text-white w-fit h-fit `}
                    >
                      {" "}
                      Know More{" "}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-[80%] overflow-y-hidden relative mx-auto">
              {domains.map((domain, idx) => (
                <img
                  key={idx}
                  ref={(el) => (imagesRef.current[idx] = el)}
                  className="w-[90%] h-[95%] absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 rounded-xl shadow-lg shadow-gold-1"
                  src={domain.img}
                  alt=""
                />
              ))}
            </div>
          </div>
        </section>
        <section className="block md:hidden">
          <h1 className="text-4xl border-b-4 border-b-gold-1 text-gold-1 mx-4 p-3 font-bold">
            {" "}
            What we do{" "}
          </h1>
          {domains.map((domain, index) => (
            <div
              key={`hotel-${index}`}
              ref={(el) => (domainRef.current[index] = el)}
              className="grid grid-cols-1 md:grid-cols-2 py-10 mx-auto content-center items-center gap-y-5"
            >
              <div
                className={`content w-[70%] mx-auto space-y-5 overflow-hidden text-center md:text-left ${
                  index % 2 == 0 ? "order-2 md:order-1" : "order-2 "
                }`}
              >
                <p className="text-gold-1 font-bold text-3xl p-2">
                  {" "}
                  {domain.title}{" "}
                </p>
                <p>{domain.description}</p>
                <p>
                  <Button text={"Know More"} onClick={domain.cta} />
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
                    src={domain.img}
                    alt={"img" + index + 1}
                    height={400}
                    width={400}
                    className="img w-full aspect-auto rounded-md mx-auto overflow-hidden max-h-[300px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Domain;
