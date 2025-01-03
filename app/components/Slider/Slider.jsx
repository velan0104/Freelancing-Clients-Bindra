"use client";
import React, { useRef, useEffect } from "react";
import "./slider.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ ImageSlider }) => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const handleNext = () => {
    let slides = sliderRef.current.querySelectorAll(".slides");
    sliderRef.current.appendChild(slides[0]);
    restartTimer();
  };

  const handlePrev = () => {
    let slides = sliderRef.current.querySelectorAll(".slides");
    sliderRef.current.prepend(slides[slides.length - 1]);
    restartTimer();
  };

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const restartTimer = () => {
    clearInterval(intervalRef.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="min-h-screen w-full">
      <div className="container ">
        <div className="sliders" ref={sliderRef}>
          {ImageSlider.map((item, index) => (
            <div
              key={index}
              className="slides"
              style={{
                "--img": `url(${item.img})`,
              }}
            >
              {item.title && (
                <div className="content">
                  <h2> {item?.title} </h2>
                  {item.description && (
                    <p>
                      {typeof item.description === "function"
                        ? item.description()
                        : item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="buttons text-white">
          <span className="prev bg-black" onClick={handlePrev}>
            <ChevronLeft />
          </span>
          <span className="next bg-black" onClick={handleNext}>
            <ChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
