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
      img: "https://images.unsplash.com/photo-1731432246387-1bc4274a5a12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      title: "Slide 01",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 02",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 03",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1735436313893-97fd977ab651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      title: "Slide 04",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 05",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 06",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
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
      <section ref={futureRef} className="h-auto mx-auto w-[95%]">
        <h1 className="my-10 mx-5  text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] py-5">
          {" "}
          FUTURE PROJECTS{" "}
        </h1>
        <div className="mx-2">
          <ExpandableCardDemo cards={FutureCard} />
        </div>
      </section>
    </div>
  );
};

const PresentCard = [
  {
    description: "Andheri-(E)",
    title: "Bindra One",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br />
        </p>
      );
    },
  },
];

const PastCard = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br />
        </p>
      );
    },
  },
];

const FutureCard = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br />
        </p>
      );
    },
  },
];

export default ResidentialPage;
