import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./Domain.css";
import Lenis from "lenis";
import Button from "../Button";
import { useRouter } from "next/navigation";

const Domain = () => {
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter();
  const galleryRef = useRef(null);
  const domainRef = useRef([]);
  const domains = [
    {
      title: "Construction",
      description:
        "A Landmark Residential Development Spanning Approximately 6 Lacs Square Feet, Featuring 28 Meticulously Designed Buildings and Currently 90% Completed. A Testament to Modern Urban Living and Architectural Excellence.",
      img: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
      cta: "/Projects/Residential",
    },
    {
      title: "Hospitality",
      description:
        " A Visionary Developer with Over 29 Years of Expertise in Construction, Real Estate, and Hospitality, Crafting Transformative Spaces Across Mumbai's Landscape.",
      img: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
      cta: "/Hospitality",
    },
  ];
  useEffect(() => {
    const gallery = galleryRef.current;
    const settings = {
      trigger: gallery,
      containers: gallery.querySelectorAll(".gallery_container"),
      lerp: 0.05,
    };

    const galleryEnding = gallery.querySelectorAll(
      ".gallery_ending_title > h1"
    );

    const tlMain = gsap.timeline({
      scrollTrigger: {
        trigger: settings.trigger,
        start: "top top",
        end: "+=8000 bottom",
        scrub: 1,
        pin: true,
      },
    });

    const init = () => {
      initLenis();
      animateMedia();
    };

    const initLenis = () => {
      const lenis = new Lenis({
        lerp: 0.02,
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.upate);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    };

    const animateMedia = () => {
      gsap.set(galleryEnding, { yPercent: 100 });

      settings.containers.forEach((element) => {
        const thumbnails = element.querySelectorAll(".gallery_thumbnail"),
          medias = element.querySelectorAll(".gallery_media");

        const headings = {
          title: element.querySelectorAll(".gallery_heading_title"),
          roles: element.querySelectorAll(".gallery_heading_roles > span"),
          cases: element.querySelectorAll(".gallery_heading_cases > span"),
        };

        gsap.set(thumbnails, { yPercent: 100 });
        gsap.set(medias, { clipPath: "inset(0 0 0 0)" });

        gsap.set([headings.title, headings.roles, headings.cases], {
          yPercent: 0,
        });

        tlMain
          .to(thumbnails, {
            duration: 1,
            yPercent: -100,
          })
          .to(
            medias,
            {
              duration: 2,
              scale: 1.2,
            },
            "<-0.5"
          )
          .to(
            medias,
            {
              clipPath: "inset(0 0 100% 0)",
            },
            ">-0.2"
          )
          .to(
            [headings.title, headings.roles, headings.cases],
            {
              yPercent: -100,
            },
            ">-0.7"
          );
      });

      tlMain.to(galleryEnding, {
        yPercent: 0,
      });
    };

    init();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      domainRef.current.forEach((hotel) => {
        // const img = hotel.querySelector(".img");
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
      <section className="w-[100vw]">
        <section
          ref={galleryRef}
          className="gallery relative w-full h-[100vh] overflow-hidden md:block hidden"
        >
          <div className="gallery_container ">
            <div className="gallery_heading ">
              <h2 className="gallery_heading_title text-3xl md:text-5xl font-bold">
                <span className="text-xl md:text-3xl font-semibold">
                  {" "}
                  What We Do{" "}
                </span>
                <br />
                Construction
              </h2>
              <div className="gallery_heading_roles">
                <span className="text-lg md:text-xl inline-block p-2 w-[90vw] md:w-[60vw] text-wrap">
                  {" "}
                  A Landmark Residential Development Spanning Approximately 6
                  Lacs Square Feet, Featuring 28 Meticulously Designed Buildings
                  and Currently 90% Completed. A Testament to Modern Urban
                  Living and Architectural Excellence.{" "}
                </span>
              </div>
              <div className="gallery_heading_cases">
                <span className=" text-4xl inline-block p-2">
                  <button
                    className="px-5 py-3 bg-gold-1 rounded-md text-lg cursor-pointer"
                    onClick={() => router.push("/Projects/Residential")}
                  >
                    Know More
                  </button>
                </span>
                {/* <Button text={"Know More"} onClick={"/Projects/Residential"} /> */}
              </div>
            </div>
            <div className="gallery_thumbnail">
              <Image
                className="gallery_thumnail_image"
                src="https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
                alt="img1"
                width={400}
                height={400}
              />
              <Image
                className="gallery_thumnail_image"
                src="https://images.unsplash.com/photo-1514867807082-83039aae98b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
                alt="img1"
                width={400}
                height={400}
              />
              <Image
                className="gallery_thumnail_image"
                src="https://images.unsplash.com/photo-1732479603479-8c42f5b2e117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
                alt="img1"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery_media">
              <figure className="gallery_media_figure">
                <Image
                  src="https://images.unsplash.com/photo-1733234976396-87cf34ae6038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="gallery_media_image"
                  alt="img4"
                  width={400}
                  height={400}
                />
              </figure>
            </div>
          </div>
          <div className="gallery_container ">
            <div className="gallery_heading ">
              <h2 className="gallery_heading_title text-3xl md:text-5xl font-bold">
                <span className="text-xl md:text-3xl font-semibold">
                  {" "}
                  What We Do{" "}
                </span>
                <br />
                Hospitality
              </h2>
              <div className="gallery_heading_roles">
                <span className="text-lg md:text-xl inline-block p-2 w-[90vw] md:w-[60vw]">
                  A Visionary Developer with Over 29 Years of Expertise in
                  Construction, Real Estate, and Hospitality, Crafting
                  Transformative Spaces Across Mumbai's Landscape.
                </span>
              </div>
              <div className="gallery_heading_cases">
                <span className=" text-4xl inline-block p-2">
                  <button
                    className="px-5 py-3 bg-gold-1 rounded-md text-lg cursor-pointer"
                    onClick={() => router.push("/Hospitality")}
                  >
                    Know More
                  </button>
                </span>
              </div>
              {/* <Button text={"Know More"} onClick={"/Hospitality"} /> */}
            </div>
            <div className="gallery_thumbnail">
              <Image
                className="gallery_thumnail_image"
                src="https://images.unsplash.com/photo-1732310067368-e9d11026aa6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
                alt="img1"
                width={400}
                height={400}
              />
              <Image
                className="gallery_thumnail_image"
                src="https://images.unsplash.com/photo-1731978009374-2fbe83ef3af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
                alt="img1"
                width={400}
                height={400}
              />
              <Image
                className="gallery_thumnail_image"
                src="https://images.unsplash.com/photo-1731963096662-be0220447591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
                alt="img1"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery_media">
              <figure className="gallery_media_figure">
                <Image
                  src="https://images.unsplash.com/photo-1731926927084-54a7f5813f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
                  className="gallery_media_image"
                  alt="img4"
                  width={400}
                  height={400}
                />
              </figure>
            </div>
          </div>
          <div className="gallery_ending relative w-full h-[100vh] uppercase flex flex-col items-center justify-center text-2xl md:text-6xl lg:text-7xl">
            <div className="gallery_ending_title overflow-hidden">
              <h1 className="p-5">Design with Purpose.</h1>
            </div>
            <div className="gallery_ending_title overflow-hidden">
              <h1 className="p-5">Elevate your Brand.</h1>
            </div>
            <div className="gallery_ending_title overflow-hidden">
              <h1 className="p-5">Drive Growth.</h1>
            </div>
          </div>
        </section>
        <section className="md:hidden">
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
                <p className="text-gold-1 font-bold text-3xl">
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
                    className="img w-full aspect-auto rounded-md mx-auto overflow-hidden"
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
