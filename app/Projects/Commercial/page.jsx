"use client";
import { ExpandableCardDemo } from "../../components/AnimatedCard";

const Page = () => {
  return (
    <div className="mt-16">
      <h1 className=" py-4  text-[8vw] lg:text-[5vw] font-semibold text-center ">
        {" "}
        Commercial Projects{" "}
      </h1>
      <div className="lg:mx-10">
        <ExpandableCardDemo cards={PresentCard} />
      </div>
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

export default Page;
