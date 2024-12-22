"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ text, className, onClick }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(onClick)}
      className={`rounded-lg border-2 border-[#daa520] py-3 px-5 text-[#daa520] hover:bg-[#daa520] hover:text-white delay-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
