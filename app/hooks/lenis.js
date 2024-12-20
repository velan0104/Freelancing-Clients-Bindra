"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const initLenis = () => {
  const lenis = new Lenis({
    lerp: 0.05,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.upate);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
};

export default initLenis;
