"use client";

import Slider from "../../components/Slider/Slider";
import { CommercialSlider } from "../data";

const Page = () => {
  return (
    <div className="w-[100vw]">
      <h1 className="mt-16 text-center text-5xl font-bold text-gold-1 p-5">
        {" "}
        Bindra's{" "}
      </h1>
      <h1 className="mt-4 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] mx-[5%] py-5">
        {" "}
        COMMERCIAL PROJECTS{" "}
      </h1>
      <div className="2xl:w-[90%] mx-auto">
        <Slider ImageSlider={CommercialSlider} />
      </div>
    </div>
  );
};

export default Page;
