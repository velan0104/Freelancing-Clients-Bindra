"use client";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ExpandableCardDemo } from "../../components/AnimatedCard";
import Slider from "../../components/Slider/Slider";

const ResidentialPage = () => {
  const presentRef = useRef(null);
  const pastRef = useRef(null);
  const futureRef = useRef(null);
  const params = useSearchParams();

  const ImageSlider = [
    {
      img: "/images/Bindra_One/bindra_one_5.jpeg",
      title: "Bindra One",
      description: "Currently C and D Wing work is going on",
    },
    {
      img: "/images/Bindra_One/bindra_one_4.JPG",
      title: "Bindra One",
      description: () => (
        <a href="/brochure/WING_C.pdf" target="_blank" download>
          <button
            style={{
              background: "#daa520",
              padding: "15px 10px ",
              borderRadius: "5px",
            }}
          >
            {" "}
            WING C Floor Plan →{" "}
          </button>
        </a>
      ),
    },
    {
      img: "/images/Bindra_One/bindra_one_1.jpg",
      title: "Bindra One",
      description: () => (
        <a href="/brochure/WING_D.pdf" download>
          <button
            style={{
              background: "#daa520",
              padding: "15px 10px ",
              borderRadius: "5px",
            }}
          >
            {" "}
            WING D Floor Plan →{" "}
          </button>
        </a>
      ),
    },
    {
      img: "/images/Bindra_One/bindra_one_3.jpg",
      title: "Bindra One",
      description: "Soon E-Wing work will also start",
    },
  ];

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
    <div className="">
      <h1 className="mt-16 text-center text-5xl font-bold text-gold-1 p-5">
        {" "}
        Bindra's{" "}
      </h1>
      <section ref={presentRef} className="">
        <h1 className="mt-4 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] mx-[5%] py-5">
          {" "}
          PRESENT PROJECTS{" "}
        </h1>
        <div className="">
          <Slider ImageSlider={ImageSlider} />
        </div>
      </section>
      <section ref={pastRef} className="h-auto mx-auto w-[95%]">
        <h1 className="my-10 mx-5 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] py-5">
          {" "}
          PAST PROJECTS{" "}
        </h1>
        <div className="mx-2">
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
    src: "/images/Rose.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
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
    ctaLink: "https://ui.aceternity.com/templates",
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
