import gsap from "gsap";
import { ArrowBigDownIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Marquee = () => {
  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    const arrows = document.querySelectorAll(".arrow");

    // Initialize GSAP animation
    const tween = gsap.to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
      paused: false,
    });

    // Scroll event handler
    function move() {
      // Check scroll direction
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      // Reverse animation direction based on scroll direction
      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.pageYOffset;
    }

    // Add scroll event listener
    window.addEventListener("scroll", move);

    // Cleanup function for cleanup on unmount
    return () => {
      window.removeEventListener("scroll", move);
      tween.kill(); // Stop and clean up GSAP animations
    };
  }, []);

  return (
    <div className="w-[100vw]">
      <section className="marquee relative bg-gold-1 text-[#eee] px-2 md:px-8 font-semibold text-xl md:text-4xl uppercase overflow-hidden">
        <div className="marquee__inner flex w-full flex-auto">
          {[
            "Current Project",
            "Current Project",
            "Current Project",
            "Current Project",
            "Current Project",
            "Current Project",
          ].map((content, index) => (
            <div
              key={index}
              className="marquee__part flex items-center shrink-0 py-1"
            >
              {content}
              <div
                className={`arrow w-16 h-14 md:h-20 my-2 lg:my-4 rotate-90 transition-all duration-1000 cubic-bezier(0.075, 0.02, 0.165, 1) flex justify-center items-center`}
              >
                <ArrowBigDownIcon className="text-7xl" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Marquee;
