"use client";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ExpandableCardDemo } from "../../components/AnimatedCard";
import Slider from "../../components/Slider/Slider";
import { ResidentialSlider } from "../data";

const ResidentialPage = () => {
  const presentRef = useRef(null);
  const pastRef = useRef(null);
  const futureRef = useRef(null);
  const params = useSearchParams();

  console.log(ResidentialSlider);

  useEffect(() => {
    const param = params.get("section");
    if (param === "Future") {
      scrollToSection(futureRef);
    } else if (param === "Past") {
      scrollToSection(pastRef);
    } else {
      scrollToSection(presentRef);
    }
  }, [params]);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[100vw]">
      <h1 className="mt-16 text-center text-5xl font-bold text-gold-1 p-5">
        {" "}
        Bindra's{" "}
      </h1>
      <section ref={presentRef} className="">
        <h1 className="mt-4 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] mx-[5%] py-5">
          {" "}
          PRESENT PROJECTS{" "}
        </h1>
        <div className="2xl:w-[90%] mx-auto">
          <Slider ImageSlider={ResidentialSlider} />
        </div>
        <div className="md:hidden flex flex-col justify-center items-center gap-2 text-white">
          <button
            style={{
              background: "#daa520",
              padding: "15px 10px ",
              borderRadius: "5px",
            }}
          >
            <a href="/brochure/WING_C.pdf" download>
              WING C Floor Plan →
            </a>
          </button>
          <button
            style={{
              background: "#daa520",
              padding: "15px 10px ",
              borderRadius: "5px",
            }}
          >
            <a href="/brochure/WING_D.pdf" download>
              WING D Floor Plan →
            </a>
          </button>
        </div>
      </section>
      <section ref={pastRef} className="h-auto w-[100vw]">
        <h1 className="my-10 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 w-[90%] py-5 mx-auto">
          {" "}
          PAST PROJECTS{" "}
        </h1>
        <div className="mx-2 2xl:w-[90%] 2xl:mx-auto">
          <ExpandableCardDemo cards={PastCard} />
        </div>
      </section>
    </div>
  );
};

const PastCard = [
  {
    description: "Navratan Apts.",
    title: "Navratan Apts.",
    src: "/images/Navratan.JPG",
    ctaText: "Visit",
    ctaLink: "https://maps.app.goo.gl/zn7rAVvS548eakyN6",
    content: () => {
      return (
        <p>
          Navratan offers spacious 2 BHK flats with modern interiors. Residents
          can enjoy a landscaped garden, a community hall for events, and ample
          parking space. The building's strategic location provides easy access
          to nearby schools, hospitals, and shopping centers. <br /> <br />
        </p>
      );
    },
  },

  {
    description: "Tulip Apts",
    title: "Tulip Apts",
    src: "/images/Tulip.jpg",
    ctaText: "Visit",
    ctaLink: "https://maps.app.goo.gl/GookqjTReRfExYeh9",
    content: () => {
      return (
        <p>
          Featuring contemporary architecture, Tulip Building provides
          well-designed 1 and 2 BHK apartments. Amenities include a dedicated
          turf area for sports enthusiasts, a fully equipped gymnasium, and a
          children's play area. The building ensures security with CCTV
          surveillance and intercom facilities. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Orchid Apts",
    title: "Orchid Apts",
    src: "/images/Orchid.jpg",
    ctaText: "Visit",
    ctaLink: "https://maps.app.goo.gl/LMwXRJSs1kfmyz4o7",
    content: () => {
      return (
        <p>
          Orchid offers premium 2 BHK apartments with high-quality fittings and
          finishes. Residents have access to a state-of-the-art fitness center,
          a multipurpose court, and a serene meditation area. The building
          ensures a safe environment with 24/7 security personnel and fire
          safety systems. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Lotus Apts",
    title: "Lotus Apts",
    src: "/images/Lotus_2.jpg",
    ctaText: "Visit",
    ctaLink: "https://maps.app.goo.gl/qKavGeV5eFbkGVYm7",
    content: () => {
      return (
        <p>
          This 13-storey tower offers compact 1 and 2 BHK apartments, designed
          to maximize space and comfort. Residents have access to a turf area,
          ideal for sports and recreational activities. The building is equipped
          with modern amenities, including high-speed elevators, 24/7 water
          supply, and power backup, ensuring a convenient lifestyle. <br />{" "}
          <br />
        </p>
      );
    },
  },
  {
    description: "Rose Apts",
    title: "Rose Apts",
    src: "/images/Residential.JPG",
    ctaText: "Visit",
    ctaLink: "https://maps.app.goo.gl/F5Fz4iGWDQ3qtzpk7",
    content: () => {
      return (
        <p>
          Rose Building comprises well-appointed 1 and 2 BHK apartments.
          Amenities include a library, an indoor games room, and a dedicated
          children's play zone. The building's proximity to public transport
          facilities makes commuting convenient for residents. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Daffodils Apts",
    title: "Daffodils Apts",
    src: "/images/Daffodil.jpg",
    ctaText: "Visit",
    ctaLink: "https://maps.app.goo.gl/vs5BHZ9WiCofnhDJ7",
    content: () => {
      return (
        <p>
          Daffodils features 1 and 2 BHK apartments designed for optimal
          ventilation and natural light. Amenities include a swimming pool, a
          jogging track, and a clubhouse for social gatherings. The building is
          equipped with rainwater harvesting systems, promoting sustainable
          living. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Marigold Apts",
    title: "Marigold Apts",
    src: "/images/Marigold.jpg",
    ctaText: "Visit",
    ctaLink: "https://maps.app.goo.gl/F5Fz4iGWDQ3qtzpk7",
    content: () => {
      return (
        <p>
          Marigold offers thoughtfully designed 1 BHK apartments, perfect for
          small families. Residents can enjoy a community hall, landscaped open
          spaces, and a well-maintained lobby area. The building incorporates
          energy-efficient lighting and waste management systems, contributing
          to an eco-friendly lifestyle <br /> <br />
        </p>
      );
    },
  },
];

export default ResidentialPage;
