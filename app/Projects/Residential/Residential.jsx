"use client";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ExpandableCardDemo } from "../../components/AnimatedCard";

const ResidentialPage = () => {
  const presentRef = useRef(null);
  const pastRef = useRef(null);
  const futureRef = useRef(null);
  const params = useSearchParams();

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
    <div className="h-full w-[100vw]">
      <h1 className="mt-20 text-center text-5xl font-bold text-gold-1 p-5">
        {" "}
        Bindra's{" "}
      </h1>
      <section ref={presentRef} className="h-auto">
        <h1 className="my-10 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] py-5 mx-5">
          {" "}
          PRESENT PROJECTS{" "}
        </h1>
        <div className="mx-2">
          <ExpandableCardDemo />
        </div>
      </section>
      <section ref={pastRef} className="h-auto">
        <h1 className="my-10 mx-5 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] py-5">
          {" "}
          PAST PROJECTS{" "}
        </h1>
        <div className="mx-2">
          <ExpandableCardDemo />
        </div>
      </section>
      <section ref={futureRef} className="h-auto py-10">
        <h1 className="my-10 mx-5  text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] py-5">
          {" "}
          FUTURE PROJECTS{" "}
        </h1>
        <div className="mx-2">
          <ExpandableCardDemo />
        </div>
      </section>
    </div>
  );
};

export default ResidentialPage;
