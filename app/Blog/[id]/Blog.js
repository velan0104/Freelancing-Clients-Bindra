"use client";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import blogs from "../Blogs";

const Blog = () => {
  const url = usePathname();
  const parts = url.split("/");
  const index = parts[parts.length - 1] - 1;

  return (
    <div className="mt-16 w-full mx-auto space-y-5">
      <h1 className="text-[4vw] font-bold p-5 md:w-[90%] mx-auto text-center">
        {" "}
        {blogs[index].title}{" "}
      </h1>
      <div className="px-10 md:px-0">
        <Image
          src={blogs[index].img}
          height={400}
          width={400}
          className="mx-auto rounded-md"
          alt={`img-${index + 1}`}
        />
      </div>
      <div className="w-[85%] md:w-[80%] mx-auto pb-10">
        {blogs[index].para.map((par, index) => (
          <div key={index}>
            <h2 className="font-bold text-2xl"> {par?.heading} </h2>
            <div className="text-lg text-justify pb-5 pt-2 leading-6">
              {" "}
              {par.content()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
